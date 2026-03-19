import { company } from "@/data/company";

export default function StatsBar() {
  return (
    <div className="bg-[#1A1A2E] py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-[#2D3142]">
          {company.stats.map((stat) => (
            <div key={stat.label} className="text-center px-4">
              <p
                className="text-3xl font-black text-[#F5A623] uppercase leading-none"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                {stat.value}
              </p>
              <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
