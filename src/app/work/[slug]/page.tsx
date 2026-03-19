import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Award, Calendar, Building2, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import projectsData from "@/data/projects.json";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.projects.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsData.projects.find((p) => p.id === slug);
  
  if (!project) return { title: "Project Not Found" };
  
  return {
    title: `${project.title} | 7th Ivory Productions`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsData.projects.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-ivory-950 pt-24 md:pt-32">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Button
          asChild
          variant="ghost"
          className="text-ivory-400 hover:text-gold"
        >
          <Link href="/work">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Work
          </Link>
        </Button>
      </div>

      {/* Video/Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="aspect-video rounded-2xl overflow-hidden bg-ivory-900/50 border border-ivory-800/50">
          {project.videoUrl && project.videoUrl.includes("vimeo") ? (
            <iframe
              src={`https://player.vimeo.com/video/${project.videoUrl.split('/').pop()}?title=0&byline=0&portrait=0`}
              className="w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          ) : project.videoUrl && project.videoUrl.includes("youtube") ? (
            <iframe
              src={project.videoUrl.replace("watch?v=", "embed/")}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : project.thumbnail ? (
            <div className="w-full h-full relative">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-ivory-950/60 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-ivory-900/80 rounded-full flex items-center justify-center border border-ivory-700">
                    <span className="text-ivory-400 text-4xl">▶</span>
                  </div>
                  <p className="text-ivory-400">Full video coming soon</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-ivory-800 to-ivory-900 flex items-center justify-center">
              <p className="text-ivory-500">Video coming soon</p>
            </div>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="secondary" className="bg-ivory-800 text-ivory-200">
                {project.category}
              </Badge>
              {project.highlight && (
                <Badge className="venice-badge flex items-center gap-1.5">
                  <Award className="h-3.5 w-3.5" />
                  Venice Selection
                </Badge>
              )}
            </div>

            {/* Title */}
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ivory-50 mb-6">
              {project.title}
            </h1>

            {/* Description */}
            <p className="text-ivory-300 text-lg leading-relaxed mb-8">
              {project.description}
            </p>

            {/* Awards */}
            {project.awards && project.awards.length > 0 && (
              <div className="mb-8">
                <h3 className="text-ivory-50 font-semibold mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-gold" />
                  Awards & Recognition
                </h3>
                <ul className="space-y-3">
                  {project.awards.map((award, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-ivory-400"
                    >
                      <span className="w-2 h-2 bg-gold rounded-full mt-2 shrink-0" />
                      {award}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm px-3 py-1.5 bg-ivory-900/50 text-ivory-400 rounded-full border border-ivory-800/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-ivory-900/30 rounded-xl border border-ivory-800/50 p-6 sticky top-28">
              <h3 className="text-ivory-50 font-semibold mb-6">Project Details</h3>
              
              <div className="space-y-5">
                {/* Client */}
                <div className="flex items-start gap-3">
                  <Building2 className="h-5 w-5 text-gold mt-0.5" />
                  <div>
                    <p className="text-ivory-500 text-sm">Client</p>
                    <p className="text-ivory-200">{project.client}</p>
                  </div>
                </div>

                {/* Year */}
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-gold mt-0.5" />
                  <div>
                    <p className="text-ivory-500 text-sm">Year</p>
                    <p className="text-ivory-200">{project.year}</p>
                  </div>
                </div>

                {/* Credits */}
                {project.credits && Object.keys(project.credits).length > 0 && (
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-gold mt-0.5" />
                    <div>
                      <p className="text-ivory-500 text-sm mb-2">Credits</p>
                      <div className="space-y-2">
                        {Object.entries(project.credits).map(([role, name]) => (
                          <div key={role}>
                            <p className="text-ivory-400 text-sm">{role}</p>
                            <p className="text-ivory-200">{name}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* CTA */}
              <div className="mt-8 pt-6 border-t border-ivory-800/50">
                <Button
                  asChild
                  className="w-full bg-gold hover:bg-gold-light text-ivory-950 font-semibold"
                >
                  <Link href="/contact">Discuss a Similar Project</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
