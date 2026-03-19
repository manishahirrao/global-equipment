import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import type { CategorySlug } from "@/types";
import ProductCard from "@/components/ui/ProductCard";
import SectionHeading from "@/components/ui/SectionHeading";
import InquiryCTABanner from "@/components/sections/InquiryCTABanner";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return categories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = categories.find((c) => c.slug === category);
  if (!cat) return {};
  return {
    title: `${cat.name} Supplier Bhopal`,
    description: `${cat.description} Available across Madhya Pradesh. Contact Global Equipments for pricing.`,
    openGraph: {
      title: `${cat.name} Supplier Bhopal | Global Equipments`,
      description: cat.description,
      images: [{ url: "/og/products.jpg", width: 1200, height: 630 }],
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = categories.find((c) => c.slug === (category as CategorySlug));
  if (!cat) notFound();

  const catProducts = products.filter((p) => p.category === cat.slug);

  return (
    <>
      {/* Hero */}
      <div className="bg-[#1A1A2E] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-gray-400">
              <li><a href="/" className="hover:text-[#F5A623] transition-colors">Home</a></li>
              <li aria-hidden="true">/</li>
              <li><a href="/products/" className="hover:text-[#F5A623] transition-colors">Products</a></li>
              <li aria-hidden="true">/</li>
              <li className="text-[#F5A623]">{cat.name}</li>
            </ol>
          </nav>
          <SectionHeading
            eyebrow={`${catProducts.length} Products`}
            heading={cat.name}
            subtext={cat.description}
            light
            align="left"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {catProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <InquiryCTABanner />
    </>
  );
}
