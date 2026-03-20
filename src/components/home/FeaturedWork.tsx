"use client";

import Link from "next/link";
import Image from "next/image";
import { Play, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import projectsData from "@/data/projects.json";

export function FeaturedWork() {
  const featuredProjects = projectsData.projects.filter((p) => p.featured);

  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-ivory-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12">
          <div>
            <p className="text-gold uppercase tracking-wider text-xs sm:text-sm font-semibold mb-1 sm:mb-2">
              Featured Work
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-ivory-50">
              Stories that move people
            </h2>
          </div>
          <Link
            href="/work"
            className="text-ivory-300 hover:text-gold transition-colors animated-underline inline-flex items-center gap-2 text-sm sm:text-base"
          >
            View all projects
            <span>→</span>
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {featuredProjects.map((project, index) => (
            <Link
              key={project.id}
              href={`/work/${project.id}`}
              className={`group project-card rounded-lg sm:rounded-xl overflow-hidden bg-ivory-900/30 border border-ivory-800/50 hover:border-gold/50 transition-all hover-lift ${
                index === 0 ? "sm:col-span-2 lg:row-span-2" : ""
              }`}
            >
              {/* Thumbnail */}
              <div className={`relative ${index === 0 ? "aspect-video sm:aspect-[16/10]" : "aspect-video"}`}>
                {/* Stylized placeholder when no thumbnail */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-ivory-900 to-terracotta/20" />
                <div className="absolute inset-0 african-pattern opacity-20" />
                
                {/* Project Thumbnail */}
                {project.thumbnail ? (
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes={index === 0 ? "(max-width: 640px) 100vw, (max-width: 768px) 100vw, 66vw" : "(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className={`mx-auto mb-2 bg-gold/30 rounded-xl flex items-center justify-center ${index === 0 ? "w-16 h-16 sm:w-20 sm:h-20" : "w-12 h-12 sm:w-14 sm:h-14"}`}>
                        <span className={`text-gold font-serif font-bold ${index === 0 ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"}`}>7</span>
                      </div>
                      <p className={`text-ivory-400 font-medium ${index === 0 ? "text-sm sm:text-base" : "text-xs sm:text-sm"}`}>{project.category}</p>
                    </div>
                  </div>
                )}
                
                {/* Venice Badge for highlighted projects */}
                {project.highlight && (
                  <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-10">
                    <Badge className="venice-badge flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 text-xs">
                      <Award className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                      <span className="hidden sm:inline">Venice Film Festival</span>
                      <span className="sm:hidden">Venice</span>
                    </Badge>
                  </div>
                )}

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-ivory-950/40">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gold rounded-full flex items-center justify-center">
                    <Play className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-ivory-950 ml-0.5 sm:ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 z-10">
                  <Badge variant="secondary" className="bg-ivory-950/80 text-ivory-200 text-xs px-2 py-0.5 sm:px-2.5 sm:py-1">
                    {project.category}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-3 sm:p-4 md:p-5">
                <div className="flex items-start justify-between gap-2 sm:gap-4 mb-1 sm:mb-2">
                  <h3 className={`font-semibold text-ivory-50 group-hover:text-gold transition-colors line-clamp-1 ${
                    index === 0 ? "text-base sm:text-lg md:text-xl lg:text-2xl" : "text-sm sm:text-base md:text-lg"
                  }`}>
                    {project.title}
                  </h3>
                  <span className="text-ivory-500 text-xs sm:text-sm shrink-0">{project.year}</span>
                </div>
                <p className="text-ivory-400 text-xs sm:text-sm line-clamp-1 sm:line-clamp-2">
                  {project.client}
                </p>
                
                {/* Awards indicator */}
                {project.awards && project.awards.length > 0 && (
                  <div className="mt-2 sm:mt-3 flex items-center gap-1.5 text-gold text-xs">
                    <Award className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    <span>{project.awards.length} Award{project.awards.length > 1 ? 's' : ''}</span>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
