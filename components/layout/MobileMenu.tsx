"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/products/", label: "Products" },
  { href: "/services/", label: "Services" },
  { href: "/contact/", label: "Contact" },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Focus close button on open
  useEffect(() => {
    if (isOpen) {
      closeRef.current?.focus();
    }
  }, [isOpen]);

  // Escape key + focus trap
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;

      const menu = menuRef.current;
      if (!menu) return;
      const focusable = Array.from(
        menu.querySelectorAll<HTMLElement>(
          'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => !el.hasAttribute("disabled"));

      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={menuRef}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      className="fixed inset-0 z-50 bg-[#1A1A2E] flex flex-col overflow-y-auto"
    >
      {/* Header row */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#2D3142]">
        <span
          className="text-white font-black text-xl uppercase tracking-wider"
          style={{ fontFamily: "var(--font-barlow-condensed)" }}
        >
          JAY <span className="text-[#F5A623]">ENGINEERING</span>
        </span>
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close menu"
          className="text-white hover:text-[#F5A623] transition-colors p-2"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Main nav */}
      <nav className="flex-1 px-6 py-8">
        <ul className="space-y-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={onClose}
                className="block py-3 text-white text-2xl font-black uppercase tracking-wide hover:text-[#F5A623] transition-colors border-b border-[#2D3142]"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer CTA */}
      <div className="px-6 py-6 border-t border-[#2D3142]">
        <Link
          href="/contact/"
          onClick={onClose}
          className="block w-full text-center bg-[#F5A623] text-[#1A1A2E] font-bold uppercase tracking-wider py-3 text-sm hover:bg-[#e09510] transition-colors"
        >
          Get Quote
        </Link>
      </div>
    </div>
  );
}
