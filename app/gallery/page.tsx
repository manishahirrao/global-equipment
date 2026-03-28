import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import InquiryCTABanner from "@/components/sections/InquiryCTABanner";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Gallery | Jay Engineering - Material Handling Equipment",
  description:
    "Browse our extensive gallery of material handling equipment, forklifts, stackers, hydraulic lifts, and spare parts. Quality products for your industrial needs.",
};

// Generate gallery images array
const galleryImages = [
  ...Array.from({ length: 30 }, (_, i) => {
    const imageNum = i + 1;
    // Skip image 10 as it's been removed
    if (imageNum === 10) return null;
    return {
      src: `/images/gallery/parts (${imageNum}).jpeg`,
      alt: `Material handling equipment and spare parts ${imageNum}`,
    };
  }).filter(Boolean),
  ...Array.from({ length: 13 }, (_, i) => ({
    src: `/images/gallery/parts-1 (${i + 1}).jpeg`,
    alt: `Industrial equipment and components ${i + 1}`,
  })),
] as Array<{ src: string; alt: string }>;

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative bg-gradient-to-r from-gray-50 to-gray-100 py-16 md:py-20 border-b border-gray-200 overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/categories/material-handling-equipments.jpeg"
          alt="Material handling equipment gallery"
          fill
          className="object-cover opacity-10"
          sizes="100vw"
        />
        
        {/* Additional dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-gray-100/60" aria-hidden="true" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Product Gallery"
            heading="Our Equipment & Spare Parts"
            subtext="Browse our comprehensive collection of material handling equipment, spare parts, and industrial solutions available in Bhopal, Madhya Pradesh."
            light={false}
            align="left"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Info note */}
        <div className="bg-amber-50 border-l-4 border-[#F5A623] p-6 mb-8">
          <p className="text-sm text-[#1A1A2E]">
            <span className="font-bold">Need a Quote?</span> Click the WhatsApp button on any product image to inquire about pricing, availability, or specifications. 
            We respond quickly to all inquiries!
          </p>
        </div>

        {/* Results count */}
        <p className="text-sm text-[#6B7280] mb-6">
          Showing {galleryImages.length} product images
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <GalleryCard key={index} image={image} index={index} />
          ))}
        </div>
      </div>

      <InquiryCTABanner />
    </>
  );
}

function GalleryCard({ image, index }: { image: { src: string; alt: string }; index: number }) {
  const whatsappLink = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    `Hi! I'm interested in the product shown in image #${index + 1}. Can you provide more details?`
  )}`;

  return (
    <div className="group relative bg-white border border-[#E2E2DC] shadow-[2px_2px_0px_#1A1A2E] hover:shadow-[4px_4px_0px_#1A1A2E] transition-all duration-300">
      {/* Image container */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
        />
        
        {/* WhatsApp overlay button */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2.5 text-sm font-bold uppercase tracking-wider hover:bg-[#1ebe5d] transition-colors shadow-lg"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Inquire
          </a>
        </div>
      </div>
    </div>
  );
}
