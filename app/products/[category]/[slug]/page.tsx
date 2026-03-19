import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { formatINR } from "@/lib/utils";
import { company } from "@/data/company";
import SpecsTable from "@/components/ui/SpecsTable";
import InquiryForm from "@/components/ui/InquiryForm";
import ProductCard from "@/components/ui/ProductCard";
import Badge from "@/components/ui/Badge";

interface Props {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ category: p.category, slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.name} - Bhopal, Madhya Pradesh`,
    description: `Buy ${product.name} in Bhopal, Madhya Pradesh. ${Object.entries(product.specs)
      .slice(0, 2)
      .map(([k, v]) => `${k}: ${v}`)
      .join(" · ")}. Contact Global Equipments for pricing.`,
    openGraph: {
      title: `${product.name} - Bhopal, Madhya Pradesh | Global Equipments`,
      images: [{ url: product.images[0] ?? "/og/products.jpg", width: 800, height: 600 }],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { category, slug } = await params;
  const product = products.find((p) => p.slug === slug && p.category === category);
  if (!product) notFound();

  const cat = categories.find((c) => c.slug === product.category);
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="bg-[#F4F4F0]">
      {/* Breadcrumb */}
      <div className="bg-[#1A1A2E] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-gray-400 flex-wrap">
              <li><a href="/" className="hover:text-[#F5A623] transition-colors">Home</a></li>
              <li aria-hidden="true">/</li>
              <li><a href="/products/" className="hover:text-[#F5A623] transition-colors">Products</a></li>
              <li aria-hidden="true">/</li>
              <li>
                <a href={`/products/${product.category}/`} className="hover:text-[#F5A623] transition-colors">
                  {cat?.name ?? product.category}
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-[#F5A623] truncate max-w-[200px]">{product.name}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image */}
          <div className="relative aspect-[4/3] bg-white border border-[#E2E2DC] shadow-[4px_4px_0px_#1A1A2E]">
            <Image
              src={product.images[0] ?? "/images/products/placeholder.webp"}
              alt={product.name}
              fill
              priority
              className="object-contain p-4"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {product.badge && (
              <div className="absolute top-4 left-4">
                <Badge variant="amber">{product.badge}</Badge>
              </div>
            )}
          </div>

          {/* Details */}
          <div>
            <p className="text-[#F5A623] text-xs font-semibold uppercase tracking-[0.2em] mb-2">
              {cat?.name}
            </p>
            <h1
              className="text-[#1A1A2E] font-black uppercase text-3xl md:text-4xl leading-tight mb-4"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              {product.name}
            </h1>

            <p className="text-3xl font-black text-[#1A1A2E] mb-6" style={{ fontFamily: "var(--font-barlow-condensed)" }}>
              {formatINR(product.price, product.priceUnit)}
            </p>

            {product.description && (
              <p className="text-[#6B7280] text-sm mb-6 leading-relaxed">{product.description}</p>
            )}

            {/* Specs */}
            <div className="mb-8">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A1A2E] mb-3">
                Specifications
              </h2>
              <SpecsTable specs={product.specs} />
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(`Hi Global Equipments, I am interested in: ${product.name}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold uppercase tracking-wider px-6 py-3 text-sm hover:bg-[#1ebe5d] transition-colors mb-8"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Get Quote on WhatsApp
            </a>

            {/* Inquiry Form */}
            <div className="bg-white border border-[#E2E2DC] p-6 shadow-[4px_4px_0px_#1A1A2E]">
              <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1A1A2E] mb-4">
                Send Inquiry
              </h2>
              <InquiryForm productName={product.name} />
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-20">
            <h2
              className="text-[#1A1A2E] font-black uppercase text-2xl mb-8"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
