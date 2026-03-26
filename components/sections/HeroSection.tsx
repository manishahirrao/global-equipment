import Image from "next/image";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Background image */}
      <Image
        src="/hero-bg.jpg"
        alt="Industrial warehouse with material handling equipment"
        fill
        priority
        className="object-cover opacity-20"
        sizes="100vw"
      />

      {/* Light overlay with subtle pattern */}
      <div className="absolute inset-0 bg-white/60" aria-hidden="true" />

      {/* Grid-line SVG overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(26,26,46,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(26,26,46,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[#F5A623] text-xs font-semibold uppercase tracking-[0.3em] mb-4">
          Ashoka Garden · Bhopal · Madhya Pradesh
        </p>

        <h1
          className="text-[#1A1A2E] font-black uppercase leading-none mb-6"
          style={{
            fontFamily: "var(--font-barlow-condensed)",
            fontSize: "clamp(2.5rem, 8vw, 5rem)",
          }}
        >
          TRUSTED INDUSTRIAL
          <br />
          <span className="text-[#F5A623]">EQUIPMENT SUPPLIER</span>
        </h1>

        <p className="text-gray-700 text-base md:text-lg mb-10 max-w-2xl mx-auto">
          Hand Pallet Trucks · Scissor Lifts · Storage Racks · Material Handling
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" href="/products/">
            Browse Products
          </Button>
          <Button variant="ghost" href="/contact/">
            Get Quote
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600" aria-hidden="true">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gray-600 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
