import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/ui/StatsBar";
import CategoriesGrid from "@/components/sections/CategoriesGrid";
import WhyUs from "@/components/sections/WhyUs";
import TrustedCustomers from "@/components/sections/TrustedCustomers";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import InquiryCTABanner from "@/components/sections/InquiryCTABanner";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Material Handling Equipment Repair & Service Bhopal | Jay Engineering",
  description:
    "Jay Engineering (Shree Engineering) — Expert repair & service for trolleys, hand pallet trucks, hydraulic lifts & material handling equipment in Bhopal, Madhya Pradesh. Est. 2014.",
  openGraph: {
    title: "Material Handling Equipment Repair & Service Bhopal | Jay Engineering",
    description:
      "Expert repair & maintenance services for trolleys, hand pallet trucks, hydraulic equipment & material handling machines in Bhopal, MP.",
    url: "https://jayengineering.in",
    images: [{ url: "/og/home.jpg", width: 1200, height: 630 }],
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: company.name,
  legalName: company.legalName,
  description:
    "Professional repair and maintenance services for material handling equipment, trolleys, hand pallet trucks, hydraulic lifts, and industrial equipment in Bhopal, Madhya Pradesh.",
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
  openingHours: "Mo-Su 09:00-21:00",
  taxID: company.gst,
  foundingDate: "2014",
  priceRange: "₹₹",
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
      <TrustedCustomers />
      <CategoriesGrid />
      <WhyUs />
      <TestimonialsSection />
      <FAQSection />
      <InquiryCTABanner />
    </>
  );
}
