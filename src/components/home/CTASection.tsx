import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-ivory-950 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-terracotta/5" />
      <div className="absolute inset-0 african-pattern opacity-5" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-ivory-50 mb-6">
          Ready to tell your story?
        </h2>
        <p className="text-ivory-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Whether you&apos;re a global brand or a local startup, we bring the same 
          passion and craft to every project. Let&apos;s create something unforgettable.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-gold hover:bg-gold-light text-ivory-950 font-semibold px-8 py-6 text-lg"
          >
            <Link href="/contact">
              Start a Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-ivory-500 text-ivory-100 hover:bg-ivory-800/50 px-8 py-6 text-lg"
          >
            <a
              href="https://wa.me/254700000000?text=Hi%207th%20Ivory!%20I'd%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
            </a>
          </Button>
        </div>
        
        {/* Quick contact */}
        <p className="mt-8 text-ivory-500">
          Or email us directly at{" "}
          <a 
            href="mailto:7th.ivory@gmail.com" 
            className="text-gold hover:text-gold-light transition-colors"
          >
            7th.ivory@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}
