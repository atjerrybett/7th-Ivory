"use client";

import Link from "next/link";
import { Award, Calendar, ExternalLink, Newspaper, Video, Mic } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const pressItems = [
  {
    id: 1,
    type: "award",
    title: "African Space Makers Selected for Venice VR Expanded",
    publication: "Venice Biennale",
    date: "September 2020",
    excerpt: "7th Ivory Productions' African Space Makers VR selected for the prestigious Venice VR Expanded Competition at the 77th Venice International Film Festival.",
    link: "https://www.labiennale.org/en/cinema/2020/venice-vr-expanded/african-space-makers",
    icon: Award,
  },
  {
    id: 2,
    type: "award",
    title: "Love Sweet Sound Wins Best Fiction Short Film",
    publication: "Motion Pictures International Film Festival",
    date: "2020",
    excerpt: "Award-winning short film exploring disability and women empowerment receives international recognition in Nigeria.",
    link: "#",
    icon: Award,
  },
  {
    id: 3,
    type: "mention",
    title: "Berlinale AfricaHub Selection",
    publication: "Berlinale",
    date: "2020",
    excerpt: "African Space Makers project selected for Berlinale AfricaHub, showcasing innovative African storytelling.",
    link: "#",
    icon: Video,
  },
  {
    id: 4,
    type: "award",
    title: "Venice Biennale Financial Gap Award",
    publication: "Venice Biennale College",
    date: "2019",
    excerpt: "Awarded funding through the Venice Biennale College Cinema program for VR development.",
    link: "#",
    icon: Award,
  },
];

export function PressSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-ivory-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 sm:mb-12 md:mb-16">
          <div>
            <p className="text-gold uppercase tracking-wider text-xs sm:text-sm font-semibold mb-2">
              Press & Recognition
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-ivory-50">
              Making headlines
            </h2>
          </div>
        </div>

        {/* Press Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {pressItems.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-ivory-900/30 rounded-xl border border-ivory-800/50 hover:border-gold/30 p-5 sm:p-6 transition-all hover-lift"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gold/20 rounded-xl flex items-center justify-center shrink-0">
                  <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-gold" />
                </div>

                <div className="flex-1 min-w-0">
                  {/* Badge */}
                  <Badge 
                    variant="secondary" 
                    className="mb-2 bg-ivory-800/50 text-ivory-300 text-xs"
                  >
                    {item.type === "award" ? "Award" : item.type === "interview" ? "Interview" : "Feature"}
                  </Badge>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-semibold text-ivory-50 group-hover:text-gold transition-colors mb-1 line-clamp-2">
                    {item.title}
                  </h3>

                  {/* Publication & Date */}
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-ivory-500 mb-2">
                    <span className="text-gold">{item.publication}</span>
                    <span>•</span>
                    <span>{item.date}</span>
                  </div>

                  {/* Excerpt */}
                  <p className="text-ivory-400 text-xs sm:text-sm line-clamp-2">
                    {item.excerpt}
                  </p>

                  {/* Read more */}
                  {item.link !== "#" && (
                    <div className="flex items-center gap-1 mt-3 text-gold text-xs sm:text-sm group-hover:underline">
                      Read more
                      <ExternalLink className="h-3 w-3" />
                    </div>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
