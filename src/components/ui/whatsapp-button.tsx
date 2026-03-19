"use client";

import { MessageCircle } from "lucide-react";
import siteData from "@/data/site.json";

export function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${siteData.company.whatsapp}?text=Hi%207th%20Ivory!%20I'd%20like%20to%20discuss%20a%20project.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] rounded-full flex items-center justify-center shadow-lg whatsapp-pulse transition-colors"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white" />
    </a>
  );
}
