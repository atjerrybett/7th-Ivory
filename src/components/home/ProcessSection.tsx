"use client";

import { Lightbulb, FileText, Film, Rocket, CheckCircle } from "lucide-react";

const processSteps = [
  {
    id: 1,
    icon: FileText,
    title: "Discovery & Brief",
    description: "We dive deep into understanding your brand, objectives, and target audience to craft the perfect creative brief.",
    details: ["Brand immersion", "Audience research", "Competitive analysis", "Goal alignment"],
  },
  {
    id: 2,
    icon: Lightbulb,
    title: "Concept & Creative",
    description: "Our creative team develops compelling concepts that blend African storytelling traditions with modern filmmaking techniques.",
    details: ["Mood boards", "Storyboarding", "Script development", "Creative presentations"],
  },
  {
    id: 3,
    icon: Film,
    title: "Production",
    description: "From pre-production to wrap, we execute with precision, bringing together the best talent and equipment.",
    details: ["Casting & location scouting", "Professional crew", "State-of-the-art equipment", "On-set direction"],
  },
  {
    id: 4,
    icon: Rocket,
    title: "Post & Delivery",
    description: "Expert editing, color grading, and sound design transform raw footage into polished, impactful content.",
    details: ["Editorial excellence", "Color grading", "Sound design & mix", "Multiple format delivery"],
  },
];

export function ProcessSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-ivory-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <p className="text-gold uppercase tracking-wider text-xs sm:text-sm font-semibold mb-2">
            Our Process
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-ivory-50 mb-4">
            From vision to screen
          </h2>
          <p className="text-ivory-400 text-sm sm:text-base md:text-lg">
            Our proven four-stage process ensures every project delivers exceptional results, 
            on time and within budget.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-6">
          {processSteps.map((step, index) => (
            <div
              key={step.id}
              className="group relative"
            >
              {/* Connector line (hidden on mobile, last item) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-gold/50 to-gold/10" />
              )}

              <div className="bg-ivory-900/30 rounded-xl border border-ivory-800/50 p-5 sm:p-6 hover:border-gold/30 transition-all h-full">
                {/* Step Number & Icon */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gold/20 rounded-xl flex items-center justify-center group-hover:bg-gold/30 transition-colors">
                      <step.icon className="h-6 w-6 sm:h-7 sm:w-7 text-gold" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-gold text-ivory-950 rounded-full flex items-center justify-center text-xs font-bold">
                      {step.id}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-semibold text-ivory-50 mb-2 group-hover:text-gold transition-colors">
                  {step.title}
                </h3>
                <p className="text-ivory-400 text-sm mb-4">
                  {step.description}
                </p>

                {/* Details */}
                <ul className="space-y-2">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2 text-xs sm:text-sm text-ivory-500">
                      <CheckCircle className="h-3.5 w-3.5 text-gold shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
