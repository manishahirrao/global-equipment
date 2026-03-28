import type { Metadata } from "next";
import Image from "next/image";
import { company } from "@/data/company";
import InquiryCTABanner from "@/components/sections/InquiryCTABanner";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Jay Engineering (Shree Engineering) — Bhopal's trusted material handling equipment repair & service center since 2014. GST registered, serving factories and warehouses across Madhya Pradesh.",
  openGraph: {
    title: "About Jay Engineering | Equipment Repair Service Bhopal",
    images: [{ url: "/og/about.jpg", width: 1200, height: 630 }],
  },
};

const usps = [
  `GST Registered Business (${company.gst})`,
  "Expert repair technicians",
  "Open Monday to Sunday, 9 AM to 9 PM",
  "Service coverage across Bhopal & Madhya Pradesh",
  "Genuine spare parts in stock",
  "AMC & preventive maintenance support",
  "Fast turnaround on repairs",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20 border-b-4 border-[#F5A623] overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/categories/forklift.jpeg"
          alt="Industrial workshop background"
          fill
          className="object-cover opacity-15"
          sizes="100vw"
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#F5A623] text-xs font-semibold uppercase tracking-[0.3em] mb-3">
            Est. 2014
          </p>
          <h1
            className="text-[#1A1A2E] font-black uppercase text-4xl md:text-6xl leading-none"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            About Jay
            <br />
            <span className="text-[#F5A623]">Engineering</span>
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Company story */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-[#F5A623] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Our Story
            </p>
            <h2
              className="text-[#1A1A2E] font-black uppercase text-3xl md:text-4xl mb-6"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Repairing Material Handling Equipment Since 2014
            </h2>
            <div className="space-y-4 text-[#6B7280] text-sm leading-relaxed">
              <p>
                Jay Engineering (Shree Engineering) was founded in 2014 in Ashoka Garden, Bhopal — the industrial heart of
                Madhya Pradesh. We started with a simple mission: provide factories, warehouses, and
                SMEs across MP with expert repair and maintenance services for their material handling equipment at fair prices.
              </p>
              <p>
                Today we specialize in repairing and servicing all types of material handling equipment including
                trolleys, hand pallet trucks, hydraulic scissor lifts, drum lifters, stackers, and forklifts. We also supply genuine spare parts to ensure quality repairs and minimize your equipment downtime.
              </p>
              <p>
                As a GST-registered repair service center with a state-of-the-art workshop, we pride ourselves on
                reliability, expert workmanship, and after-sales support that keeps our clients coming back.
              </p>
            </div>
          </div>

          {/* Workshop image */}
          <div className="relative h-80 lg:h-full min-h-[320px] shadow-lg border-4 border-[#F5A623]">
            <Image
              src="/images/about.webp"
              alt="Jay Engineering workshop with material handling equipment"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </section>

        {/* Our Expertise */}
        <section className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 md:p-12 shadow-lg border-l-4 border-[#F5A623]">
          <p className="text-[#F5A623] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            Our Expertise
          </p>
          <h2
            className="text-[#1A1A2E] font-black uppercase text-3xl mb-6"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            What We Repair & Service
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="text-[#1A1A2E] font-bold mb-3">Trolley Repair Services</h3>
              <ul className="space-y-2 text-[#6B7280]">
                <li className="flex items-start gap-2">
                  <span className="text-[#F5A623] mt-1">•</span>
                  <span>Drum lifter trolleys - wheel replacement, structural repairs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F5A623] mt-1">•</span>
                  <span>Platform trolleys - bearing service, load capacity restoration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F5A623] mt-1">•</span>
                  <span>Material handling trolleys - welding and fabrication work</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#1A1A2E] font-bold mb-3">Hand Pallet Truck Repair</h3>
              <ul className="space-y-2 text-[#6B7280]">
                <li className="flex items-start gap-2">
                  <span className="text-[#F5A623] mt-1">•</span>
                  <span>Hydraulic pump repair and replacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F5A623] mt-1">•</span>
                  <span>Nylon wheel and bearing replacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F5A623] mt-1">•</span>
                  <span>Fork straightening and handle mechanism service</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#1A1A2E] font-bold mb-3">Hydraulic Equipment Repair</h3>
              <ul className="space-y-2 text-[#6B7280]">
                <li className="flex items-start gap-2">
                  <span className="text-[#F5A623] mt-1">•</span>
                  <span>Scissor lifts - hydraulic cylinder repair and seal replacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F5A623] mt-1">•</span>
                  <span>Drum lifters - hydraulic system service and oil changes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F5A623] mt-1">•</span>
                  <span>Stackers - electrical control repairs and maintenance</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#1A1A2E] font-bold mb-3">Spare Parts Supply</h3>
              <ul className="space-y-2 text-[#6B7280]">
                <li className="flex items-start gap-2">
                  <span className="text-[#F5A623] mt-1">•</span>
                  <span>Genuine nylon wheels, bearings, and seals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F5A623] mt-1">•</span>
                  <span>Hydraulic pumps, cylinders, and hoses</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F5A623] mt-1">•</span>
                  <span>Forks, handles, and control mechanisms</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        

        {/* Our Workshop & Facilities */}
        <section>
          <p className="text-[#F5A623] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            Our Facilities
          </p>
          <h2
            className="text-[#1A1A2E] font-black uppercase text-3xl mb-8"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            State-of-the-Art Workshop
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4 text-[#6B7280] text-sm leading-relaxed">
              <p>
                Our workshop in Ashoka Garden, Bhopal is equipped with modern tools and equipment to handle all types of material handling equipment repairs. From basic maintenance to complex hydraulic system overhauls, we have the capability to restore your equipment to optimal working condition.
              </p>
              <p>
                We maintain a comprehensive inventory of genuine spare parts including nylon wheels, hydraulic pumps, seals, bearings, and control mechanisms. This ensures we can complete most repairs quickly without waiting for parts to arrive.
              </p>
            </div>
            <div className="bg-white border border-[#E2E2DC] p-6 shadow-[4px_4px_0px_#1A1A2E]">
              <h3 className="text-[#1A1A2E] font-bold mb-4 text-sm uppercase tracking-wide">Workshop Capabilities</h3>
              <ul className="space-y-3 text-sm text-[#6B7280]">
                <li className="flex items-start gap-3">
                  <span className="text-[#F5A623] mt-1 shrink-0">✓</span>
                  <span>Hydraulic system testing and repair</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#F5A623] mt-1 shrink-0">✓</span>
                  <span>Welding and fabrication services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#F5A623] mt-1 shrink-0">✓</span>
                  <span>Load capacity testing and certification</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#F5A623] mt-1 shrink-0">✓</span>
                  <span>Electrical troubleshooting and repairs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#F5A623] mt-1 shrink-0">✓</span>
                  <span>Preventive maintenance inspections</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#F5A623] mt-1 shrink-0">✓</span>
                  <span>On-site repair services available</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 md:p-12 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-[#F5A623] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                Service Coverage
              </p>
              <h2
                className="text-[#1A1A2E] font-black uppercase text-3xl mb-4"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Serving Bhopal & Madhya Pradesh
              </h2>
              <p className="text-[#6B7280] text-sm leading-relaxed mb-4">
                While our workshop is located in Ashoka Garden, Bhopal, we provide repair and maintenance services across Madhya Pradesh. Our service coverage includes Bhopal, Indore, Mandideep, Jabalpur, and surrounding industrial areas.
              </p>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                For major repairs, equipment can be brought to our workshop. For on-site maintenance and minor repairs, our technicians can visit your facility with necessary tools and spare parts.
              </p>
            </div>
            <div className="bg-white border-l-4 border-[#F5A623] p-6 shadow-lg">
              <h3 className="text-[#1A1A2E] font-bold mb-4 text-sm uppercase tracking-wide">Contact Information</h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-[#6B7280] mb-1">Address</dt>
                  <dd className="text-[#1A1A2E]">{company.address}</dd>
                </div>
                <div>
                  <dt className="text-[#6B7280] mb-1">Phone</dt>
                  <dd className="text-[#1A1A2E]">
                    <a href={`tel:${company.phone}`} className="hover:text-[#F5A623] transition-colors">
                      {company.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[#6B7280] mb-1">Working Hours</dt>
                  <dd className="text-[#1A1A2E]">{company.hours}</dd>
                </div>
                <div>
                  <dt className="text-[#6B7280] mb-1">GST Number</dt>
                  <dd className="text-[#1A1A2E] font-mono text-xs">{company.gst}</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* Values / USPs */}
        <section>
          <p className="text-[#F5A623] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            Our Values
          </p>
          <h2
            className="text-[#1A1A2E] font-black uppercase text-3xl mb-8"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Why Clients Trust Us
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {usps.map((usp) => (
              <li
                key={usp}
                className="flex items-start gap-3 bg-white border border-[#E2E2DC] p-4 shadow-[2px_2px_0px_#1A1A2E]"
              >
                <span className="text-[#F5A623] mt-0.5 shrink-0" aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-sm text-[#1C1C1C]">{usp}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Map */}
        <section>
          <p className="text-[#F5A623] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            Find Us
          </p>
          <h2
            className="text-[#1A1A2E] font-black uppercase text-3xl mb-6"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Our Location
          </h2>
          <p className="text-[#6B7280] text-sm mb-6">{company.address}</p>
          <div className="w-full h-80 border border-[#E2E2DC] shadow-[4px_4px_0px_#1A1A2E] overflow-hidden">
            <iframe
              title="Jay Engineering location on Google Maps"
              src={`https://maps.google.com/maps?q=${company.geo.lat},${company.geo.lng}&z=15&output=embed`}
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
            />
          </div>
        </section>
      </div>

      <InquiryCTABanner />
    </>
  );
}
