import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getAuthToken, verifyToken } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const token = await getAuthToken();
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const decoded: any = await verifyToken(token);
    if (!decoded) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }
    const userId = parseInt(decoded.userId);

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        assessments: {
          orderBy: { createdAt: "desc" },
          take: 1,
        },
      },
    });

    if (!user || user.assessments.length === 0) {
      return NextResponse.json({ 
        message: "No assessments found",
        overallScore: 0,
        dimensions: { physical: 0, mental: 0, emotional: 0, sleep: 0, energy: 0, nutrition: 0, social: 0, spiritual: 0 },
        burnoutRisk: "LOW",
        cognitiveLoad: 0,
        rootCause: "No assessment data",
        dominantDosha: "Unknown",
        personalityType: "Unknown",
        weeklyPlan: [],
        top3Recommendations: []
      });
    }

    const assessment = user.assessments[0];
    
    // Combine fields to match the dashboard's expected structure
    const dashboardData = {
      ...(assessment.aiResults as object),
      overallScore: assessment.overallScore,
      dimensions: assessment.dimensions,
      burnoutRisk: assessment.burnoutRisk,
      cognitiveLoad: assessment.cognitiveLoad,
      rootCause: assessment.rootCause,
      dominantDosha: assessment.dominantDosha,
      personalityType: assessment.personalityType,
      createdAt: assessment.createdAt,
    };

    return NextResponse.json(dashboardData);
  } catch (error: any) {
    console.error("Latest Assessment Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
