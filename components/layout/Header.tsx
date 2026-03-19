"use client";

import { useState } from "react";
import Link from "next/link";
import { categories } from "@/data/categories";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { href: "/about/", label: "About" },
  { href: "/services/", label: "Services" },
  { href: "/contact/", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#1A1A2E] h-[60px] md:h-[72px] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-1 text-white font-black uppercase tracking-wider text-lg md:text-xl"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
            aria-label="Global Equipments — Home"
          >
            GLOBAL
            <span className="text-[#F5A623] ml-1">EQUIPMENTS</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623] ml-1 mb-3" aria-hidden="true" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            {/* Products dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className="text-gray-300 hover:text-[#F5A623] text-xs uppercase tracking-[0.15em] font-semibold transition-colors flex items-center gap-1"
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
                onClick={() => setDropdownOpen((v) => !v)}
                onFocus={() => setDropdownOpen(true)}
                onBlur={(e) => {
                  if (!e.currentTarget.parentElement?.contains(e.relatedTarget as Node)) {
                    setDropdownOpen(false);
                  }
                }}
              >
                Products
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                  <path d="M6 8L1 3h10L6 8z" />
                </svg>
              </button>

              {dropdownOpen && (
                <div
                  role="menu"
                  className="absolute top-full left-0 mt-2 w-64 bg-[#1A1A2E] border border-[#2D3142] shadow-lg py-2 z-50"
                >
                  <Link
                    href="/products/"
                    role="menuitem"
                    className="block px-4 py-2 text-xs text-gray-300 hover:text-[#F5A623] hover:bg-[#2D3142] uppercase tracking-wide font-semibold transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    All Products
                  </Link>
                  <div className="border-t border-[#2D3142] my-1" />
                  {categories.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/products/${cat.slug}/`}
                      role="menuitem"
                      className="block px-4 py-2 text-xs text-gray-300 hover:text-[#F5A623] hover:bg-[#2D3142] transition-colors"
                      onClick={() => setDropdownOpen(false)}
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-[#F5A623] text-xs uppercase tracking-[0.15em] font-semibold transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact/"
              className="bg-[#F5A623] text-[#1A1A2E] text-xs font-bold uppercase tracking-wider px-5 py-2.5 hover:bg-[#e09510] transition-colors"
            >
              Get Quote
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white hover:text-[#F5A623] transition-colors p-2"
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
