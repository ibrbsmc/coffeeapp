import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getDiscountedPrice } from "@/lib/pricing";

// Ürünü sepet kaydına indirger (gereksiz alanları atar)
function toCartItem(product) {
  return {
    slug: product.slug,
    name: product.name,
    image: product.image,
    price: product.price,
    quantity: 1,
  };
}

const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],

      // localStorage okunduğunda true olur
      hydrated: false,
      setHydrated: () => set({ hydrated: true }),

      // Sepette varsa adedi artırır, yoksa ekler
      addToCart: (product) =>
        set((state) => {
          const exists = state.cart.find((item) => item.slug === product.slug);

          if (exists) {
            return {
              cart: state.cart.map((item) =>
                item.slug === product.slug
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }

          return { cart: [...state.cart, toCartItem(product)] };
        }),

      // Adedi azaltır, 0'a inerse ürünü çıkarır
      decreaseQuantity: (slug) =>
        set((state) => ({
          cart: state.cart
            .map((item) =>
              item.slug === slug ? { ...item, quantity: item.quantity - 1 } : item
            )
            .filter((item) => item.quantity > 0),
        })),

      removeFromCart: (slug) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.slug !== slug),
        })),

      clearCart: () => set({ cart: [] }),

      getTotalCount: () =>
        get().cart.reduce((total, item) => total + item.quantity, 0),

      getTotalPrice: () =>
        get().cart.reduce(
          (total, item) => total + getDiscountedPrice(item.price) * item.quantity,
          0
        ),
    }),
    {
      name: "coffee-app-cart",
      skipHydration: true,
      onRehydrateStorage: () => (state) => state?.setHydrated(),
    }
  )
);

export default useCartStore;
