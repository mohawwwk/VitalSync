
'use client';

import { useEffect } from 'react';
import { RefreshCcw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6">
      <div className="text-center space-y-6 max-w-md">
        <div className="w-20 h-20 bg-red-500/10 border border-red-500/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
          <span className="text-4xl text-red-500 font-bold">!</span>
        </div>
        <h2 className="text-3xl font-display font-bold text-text-primary">Something went wrong</h2>
        <p className="text-text-secondary">
          We encountered an unexpected error while processing your request. Our team has been notified.
        </p>
        <button
          onClick={() => reset()}
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-bold hover:scale-105 transition-transform"
        >
          <RefreshCcw size={20} /> Try Again
        </button>
      </div>
    </div>
  );
}
