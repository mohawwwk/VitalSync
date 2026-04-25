import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import RadarPreview from "@/components/landing/RadarPreview";
import FeatureHighlights from "@/components/landing/FeatureHighlights";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <HowItWorks />
      <RadarPreview />
      <FeatureHighlights />
    </div>
  );
}
