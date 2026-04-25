import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { CustomCursor } from "@/components/shared/CustomCursor";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "VitalSync | Premium Wellness Diagnostics",
  description: "AI-powered wellness diagnostics combining quantum biometrics, Ayurveda, and modern science.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <CustomCursor />
          <div className="noise-overlay" />
          <Navbar />
          <main className="relative z-10 pt-20">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
