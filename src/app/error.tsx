"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

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
    <div className="min-h-screen bg-ivory-950 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="font-serif text-6xl md:text-7xl text-terracotta mb-4">
          Oops!
        </h1>
        <h2 className="text-2xl md:text-3xl text-ivory-50 mb-4">
          Something went wrong
        </h2>
        <p className="text-ivory-400 mb-8 max-w-md mx-auto">
          We apologize for the inconvenience. Please try again or contact us if 
          the problem persists.
        </p>
        <Button
          onClick={reset}
          className="bg-gold hover:bg-gold-light text-ivory-950 font-semibold"
        >
          Try Again
        </Button>
      </div>
    </div>
  );
}
