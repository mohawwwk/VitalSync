import mongoose from "mongoose";

const AssessmentSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    rawData: { type: Object, required: true },
    aiResults: { type: Object, required: true },
    overallScore: Number,
    dimensions: {
      physical: Number,
      mental: Number,
      emotional: Number,
      sleep: Number,
      energy: Number,
      nutrition: Number,
      social: Number,
      spiritual: Number,
    },
    burnoutRisk: { type: String, enum: ["LOW", "MODERATE", "HIGH", "CRITICAL"] },
    cognitiveLoad: Number,
    rootCause: String,
    dominantDosha: { type: String, enum: ["Vata", "Pitta", "Kapha"] },
    personalityType: String,
    weeklyPlan: Array,
    top3Recommendations: Array,
  },
  { timestamps: true }
);

export default mongoose.models.Assessment || mongoose.model("Assessment", AssessmentSchema);
