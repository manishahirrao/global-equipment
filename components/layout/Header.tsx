"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/products/", label: "Product" },
  { href: "/services/", label: "Services" },
  { href: "/gallery/", label: "Gallery" },
  { href: "/contact/", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200 h-[60px] md:h-[72px] flex items-center shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2"
            aria-label="Jay Engineering — Home"
          >
            <Image
              src="/images/jay-logo.png"
              alt="Jay Engineering logo"
              width={184}
              height={184}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs uppercase tracking-[0.15em] font-semibold transition-colors relative ${
                  isActive(link.href)
                    ? "text-[#F5A623]"
                    : "text-gray-700 hover:text-[#F5A623]"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute -bottom-[17px] left-0 right-0 h-0.5 bg-[#F5A623]" aria-hidden="true" />
                )}
              </Link>
            ))}

            <Link
              href="/contact/"
              className="bg-[#F5A623] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 hover:bg-[#e09510] transition-colors shadow-sm"
            >
              Get Quote
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#1A1A2E] hover:text-[#F5A623] transition-colors p-2"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
