import { categories } from "@/data/categories";
import CategoryCard from "@/components/ui/CategoryCard";
import SectionHeading from "@/components/ui/SectionHeading";

export default function CategoriesGrid() {
  return (
    <section className="py-20 md:py-28 bg-[#F4F4F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Supply"
          heading="Product Categories"
          subtext="From hand pallet trucks to hydraulic lifts — everything your warehouse needs."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((cat) => (
            <CategoryCard key={cat.slug} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
