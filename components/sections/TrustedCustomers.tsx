"use client";

import { useEffect, useRef } from "react";

const customers = [
  "PTDC",
  "GATI Logistics",
  "GOKULDASH Textiles Mill",
  "LX Pentos",
  "Narmada Switch Gear",
  "Manohar Diary",
  "Hawkeye Duraseal",
  "VRL Logistics",
  "Snuffled",
  "TCI Transport",
  "Om Logistics",
  "Trident",
  "Globus Spirit",
  "Safexpress",
  "Asian Paint",
  "Capri Paint",
];

export default function TrustedCustomers() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      // Reset scroll position when we've scrolled through half the content
      // (since we duplicate the content for seamless loop)
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="py-12 bg-gradient-to-r from-gray-50 to-gray-100 border-y border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <p className="text-[#F5A623] text-xs font-semibold uppercase tracking-[0.2em] text-center mb-2">
          Trusted By
        </p>
        <h2
          className="text-[#1A1A2E] font-black uppercase text-2xl md:text-3xl text-center"
          style={{ fontFamily: "var(--font-barlow-condensed)" }}
        >
          Our Valued Customers
        </h2>
        <p className="text-center text-sm text-[#6B7280] mt-2">
          Direct and Vendor Registered
        </p>
      </div>

      {/* Scrolling container */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-hidden"
        style={{ scrollBehavior: "auto" }}
      >
        {/* Duplicate the list twice for seamless infinite scroll */}
        {[...customers, ...customers].map((customer, index) => (
          <div
            key={index}
            className="flex-shrink-0 bg-white border border-[#E2E2DC] px-8 py-4 shadow-[2px_2px_0px_#1A1A2E] min-w-[200px]"
          >
            <p className="text-[#1A1A2E] font-semibold text-sm text-center whitespace-nowrap">
              {customer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
