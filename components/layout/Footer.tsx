import Image from "next/image";
import Link from "next/link";
import { company } from "@/data/company";

export default function Footer() {
  return (
    <footer className="bg-[#2D3142] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/jay-logo.png"
                alt="Jay Engineering logo"
                width={144}
                height={144}
                className="object-contain"
              />
              
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Expert repair and maintenance services for material handling equipment in Bhopal, Madhya Pradesh since 2014.
            </p>
            <p className="text-xs">GST: {company.gst}</p>
            <p className="text-xs mt-1">Est. 2014 · Ashoka Garden, Bhopal</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about/", label: "About Us" },
                { href: "/services/", label: "Services" },
                { href: "/products/", label: "Product" },
                { href: "/gallery/", label: "Gallery" },
                { href: "/contact/", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-[#F5A623] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/privacy-policy/", label: "Privacy Policy" },
                { href: "/cookie-policy/", label: "Cookie Policy" },
                { href: "/terms-and-conditions/", label: "Terms & Conditions" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-[#F5A623] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Contact
            </h3>
            <address className="not-italic space-y-3 text-sm">
              <p className="leading-relaxed">{company.address}</p>
              <p>
                <a href={`tel:${company.phone}`} className="hover:text-[#F5A623] transition-colors">
                  {company.phone}
                </a>
                {company.phone2 && (
                  <>
                    <span className="mx-1">/</span>
                    <a href={`tel:${company.phone2}`} className="hover:text-[#F5A623] transition-colors">
                      {company.phone2}
                    </a>
                  </>
                )}
              </p>
              <p>
                <a
                  href={`https://wa.me/${company.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F5A623] transition-colors"
                >
                  WhatsApp Us
                </a>
              </p>
              <p className="text-xs">{company.hours}</p>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#3D4152] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <p>© 2026 Jay Engineering · GST: {company.gst}</p>
          <p>
            Designed & Created by{" "}
            <a
              href="https://adwikindia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F5A623] hover:underline"
            >
              AdwikIndia
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
