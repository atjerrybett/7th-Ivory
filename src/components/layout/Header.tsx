"use client";

import Link from "next/link";
import { useState } from "react";
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ivory-950/80 backdrop-blur-md border-b border-ivory-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-gold to-gold-dark rounded-lg flex items-center justify-center">
              <span className="text-ivory-950 font-serif font-bold text-lg md:text-xl">7</span>
            </div>
            <div className="hidden sm:block">
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
            className="md:hidden w-10 h-10 flex items-center justify-center text-ivory-50 hover:text-gold transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-ivory-950/95 backdrop-blur-lg z-40 overflow-y-auto">
          <nav className="flex flex-col items-center justify-center min-h-full gap-6 sm:gap-8 py-8 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl sm:text-3xl text-ivory-100 hover:text-gold active:text-gold transition-colors font-serif py-2 px-4 min-h-[44px] flex items-center"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-6 sm:mt-8 w-full max-w-xs">
              <Button
                asChild
                size="lg"
                className="bg-gold hover:bg-gold-light text-ivory-950 font-semibold px-6 sm:px-8 py-4 sm:py-6 w-full text-base sm:text-lg"
                onClick={() => setIsOpen(false)}
              >
                <Link href="/contact">Let&apos;s Tell Your Story</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
