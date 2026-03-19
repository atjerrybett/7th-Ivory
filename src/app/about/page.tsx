import Link from "next/link";
import Image from "next/image";
import { Award, Target, Users, Lightbulb, Heart, Globe, Film } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import siteData from "@/data/site.json";
import teamData from "@/data/team.json";

export const metadata = {
  title: "About Us | 7th Ivory Productions",
  description: "Learn about 7th Ivory Productions, a Kenyan film production company focused on quality storytelling that alters perceptions and creates change.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-ivory-950 pt-20 sm:pt-24 md:pt-32">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 md:mb-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <div>
            <Badge className="mb-4 sm:mb-6 bg-gold/20 text-gold border-gold/30 text-xs sm:text-sm">
              Est. {siteData.company.founded} • Nairobi, Kenya
            </Badge>
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-ivory-50 mb-4 sm:mb-6">
              Stories that alter perceptions
            </h1>
            <p className="text-ivory-300 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
              {siteData.company.description}
            </p>
            <p className="text-ivory-400 text-sm sm:text-base leading-relaxed">
              From our base in Nairobi, we&apos;ve taken African stories to the world&apos;s 
              most prestigious stages—including the Venice Film Festival. We believe 
              in the power of narrative to challenge stereotypes, empower communities, 
              and elevate brands.
            </p>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-ivory-900/50 border border-ivory-800/50">
              <div className="w-full h-full bg-gradient-to-br from-gold/10 via-ivory-900 to-terracotta/10 flex items-center justify-center african-pattern">
                <div className="text-center p-4 sm:p-6 md:p-8">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-3 sm:mb-4 bg-gradient-to-br from-gold to-gold-dark rounded-xl sm:rounded-2xl flex items-center justify-center">
                    <span className="text-ivory-950 font-serif font-bold text-2xl sm:text-3xl md:text-4xl">7</span>
                  </div>
                  <p className="text-ivory-300 font-serif text-lg sm:text-xl md:text-2xl">7th Ivory</p>
                  <p className="text-ivory-500 text-sm sm:text-base">Productions</p>
                </div>
              </div>
            </div>
            
            {/* Venice badge */}
            <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-6 bg-ivory-950 border border-gold/30 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 shadow-xl">
              <div className="flex items-center gap-2 sm:gap-3">
                <Award className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-gold" />
                <div>
                  <p className="text-gold font-semibold text-xs sm:text-sm md:text-base">Venice 2020</p>
                  <p className="text-ivory-500 text-[10px] sm:text-xs md:text-sm">Official Selection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 sm:py-16 md:py-20 bg-ivory-900/20 relative overflow-hidden">
        <div className="absolute inset-0 african-pattern opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
            <p className="text-gold uppercase tracking-wider text-xs sm:text-sm font-semibold mb-1 sm:mb-2">
              Our Values
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ivory-50">
              What drives us
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {teamData.values.map((value, index) => {
              const icons = [Target, Lightbulb, Heart, Globe];
              const Icon = icons[index % icons.length];
              return (
                <div
                  key={value.title}
                  className="p-4 sm:p-5 md:p-6 bg-ivory-950/50 backdrop-blur-sm rounded-lg sm:rounded-xl border border-ivory-800/50"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gold/20 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-gold" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-ivory-50 mb-1 sm:mb-2">
                    {value.title}
                  </h3>
                  <p className="text-ivory-400 text-xs sm:text-sm">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 sm:py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <p className="text-gold uppercase tracking-wider text-xs sm:text-sm font-semibold mb-1 sm:mb-2">
            Our Team
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ivory-50 mb-2 sm:mb-4">
            The creative minds behind the stories
          </h2>
          <p className="text-ivory-400 text-sm sm:text-base px-4">
            A talented team of filmmakers, artists, and storytellers passionate 
            about showcasing African excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
          {teamData.members.map((member) => (
            <div
              key={member.id}
              className="group p-4 sm:p-6 md:p-8 bg-ivory-900/30 rounded-xl sm:rounded-2xl border border-ivory-800/50 hover:border-gold/30 transition-all"
            >
              {/* Profile Avatar */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto mb-4 sm:mb-6">
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-xl sm:rounded-2xl overflow-hidden border-2 border-gold/30 bg-gradient-to-br from-gold/20 via-ivory-800 to-terracotta/20 flex items-center justify-center">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gold">{member.initials}</span>
                </div>
                {/* Awards Badge */}
                {member.awards && (
                  <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-8 h-8 sm:w-10 sm:h-10 bg-gold rounded-full flex items-center justify-center">
                    <span className="text-ivory-950 font-bold text-xs sm:text-sm">{member.awards}</span>
                  </div>
                )}
              </div>
              
              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-semibold text-ivory-50 mb-0.5 sm:mb-1 group-hover:text-gold transition-colors">
                  {member.name}
                </h3>
                <p className="text-gold text-xs sm:text-sm mb-3 sm:mb-4">{member.role}</p>
                <p className="text-ivory-400 text-xs sm:text-sm leading-relaxed">
                  {member.bio}
                </p>
                
                {/* Skills */}
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2 py-1 bg-ivory-900/50 text-ivory-500 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Credits */}
                {member.credits && (
                  <div className="mt-6 pt-6 border-t border-ivory-800/50">
                    <p className="text-ivory-500 text-xs uppercase tracking-wider mb-3">
                      Selected Credits
                    </p>
                    <div className="space-y-2">
                      {member.credits.slice(0, 3).map((credit: { title: string; role: string; venue: string }) => (
                        <div key={credit.title} className="flex items-center justify-center gap-2 text-xs">
                          <Film className="h-3 w-3 text-gold" />
                          <span className="text-ivory-300">{credit.title}</span>
                          <span className="text-ivory-600">•</span>
                          <span className="text-ivory-500">{credit.role}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section className="py-12 sm:py-16 md:py-20 bg-ivory-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
            <p className="text-gold uppercase tracking-wider text-xs sm:text-sm font-semibold mb-1 sm:mb-2">
              Recognition
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ivory-50">
              Awards & Achievements
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {siteData.awards.map((award, index) => (
              <div
                key={index}
                className="p-4 sm:p-5 md:p-6 bg-ivory-950/50 rounded-lg sm:rounded-xl border border-ivory-800/50"
              >
                <Award className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-gold mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg font-semibold text-ivory-50 mb-1 sm:mb-2">
                  {award.title}
                </h3>
                <p className="text-ivory-400 text-xs sm:text-sm mb-1 sm:mb-2">{award.event}</p>
                <div className="flex items-center justify-between">
                  <span className="text-ivory-500 text-xs sm:text-sm">{award.project}</span>
                  <span className="text-gold text-xs sm:text-sm">{award.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ivory-50 mb-4 sm:mb-6">
          Want to work with us?
        </h2>
        <p className="text-ivory-400 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 px-4">
          We&apos;re always excited to collaborate on projects that push boundaries 
          and tell meaningful stories.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-gold hover:bg-gold-light text-ivory-950 font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base w-full sm:w-auto"
        >
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </section>
    </div>
  );
}
