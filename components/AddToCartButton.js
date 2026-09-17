"use client";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import useCartStore from "@/store/cartStore";

export default function AddToCartButton({ product }) {
  const addToCart = useCartStore((state) => state.addToCart);

  function handleClick() {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  }

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center justify-center gap-2 bg-mauve-100 text-black px-5 py-2.5 rounded-md text-sm font-(family-name:--font-merienda) hover:bg-mauve-300 transition-colors duration-300 cursor-pointer w-full sm:w-auto sm:self-start"
    >
      <ShoppingCart size={14} />
      Add to Cart
    </button>
  );
}
