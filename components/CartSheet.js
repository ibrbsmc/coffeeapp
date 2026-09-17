"use client";
import { useEffect } from "react";
import Image from "next/image";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "@/components/ui/sheet";
import { ShoppingCart, Trash2, Plus, Minus } from "lucide-react";
import useCartStore from "@/store/cartStore";
import { getDiscountedPrice, formatPrice } from "@/lib/pricing";

export default function CartSheet() {
  const cart = useCartStore((state) => state.cart);
  const hydrated = useCartStore((state) => state.hydrated);
  const addToCart = useCartStore((state) => state.addToCart);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);
  const getTotalCount = useCartStore((state) => state.getTotalCount);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);

  // Render sonrası okunur, hydration uyuşmazlığını önler
  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  const totalCount = getTotalCount();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="cart-button bg-mauve-100 text-black px-2 py-1.5 md:px-3 md:py-1 rounded-md flex items-center cursor-pointer relative">
          <ShoppingCart size={14} />
          <span className="hidden md:inline ml-2 text-sm">Cart</span>

          {hydrated && (
            <span className="absolute -top-2 -right-2 bg-mauve-400 text-mauve-100 rounded-full text-xs flex items-center justify-center w-4 h-4">
              {totalCount}
            </span>
          )}
        </button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="bg-[#1a1a1a] border-mauve-800 text-mauve-100 flex flex-col font-(family-name:--font-roboto)"
      >
        <SheetHeader>
          <SheetTitle className="text-mauve-100 font-(family-name:--font-merienda)">
            Your Cart
          </SheetTitle>
          <SheetDescription className="text-mauve-500">
            {totalCount === 0
              ? "Your cart is empty."
              : `${totalCount} item(s) in your cart.`}
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-4">
          {cart.map((item) => (
            <div
              key={item.slug}
              className="flex items-center gap-3 py-3 border-b border-mauve-800/50"
            >
              <div className="w-14 h-14 shrink-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={56}
                  height={56}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex-1">
                <p className="text-sm font-bold">{item.name}</p>

                <div className="flex items-center gap-2 mt-1">
                  <button
                    onClick={() => decreaseQuantity(item.slug)}
                    aria-label={`${item.name} adedini azalt`}
                    className="w-5 h-5 rounded border border-mauve-700 flex items-center justify-center text-mauve-400 hover:text-mauve-100 hover:border-mauve-400 transition-colors duration-300 cursor-pointer"
                  >
                    <Minus size={11} />
                  </button>

                  <span className="text-xs text-mauve-300 w-4 text-center">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => addToCart(item)}
                    aria-label={`${item.name} adedini artır`}
                    className="w-5 h-5 rounded border border-mauve-700 flex items-center justify-center text-mauve-400 hover:text-mauve-100 hover:border-mauve-400 transition-colors duration-300 cursor-pointer"
                  >
                    <Plus size={11} />
                  </button>

                  <span className="text-xs text-mauve-400 ml-1">
                    {formatPrice(getDiscountedPrice(item.price) * item.quantity)}
                  </span>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(item.slug)}
                aria-label={`${item.name} ürününü sepetten çıkar`}
                className="text-mauve-600 hover:text-red-400 transition-colors duration-300 cursor-pointer"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>

        {cart.length > 0 && (
          <SheetFooter className="border-t border-mauve-800/50">
            <div className="flex items-center justify-between w-full">
              <span className="text-sm text-mauve-400">Total</span>
              <span className="text-lg font-bold text-mauve-100">
                {formatPrice(getTotalPrice())}
              </span>
            </div>

            <button
              onClick={clearCart}
              className="w-full bg-mauve-100 text-black py-2.5 rounded-md text-sm font-(family-name:--font-merienda) hover:bg-mauve-300 transition-colors duration-300 cursor-pointer"
            >
              Clear Cart
            </button>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}
