import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../.env.local') });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('MONGODB_URI not found in .env.local');
  process.exit(1);
}

// Inline schemas to avoid dependency issues with Next.js specific imports
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  currentAssessmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Assessment' },
});

const assessmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  overallScore: Number,
  dimensions: Object,
  burnoutRisk: String,
  cognitiveLoad: Number,
  rootCause: String,
  dominantDosha: String,
  personalityType: String,
  aiResults: Object,
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.models.User || mongoose.model('User', userSchema);
const Assessment = mongoose.models.Assessment || mongoose.model('Assessment', assessmentSchema);

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Γ£ô Connected to MongoDB for seeding');

    // Clear existing data
    await User.deleteMany({});
    await Assessment.deleteMany({});

    // Create a test user
    const user = await User.create({
      email: 'test@vitalsync.com',
      password: 'password123', // In a real app this would be hashed
      name: 'VitalSync Explorer',
    });

    console.log('Γ£ô Created test user:', user.email);

    // Create a test assessment
    const assessment = await Assessment.create({
      userId: user._id,
      overallScore: 82,
      dimensions: {
        physical: 85,
        mental: 78,
        emotional: 80,
        sleep: 70,
        energy: 88,
        nutrition: 90,
        social: 85,
        spiritual: 75
      },
      burnoutRisk: 'LOW',
      cognitiveLoad: 45,
      rootCause: 'Mild Circadian Mismatch',
      dominantDosha: 'Pitta',
      personalityType: 'The Radiant Strategist',
      aiResults: {
        top3Recommendations: [
          { title: 'Morning Sunlight', description: 'Get 15 mins of sun before 9am.', priority: 'High' },
          { title: 'Magnesium Bath', description: 'Epsom salt soak twice weekly.', priority: 'Medium' },
          { title: 'Digital Detox', description: 'No screens after 10pm.', priority: 'High' }
        ]
      }
    });

    await User.findByIdAndUpdate(user._id, { currentAssessmentId: assessment._id });

    console.log('Γ£ô Created test assessment for user');
    console.log('\nBackend is LIVE. Database is CONNECTED.');
    console.log('You can now log in with: test@vitalsync.com / password123');

    process.exit(0);
  } catch (err) {
    console.error('Seeding Error:', err);
    process.exit(1);
  }
}

seed();
