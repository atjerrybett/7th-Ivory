"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "7th Ivory brought our brand story to life in ways we never imagined. Their understanding of African narratives combined with world-class production quality made all the difference.",
    author: "Marketing Director",
    company: "East African Breweries Limited",
    project: "Rockshore Tropical Campaign",
    rating: 5,
  },
  {
    id: 2,
    quote: "Working with 7th Ivory on the African Space Makers VR project was transformative. Their attention to detail and creative vision helped us achieve Venice Film Festival selection.",
    author: "Executive Producer",
    company: "Cultural Video Production",
    project: "African Space Makers VR",
    rating: 5,
  },
  {
    id: 3,
    quote: "The team's professionalism and artistic excellence exceeded our expectations. They truly understand how to craft compelling visual stories for the African market.",
    author: "Creative Director",
    company: "Dentsu Kenya",
    project: "Techno Phantom X TVC",
    rating: 5,
  },
  {
    id: 4,
    quote: "7th Ivory delivered exceptional production design and art direction for our Nigeria campaign. Their cross-border expertise made the collaboration seamless.",
    author: "Brand Manager",
    company: "Schweppes Nigeria",
    project: "Schweppes TVC Campaign",
    rating: 5,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-ivory-900/20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 african-pattern opacity-5" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <p className="text-gold uppercase tracking-wider text-xs sm:text-sm font-semibold mb-2">
            Testimonials
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-ivory-50">
            What our clients say
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative">
          <div className="bg-ivory-950/50 backdrop-blur-sm rounded-2xl border border-ivory-800/50 p-6 sm:p-8 md:p-12">
            {/* Quote Icon */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gold/20 rounded-xl flex items-center justify-center mb-6">
              <Quote className="h-6 w-6 sm:h-7 sm:w-7 text-gold" />
            </div>

            {/* Quote */}
            <blockquote className="text-ivory-200 text-lg sm:text-xl md:text-2xl font-light leading-relaxed mb-8">
              "{current.quote}"
            </blockquote>

            {/* Rating */}
            <div className="flex gap-1 mb-4">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-gold fill-gold" />
              ))}
            </div>

            {/* Author Info */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-ivory-50 font-semibold text-base sm:text-lg">
                  {current.author}
                </p>
                <p className="text-gold text-sm sm:text-base">
                  {current.company}
                </p>
                <p className="text-ivory-500 text-xs sm:text-sm mt-1">
                  Project: {current.project}
                </p>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-3">
                <button
                  onClick={goToPrevious}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-ivory-800/50 hover:bg-gold/20 rounded-full flex items-center justify-center text-ivory-400 hover:text-gold transition-all"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
                <button
                  onClick={goToNext}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-ivory-800/50 hover:bg-gold/20 rounded-full flex items-center justify-center text-ivory-400 hover:text-gold transition-all"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all ${
                    index === currentIndex 
                      ? "bg-gold w-6 sm:w-8" 
                      : "bg-ivory-700 hover:bg-ivory-600"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
