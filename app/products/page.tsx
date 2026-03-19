"use client";

import { useState, useEffect } from "react";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import type { CategorySlug } from "@/types";
import ProductCard from "@/components/ui/ProductCard";
import SectionHeading from "@/components/ui/SectionHeading";

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
      <div className="bg-[#1A1A2E] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Catalogue"
            heading="Our Product Range"
            subtext="36+ industrial products across 8 categories — all available for supply across Madhya Pradesh."
            light
            align="left"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
            All
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
    </>
  );
}
