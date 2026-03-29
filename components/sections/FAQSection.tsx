"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";

const faqs = [
  {
    question: "What types of equipment do you repair?",
    answer: "We repair all types of material handling equipment including hand pallet trucks, trolleys, forklifts, stackers, hydraulic scissor lifts, drum lifters, and other hydraulic equipment. We service both manual and powered equipment.",
  },
  {
    question: "Do you provide on-site repair services?",
    answer: "Yes, we provide on-site repair services for minor repairs and maintenance across Bhopal and Madhya Pradesh. For major repairs requiring specialized equipment, we recommend bringing the equipment to our workshop in Ashoka Garden.",
  },
  {
    question: "How long does a typical repair take?",
    answer: "Repair time depends on the issue and parts availability. Simple repairs like wheel replacement or hydraulic oil changes can be done within a day. Complex repairs involving hydraulic system overhauls may take 2-5 days. We always provide an estimated timeline after inspection.",
  },
  {
    question: "Do you supply genuine spare parts?",
    answer: "Yes, we stock and supply genuine spare parts including nylon wheels, hydraulic pumps, seals, bearings, forks, and control mechanisms. We maintain inventory to minimize equipment downtime during repairs.",
  },
  {
    question: "What are your service charges?",
    answer: "Service charges vary based on the type of equipment, repair complexity, and parts required. Trolley repairs start from ₹1,000 and hand pallet truck repairs from ₹1,500. Contact us for a detailed quote based on your specific requirements.",
  },
  {
    question: "Do you offer Annual Maintenance Contracts (AMC)?",
    answer: "Yes, we provide AMC services for all types of material handling equipment. Our AMC includes scheduled preventive maintenance visits, priority response for breakdowns, genuine spare parts supply, and maintenance logs. Contact us for AMC pricing.",
  },
  {
    question: "What are your working hours?",
    answer: "We are open Monday to Sunday, 9:00 AM to 9:00 PM. We're available 7 days a week to minimize your equipment downtime and keep your operations running smoothly.",
  },
  {
    question: "How can I request a repair service?",
    answer: "You can request repair service by calling us at 9981475007 / 9111455315, sending a WhatsApp message, or filling out the inquiry form on our website. Our team will respond promptly to schedule an inspection and provide a quote.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 bg-[#F4F4F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Common Questions"
          heading="Frequently Asked Questions"
          subtext="Everything you need to know about our repair services and spare parts."
        />

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-[#E2E2DC] shadow-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span
                  className="font-bold text-[#1A1A2E] text-base"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  {faq.question}
                </span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`w-5 h-5 text-[#F5A623] shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 pt-0">
                  <p className="text-sm text-[#6B7280] leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-[#6B7280] mb-4">
            Still have questions? We're here to help!
          </p>
          <a
            href="/contact/"
            className="inline-block bg-[#F5A623] text-[#1A1A2E] font-bold uppercase tracking-wider px-8 py-3 text-sm hover:bg-[#e09510] transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
