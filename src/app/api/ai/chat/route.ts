import { NextResponse } from "next/server";
import { callGrok } from "@/lib/grokClient";
import { getAuthToken, verifyToken } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const { message, userData } = await req.json();
    const token = await getAuthToken();
    const decoded: any = token ? await verifyToken(token) : null;

    if (!decoded || !decoded.userId) {
      return NextResponse.json({ error: "Unauthorized. Please log in to chat with AI Coach." }, { status: 401 });
    }

    const systemPrompt = `
      You are an expert wellness coach named Zealous AI. 
      ${userData ? `You have analyzed the user's data: ${JSON.stringify(userData)}.` : "The user hasn't provided their data yet, so provide general wellness advice."}
      Respond to the user's message in a helpful, empathetic, and professional tone.
      Keep your responses concise (max 2-3 sentences) and focused on wellness, Ayurveda, and productivity.
      If the user's wellness profile is available, use it to personalize your advice.
      
      IMPORTANT: You must return your response as a valid JSON object with a "response" key.
      Example: { "response": "Your message here..." }
    `;

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const grokResponse = await callGrok(systemPrompt, message);
    
    // If grokResponse is a JSON string (from callGrok), we should handle it.
    // In our callGrok implementation, it returns a string (the content).
    
    let responseText = grokResponse;
    try {
      // If it's a JSON object (as requested in the system prompt for diagnosis), 
      // but here we want text, so we handle it gracefully.
      const parsed = JSON.parse(grokResponse);
      if (parsed.response) responseText = parsed.response;
      else if (typeof parsed === 'object') responseText = "I'm here to help with your wellness journey. How can I assist you further?";
    } catch (e) {
      // Not JSON, use as is
    }

    return NextResponse.json({ response: responseText });
  } catch (error: any) {
    console.error("Chat API Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
