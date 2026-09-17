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
    (set) => ({
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
    }),
    {
      name: "coffee-app-cart",
      skipHydration: true,
      onRehydrateStorage: () => (state) => state?.setHydrated(),
    }
  )
);

// Selector olarak kullanılır: useCartStore(selectTotalCount).
// Bağımlı olduğu veri (cart) selector'ın kendi girdisinden geldiği için
// React Compiler yanlış memoize etmez; store action'ı olarak çağrılan bir
// fonksiyondan farklı olarak her state değişiminde yeniden hesaplanır.
export function selectTotalCount(state) {
  return state.cart.reduce((total, item) => total + item.quantity, 0);
}

export function selectTotalPrice(state) {
  return state.cart.reduce(
    (total, item) => total + getDiscountedPrice(item.price) * item.quantity,
    0
  );
}

export default useCartStore;
