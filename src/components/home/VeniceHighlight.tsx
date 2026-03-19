import Link from "next/link";
import { Award } from "lucide-react";
import siteData from "@/data/site.json";

export function VeniceHighlight() {
  const veniceProject = siteData.awards.find(
    (a) => a.event.includes("Venice")
  );

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-ivory-950 to-ivory-900/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-terracotta/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 venice-badge rounded-full mb-8">
              <Award className="h-4 w-4" />
              <span className="text-sm">Venice Film Festival 2020</span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ivory-50 mb-6">
              Selected for the world&apos;s oldest film festival
            </h2>

            <p className="text-ivory-300 text-lg mb-6 leading-relaxed">
              Our VR documentary <strong className="text-gold">African Space Makers</strong> was 
              selected for the prestigious Venice VR Expanded Competition at the 
              77th Venice International Film Festival — showcasing African innovation 
              on the global stage.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gold rounded-full mt-2" />
                <p className="text-ivory-400">
                  <span className="text-ivory-200">Venice VR Expanded Competition</span> — 
                  77th Venice International Film Festival
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gold rounded-full mt-2" />
                <p className="text-ivory-400">
                  <span className="text-ivory-200">Venice Biennale Financial Gap</span> — 
                  2019
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gold rounded-full mt-2" />
                <p className="text-ivory-400">
                  <span className="text-ivory-200">Berlinale AfricaHub</span> — 
                  2020
                </p>
              </div>
            </div>

            <Link
              href="/work/african-space-makers-vr"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-ivory-950 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Watch the Project
              <span>→</span>
            </Link>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-ivory-900/50 border border-ivory-800/50">
              {/* Placeholder for project image/video */}
              <div className="w-full h-full bg-gradient-to-br from-gold/10 via-ivory-900 to-terracotta/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gold/20 rounded-full flex items-center justify-center">
                    <span className="text-4xl">🎬</span>
                  </div>
                  <p className="text-ivory-400">African Space Makers VR</p>
                  <p className="text-ivory-500 text-sm">360° Immersive Documentary</p>
                </div>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-ivory-950 border border-gold/30 rounded-xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🦁</span>
                </div>
                <div>
                  <p className="text-gold font-semibold">Venice 2020</p>
                  <p className="text-ivory-500 text-sm">Official Selection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
