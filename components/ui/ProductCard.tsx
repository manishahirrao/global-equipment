import Image from "next/image";
import type { Product } from "@/types";
import { formatINR } from "@/lib/utils";
import Badge from "./Badge";

interface ProductCardProps {
  product: Product;
  showCategory?: boolean;
}

export default function ProductCard({ product, showCategory = false }: ProductCardProps) {
  const topSpecs = Object.entries(product.specs).slice(0, 3);
  const whatsappMessage = `Hi, I'm interested in ${product.name} (${formatINR(product.price, product.priceUnit)}). Please share more details.`;
  const whatsappUrl = `https://wa.me/918048962384?text=${encodeURIComponent(whatsappMessage)}`;

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

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto flex items-center justify-center gap-2 bg-[#25D366] text-white text-xs uppercase tracking-wider py-2.5 px-4 hover:bg-[#1FAD55] transition-colors duration-200"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          WhatsApp Quote
        </a>
      </div>
    </article>
  );
}
