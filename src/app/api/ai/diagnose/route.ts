import { NextResponse } from "next/server";
import { callGrok } from "@/lib/grokClient";
import prisma from "@/lib/prisma";
import { getAuthToken, verifyToken } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const token = getAuthToken();
    const decoded: any = token ? verifyToken(token) : null;
    const userId = decoded?.userId ? parseInt(decoded.userId) : null;

    const systemPrompt = `
      You are an expert wellness diagnostician combining knowledge of Ayurveda, sports medicine, neuroscience, and energy diagnostics.
      Analyse the user's wellness data and return ONLY a valid JSON object with no markdown, no explanation.
      
      Return exactly this structure:
      {
        "overallScore": number (0-100),
        "dimensions": { "physical": 0-100, "mental": 0-100, "emotional": 0-100, "sleep": 0-100, "energy": 0-100, "nutrition": 0-100, "social": 0-100, "spiritual": 0-100 },
        "dominantDosha": "Vata" | "Pitta" | "Kapha",
        "rootCause": string (the #1 thing hurting their wellness),
        "rootCauseImpact": string (how it affects them),
        "burnoutRisk": "LOW" | "MODERATE" | "HIGH" | "CRITICAL",
        "cognitiveLoad": number (0-100),
        "emotionPattern": string,
        "top3Recommendations": [{ "title": string, "description": string, "priority": string }],
        "alternateReality": { "ifYouFixRootCause": { "stressChange": number, "energyChange": number, "focusChange": number, "sleepChange": number } },
        "personalityWellnessType": string (unique creative name),
        "weeklyPlan": [{ "day": string, "morning": string, "afternoon": string, "evening": string }]
      }
    `;

    const userMessage = JSON.stringify(data);
    const grokResponse = await callGrok(systemPrompt, userMessage);
    const aiResults = JSON.parse(grokResponse);

    if (userId) {
      const assessment = await prisma.assessment.create({
        data: {
          userId: userId,
          rawData: data,
          aiResults: aiResults,
          overallScore: aiResults.overallScore,
          dimensions: aiResults.dimensions,
          burnoutRisk: aiResults.burnoutRisk,
          cognitiveLoad: aiResults.cognitiveLoad,
          rootCause: aiResults.rootCause,
          dominantDosha: aiResults.dominantDosha,
          personalityType: aiResults.personalityWellnessType,
        },
      });

      await prisma.user.update({
        where: { id: userId },
        data: { currentAssessmentId: assessment.id },
      });
    }

    return NextResponse.json(aiResults);
  } catch (error: any) {
    console.error("Diagnosis Route Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
