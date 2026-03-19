import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types";
import { formatINR } from "@/lib/utils";
import Badge from "./Badge";

interface ProductCardProps {
  product: Product;
  showCategory?: boolean;
}

export default function ProductCard({ product, showCategory = false }: ProductCardProps) {
  const topSpecs = Object.entries(product.specs).slice(0, 3);
  const href = `/products/${product.category}/${product.slug}/`;

  return (
    <article className="bg-white border border-[#E2E2DC] shadow-[4px_4px_0px_#1A1A2E] flex flex-col group">
      <div className="relative aspect-[4/3] bg-[#F4F4F0] overflow-hidden">
        <Image
          src={product.images[0] ?? "/images/products/placeholder.webp"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {product.badge && (
          <div className="absolute top-3 left-3">
            <Badge variant="amber">{product.badge}</Badge>
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        {showCategory && (
          <p className="text-xs text-[#F5A623] uppercase tracking-wider font-semibold mb-1">
            {product.category.replace(/-/g, " ")}
          </p>
        )}
        <h3 className="font-semibold text-[#1A1A2E] text-base leading-snug mb-2">
          {product.name}
        </h3>

        <p className="text-xl font-black text-[#1A1A2E] mb-3" style={{ fontFamily: "var(--font-barlow-condensed)" }}>
          {formatINR(product.price, product.priceUnit)}
        </p>

        {topSpecs.length > 0 && (
          <ul className="text-xs text-[#6B7280] space-y-1 mb-4 flex-1">
            {topSpecs.map(([k, v]) => (
              <li key={k} className="flex gap-1">
                <span className="font-semibold text-[#1A1A2E]">{k}:</span>
                <span>{v}</span>
              </li>
            ))}
          </ul>
        )}

        <Link
          href={href}
          className="mt-auto block text-center bg-[#1A1A2E] text-white text-xs uppercase tracking-wider py-2.5 px-4 hover:bg-[#F5A623] hover:text-[#1A1A2E] transition-colors duration-200"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}
