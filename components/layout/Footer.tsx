import Link from "next/link";
import { categories } from "@/data/categories";
import { company } from "@/data/company";

export default function Footer() {
  return (
    <footer className="bg-[#0D0D1A] text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <p
              className="text-white font-black text-xl uppercase tracking-wider mb-4"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              GLOBAL <span className="text-[#F5A623]">EQUIPMENTS</span>
            </p>
            <p className="text-sm leading-relaxed mb-4">
              Trusted industrial equipment supplier in Madhya Pradesh since 2017. Serving factories,
              warehouses, and SMEs across MP.
            </p>
            <p className="text-xs">GST: {company.gst}</p>
            <p className="text-xs mt-1">Est. 2017 · Mandideep, Bhopal</p>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-white text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Product Categories
            </h3>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/products/${cat.slug}/`}
                    className="text-sm hover:text-[#F5A623] transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
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
                { href: "/products/", label: "All Products" },
                { href: "/services/", label: "Services" },
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

          {/* Contact */}
          <div>
            <h3 className="text-white text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Contact
            </h3>
            <address className="not-italic space-y-3 text-sm">
              <p className="leading-relaxed">{company.address}</p>
              <p>
                <a
                  href={`tel:${company.phone}`}
                  className="hover:text-[#F5A623] transition-colors"
                >
                  {company.phone}
                </a>
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
      <div className="border-t border-[#1A1A2E] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <p>© 2024 Global Equipments · GST: {company.gst}</p>
          <p>Made in India 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
}
