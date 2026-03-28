import type { Metadata } from "next";
import Image from "next/image";
import InquiryCTABanner from "@/components/sections/InquiryCTABanner";

export const metadata: Metadata = {
  title: "Repair & Maintenance Services | Jay Engineering Bhopal",
  description:
    "Jay Engineering offers trolley repair, hand pallet truck service, hydraulic equipment repair, genuine spare parts supply, and AMC support across Bhopal & Madhya Pradesh. Starting at ₹1,000/Project.",
  openGraph: {
    title: "Repair & Maintenance Services | Jay Engineering Bhopal",
    images: [{ url: "/og/services.jpg", width: 1200, height: 630 }],
  },
};

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="32" height="32" aria-hidden="true">
        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Trolley Repair & Service",
    price: "₹1,000/Project",
    coverage: "Bhopal & Madhya Pradesh",
    description:
      "Expert repair and servicing of all types of trolleys including drum lifter trolleys, platform trolleys, and material handling trolleys. We diagnose and fix wheel issues, structural repairs, and general maintenance to keep your trolleys running smoothly.",
    features: [
      "Wheel replacement & bearing service",
      "Structural welding & repairs",
      "Load capacity restoration",
      "Preventive maintenance checks",
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="32" height="32" aria-hidden="true">
        <path d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: "Hand Pallet Truck Repair",
    price: "₹1,500/Project",
    coverage: "Bhopal & Madhya Pradesh",
    description:
      "Professional repair and maintenance of hand pallet trucks and high-lift pallet trucks. We fix hydraulic pump issues, wheel replacements, fork repairs, and handle replacements to restore your equipment to optimal working condition.",
    features: [
      "Hydraulic pump repair & replacement",
      "Nylon wheel & bearing replacement",
      "Fork straightening & repairs",
      "Handle and control mechanism service",
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="32" height="32" aria-hidden="true">
        <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Hydraulic Equipment Repair",
    price: "Contact for pricing",
    coverage: "Bhopal & Madhya Pradesh",
    description:
      "Complete repair services for hydraulic scissor lifts, drum lifters, stackers, and other hydraulic material handling equipment. We handle hydraulic system repairs, cylinder rebuilds, seal replacements, and electrical troubleshooting.",
    features: [
      "Hydraulic cylinder repair & rebuild",
      "Seal kit replacement",
      "Hydraulic oil system service",
      "Electrical control repairs",
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="32" height="32" aria-hidden="true">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Spare Parts Supply",
    price: "Contact for pricing",
    coverage: "Bhopal & Madhya Pradesh",
    description:
      "We stock and supply genuine spare parts for all types of material handling equipment — nylon wheels, hydraulic pumps, seals, forks, bearings, and more. Fast delivery to minimize your equipment downtime during repairs.",
    features: [
      "Nylon drive & load wheels",
      "Hydraulic pumps & cylinders",
      "Seals, bearings & fasteners",
      "Fork extensions & accessories",
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="32" height="32" aria-hidden="true">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "AMC & Preventive Maintenance",
    price: "Contact for pricing",
    coverage: "Bhopal & Madhya Pradesh",
    description:
      "Annual Maintenance Contracts (AMC) for all material handling equipment. We provide scheduled maintenance visits, priority repair support, and spare parts supply to minimize downtime at your facility.",
    features: [
      "Scheduled preventive maintenance",
      "Priority response for breakdowns",
      "Genuine spare parts included",
      "Maintenance logs and reports",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20 border-b-4 border-[#F5A623] overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/categories/hand-pallet-truck.webp"
          alt="Hand pallet truck repair service"
          fill
          className="object-cover opacity-15"
          sizes="100vw"
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#F5A623] text-xs font-semibold uppercase tracking-[0.3em] mb-3">
            Repair & Maintenance Services
          </p>
          <h1
            className="text-[#1A1A2E] font-black uppercase text-4xl md:text-6xl leading-none"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Our Services
          </h1>
          <p className="text-gray-700 mt-4 max-w-xl text-sm">
            Expert repair & maintenance for trolleys, hand pallet trucks, hydraulic equipment & material handling machines across Bhopal & Madhya Pradesh.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((svc) => (
            <article
              key={svc.title}
              className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow flex flex-col"
            >
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 text-[#F5A623] border-b-2 border-[#F5A623]">{svc.icon}</div>
              <div className="p-6 flex flex-col flex-1">
                <h2
                  className="text-[#1A1A2E] font-black uppercase text-xl mb-1"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  {svc.title}
                </h2>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[#F5A623] font-bold text-sm">{svc.price}</span>
                  <span className="text-xs text-[#6B7280]">· {svc.coverage}</span>
                </div>
                <p className="text-[#6B7280] text-sm leading-relaxed mb-6">{svc.description}</p>
                <ul className="space-y-2 mt-auto">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-[#1C1C1C]">
                      <span className="text-[#F5A623] mt-0.5 shrink-0" aria-hidden="true">
                        <svg viewBox="0 0 16 16" fill="currentColor" width="14" height="14">
                          <path fillRule="evenodd" d="M13.707 4.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L6 10.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>

      <InquiryCTABanner />
    </>
  );
}
