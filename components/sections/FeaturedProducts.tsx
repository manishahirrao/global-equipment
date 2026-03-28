import { products } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

// Hand-pick featured products — one bestseller from key categories
const FEATURED_IDS = ["hpt-001", "hsl-003", "isr-001", "mhe-002", "gl-002", "hdl-001"];

const featured = FEATURED_IDS.map((id) => products.find((p) => p.id === id)).filter(
  Boolean
) as typeof products;

export default function FeaturedProducts() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Spare Parts Available"
          heading="Genuine Spare Parts"
          subtext="We stock genuine spare parts for all material handling equipment repairs — available across Madhya Pradesh."
        />

        {/* Mobile: horizontal scroll | Desktop: 3-col grid */}
        <div className="flex gap-6 overflow-x-auto pb-4 md:pb-0 md:grid md:grid-cols-3 md:overflow-visible snap-x snap-mandatory md:snap-none">
          {featured.map((product) => (
            <div key={product.id} className="min-w-[280px] md:min-w-0 snap-start">
              <ProductCard product={product} showCategory />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="secondary" href="/products/">
            View All Spare Parts
          </Button>
        </div>
      </div>
    </section>
  );
}
