import { testimonials } from "@/data/company";
import SectionHeading from "@/components/ui/SectionHeading";

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-[#1A1A2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Customer Reviews"
          heading="What Our Clients Say"
          subtext="Trusted by factories and warehouses across Madhya Pradesh."
          light
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <blockquote
              key={t.author}
              className="bg-[#2D3142] p-6 border-l-4 border-[#F5A623] shadow-[4px_4px_0px_#0D0D1A]"
            >
              <span
                className="block text-[#F5A623] text-5xl font-black leading-none mb-3 select-none"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">{t.quote}</p>
              <footer>
                <p className="text-white font-semibold text-sm">{t.author}</p>
                <p className="text-[#F5A623] text-xs mt-0.5">{t.company}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
