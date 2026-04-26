import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getAuthToken, verifyToken } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const token = getAuthToken();
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const decoded: any = verifyToken(token);
    const userId = parseInt(decoded.userId);

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
        assessments: {
          orderBy: { createdAt: "desc" },
          take: 1,
        },
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error: any) {
    console.error("User Profile Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
