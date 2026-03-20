"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      {/* Header Bar - Always visible */}
      <header className={`fixed top-0 left-0 right-0 z-[100] transition-colors duration-300 ${
        isOpen ? "bg-ivory-950" : "bg-ivory-950/95 backdrop-blur-md border-b border-ivory-800/50"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group" onClick={() => setIsOpen(false)}>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-gold to-gold-dark rounded-lg flex items-center justify-center">
                <span className="text-ivory-950 font-serif font-bold text-lg md:text-xl">7</span>
              </div>
              <div className={`hidden sm:block ${isOpen ? "sm:hidden" : ""}`}>
                <span className="text-ivory-50 font-semibold text-lg tracking-tight">
                  7th Ivory
                </span>
                <span className="block text-ivory-500 text-xs tracking-widest uppercase">
                  Productions
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-ivory-300 hover:text-gold transition-colors animated-underline"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button
                asChild
                className="bg-gold hover:bg-gold-light text-ivory-950 font-semibold"
              >
                <Link href="/contact">Let&apos;s Talk</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-11 h-11 flex items-center justify-center text-ivory-50 hover:text-gold transition-colors -mr-2"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-[99] bg-ivory-950 transition-all duration-300 ease-out ${
          isOpen 
            ? "opacity-100 visible" 
            : "opacity-0 invisible pointer-events-none"
        }`}
        style={{ paddingTop: "64px" }} // Height of header (h-16 = 64px)
      >
        {/* Menu Content */}
        <nav className="h-full flex flex-col items-center justify-center px-6">
          <div className="flex flex-col items-center gap-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-4xl text-ivory-100 hover:text-gold active:text-gold transition-all font-serif py-4 px-6 transform ${
                  isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
                style={{ 
                  transitionDelay: isOpen ? `${100 + index * 75}ms` : "0ms",
                  transitionDuration: "400ms",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          <div 
            className={`mt-12 w-full max-w-[300px] transform transition-all duration-500 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: isOpen ? "400ms" : "0ms" }}
          >
            <Button
              asChild
              size="lg"
              className="bg-gold hover:bg-gold-light text-ivory-950 font-semibold w-full py-6 text-lg"
            >
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Let&apos;s Tell Your Story
              </Link>
            </Button>
          </div>

          {/* Social/Contact hint */}
          <div 
            className={`absolute bottom-10 left-0 right-0 text-center transition-all duration-500 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: isOpen ? "500ms" : "0ms" }}
          >
            <p className="text-ivory-600 text-sm">Nairobi, Kenya</p>
            <div className="flex justify-center gap-1 mt-3">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-1.5 h-1.5 rounded-full bg-gold"
                  style={{ opacity: 1 - i * 0.15 }}
                />
              ))}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
}
