# VitalSync (Zealous)

A modern, AI-powered wellness assessment and coaching platform. Built with Next.js, Prisma, MySQL, and Grok AI integration. This project provides a full-stack solution for user sign-up/login, wellness assessments, AI-driven diagnostics, and a beautiful dashboard UI.

---

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup & Installation](#setup--installation)
- [Environment Variables](#environment-variables)
- [Database Setup](#database-setup)
- [Running the App](#running-the-app)
- [AI Integration (Grok)](#ai-integration-grok)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

---

## Features
- User authentication (sign up, login, JWT-based sessions)
- Wellness assessment flow with multi-step UI
- AI-powered diagnosis using Grok (x.ai) API
- Dashboard with burnout risk, wellness archetype, and 8-dimension radar chart
- Weekly plan and recommendations
- Modern, responsive UI with Tailwind CSS
- Prisma ORM with MySQL backend
- Modular, maintainable codebase

## Tech Stack
- **Frontend:** Next.js 14+, React 18+, Tailwind CSS
- **Backend:** Next.js API routes, Prisma ORM
- **Database:** MySQL
- **AI:** Grok (x.ai) API integration
- **State Management:** Zustand
- **Other:** Zod, React Hook Form, D3, Recharts, Framer Motion

## Project Structure
```
zealous/
├── prisma/                # Prisma schema and migrations
├── public/                # Static assets
├── scripts/               # Seed and utility scripts
├── src/
│   ├── app/               # Next.js app directory (routes, pages)
│   ├── components/        # UI and feature components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility libraries (prisma, auth, grokClient, etc.)
│   ├── models/            # Data models (TypeScript)
│   ├── store/             # Zustand stores
│   ├── styles/            # Global styles
├── .env.local             # Local environment variables
├── .env.example           # Example env file
├── package.json           # Project metadata and scripts
├── tsconfig.json          # TypeScript config
├── tailwind.config.ts     # Tailwind CSS config
└── ...
```

## Setup & Installation
1. **Clone the repository:**
   ```sh
   git clone <repo-url>
   cd zealous
   ```
2. **Install dependencies:**
   ```sh
   npm install --legacy-peer-deps
   ```
3. **Copy environment variables:**
   ```sh
   cp .env.example .env.local
   # Fill in your actual values in .env.local
   ```

## Environment Variables
Edit `.env.local` with your secrets:

```
DATABASE_URL="mysql://<user>:<password>@localhost:3306/vitalsync"
JWT_SECRET=your_jwt_secret_at_least_32_chars
GROK_API_KEY=your_xai_grok_api_key
NODE_ENV=development
```
- `DATABASE_URL`: MySQL connection string
- `JWT_SECRET`: Secret for JWT signing (min 32 chars recommended)
- `GROK_API_KEY`: Your x.ai Grok API key (get from https://x.ai)
- `NODE_ENV`: Set to `development` or `production`

## Database Setup
1. **Start MySQL locally** (or use a remote instance)
2. **Push schema to DB:**
   ```sh
   npx prisma db push
   ```
3. *(Optional)* **Seed data:**
   ```sh
   node scripts/seed-data.mjs
   ```

## Running the App
```sh
npm run dev
```
- App runs at [http://localhost:3000](http://localhost:3000) (or next available port)

## AI Integration (Grok)
- The app uses the Grok API for AI-powered wellness diagnostics.
- If `GROK_API_KEY` is missing or the API fails, the app returns fallback/mock data so the UI always works.
- To get a Grok API key, sign up at [x.ai](https://x.ai).
- The Grok API endpoint and model can be updated in `src/lib/grokClient.ts`.

## Testing
- **Manual:**
  - Sign up, log in, and complete an assessment.
  - Check the dashboard for AI results.
- **Automated:**
  - Add tests using Jest/React Testing Library (not included by default).

## Troubleshooting
- **Port in use:** App will auto-increment to next available port (3000, 3001, ...)
- **Prisma errors:** Ensure your `DATABASE_URL` is correct and MySQL is running.
- **Grok API fallback:** If you see "API Error Fallback" in the dashboard, check your `GROK_API_KEY` and internet connection.
- **Dependency issues:** Use `npm install --legacy-peer-deps` for compatibility.

## Contributing
1. Fork the repo
2. Create a feature branch
3. Commit and push your changes
4. Open a pull request

## License
MIT

---

**VitalSync** is a modern wellness platform. For questions or support, open an issue or contact the maintainer.
