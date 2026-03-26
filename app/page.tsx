import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/ui/StatsBar";
import CategoriesGrid from "@/components/sections/CategoriesGrid";
import WhyUs from "@/components/sections/WhyUs";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import InquiryCTABanner from "@/components/sections/InquiryCTABanner";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Industrial Equipment Supplier Bhopal | Jay Engineering",
  description:
    "Jay Engineering (Shree Engineering) — Trusted supplier of hand pallet trucks, hydraulic scissor lifts, storage racks & material handling equipment in Bhopal, Madhya Pradesh. Est. 2014.",
  openGraph: {
    title: "Industrial Equipment Supplier Bhopal | Jay Engineering",
    description:
      "Trusted B2B industrial equipment supplier in Madhya Pradesh. Hand pallet trucks, scissor lifts, storage racks & more.",
    url: "https://jayengineering.in",
    images: [{ url: "/og/home.jpg", width: 1200, height: 630 }],
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: company.name,
  legalName: company.legalName,
  description:
    "Trader, retailer, and distributor of industrial material handling equipment, storage racks, hydraulic lifts, and office furniture in Madhya Pradesh.",
  url: "https://jayengineering.in",
  telephone: company.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shop No. 03, Near Panjabi Baag, New Ashoka Garden, Ashoka Garden",
    addressLocality: "Bhopal",
    addressRegion: "Madhya Pradesh",
    postalCode: "462023",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: company.geo.lat,
    longitude: company.geo.lng,
  },
  openingHours: "Mo-Su 09:00-19:00",
  taxID: company.gst,
  foundingDate: "2014",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <HeroSection />
      <StatsBar />
      <CategoriesGrid />
      <WhyUs />
      <FeaturedProducts />
      <TestimonialsSection />
      <InquiryCTABanner />
    </>
  );
}
