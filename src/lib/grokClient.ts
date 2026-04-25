export async function callGrok(systemPrompt: string, userMessage: string) {
  const apiKey = process.env.GROK_API_KEY;
  
  if (!apiKey) {
    // Return mock data if no API key is provided for development
    console.warn("GROK_API_KEY not found. Returning mock data.");
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
    const response = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "grok-3-latest",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userMessage }
        ],
        temperature: 0.7,
        response_format: { type: "json_object" }
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || "Grok API error");
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error: any) {
    console.error("Grok API Error:", error);
    // Fallback to mock data if API fails
    return JSON.stringify({
      overallScore: 50,
      dimensions: { physical: 50, mental: 50, emotional: 50, sleep: 50, energy: 50, nutrition: 50, social: 50, spiritual: 50 },
      dominantDosha: "Pitta",
      rootCause: "API Error Fallback",
      rootCauseImpact: "We couldn't reach the AI, but here is a baseline assessment.",
      burnoutRisk: "MODERATE",
      cognitiveLoad: 50,
      emotionPattern: "Neutral",
      top3Recommendations: [
        { title: "Check API Key", description: "Ensure your GROK_API_KEY is set correctly.", priority: "High" },
        { title: "Try Again", description: "Refresh and retry the assessment.", priority: "Medium" },
        { title: "Baseline Health", description: "Drink more water and sleep 8 hours.", priority: "High" }
      ],
      alternateReality: { ifYouFixRootCause: { stressChange: 0, energyChange: 0, focusChange: 0, sleepChange: 0 } },
      personalityWellnessType: "The Resilient Soul",
      weeklyPlan: [
        { day: "All Days", morning: "Hydrate", afternoon: "Move", evening: "Rest" }
      ]
    });
  }
}

export async function streamGrok(systemPrompt: string, userMessage: string) {
  return null;
}
