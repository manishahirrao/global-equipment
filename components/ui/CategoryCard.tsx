import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/types";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/products/#${category.slug}`}
      className="group relative block overflow-hidden bg-[#1A1A2E] aspect-[4/3] border-l-4 border-transparent hover:border-[#F5A623] transition-all duration-200 shadow-[4px_4px_0px_#0D0D1A]"
    >
      <Image
        src={category.image}
        alt={category.name}
        fill
        className="object-cover opacity-40 group-hover:opacity-30 transition-opacity duration-200"
        loading="lazy"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />
      <div className="absolute inset-0 p-5 flex flex-col justify-end">
        <span className="inline-block bg-[#F5A623] text-[#1A1A2E] text-xs font-bold px-2 py-0.5 mb-2 w-fit uppercase tracking-wide">
          {category.productCount} Products
        </span>
        <h3
          className="text-white font-black uppercase text-xl leading-tight"
          style={{ fontFamily: "var(--font-barlow-condensed)" }}
        >
          {category.name}
        </h3>
        <p className="text-gray-300 text-xs mt-1 line-clamp-2">{category.description}</p>
      </div>
      <div className="absolute top-4 right-4 text-[#F5A623] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </div>
    </Link>
  );
}
