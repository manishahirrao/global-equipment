import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="relative min-h-[60vh] flex items-center justify-center bg-[#F4F4F0] overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/categories/stacker.jpeg"
        alt="Background"
        fill
        className="object-cover opacity-10"
        sizes="100vw"
      />
      
      <div className="relative z-10 text-center px-4">
        <p
          className="text-[#F5A623] font-black text-8xl leading-none mb-4"
          style={{ fontFamily: "var(--font-barlow-condensed)" }}
          aria-hidden="true"
        >
          404
        </p>
        <h1
          className="text-[#1A1A2E] font-black uppercase text-3xl md:text-4xl mb-4"
          style={{ fontFamily: "var(--font-barlow-condensed)" }}
        >
          Page Not Found
        </h1>
        <p className="text-[#6B7280] text-sm mb-8 max-w-sm mx-auto">
          The page you&apos;re looking for doesn&apos;t exist. It may have been moved or the URL is
          incorrect.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="bg-[#1A1A2E] text-white font-bold uppercase tracking-wider px-8 py-3 text-sm hover:bg-[#2D3142] transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/products/"
            className="bg-[#F5A623] text-[#1A1A2E] font-bold uppercase tracking-wider px-8 py-3 text-sm hover:bg-[#e09510] transition-colors"
          >
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
}
