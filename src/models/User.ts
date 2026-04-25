import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    profile: {
      age: Number,
      gender: String,
      occupation: String,
      city: String,
      avatar: String,
    },
    currentAssessmentId: { type: mongoose.Schema.Types.ObjectId, ref: "Assessment" },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
