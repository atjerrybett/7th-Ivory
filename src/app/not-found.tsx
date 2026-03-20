import Link from "next/link";
import { Home, Film } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-ivory-950 flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        {/* 404 Number with Film Theme */}
        <div className="relative mb-8">
          <div className="text-[120px] sm:text-[180px] font-serif font-bold text-ivory-900/50 leading-none select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gold/20 rounded-2xl flex items-center justify-center">
              <Film className="h-10 w-10 sm:h-12 sm:w-12 text-gold" />
            </div>
          </div>
        </div>

        {/* Message */}
        <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ivory-50 mb-4">
          Scene not found
        </h1>
        <p className="text-ivory-400 text-base sm:text-lg mb-8">
          Looks like this story hasn&apos;t been written yet. 
          Let&apos;s take you back to familiar territory.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            className="bg-gold hover:bg-gold-light text-ivory-950 font-semibold px-6 w-full sm:w-auto"
          >
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-ivory-700 text-ivory-300 hover:border-gold hover:text-gold px-6 w-full sm:w-auto"
          >
            <Link href="/work">
              <Film className="mr-2 h-4 w-4" />
              View Our Work
            </Link>
          </Button>
        </div>

        {/* Decorative Pattern */}
        <div className="mt-16 flex justify-center gap-2 opacity-30">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i} 
              className="w-3 h-3 bg-gold rounded-full"
              style={{ opacity: 1 - i * 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
