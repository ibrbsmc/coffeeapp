import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { getDiscountedPrice, formatPrice } from "@/lib/pricing";

// Ana sayfa carousel'indeki kart
export function ProductSlideCard({ product }) {
  return (
    <Link
      href={`/menu/${product.slug}`}
      className="group/card h-56 flex items-center justify-center rounded-xl overflow-hidden relative bg-[#292929]"
    >
      <div className="relative w-50 h-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 80vw, (max-width: 1024px) 30vw, 200px"
          className="object-contain"
        />
      </div>

      <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
        <span className="text-sm text-mauve-100 font-(family-name:--font-merienda)">
          {product.name}
        </span>
      </div>
    </Link>
  );
}

// Menü ızgarasındaki kart
export function ProductGridCard({ product, onAddToCart }) {
  return (
    <div className="group rounded-2xl border border-mauve-800/50 p-5 flex flex-col items-center text-center hover:border-mauve-600 transition-colors duration-300">
      <Link href={`/menu/${product.slug}`} className="flex flex-col items-center">
        <div className="relative w-40 h-40 mb-4">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 60vw, (max-width: 1024px) 30vw, 160px"
            className="object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <h3 className="font-(family-name:--font-merienda) text-base font-bold">
          {product.name}
        </h3>
        <p className="text-mauve-500 text-xs mt-1">{product.description}</p>
      </Link>

      <div className="flex items-center justify-between w-full mt-4 pt-4 border-t border-mauve-800/50">
        <div className="flex items-center gap-2">
          <span className="text-mauve-600 text-xs line-through">
            {formatPrice(product.price)}
          </span>
          <span className="text-mauve-300 font-bold text-sm">
            {formatPrice(getDiscountedPrice(product.price))}
          </span>
        </div>

        <button
          onClick={() => onAddToCart(product)}
          className="flex items-center gap-1.5 text-xs text-mauve-400 hover:text-mauve-100 transition-colors duration-300 cursor-pointer"
        >
          <ShoppingCart size={14} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
