"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call - replace with actual newsletter service
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setEmail("");
  };

  return (
    <div className="bg-ivory-900/30 rounded-xl border border-ivory-800/50 p-6 sm:p-8">
      <h3 className="text-ivory-50 font-semibold text-lg sm:text-xl mb-2">
        Stay Updated
      </h3>
      <p className="text-ivory-400 text-sm mb-4">
        Get the latest updates on our projects, behind-the-scenes content, and industry insights.
      </p>

      {isSubmitted ? (
        <div className="flex items-center gap-2 text-gold">
          <CheckCircle className="h-5 w-5" />
          <span className="text-sm">Thanks for subscribing!</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 bg-ivory-950/50 border-ivory-700 text-ivory-100 placeholder:text-ivory-600 text-sm"
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-gold hover:bg-gold-light text-ivory-950 font-semibold px-4"
          >
            {isSubmitting ? (
              <span className="w-4 h-4 border-2 border-ivory-950/30 border-t-ivory-950 rounded-full animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </form>
      )}
    </div>
  );
}
