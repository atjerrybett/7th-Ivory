"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const videos = [
  {
    id: "seventh-ivory-showreel",
    title: "7th Ivory Productions Showreel",
    platform: "youtube",
    videoId: "BO59ArJzRlU",
    thumbnail: "https://img.youtube.com/vi/BO59ArJzRlU/maxresdefault.jpg",
    category: "Showreel",
    description: "A showcase of our best work in film production, TVCs, and branded content.",
    featured: true,
  },
  {
    id: "seventh-ivory-reel-2",
    title: "7th Ivory Productions",
    platform: "youtube",
    videoId: "W3Z8hz_PqZQ",
    thumbnail: "https://img.youtube.com/vi/W3Z8hz_PqZQ/maxresdefault.jpg",
    category: "Production Reel",
    description: "Behind the scenes and production highlights from 7th Ivory.",
  },
  {
    id: "macho-nne",
    title: "Macho Nne Trailer",
    platform: "vimeo",
    videoId: "848532602",
    thumbnail: "https://i.vimeocdn.com/video/1702226445-2fc4deee26837e5c9c8c34619d76eb0734e191e297234e7a14b5b24920d73078-d_1280x720",
    category: "Short Film",
    description: "A compelling Kenyan short film exploring human connections and cultural identity.",
  },
  {
    id: "face-mask",
    title: "Face Mask for Sale Trailer",
    platform: "vimeo",
    videoId: "469514980",
    thumbnail: "https://i.vimeocdn.com/video/977497342-85be1740c8d1a107a52c72680ec9cce325ab832605daadba1cde069dcb8729ec-d_1280x720",
    category: "Short Film",
    description: "A timely short film reflecting on the human experience during the COVID-19 pandemic.",
  },
];

export function VideoShowreel() {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const featuredVideo = videos.find(v => v.featured);
  const otherVideos = videos.filter(v => !v.featured);

  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-ivory-900/20 relative overflow-hidden">
      <div className="absolute inset-0 african-pattern opacity-10" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <p className="text-gold uppercase tracking-wider text-xs sm:text-sm font-semibold mb-2">
            Watch Our Films
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-ivory-50 mb-3 sm:mb-4">
            Stories brought to life
          </h2>
          <p className="text-ivory-400 text-sm sm:text-base md:text-lg px-4">
            Experience our award-winning short films and documentaries
          </p>
        </div>

        {/* Featured Video */}
        {featuredVideo && (
          <div className="mb-8 sm:mb-10 md:mb-12">
            <div className="group">
              <div className="relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-ivory-900 border-2 border-gold/30 hover:border-gold/50 transition-all">
                {playingVideo === featuredVideo.id ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${featuredVideo.videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={featuredVideo.title}
                  />
                ) : (
                  <>
                    <img
                      src={featuredVideo.thumbnail}
                      alt={featuredVideo.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-ivory-950/30 group-hover:bg-ivory-950/40 transition-all" />
                    <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-10">
                      <Badge className="bg-gold text-ivory-950 font-semibold text-xs sm:text-sm">
                        {featuredVideo.category}
                      </Badge>
                    </div>
                    <button
                      onClick={() => setPlayingVideo(featuredVideo.id)}
                      className="absolute inset-0 flex items-center justify-center cursor-pointer z-10"
                      aria-label={`Play ${featuredVideo.title}`}
                    >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gold rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-2xl">
                        <Play className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-ivory-950 ml-0.5 sm:ml-1" fill="currentColor" />
                      </div>
                    </button>
                  </>
                )}
              </div>
              <div className="mt-3 sm:mt-4 px-1">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-ivory-50 group-hover:text-gold transition-colors">
                  {featuredVideo.title}
                </h3>
                <p className="text-ivory-400 text-sm sm:text-base mt-1">
                  {featuredVideo.description}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Other Videos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {otherVideos.map((video) => (
            <div key={video.id} className="group">
              <div className="relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-ivory-900 border border-ivory-800/50 hover:border-gold/30 transition-all">
                {playingVideo === video.id ? (
                  video.platform === "youtube" ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                      className="absolute inset-0 w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={video.title}
                    />
                  ) : (
                    <iframe
                      src={`https://player.vimeo.com/video/${video.videoId}?autoplay=1&title=0&byline=0&portrait=0&color=C9A962&playsinline=1`}
                      className="absolute inset-0 w-full h-full"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title={video.title}
                    />
                  )
                ) : (
                  <>
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-ivory-950/30 group-hover:bg-ivory-950/40 transition-all" />
                    <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-10">
                      <Badge variant="secondary" className="bg-ivory-950/80 text-ivory-200 text-xs sm:text-sm">
                        {video.category}
                      </Badge>
                    </div>
                    <button
                      onClick={() => setPlayingVideo(video.id)}
                      className="absolute inset-0 flex items-center justify-center cursor-pointer z-10"
                      aria-label={`Play ${video.title}`}
                    >
                      <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gold rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-2xl">
                        <Play className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-ivory-950 ml-0.5" fill="currentColor" />
                      </div>
                    </button>
                  </>
                )}
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-ivory-50 group-hover:text-gold transition-colors">
                  {video.title}
                </h3>
                <p className="text-ivory-400 text-sm mt-1">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
