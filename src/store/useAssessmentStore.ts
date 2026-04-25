import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AssessmentState {
  step: number;
  data: {
    // Step 1: Profile
    name: string;
    age: number;
    gender: string;
    occupation: string;
    city: string;
    lifestyle: string;
    
    // Step 2: Sleep
    sleepHours: number;
    sleepQuality: number;
    dreamRecall: string;
    wakeFeeling: string;
    
    // Step 3: Mental
    stressLevel: number;
    anxietyFrequency: string;
    mood: string[];
    feelingDescription: string;
    
    // Step 4: Physical
    exerciseFrequency: string;
    dietType: string;
    waterIntake: number;
    screenTime: number;
    conditions: string[];
    
    // Step 5: Energy & Ayurveda
    aliveTime: string;
    doshaQuiz: {
      q1: string;
      q2: string;
      q3: string;
      q4: string;
      q5: string;
    };
    energyPattern: string;
    
    // Step 6: Emotional
    relationshipQuality: number;
    workSatisfaction: number;
    lastPeace: string;
    emotionalTriggers: string[];
  };
  results: any | null;
  setStep: (step: number) => void;
  updateData: (data: Partial<AssessmentState["data"]>) => void;
  setResults: (results: any) => void;
  reset: () => void;
}

export const useAssessmentStore = create<AssessmentState>()(
  persist(
    (set) => ({
      step: 1,
      results: null,
      data: {
        name: "",
        age: 25,
        gender: "",
        occupation: "",
        city: "",
        lifestyle: "moderately active",
        sleepHours: 7,
        sleepQuality: 5,
        dreamRecall: "rarely",
        wakeFeeling: "groggy",
        stressLevel: 5,
        anxietyFrequency: "sometimes",
        mood: [],
        feelingDescription: "",
        exerciseFrequency: "3x a week",
        dietType: "mixed",
        waterIntake: 2,
        screenTime: 6,
        conditions: [],
        aliveTime: "morning",
        doshaQuiz: { q1: "", q2: "", q3: "", q4: "", q5: "" },
        energyPattern: "stable",
        relationshipQuality: 5,
        workSatisfaction: 5,
        lastPeace: "this week",
        emotionalTriggers: [],
      },
      setStep: (step) => set({ step }),
      updateData: (newData) =>
        set((state) => ({ data: { ...state.data, ...newData } })),
      setResults: (results) => set({ results }),
      reset: () =>
        set({
          step: 1,
          results: null,
          data: {
            name: "",
            age: 25,
            gender: "",
            occupation: "",
            city: "",
            lifestyle: "moderately active",
            sleepHours: 7,
            sleepQuality: 5,
            dreamRecall: "rarely",
            wakeFeeling: "groggy",
            stressLevel: 5,
            anxietyFrequency: "sometimes",
            mood: [],
            feelingDescription: "",
            exerciseFrequency: "3x a week",
            dietType: "mixed",
            waterIntake: 2,
            screenTime: 6,
            conditions: [],
            aliveTime: "morning",
            doshaQuiz: { q1: "", q2: "", q3: "", q4: "", q5: "" },
            energyPattern: "stable",
            relationshipQuality: 5,
            workSatisfaction: 5,
            lastPeace: "this week",
            emotionalTriggers: [],
          },
        }),
    }),
    { name: "assessment-storage" }
  )
);
