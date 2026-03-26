import { testimonials } from "@/data/company";
import SectionHeading from "@/components/ui/SectionHeading";

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Customer Reviews"
          heading="What Our Clients Say"
          subtext="Trusted by factories and warehouses across Madhya Pradesh."
          light={false}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <blockquote
              key={t.author}
              className="bg-gray-50 p-6 border-l-4 border-[#F5A623] shadow-lg hover:shadow-xl transition-shadow"
            >
              <span
                className="block text-[#F5A623] text-5xl font-black leading-none mb-3 select-none"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">{t.quote}</p>
              <footer>
                <p className="text-[#1A1A2E] font-semibold text-sm">{t.author}</p>
                <p className="text-[#F5A623] text-xs mt-0.5">{t.company}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
