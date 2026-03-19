import type { Metadata } from "next";
import { company } from "@/data/company";
import InquiryForm from "@/components/ui/InquiryForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Global Equipments in Bhopal, Madhya Pradesh. Send an inquiry via WhatsApp or our contact form. Open Monday–Sunday.",
  openGraph: {
    title: "Contact Global Equipments | Industrial Equipment Supplier Bhopal",
    images: [{ url: "/og/contact.jpg", width: 1200, height: 630 }],
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: company.name,
  telephone: company.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "S-40, Sheetal Apartment, Mandideep Tehsil Goharganj, Ward No. 17",
    addressLocality: "Bhopal",
    addressRegion: "Madhya Pradesh",
    postalCode: "462046",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: company.geo.lat,
    longitude: company.geo.lng,
  },
  openingHours: "Mo-Su 09:00-19:00",
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      {/* Hero */}
      <div className="bg-[#1A1A2E] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#F5A623] text-xs font-semibold uppercase tracking-[0.3em] mb-3">
            Get in Touch
          </p>
          <h1
            className="text-white font-black uppercase text-4xl md:text-6xl leading-none"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Contact Us
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Inquiry Form */}
          <div>
            <h2
              className="text-[#1A1A2E] font-black uppercase text-2xl mb-6"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Send an Inquiry
            </h2>
            <div className="bg-white border border-[#E2E2DC] p-6 shadow-[4px_4px_0px_#1A1A2E]">
              <InquiryForm showProductDropdown />
            </div>
          </div>

          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h2
                className="text-[#1A1A2E] font-black uppercase text-2xl mb-6"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Contact Information
              </h2>

              <dl className="space-y-5">
                <div className="flex gap-4">
                  <dt className="text-[#F5A623] shrink-0 mt-0.5" aria-label="Address">
                    <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </dt>
                  <dd className="text-sm text-[#1C1C1C] leading-relaxed">{company.address}</dd>
                </div>

                <div className="flex gap-4">
                  <dt className="text-[#F5A623] shrink-0 mt-0.5" aria-label="Phone">
                    <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18" aria-hidden="true">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </dt>
                  <dd>
                    <a href={`tel:${company.phone}`} className="text-sm text-[#1C1C1C] hover:text-[#F5A623] transition-colors">
                      {company.phone}
                    </a>
                  </dd>
                </div>

                <div className="flex gap-4">
                  <dt className="text-[#F5A623] shrink-0 mt-0.5" aria-label="WhatsApp">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </dt>
                  <dd>
                    <a
                      href={`https://wa.me/${company.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#25D366] font-semibold hover:underline"
                    >
                      Chat on WhatsApp
                    </a>
                  </dd>
                </div>

                <div className="flex gap-4">
                  <dt className="text-[#F5A623] shrink-0 mt-0.5" aria-label="Business hours">
                    <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </dt>
                  <dd className="text-sm text-[#1C1C1C]">{company.hours}</dd>
                </div>

                <div className="flex gap-4">
                  <dt className="text-[#F5A623] shrink-0 mt-0.5" aria-label="GST Number">
                    <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18" aria-hidden="true">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                    </svg>
                  </dt>
                  <dd className="text-sm text-[#1C1C1C]">GST: {company.gst}</dd>
                </div>
              </dl>
            </div>

            {/* Map */}
            <div className="w-full h-64 border border-[#E2E2DC] shadow-[4px_4px_0px_#1A1A2E] overflow-hidden">
              <iframe
                title="Global Equipments location on Google Maps"
                src={`https://maps.google.com/maps?q=${company.geo.lat},${company.geo.lng}&z=15&output=embed`}
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
