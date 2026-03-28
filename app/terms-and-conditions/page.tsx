import type { Metadata } from "next";
import Image from "next/image";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Terms and Conditions | Jay Engineering",
  description: "Terms and Conditions for Jay Engineering - Read our terms of service and usage policies.",
};

export default function TermsAndConditionsPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative bg-gradient-to-r from-gray-50 to-gray-100 py-16 md:py-20 border-b border-gray-200 overflow-hidden">
        <Image
          src="/images/categories/forklift.jpeg"
          alt="Terms and Conditions"
          fill
          className="object-cover opacity-10"
          sizes="100vw"
        />
        
        <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-gray-100/60" aria-hidden="true" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#F5A623] text-xs font-semibold uppercase tracking-[0.3em] mb-3">
            Legal
          </p>
          <h1
            className="text-[#1A1A2E] font-black uppercase text-4xl md:text-6xl leading-none"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Terms & Conditions
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-sm max-w-none">
          <p className="text-[#6B7280] mb-6">
            <strong>Last Updated:</strong> March 28, 2026
          </p>

          <section className="mb-8">
            <h2 className="text-[#1A1A2E] font-bold text-xl mb-4">1. Acceptance of Terms</h2>
            <p className="text-[#6B7280]">
              By accessing and using the Jay Engineering website and services, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-[#1A1A2E] font-bold text-xl mb-4">2. Services</h2>
            <p className="text-[#6B7280] mb-4">
              Jay Engineering provides repair and maintenance services for material handling equipment including:
            </p>
            <ul className="list-disc pl-6 text-[#6B7280] space-y-2">
              <li>Hand pallet trucks and trolleys</li>
              <li>Hydraulic scissor lifts and drum lifters</li>
              <li>Stackers and forklifts</li>
              <li>Supply of genuine spare parts</li>
              <li>AMC and preventive maintenance services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-[#1A1A2E] font-bold text-xl mb-4">3. Service Terms</h2>
            <p className="text-[#6B7280] mb-4">
              All repair and maintenance services are subject to the following terms:
            </p>
            <ul className="list-disc pl-6 text-[#6B7280] space-y-2">
              <li>Services are provided based on equipment condition and availability of parts</li>
              <li>Quotes are valid for 30 days from the date of issue</li>
              <li>Payment terms will be specified in the service quotation</li>
              <li>Warranty terms vary by service type and will be communicated separately</li>
              <li>Customer is responsible for equipment transportation unless otherwise agreed</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-[#1A1A2E] font-bold text-xl mb-4">4. Pricing and Payment</h2>
            <p className="text-[#6B7280]">
              All prices are quoted in Indian Rupees (INR) and are subject to applicable taxes including GST. Payment terms will be specified in individual service agreements. We reserve the right to modify our pricing at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-[#1A1A2E] font-bold text-xl mb-4">5. Warranty and Liability</h2>
            <p className="text-[#6B7280] mb-4">
              We provide warranty on our repair services and spare parts as specified in the service agreement. Our liability is limited to:
            </p>
            <ul className="list-disc pl-6 text-[#6B7280] space-y-2">
              <li>Re-performing defective services at no additional charge</li>
              <li>Replacing defective parts covered under warranty</li>
              <li>Refunding the service fee if repair cannot be completed</li>
            </ul>
            <p className="text-[#6B7280] mt-4">
              We are not liable for any indirect, incidental, or consequential damages arising from our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-[#1A1A2E] font-bold text-xl mb-4">6. Customer Responsibilities</h2>
            <p className="text-[#6B7280] mb-4">
              Customers are responsible for:
            </p>
            <ul className="list-disc pl-6 text-[#6B7280] space-y-2">
              <li>Providing accurate information about equipment condition</li>
              <li>Ensuring equipment is clean and safe for service</li>
              <li>Following recommended maintenance schedules</li>
              <li>Proper use of equipment after service</li>
              <li>Timely payment as per agreed terms</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-[#1A1A2E] font-bold text-xl mb-4">7. Intellectual Property</h2>
            <p className="text-[#6B7280]">
              All content on this website, including text, images, logos, and designs, is the property of Jay Engineering and is protected by copyright laws. You may not reproduce, distribute, or use any content without our written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-[#1A1A2E] font-bold text-xl mb-4">8. Limitation of Liability</h2>
            <p className="text-[#6B7280]">
              Jay Engineering shall not be liable for any damages arising from the use of our website or services, including but not limited to direct, indirect, incidental, punitive, and consequential damages.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-[#1A1A2E] font-bold text-xl mb-4">9. Governing Law</h2>
            <p className="text-[#6B7280]">
              These Terms and Conditions are governed by the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Bhopal, Madhya Pradesh.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-[#1A1A2E] font-bold text-xl mb-4">10. Changes to Terms</h2>
            <p className="text-[#6B7280]">
              We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-[#1A1A2E] font-bold text-xl mb-4">11. Contact Information</h2>
            <p className="text-[#6B7280] mb-4">
              For questions about these Terms and Conditions, please contact us:
            </p>
            <div className="bg-gray-50 border-l-4 border-[#F5A623] p-4">
              <p className="text-[#1A1A2E] font-semibold mb-2">{company.name}</p>
              <p className="text-[#6B7280] text-sm mb-1">{company.address}</p>
              <p className="text-[#6B7280] text-sm mb-1">Phone: {company.phone}</p>
              <p className="text-[#6B7280] text-sm mb-1">Email: {company.email}</p>
              <p className="text-[#6B7280] text-sm">GST: {company.gst}</p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
