import type { Metadata } from "next";
import { company } from "@/data/company";
import InquiryCTABanner from "@/components/sections/InquiryCTABanner";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Jay Engineering (Shree Engineering) — Bhopal's trusted industrial equipment supplier since 2014. GST registered, serving factories and warehouses across Madhya Pradesh.",
  openGraph: {
    title: "About Jay Engineering | Industrial Equipment Supplier Bhopal",
    images: [{ url: "/og/about.jpg", width: 1200, height: 630 }],
  },
};

const usps = [
  `GST Registered Business (${company.gst})`,
  "Competitive factory-direct pricing",
  "Open Monday to Sunday",
  "Delivery & installation across Madhya Pradesh",
  "After-sales service and AMC support",
  "75% response rate on inquiries",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 border-b-4 border-[#F5A623]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Supplying Industrial Equipment Since 2014
            </h2>
            <div className="space-y-4 text-[#6B7280] text-sm leading-relaxed">
              <p>
                Jay Engineering (Shree Engineering) was founded in 2014 in Ashoka Garden, Bhopal — the industrial heart of
                Madhya Pradesh. We started with a simple mission: give factories, warehouses, and
                SMEs across MP access to quality material handling equipment at fair prices.
              </p>
              <p>
                Today we trade, retail, and distribute a wide range of industrial equipment including
                hand pallet trucks, hydraulic scissor lifts, storage racks, drum lifters, goods
                lifts, and office furniture. We serve clients across Madhya Pradesh with delivery and
                installation support.
              </p>
              <p>
                As a GST-registered business with a 75% inquiry response rate, we pride ourselves on
                reliability, transparency, and after-sales support that keeps our clients coming back.
              </p>
            </div>
          </div>

          {/* Business snapshot */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 shadow-lg border-l-4 border-[#F5A623]">
            <h3
              className="text-[#F5A623] font-black uppercase text-xl mb-6"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Business Snapshot
            </h3>
            <dl className="space-y-4">
              {[
                ["Legal Name", "Shree Engineering"],
                ["Nature", "Trader · Retailer · Distributor · Supplier"],
                ["Founded", "2014"],
                ["Location", "Ashoka Garden, Bhopal, MP"],
                ["Annual Turnover", "₹26L – ₹50L"],
                ["Employees", "Less than 10"],
                ["GST No.", company.gst],
                ["Working Days", "Monday – Sunday"],
                ["Payment", "Visa/Master/Rupay, Cheque/DD, Cash"],
              ].map(([label, value]) => (
                <div key={label} className="flex gap-4 border-b border-gray-200 pb-3">
                  <dt className="text-gray-500 text-xs uppercase tracking-wide w-32 shrink-0">{label}</dt>
                  <dd className="text-[#1A1A2E] text-sm font-medium">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Partner profile */}
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-[#F5A623] p-8 shadow-lg">
          <p className="text-[#F5A623] text-xs font-semibold uppercase tracking-[0.2em] mb-2">
            Leadership
          </p>
          <h2
            className="text-[#1A1A2E] font-black uppercase text-2xl mb-4"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Mr. Yogesh Sharma
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed max-w-2xl">
            Partner and Director of Jay Engineering, Mr. Yogesh Sharma has been driving the
            company&apos;s growth since its founding in 2014. With deep expertise in industrial
            equipment and a commitment to customer satisfaction, he leads a team dedicated to
            supplying quality equipment across Madhya Pradesh.
          </p>
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
