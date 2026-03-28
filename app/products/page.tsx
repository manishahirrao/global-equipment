"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import type { CategorySlug } from "@/types";
import ProductCard from "@/components/ui/ProductCard";
import SectionHeading from "@/components/ui/SectionHeading";
import InquiryCTABanner from "@/components/sections/InquiryCTABanner";

const ALL = "all";

export default function ProductsPage() {
  const [active, setActive] = useState<CategorySlug | typeof ALL>(ALL);

  // Read hash on mount
  useEffect(() => {
    const hash = window.location.hash.replace("#", "") as CategorySlug;
    if (categories.some((c) => c.slug === hash)) {
      setActive(hash);
    }
  }, []);

  // Write hash on tab change
  function handleTabChange(slug: CategorySlug | typeof ALL) {
    setActive(slug);
    if (slug === ALL) {
      history.replaceState(null, "", window.location.pathname);
    } else {
      history.replaceState(null, "", `#${slug}`);
    }
  }

  const filtered = active === ALL ? products : products.filter((p) => p.category === active);

  return (
    <>
      {/* Hero */}
      <div className="relative bg-gradient-to-r from-gray-50 to-gray-100 py-16 md:py-20 border-b border-gray-200 overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/categories/industrial-storage-racks.webp"
          alt="Industrial equipment and spare parts"
          fill
          className="object-cover opacity-10"
          sizes="100vw"
        />
        
        {/* Additional dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-gray-100/60" aria-hidden="true" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Services & Spare Parts"
            heading="Repair Services & Spare Parts"
            subtext="Expert repair and maintenance services for all material handling equipment. Genuine spare parts available across Madhya Pradesh."
            light={false}
            align="left"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Service note */}
        <div className="bg-amber-50 border-l-4 border-[#F5A623] p-6 mb-8">
          <p className="text-sm text-[#1A1A2E]">
            <span className="font-bold">Need Repair Services?</span> We specialize in repairing all types of material handling equipment. 
            These spare parts are available for repairs and maintenance. <a href="/services/" className="text-[#F5A623] underline hover:no-underline">View our repair services →</a>
          </p>
        </div>

        {/* Filter tabs */}
        <div
          className="flex gap-2 flex-wrap mb-10"
          role="tablist"
          aria-label="Filter products by category"
        >
          <button
            role="tab"
            aria-selected={active === ALL}
            onClick={() => handleTabChange(ALL)}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
              active === ALL
                ? "bg-[#1A1A2E] text-white"
                : "bg-[#F4F4F0] text-[#1A1A2E] hover:bg-[#E2E2DC]"
            }`}
          >
            All Products
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              role="tab"
              aria-selected={active === cat.slug}
              onClick={() => handleTabChange(cat.slug)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                active === cat.slug
                  ? "bg-[#F5A623] text-[#1A1A2E]"
                  : "bg-[#F4F4F0] text-[#1A1A2E] hover:bg-[#E2E2DC]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-sm text-[#6B7280] mb-6">
          Showing {filtered.length} {filtered.length === 1 ? "product" : "products"}
          {active !== ALL && ` in ${categories.find(c => c.slug === active)?.name}`}
        </p>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} showCategory={active === ALL} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-[#6B7280] py-20">No products found.</p>
        )}
      </div>

      <InquiryCTABanner />
    </>
  );
}
