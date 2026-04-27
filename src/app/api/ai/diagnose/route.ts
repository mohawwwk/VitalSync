import { NextResponse } from "next/server";
import { callGrok } from "@/lib/grokClient";
import prisma from "@/lib/prisma";
import { getAuthToken, verifyToken } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const token = await getAuthToken();
    const decoded: any = token ? await verifyToken(token) : null;
    const userId = decoded?.userId ? parseInt(decoded.userId) : null;

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized. Please log in to perform assessment." }, { status: 401 });
    }

    /* 
    // Temporarily disabled for testing
    const recentAssessment = await prisma.assessment.findFirst({
      where: {
        userId: userId,
        createdAt: {
          gt: new Date(Date.now() - 5 * 60 * 1000) // 5 minutes ago
        }
      }
    });

    if (recentAssessment) {
      return NextResponse.json({ 
        error: "You've already performed an assessment recently. Please wait a few minutes before trying again." 
      }, { status: 429 });
    }
    */

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
    
    let aiResults;
    try {
      aiResults = typeof grokResponse === 'string' ? JSON.parse(grokResponse) : grokResponse;
    } catch (e) {
      console.error("Critical JSON parse error in diagnosis route:", e);
      // Fallback to a very basic structure if everything else fails
      aiResults = {
        overallScore: 70,
        dimensions: { physical: 70, mental: 70, emotional: 70, sleep: 70, energy: 70, nutrition: 70, social: 70, spiritual: 70 },
        dominantDosha: "Vata",
        rootCause: "System stress",
        rootCauseImpact: "General fatigue",
        burnoutRisk: "MODERATE",
        cognitiveLoad: 50,
        emotionPattern: "Stable",
        top3Recommendations: [{ title: "Rest", description: "Get more sleep", priority: "High" }],
        alternateReality: { ifYouFixRootCause: { stressChange: -20, energyChange: 20, focusChange: 20, sleepChange: 20 } },
        personalityWellnessType: "The Seeker",
        weeklyPlan: []
      };
    }

    if (userId) {
      try {
        const assessment = await prisma.assessment.create({
          data: {
            userId: userId,
            rawData: data,
            aiResults: aiResults,
            overallScore: aiResults.overallScore || 0,
            dimensions: aiResults.dimensions || {},
            burnoutRisk: aiResults.burnoutRisk || "MODERATE",
            cognitiveLoad: aiResults.cognitiveLoad || 0,
            rootCause: aiResults.rootCause || "Unknown",
            dominantDosha: aiResults.dominantDosha || "Vata",
            personalityType: aiResults.personalityWellnessType || "Unknown",
          },
        });

        await prisma.user.update({
          where: { id: userId },
          data: { currentAssessmentId: assessment.id },
        });
      } catch (dbError) {
        console.error("Database error saving assessment:", dbError);
        // We still return the results to the user even if DB save fails
      }
    }

    return NextResponse.json(aiResults);
  } catch (error: any) {
    console.error("Diagnosis Route Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
