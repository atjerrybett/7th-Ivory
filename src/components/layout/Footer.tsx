import Link from "next/link";
import { Instagram, Facebook, Linkedin, Youtube, Mail, MapPin } from "lucide-react";
import siteData from "@/data/site.json";

const socialLinks = [
  { href: siteData.social.instagram, icon: Instagram, label: "Instagram" },
  { href: siteData.social.facebook, icon: Facebook, label: "Facebook" },
  { href: siteData.social.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: siteData.social.vimeo, icon: () => (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z"/>
    </svg>
  ), label: "Vimeo" },
  { href: siteData.social.youtube, icon: Youtube, label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-ivory-950 border-t border-ivory-800/50">
      {/* African pattern decoration */}
      <div className="h-1 bg-gradient-to-r from-gold via-terracotta to-forest" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2">
            <Link href="/" className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gold to-gold-dark rounded-lg flex items-center justify-center">
                <span className="text-ivory-950 font-serif font-bold text-lg sm:text-xl">7</span>
              </div>
              <div>
                <span className="text-ivory-50 font-semibold text-lg sm:text-xl tracking-tight">
                  7th Ivory
                </span>
                <span className="block text-ivory-500 text-[10px] sm:text-xs tracking-widest uppercase">
                  Productions
                </span>
              </div>
            </Link>
            <p className="text-ivory-400 text-sm sm:text-base max-w-md mb-4 sm:mb-6">
              {siteData.company.description}
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-ivory-900 hover:bg-gold rounded-full flex items-center justify-center text-ivory-400 hover:text-ivory-950 transition-all min-h-[44px] min-w-[44px]"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-ivory-50 font-semibold text-sm sm:text-base mb-3 sm:mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2 sm:gap-3">
              <Link href="/work" className="text-ivory-400 hover:text-gold transition-colors text-sm sm:text-base py-1">
                Our Work
              </Link>
              <Link href="/about" className="text-ivory-400 hover:text-gold transition-colors text-sm sm:text-base py-1">
                About Us
              </Link>
              <Link href="/contact" className="text-ivory-400 hover:text-gold transition-colors text-sm sm:text-base py-1">
                Contact
              </Link>
              <a 
                href={siteData.social.behance} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-ivory-400 hover:text-gold transition-colors text-sm sm:text-base py-1"
              >
                Behance Portfolio
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-ivory-50 font-semibold text-sm sm:text-base mb-3 sm:mb-4">Get in Touch</h3>
            <div className="flex flex-col gap-3 sm:gap-4">
              <a 
                href={`mailto:${siteData.company.email}`}
                className="flex items-center gap-2 sm:gap-3 text-ivory-400 hover:text-gold transition-colors text-sm sm:text-base"
              >
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-gold shrink-0" />
                <span className="break-all">{siteData.company.email}</span>
              </a>
              <div className="flex items-start gap-2 sm:gap-3 text-ivory-400 text-sm sm:text-base">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-gold mt-0.5 shrink-0" />
                <span>{siteData.company.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-ivory-800/50 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-ivory-500 text-xs sm:text-sm text-center md:text-left">
            © {new Date().getFullYear()} {siteData.company.legalName}. All rights reserved.
          </p>
          <p className="text-ivory-600 text-xs sm:text-sm flex items-center gap-2">
            <span>Made with</span>
            <span className="text-terracotta">♥</span>
            <span>in Kenya</span>
            <span className="inline-block w-4 h-3 bg-gradient-to-b from-black via-red-600 to-green-600 rounded-sm" />
          </p>
        </div>
      </div>
    </footer>
  );
}
