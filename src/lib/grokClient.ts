export async function callGrok(systemPrompt: string, userMessage: string, jsonMode: boolean = true) {
  const apiKey = process.env.GROK_API_KEY;
  
  if (!apiKey) {
    // Return mock data if no API key is provided for development
    console.warn("GROK_API_KEY not found. Returning mock data.");
    
    // If it's a chat request (based on prompt or message content)
    if (systemPrompt.includes("wellness coach") || userMessage.length < 100) {
      return JSON.stringify({
        response: "I'm your Zealous AI coach. Since I'm in demo mode, I can tell you that based on your profile, you should focus on balancing your Vata energy with warm, grounding foods and a consistent sleep schedule."
      });
    }

    // Default to assessment mock data
    return JSON.stringify({
      overallScore: 68,
      dimensions: { physical: 75, mental: 60, emotional: 55, sleep: 40, energy: 65, nutrition: 80, social: 90, spiritual: 50 },
      dominantDosha: "Vata",
      rootCause: "Chronic Sleep Deprivation",
      rootCauseImpact: "Lowered cognitive focus and increased emotional reactivity.",
      burnoutRisk: "HIGH",
      cognitiveLoad: 82,
      emotionPattern: "Resonant but scattered",
      top3Recommendations: [
        { title: "Digital Sunset", description: "No screens 90 minutes before bed.", priority: "Critical" },
        { title: "Magnesium Rich Foods", description: "Incorporate seeds and leafy greens into dinner.", priority: "High" },
        { title: "Box Breathing", description: "4-4-4-4 rhythm for 5 minutes twice daily.", priority: "Medium" }
      ],
      alternateReality: { ifYouFixRootCause: { stressChange: -30, energyChange: 45, focusChange: 50, sleepChange: 60 } },
      personalityWellnessType: "The Driven Overthinker",
      weeklyPlan: [
        { day: "Monday", morning: "Light stretching", afternoon: "Short walk", evening: "Chamomile tea" },
        { day: "Tuesday", morning: "Meditation", afternoon: "High protein lunch", evening: "Early bed" },
        { day: "Wednesday", morning: "Yoga", afternoon: "Quick nap", evening: "Reading" },
        { day: "Thursday", morning: "Stretching", afternoon: "Protein snack", evening: "Warm bath" },
        { day: "Friday", morning: "Morning sun", afternoon: "Deep work", evening: "Social time" },
        { day: "Saturday", morning: "Long walk", afternoon: "Hobby time", evening: "No screens" },
        { day: "Sunday", morning: "Rest", afternoon: "Meal prep", evening: "Early sleep" }
      ]
    });
  }

  try {
    const isGroq = apiKey.startsWith("gsk_");
    const endpoint = isGroq 
      ? "https://api.groq.com/openai/v1/chat/completions" 
      : "https://api.x.ai/v1/chat/completions";
    
    const model = isGroq 
      ? "llama-3.3-70b-versatile" 
      : "grok-3-latest";

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: model,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userMessage }
        ],
        temperature: 0.7,
        response_format: jsonMode ? { type: "json_object" } : undefined
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Grok API Error Response (${response.status}):`, errorText);
      
      // On any API error, fallback to mock data to ensure the app keeps working
      console.warn("API error, falling back to mock data.");
      return getMockData(systemPrompt, userMessage);
    }

    const data = await response.json();
    let content = data.choices[0].message.content;

    if (jsonMode) {
      // Clean up potential markdown formatting from the response
      content = content.replace(/```json\n?|```/g, "").trim();
      
      // Attempt to validate it's parseable JSON
      try {
        JSON.parse(content);
      } catch (e) {
        console.error("Failed to parse JSON from AI response:", content);
        // If it's not valid JSON, we might want to return mock data instead of breaking
        return getMockData(systemPrompt, userMessage);
      }
    }

    return content;
  } catch (error: any) {
    console.error("Grok API Exception:", error);
    return getMockData(systemPrompt, userMessage);
  }
}

function getMockData(systemPrompt: string, userMessage: string) {
  // If it's a chat request (based on prompt or message content)
  if (systemPrompt.includes("wellness coach") || userMessage.length < 100) {
    return JSON.stringify({
      response: "I'm your Zealous AI coach. I'm currently in a limited mode, but based on your profile, I suggest focusing on balancing your energy with grounding practices like meditation and consistent sleep."
    });
  }

  // Default to assessment mock data
  return JSON.stringify({
    overallScore: 68,
    dimensions: { physical: 75, mental: 60, emotional: 55, sleep: 40, energy: 65, nutrition: 80, social: 90, spiritual: 50 },
    dominantDosha: "Vata",
    rootCause: "Chronic Sleep Deprivation",
    rootCauseImpact: "Lowered cognitive focus and increased emotional reactivity.",
    burnoutRisk: "HIGH",
    cognitiveLoad: 82,
    emotionPattern: "Resonant but scattered",
    top3Recommendations: [
      { title: "Digital Sunset", description: "No screens 90 minutes before bed.", priority: "Critical" },
      { title: "Magnesium Rich Foods", description: "Incorporate seeds and leafy greens into dinner.", priority: "High" },
      { title: "Box Breathing", description: "4-4-4-4 rhythm for 5 minutes twice daily.", priority: "Medium" }
    ],
    alternateReality: { ifYouFixRootCause: { stressChange: -30, energyChange: 45, focusChange: 50, sleepChange: 60 } },
    personalityWellnessType: "The Driven Overthinker",
    weeklyPlan: [
      { day: "Monday", morning: "Light stretching", afternoon: "Short walk", evening: "Chamomile tea" },
      { day: "Tuesday", morning: "Meditation", afternoon: "High protein lunch", evening: "Early bed" },
      { day: "Wednesday", morning: "Yoga", afternoon: "Quick nap", evening: "Reading" },
      { day: "Thursday", morning: "Stretching", afternoon: "Protein snack", evening: "Warm bath" },
      { day: "Friday", morning: "Morning sun", afternoon: "Deep work", evening: "Social time" },
      { day: "Saturday", morning: "Long walk", afternoon: "Hobby time", evening: "No screens" },
      { day: "Sunday", morning: "Rest", afternoon: "Meal prep", evening: "Early sleep" }
    ]
  });
}

export async function streamGrok(systemPrompt: string, userMessage: string) {
  return null;
}
