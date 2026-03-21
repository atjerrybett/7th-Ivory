"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send, MessageCircle, Download, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import siteData from "@/data/site.json";

// Use Formspree endpoint - replace with your actual form ID
const FORMSPREE_ENDPOINT = "https://formspree.io/f/your-form-id";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    deadline: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formState,
          _subject: `New inquiry from ${formState.name} - ${formState.company || "No company"}`,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormState({
          name: "",
          email: "",
          company: "",
          budget: "",
          deadline: "",
          message: "",
        });
      } else {
        // Fallback: open email client
        const mailtoLink = `mailto:${siteData.company.email}?subject=${encodeURIComponent(
          `Project Inquiry from ${formState.name}`
        )}&body=${encodeURIComponent(
          `Name: ${formState.name}\nEmail: ${formState.email}\nCompany: ${formState.company}\nBudget: ${formState.budget}\nDeadline: ${formState.deadline}\n\nMessage:\n${formState.message}`
        )}`;
        window.location.href = mailtoLink;
        setIsSubmitted(true);
      }
    } catch {
      // Fallback: open email client
      const mailtoLink = `mailto:${siteData.company.email}?subject=${encodeURIComponent(
        `Project Inquiry from ${formState.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formState.name}\nEmail: ${formState.email}\nCompany: ${formState.company}\nBudget: ${formState.budget}\nDeadline: ${formState.deadline}\n\nMessage:\n${formState.message}`
      )}`;
      window.location.href = mailtoLink;
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-ivory-950 pt-20 sm:pt-24 md:pt-32">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 md:mb-16">
        <p className="text-gold uppercase tracking-wider text-xs sm:text-sm font-semibold mb-1 sm:mb-2">
          Contact Us
        </p>
        <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-ivory-50 mb-4 sm:mb-6">
          Let&apos;s tell your story
        </h1>
        <p className="text-ivory-400 text-sm sm:text-base md:text-lg max-w-2xl">
          Have a project in mind? We&apos;d love to hear about it. Fill out the form 
          below or reach out directly—we typically respond within 24 hours.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20">
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              {/* Email */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gold/20 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-ivory-50 font-semibold text-sm sm:text-base mb-0.5 sm:mb-1">Email</h3>
                  <a
                    href={`mailto:${siteData.company.email}`}
                    className="text-ivory-400 hover:text-gold transition-colors text-sm sm:text-base break-all"
                  >
                    {siteData.company.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gold/20 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-ivory-50 font-semibold text-sm sm:text-base mb-0.5 sm:mb-1">Phone</h3>
                  <a
                    href={`tel:${siteData.company.phone}`}
                    className="text-ivory-400 hover:text-gold transition-colors text-sm sm:text-base"
                  >
                    {siteData.company.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gold/20 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-ivory-50 font-semibold text-sm sm:text-base mb-0.5 sm:mb-1">Location</h3>
                  <p className="text-ivory-400 text-sm sm:text-base">{siteData.company.location}</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="pt-4 sm:pt-6 border-t border-ivory-800/50">
                <a
                  href={`https://wa.me/${siteData.company.whatsapp}?text=Hi%207th%20Ivory!%20I'd%20like%20to%20discuss%20a%20project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 sm:gap-3 w-full p-3 sm:p-4 bg-[#25D366] hover:bg-[#128C7E] rounded-lg sm:rounded-xl text-white font-semibold transition-colors text-sm sm:text-base min-h-[44px]"
                >
                  <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Pitch Deck Download */}
              <div className="pt-4 sm:pt-6 border-t border-ivory-800/50">
                <a
                  href="/pitch-deck.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 sm:gap-3 w-full p-3 sm:p-4 bg-ivory-900/50 hover:bg-ivory-800/50 rounded-lg sm:rounded-xl text-ivory-200 font-semibold transition-colors border border-ivory-800/50 text-sm sm:text-base min-h-[44px]"
                >
                  <Download className="h-5 w-5 sm:h-6 sm:w-6 text-gold" />
                  View Pitch Deck
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-ivory-900/30 rounded-xl sm:rounded-2xl border border-ivory-800/50 p-4 sm:p-6 md:p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="h-8 w-8 text-gold" />
                  </div>
                  <h3 className="text-2xl font-semibold text-ivory-50 mb-4">
                    Message Sent!
                  </h3>
                  <p className="text-ivory-400 mb-6">
                    Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <Button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormState({
                        name: "",
                        email: "",
                        company: "",
                        budget: "",
                        deadline: "",
                        message: "",
                      });
                    }}
                    variant="outline"
                    className="border-ivory-700 text-ivory-300"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-ivory-200">
                        Your Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="bg-ivory-950/50 border-ivory-700 text-ivory-100 placeholder:text-ivory-600"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-ivory-200">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                        className="bg-ivory-950/50 border-ivory-700 text-ivory-100 placeholder:text-ivory-600"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Company */}
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-ivory-200">
                        Company/Brand
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="bg-ivory-950/50 border-ivory-700 text-ivory-100 placeholder:text-ivory-600"
                      />
                    </div>

                    {/* Budget */}
                    <div className="space-y-2">
                      <Label htmlFor="budget" className="text-ivory-200">
                        Budget Range
                      </Label>
                      <select
                        id="budget"
                        name="budget"
                        value={formState.budget}
                        onChange={handleChange}
                        className="w-full h-10 px-3 rounded-lg bg-ivory-950/50 border border-ivory-700 text-ivory-100 focus:border-gold focus:ring-1 focus:ring-gold"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-5k">Under $5,000</option>
                        <option value="5k-15k">$5,000 - $15,000</option>
                        <option value="15k-50k">$15,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="over-100k">Over $100,000</option>
                      </select>
                    </div>
                  </div>

                  {/* Deadline */}
                  <div className="space-y-2">
                    <Label htmlFor="deadline" className="text-ivory-200">
                      Project Deadline
                    </Label>
                    <Input
                      id="deadline"
                      name="deadline"
                      type="date"
                      value={formState.deadline}
                      onChange={handleChange}
                      className="bg-ivory-950/50 border-ivory-700 text-ivory-100"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-ivory-200">
                      Tell us about your project *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Describe your project, goals, and any specific requirements..."
                      className="bg-ivory-950/50 border-ivory-700 text-ivory-100 placeholder:text-ivory-600 resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gold hover:bg-gold-light text-ivory-950 font-semibold h-12"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-ivory-950/30 border-t-ivory-950 rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-5 w-5" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
