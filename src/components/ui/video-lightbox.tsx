"use client";

import { useState } from "react";
import { X, Play, Pause, Maximize2 } from "lucide-react";
import { createPortal } from "react-dom";

interface VideoLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
}

export function VideoLightbox({ isOpen, onClose, videoUrl, title }: VideoLightboxProps) {
  if (!isOpen) return null;

  // Parse video URL to get embed URL
  const getEmbedUrl = (url: string) => {
    // YouTube
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      const videoId = url.includes("youtu.be") 
        ? url.split("/").pop()?.split("?")[0]
        : url.split("v=")[1]?.split("&")[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    }
    // Vimeo
    if (url.includes("vimeo.com")) {
      const videoId = url.split("/").pop()?.split("?")[0];
      return `https://player.vimeo.com/video/${videoId}?autoplay=1`;
    }
    // Already an embed URL
    if (url.includes("player.vimeo.com") || url.includes("youtube.com/embed")) {
      return url.includes("?") ? `${url}&autoplay=1` : `${url}?autoplay=1`;
    }
    return url;
  };

  const embedUrl = getEmbedUrl(videoUrl);

  const content = (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
      
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-ivory-900/80 hover:bg-ivory-800 rounded-full flex items-center justify-center text-ivory-200 hover:text-white transition-colors"
        aria-label="Close video"
      >
        <X className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      {/* Video container */}
      <div 
        className="relative z-10 w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src={embedUrl}
          title={title}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Title */}
      <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-10">
        <h3 className="text-ivory-100 text-lg sm:text-xl font-semibold text-center truncate">
          {title}
        </h3>
      </div>
    </div>
  );

  // Use portal to render at document body level
  if (typeof window !== "undefined") {
    return createPortal(content, document.body);
  }

  return content;
}
