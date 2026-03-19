import Link from "next/link";
import { Film, Sparkles, Clapperboard, Globe, Palette, Camera } from "lucide-react";
import siteData from "@/data/site.json";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  film: Film,
  sparkles: Sparkles,
  clapperboard: Clapperboard,
  globe: Globe,
  palette: Palette,
  camera: Camera,
};

export function ServicesSection() {
  return (
    <section className="py-20 md:py-32 bg-ivory-900/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 african-pattern opacity-10" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-gold uppercase tracking-wider text-sm font-semibold mb-2">
            What We Do
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ivory-50 mb-6">
            Full-service production capabilities
          </h2>
          <p className="text-ivory-400 text-lg">
            From concept to delivery, we bring your vision to life with world-class 
            production values and authentic African storytelling.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.services.map((service, index) => {
            const Icon = iconMap[service.icon] || Film;
            return (
              <div
                key={service.title}
                className="group p-6 md:p-8 bg-ivory-950/50 backdrop-blur-sm rounded-xl border border-ivory-800/50 hover:border-gold/50 transition-all hover-lift"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-gold/20 to-gold/5 rounded-xl flex items-center justify-center mb-6 group-hover:from-gold/30 group-hover:to-gold/10 transition-all">
                  <Icon className="h-7 w-7 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-ivory-50 mb-3 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-ivory-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-semibold"
          >
            Discuss your project with us
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
