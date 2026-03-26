import SectionHeading from "@/components/ui/SectionHeading";

const usps = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28" aria-hidden="true">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "GST Registered",
    desc: "Fully compliant with GST regulations. GST No. 23AARFG4367K1ZY — valid invoices for all purchases.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28" aria-hidden="true">
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Competitive Pricing",
    desc: "Direct supplier pricing with no middlemen. Best rates on hand pallet trucks, scissor lifts, and storage racks.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28" aria-hidden="true">
        <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "7-Day Availability",
    desc: "Open Monday through Sunday. We're available when your operations need us — no waiting until Monday.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28" aria-hidden="true">
        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "After-Sales Service",
    desc: "Repair, AMC, and installation support across Madhya Pradesh. We stand behind every product we sell.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          heading="The Jay Engineering Advantage"
          subtext="We've been supplying industrial equipment across MP since 2014. Here's what sets us apart."
          light={false}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {usps.map((usp) => (
            <div
              key={usp.title}
              className="bg-white p-6 border-l-4 border-[#F5A623] shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-[#F5A623] mb-4">{usp.icon}</div>
              <h3
                className="text-[#1A1A2E] font-black uppercase text-lg mb-2"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                {usp.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{usp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
