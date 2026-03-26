import type { Metadata } from "next";
import InquiryCTABanner from "@/components/sections/InquiryCTABanner";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Jay Engineering offers hand pallet truck repair, delivery & installation, and AMC support across Madhya Pradesh. Starting at ₹1,000/Project.",
  openGraph: {
    title: "Services | Jay Engineering Bhopal",
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
    title: "Hand Pallet Truck Service & Repair",
    price: "₹1,000/Project",
    coverage: "Madhya Pradesh",
    description:
      "Professional servicing and repair of hand pallet trucks. We diagnose and fix hydraulic issues, wheel replacements, fork repairs, and general maintenance to keep your equipment running at peak performance.",
    features: [
      "Hydraulic system inspection & repair",
      "Wheel and fork replacement",
      "Load capacity testing",
      "Preventive maintenance",
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="32" height="32" aria-hidden="true">
        <path d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: "Delivery & Installation",
    price: "Contact for pricing",
    coverage: "All of Madhya Pradesh",
    description:
      "We deliver and install all equipment we supply — from hand pallet trucks to hydraulic scissor lifts and storage racks. Our team ensures safe, correct installation at your facility.",
    features: [
      "Pan-MP delivery network",
      "On-site installation by trained technicians",
      "Post-installation testing",
      "Operator training on request",
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="32" height="32" aria-hidden="true">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "AMC & After-Sales Support",
    price: "Contact for pricing",
    coverage: "Madhya Pradesh",
    description:
      "Annual Maintenance Contracts (AMC) for all equipment categories. We provide scheduled maintenance visits, priority support, and spare parts supply to minimise downtime at your facility.",
    features: [
      "Scheduled maintenance visits",
      "Priority response for breakdowns",
      "Genuine spare parts supply",
      "Maintenance logs and reports",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 border-b-4 border-[#F5A623]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#F5A623] text-xs font-semibold uppercase tracking-[0.3em] mb-3">
            After-Sales Support
          </p>
          <h1
            className="text-[#1A1A2E] font-black uppercase text-4xl md:text-6xl leading-none"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Our Services
          </h1>
          <p className="text-gray-700 mt-4 max-w-xl text-sm">
            We don&apos;t just sell equipment — we support it. Repair, installation, and AMC across
            Madhya Pradesh.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
