"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Play, Award, Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import projectsData from "@/data/projects.json";

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProjects = activeCategory === "All" 
    ? projectsData.projects 
    : projectsData.projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-ivory-950 pt-20 sm:pt-24 md:pt-32">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10 md:mb-12">
        <p className="text-gold uppercase tracking-wider text-xs sm:text-sm font-semibold mb-1 sm:mb-2">
          Our Work
        </p>
        <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-ivory-50 mb-4 sm:mb-6">
          Stories we&apos;ve brought to life
        </h1>
        <p className="text-ivory-400 text-sm sm:text-base md:text-lg max-w-2xl">
          From award-winning short films to premium TVCs for global brands, 
          explore our portfolio of work that defines African storytelling excellence.
        </p>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10 md:mb-12">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <Filter className="h-4 w-4 sm:h-5 sm:w-5 text-ivory-500" />
          {projectsData.categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={`text-xs sm:text-sm px-2.5 sm:px-3 py-1.5 sm:py-2 min-h-[36px] sm:min-h-[40px] ${activeCategory === category 
                ? "bg-gold text-ivory-950 hover:bg-gold-light" 
                : "border-ivory-700 text-ivory-300 hover:border-gold hover:text-gold"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {filteredProjects.map((project, index) => (
            <Link
              key={project.id}
              href={`/work/${project.id}`}
              className={`group project-card rounded-lg sm:rounded-xl overflow-hidden bg-ivory-900/30 border border-ivory-800/50 hover:border-gold/50 transition-all hover-lift ${
                project.highlight ? "sm:col-span-2" : ""
              }`}
            >
              {/* Thumbnail */}
              <div className={`relative ${project.highlight ? "aspect-video sm:aspect-[21/9]" : "aspect-video"}`}>
                {/* Placeholder gradient as fallback */}
                <div className="absolute inset-0 bg-gradient-to-br from-ivory-800 to-ivory-900" />
                
                {/* Project Thumbnail */}
                {project.thumbnail && (
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes={project.highlight ? "(max-width: 640px) 100vw, (max-width: 768px) 100vw, 66vw" : "(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"}
                  />
                )}
                
                {/* Venice Badge */}
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
                {project.videoUrl && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-ivory-950/40">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gold rounded-full flex items-center justify-center">
                      <Play className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-ivory-950 ml-0.5 sm:ml-1" fill="currentColor" />
                    </div>
                  </div>
                )}

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
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-ivory-50 group-hover:text-gold transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <span className="text-ivory-500 text-xs sm:text-sm shrink-0">{project.year}</span>
                </div>
                <p className="text-ivory-400 text-xs sm:text-sm mb-1 sm:mb-2 line-clamp-1">
                  {project.client}
                </p>
                <p className="text-ivory-500 text-xs sm:text-sm line-clamp-2">
                  {project.description}
                </p>
                
                {/* Awards */}
                {project.awards && project.awards.length > 0 && (
                  <div className="mt-2 sm:mt-3 flex items-center gap-1.5 text-gold text-xs">
                    <Award className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    <span>{project.awards.length} Award{project.awards.length > 1 ? 's' : ''}</span>
                  </div>
                )}

                {/* Tags */}
                <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 bg-ivory-900/50 text-ivory-400 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 sm:py-16 md:py-20">
            <p className="text-ivory-400 text-sm sm:text-base md:text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
