import type { Metadata } from "next";
import Image from "next/image";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Privacy Policy | Jay Engineering",
  description: "Privacy Policy for Jay Engineering - Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative bg-gradient-to-r from-gray-50 to-gray-100 py-16 md:py-20 border-b border-gray-200 overflow-hidden">
        <Image
          src="/images/categories/forklift.jpeg"
          alt="Privacy Policy"
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
            Privacy Policy
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-sm max-w-none">
          <p className="text-[#6B7280] mb-6">
            <strong>Last Updated:</strong> March 28, 2026
          </p>

          <section className="mb-8">
            <h2 className="text-[#1A1A2E] font-bold text-xl mb-4">1. Information We Collect</h2>
            <p className="text-[#6B7280] mb-4">
              We collect information that you provide directly to us when you:
            </p>
            <ul className="list-disc pl-6 text-[#6B7280] space-y-2">
              <li>Submit an inquiry or contact form</li>
              <li>Request a quote for our services</li>
              <li>Call or email us</li>
              <li>Visit our website</li>
            </ul>
            <p className="text-[#6B7280] mt-4">
              This information may include your name, email address, phone number, company name, and details about your inquiry.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-[#1A1A2E] font-bold text-xl mb-4">2. How We Use Your Information</h2>
            <p className="text-[#6B7280] mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-[#6B7280] space-y-2">
              <li>Respond to your inquiries and provide customer service</li>
              <li>Process your service requests and quotes</li>
              <li>Communicate with you about our services</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-[#1A1A2E] font-bold text-xl mb-4">3. Information Sharing</h2>
            <p className="text-[#6B7280]">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-[#6B7280] space-y-2 mt-4">
              <li>With your consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and safety</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-[#1A1A2E] font-bold text-xl mb-4">4. Data Security</h2>
            <p className="text-[#6B7280]">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-[#1A1A2E] font-bold text-xl mb-4">5. Your Rights</h2>
            <p className="text-[#6B7280] mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-[#6B7280] space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-[#1A1A2E] font-bold text-xl mb-4">6. Contact Us</h2>
            <p className="text-[#6B7280] mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="bg-gray-50 border-l-4 border-[#F5A623] p-4">
              <p className="text-[#1A1A2E] font-semibold mb-2">{company.name}</p>
              <p className="text-[#6B7280] text-sm mb-1">{company.address}</p>
              <p className="text-[#6B7280] text-sm mb-1">Phone: {company.phone}</p>
              <p className="text-[#6B7280] text-sm">Email: {company.email}</p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
