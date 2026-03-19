"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Play, Volume2, VolumeX, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import siteData from "@/data/site.json";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative h-screen min-h-[500px] sm:min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        {/* Placeholder gradient while video loads */}
        <div className="absolute inset-0 bg-gradient-to-br from-ivory-950 via-earth-dark to-ivory-950" />
        
        {/* Video element - uncomment when actual video is available */}
        {/* <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/showreel.mp4" type="video/mp4" />
        </video> */}
        
        {/* Animated background pattern for now */}
        <div className="absolute inset-0 african-pattern opacity-30" />
        
        {/* Overlay */}
        <div className="absolute inset-0 video-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-ivory-900/50 backdrop-blur-sm rounded-full border border-ivory-700/50 mb-4 sm:mb-6 md:mb-8">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gold rounded-full animate-pulse" />
          <span className="text-ivory-300 text-xs sm:text-sm">Venice Film Festival Selected</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-ivory-50 leading-tight mb-4 sm:mb-6 px-2">
          We turn African brands into{" "}
          <span className="text-gradient">stories</span> the world can&apos;t ignore
        </h1>

        {/* Subheadline */}
        <p className="text-ivory-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 px-4">
          Award-winning film production company based in Nairobi, Kenya. 
          Creating TVCs, short films, and immersive VR experiences.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
          <Button
            asChild
            size="lg"
            className="bg-gold hover:bg-gold-light text-ivory-950 font-semibold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg w-full sm:w-auto"
          >
            <Link href="/work">
              <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              View Our Work
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-ivory-500 text-ivory-100 hover:bg-ivory-800/50 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg w-full sm:w-auto"
          >
            <Link href="/contact">Let&apos;s Tell Your Story</Link>
          </Button>
        </div>

        {/* Client Logos */}
        <div className="mt-8 sm:mt-12 md:mt-16">
          <p className="text-ivory-500 text-xs sm:text-sm uppercase tracking-wider mb-4 sm:mb-6">
            Trusted by leading brands
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-8 lg:gap-12">
            {siteData.clients.map((client) => (
              <div
                key={client.name}
                className="client-logo px-3 sm:px-4 py-1.5 sm:py-2 bg-ivory-900/30 rounded-lg"
              >
                <span className="text-ivory-300 font-semibold text-xs sm:text-sm md:text-base">{client.shortName}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mute Toggle */}
      <button
        onClick={toggleMute}
        className="absolute bottom-20 sm:bottom-8 left-4 sm:left-8 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-ivory-900/50 backdrop-blur-sm rounded-full flex items-center justify-center text-ivory-300 hover:text-gold hover:bg-ivory-800/50 transition-all"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? <VolumeX className="h-4 w-4 sm:h-5 sm:w-5" /> : <Volume2 className="h-4 w-4 sm:h-5 sm:w-5" />}
      </button>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 sm:gap-2 animate-bounce">
        <span className="text-ivory-500 text-[10px] sm:text-xs uppercase tracking-wider">Scroll</span>
        <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-ivory-500" />
      </div>
    </section>
  );
}
