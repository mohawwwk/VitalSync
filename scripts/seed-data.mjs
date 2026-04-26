import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function seed() {
  try {
    console.log('🌱 Starting database seed...');

    // Clear existing data
    await prisma.assessment.deleteMany({});
    await prisma.user.deleteMany({});

    // Create a test user
    const hashedPassword = await bcrypt.hash('password123', 12);
    const user = await prisma.user.create({
      data: {
        email: 'test@vitalsync.com',
        password: hashedPassword,
        name: 'VitalSync Explorer',
      },
    });

    console.log('✅ Created test user:', user.email);

    // Create a test assessment
    const assessment = await prisma.assessment.create({
      data: {
        userId: user.id,
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
        },
        rawData: {
          step1: { age: 24, gender: 'male' },
          step2: { sleep: 7, stress: 3 }
        }
      },
    });

    // Link user to latest assessment
    await prisma.user.update({
      where: { id: user.id },
      data: { currentAssessmentId: assessment.id },
    });

    console.log('✅ Created test assessment for user');
    console.log('\n🚀 Database is SEEDED.');
    console.log('You can now log in with: test@vitalsync.com / password123');

    await prisma.$disconnect();
    process.exit(0);
  } catch (err) {
    console.error('❌ Seeding Error:', err);
    await prisma.$disconnect();
    process.exit(1);
  }
}

seed();
