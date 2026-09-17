"use client";
import { useState } from "react";
import { toast } from "sonner";
import useCartStore from "@/store/cartStore";
import { CATEGORIES } from "@/lib/categories";
import { ProductGridCard } from "@/components/ProductCard";

export default function MenuContent({ products }) {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].key);

  const addToCart = useCartStore((state) => state.addToCart);

  const activeItems = products[activeCategory] ?? [];

  function handleAddToCart(product) {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  }

  return (
    <div className="font-(family-name:--font-merienda)">
      <div className="flex justify-center gap-6 mb-12">
        {CATEGORIES.map((category) => {
          const isActive = category.key === activeCategory;

          return (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              aria-pressed={isActive}
              className={`text-sm pb-2 border-b-2 transition-colors duration-300 cursor-pointer
                ${isActive
                  ? "text-mauve-100 border-mauve-100"
                  : "text-mauve-500 border-transparent hover:text-mauve-300"
                }`}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      {activeItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeItems.map((product, index) => (
            <div
              key={product.slug}
              data-aos="fade-up"
              data-aos-delay={index * 50}
              // AOS'un eklediği sınıflar hydration uyarısı vermesin diye
              suppressHydrationWarning
            >
              <ProductGridCard product={product} onAddToCart={handleAddToCart} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-mauve-400 text-center mt-8 text-sm italic">
          Coming soon...
        </p>
      )}
    </div>
  );
}
