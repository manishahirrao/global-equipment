"use client";

import { useState, useEffect } from "react";
import { testimonials } from "@/data/company";
import SectionHeading from "@/components/ui/SectionHeading";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Customer Reviews"
          heading="What Our Clients Say"
          subtext="Trusted by factories and warehouses across Madhya Pradesh."
          light={false}
        />
        
        {/* Single row auto-rotating carousel for all screen sizes */}
        <div className="relative overflow-hidden max-w-4xl mx-auto">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((t) => (
              <div key={t.author} className="w-full flex-shrink-0 px-2">
                <blockquote className="bg-gray-50 p-8 md:p-10 border-l-4 border-[#F5A623] shadow-lg">
                  <span
                    className="block text-[#F5A623] text-6xl md:text-7xl font-black leading-none mb-4 select-none"
                    style={{ fontFamily: "var(--font-barlow-condensed)" }}
                    aria-hidden="true"
                  >
                    &ldquo;
                  </span>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">{t.quote}</p>
                  <footer>
                    <p className="text-[#1A1A2E] font-semibold text-base md:text-lg">{t.author}</p>
                    <p className="text-[#F5A623] text-sm md:text-base mt-1">{t.company}</p>
                    {t.date && (
                      <p className="text-gray-500 text-xs md:text-sm mt-2">{t.date}</p>
                    )}
                    {t.source && (
                      <p className="text-gray-400 text-xs md:text-sm mt-1 italic">Source: {t.source}</p>
                    )}
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5 text-[#1A1A2E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5 text-[#1A1A2E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-[#F5A623] w-8"
                    : "bg-gray-300 w-2"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
