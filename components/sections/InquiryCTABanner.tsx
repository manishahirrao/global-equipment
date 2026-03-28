import Link from "next/link";
import { company } from "@/data/company";

export default function InquiryCTABanner() {
  return (
    <section className="bg-[#F5A623] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2
            className="text-[#1A1A2E] font-black uppercase text-3xl md:text-4xl leading-tight"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Need Equipment Repair or Service?
          </h2>
          <p className="text-[#1A1A2E]/80 mt-2 text-sm">
            Call us at{" "}
            <a href={`tel:${company.phone}`} className="font-bold underline hover:no-underline">
              {company.phone}
            </a>{" "}
            or send an inquiry below.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <Link
            href="/contact/"
            className="bg-[#1A1A2E] text-white font-bold uppercase tracking-wider px-8 py-3 text-sm hover:bg-[#2D3142] transition-colors"
          >
            Send Enquiry
          </Link>
          <a
            href={`https://wa.me/${company.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white font-bold uppercase tracking-wider px-8 py-3 text-sm hover:bg-[#1ebe5d] transition-colors text-center"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
