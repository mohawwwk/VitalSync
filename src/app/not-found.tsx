
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-8xl font-display font-bold text-primary">404</h1>
        <h2 className="text-3xl font-display font-bold text-text-primary">Lost in the void?</h2>
        <p className="text-text-secondary">
          The page you are looking for doesn&apos;t exist or has been moved to another dimension.
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-bold hover:scale-105 transition-transform"
        >
          <ArrowLeft size={20} /> Back to Reality
        </Link>
      </div>
    </div>
  );
}
