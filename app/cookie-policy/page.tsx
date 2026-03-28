import type { Metadata } from "next";
import Image from "next/image";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Cookie Policy | Jay Engineering",
  description: "Cookie Policy for Jay Engineering - Learn about how we use cookies on our website.",
};

export default function CookiePolicyPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative bg-gradient-to-r from-gray-50 to-gray-100 py-16 md:py-20 border-b border-gray-200 overflow-hidden">
        <Image
          src="/images/categories/forklift.jpeg"
          alt="Cookie Policy"
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
            Cookie Policy
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-sm max-w-none">
          <p className="text-[#6B7280] mb-6">
            <strong>Last Updated:</strong> March 28, 2026
          </p>

          <section className="mb-8">
            <h2 className="text-[#1A1A2E] font-bold text-xl mb-4">1. What Are Cookies</h2>
            <p className="text-[#6B7280]">
              Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-[#1A1A2E] font-bold text-xl mb-4">2. Types of Cookies We Use</h2>
            
            <div className="mb-6">
              <h3 className="text-[#1A1A2E] font-semibold text-lg mb-2">Essential Cookies</h3>
              <p className="text-[#6B7280]">
                These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-[#1A1A2E] font-semibold text-lg mb-2">Analytics Cookies</h3>
              <p className="text-[#6B7280]">
                These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website's performance.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-[#1A1A2E] font-semibold text-lg mb-2">Functionality Cookies</h3>
              <p className="text-[#6B7280]">
                These cookies allow the website to remember choices you make (such as your language preference) and provide enhanced, more personal features.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-[#1A1A2E] font-bold text-xl mb-4">3. How We Use Cookies</h2>
            <p className="text-[#6B7280] mb-4">
              We use cookies to:
            </p>
            <ul className="list-disc pl-6 text-[#6B7280] space-y-2">
              <li>Keep track of your preferences and settings</li>
              <li>Understand how you use our website</li>
              <li>Improve website performance and user experience</li>
              <li>Analyze website traffic and usage patterns</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-[#1A1A2E] font-bold text-xl mb-4">4. Managing Cookies</h2>
            <p className="text-[#6B7280] mb-4">
              You can control and manage cookies in various ways:
            </p>
            <ul className="list-disc pl-6 text-[#6B7280] space-y-2">
              <li>Most browsers allow you to refuse or accept cookies</li>
              <li>You can delete cookies that are already stored on your device</li>
              <li>You can set your browser to notify you when you receive a cookie</li>
            </ul>
            <p className="text-[#6B7280] mt-4">
              Please note that disabling cookies may affect the functionality of our website and your user experience.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-[#1A1A2E] font-bold text-xl mb-4">5. Third-Party Cookies</h2>
            <p className="text-[#6B7280]">
              We may use third-party services (such as Google Analytics) that also use cookies. These third parties have their own privacy policies and cookie policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-[#1A1A2E] font-bold text-xl mb-4">6. Contact Us</h2>
            <p className="text-[#6B7280] mb-4">
              If you have any questions about our Cookie Policy, please contact us:
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
