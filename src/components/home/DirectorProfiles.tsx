"use client";

import Link from "next/link";
import { Award, Film, Camera } from "lucide-react";

const directors = [
  {
    id: "neha-manoj-shah",
    name: "Neha Manoj Shah",
    initials: "NS",
    role: "Founder, Art Director & Production Designer",
    bio: "Neha is the creative force behind 7th Ivory's visual identity. Her work has been showcased at the Venice Film Festival, and she brings a meticulous eye for clean, modern, and classy aesthetics to every project.",
    credits: [
      { title: "African Space Makers VR", role: "Production Designer", venue: "Venice Film Festival 2020" },
      { title: "Love Sweet Sound", role: "Writer/Director", venue: "Award-Winning Short Film" },
      { title: "Techno Phantom X", role: "Production Design", venue: "TVC Campaign" },
      { title: "Schweppes Nigeria", role: "Art Direction", venue: "TVC Campaign" },
    ],
    skills: ["Art Direction", "Production Design", "Writing", "Directing", "Styling"],
    awards: 6,
  },
  {
    id: "ahmed-saleem-deen",
    name: "Ahmed Saleem Deen",
    initials: "AD",
    role: "Director & Editor",
    bio: "Ahmed brings stories to life through his dual expertise in directing and editing. His collaborative work on 'Love Sweet Sound' showcases his ability to craft emotionally resonant narratives.",
    credits: [
      { title: "Love Sweet Sound", role: "Co-Director/Editor", venue: "Award-Winning Short Film" },
      { title: "Macho Nne", role: "Editor", venue: "Short Film" },
      { title: "Face Mask for Sale", role: "Editor", venue: "Short Film" },
    ],
    skills: ["Directing", "Editing", "Post-Production", "Color Grading"],
    awards: 2,
  },
];

export function DirectorProfiles() {
  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-ivory-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <p className="text-gold uppercase tracking-wider text-xs sm:text-sm font-semibold mb-2">
            Meet The Team
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-ivory-50 mb-3 sm:mb-4">
            The visionaries behind the lens
          </h2>
          <p className="text-ivory-400 text-sm sm:text-base md:text-lg px-4">
            Award-winning filmmakers dedicated to telling African stories that resonate globally
          </p>
        </div>

        {/* Director Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {directors.map((director) => (
            <div
              key={director.id}
              className="group bg-ivory-900/30 rounded-xl sm:rounded-2xl border border-ivory-800/50 hover:border-gold/30 transition-all overflow-hidden"
            >
              <div className="p-4 sm:p-6 md:p-8">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  {/* Profile Avatar with Initials */}
                  <div className="relative shrink-0 mx-auto sm:mx-0">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-xl sm:rounded-2xl overflow-hidden border-2 border-gold/30 bg-gradient-to-br from-gold/20 via-ivory-800 to-terracotta/20 flex items-center justify-center">
                      <span className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gold">{director.initials}</span>
                    </div>
                    {/* Awards Badge */}
                    <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-8 h-8 sm:w-10 sm:h-10 bg-gold rounded-full flex items-center justify-center">
                      <span className="text-ivory-950 font-bold text-xs sm:text-sm">{director.awards}</span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl font-semibold text-ivory-50 group-hover:text-gold transition-colors">
                      {director.name}
                    </h3>
                    <p className="text-gold text-xs sm:text-sm mb-2 sm:mb-3">{director.role}</p>
                    <p className="text-ivory-400 text-xs sm:text-sm leading-relaxed">
                      {director.bio}
                    </p>

                    {/* Skills */}
                    <div className="mt-3 sm:mt-4 flex flex-wrap justify-center sm:justify-start gap-1.5 sm:gap-2">
                      {director.skills.slice(0, 4).map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-2 sm:px-3 py-1 bg-ivory-800/50 text-ivory-300 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Selected Credits */}
                <div className="mt-4 sm:mt-6 md:mt-8 pt-4 sm:pt-6 border-t border-ivory-800/50">
                  <p className="text-ivory-500 text-xs uppercase tracking-wider mb-3 sm:mb-4 text-center sm:text-left">
                    Selected Credits
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {director.credits.slice(0, 4).map((credit) => (
                      <div
                        key={credit.title}
                        className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-ivory-900/50 rounded-lg"
                      >
                        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gold/20 rounded-lg flex items-center justify-center shrink-0">
                          {credit.venue.includes("Venice") ? (
                            <Award className="h-3 w-3 sm:h-4 sm:w-4 text-gold" />
                          ) : credit.venue.includes("TVC") ? (
                            <Camera className="h-3 w-3 sm:h-4 sm:w-4 text-gold" />
                          ) : (
                            <Film className="h-3 w-3 sm:h-4 sm:w-4 text-gold" />
                          )}
                        </div>
                        <div className="min-w-0">
                          <p className="text-ivory-200 text-xs sm:text-sm font-medium truncate">{credit.title}</p>
                          <p className="text-ivory-500 text-xs truncate">{credit.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors animated-underline text-sm sm:text-base"
          >
            Learn more about our story
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
