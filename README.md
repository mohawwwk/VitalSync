# VitalSync 🧘‍♂️✨

**VitalSync** is a next-generation AI-powered wellness platform that combines ancient Ayurvedic wisdom with modern neuroscience and sports medicine. It provides users with deep insights into their physical, mental, and emotional health through an interactive diagnostic flow and a personalized AI coach.

---

## 🚀 Key Features

- **AI Wellness Diagnosis**: Multi-step assessment that analyzes sleep, energy, stress, and Ayurvedic Dosha.
- **Dynamic Dashboard**: Real-time visualization of your "Vitality Score" and wellness dimensions.
- **AI Wellness Coach**: Chat with an intelligent coach powered by Grok-3 for personalized protocols.
- **Root Cause Analysis**: Identifies the primary factor affecting your health and predicts the "Alternate Reality" if fixed.
- **Weekly Protocol**: Generates a tailored morning, afternoon, and evening plan for optimal performance.
- **Expert Booking**: Seamlessly connect with wellness practitioners for 1-on-1 sessions.

---

## 🛠 Tech Stack

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/)
- **Database**: [Prisma](https://www.prisma.io/) + MySQL
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **AI Integration**: [Grok-3 API](https://x.ai/api)
- **Auth**: JWT with HTTP-only Cookies

---

## 📦 Getting Started

### 1. Prerequisites
- Node.js 18+
- A MySQL database (local or cloud like PlanetScale/TidyDB)
- An X.ai API Key for Grok

### 2. Installation
```bash
git clone https://github.com/mohawwwk/VitalSync.git
cd VitalSync
npm install
```

### 3. Environment Setup
Create a `.env` file based on `.env.example`:
```env
DATABASE_URL="mysql://user:password@host:3306/dbname"
JWT_SECRET="your-secret"
GROK_API_KEY="your-api-key"
```

### 4. Database Setup
```bash
npx prisma generate
npx prisma db push
node scripts/seed-data.mjs
```

### 5. Run Development Server
```bash
npm run dev
```

---

## ☁️ Deployment on Vercel

VitalSync is optimized for Vercel. 

1. Push your code to GitHub.
2. Import the project to Vercel.
3. Add your Environment Variables in the Vercel Dashboard.
4. The build command will automatically handle `prisma generate`.

---

## 📄 License

This project is licensed under the MIT License.
