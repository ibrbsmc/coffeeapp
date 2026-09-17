import { cache } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { CATEGORIES } from "@/lib/categories";

// Firestore belgesini düz nesneye çevirir
function toProduct(doc) {
  return { id: doc.id, ...doc.data() };
}

// Tek kategorinin ürünlerini getirir
export const getProductsByCategory = cache(async (category) => {
  const q = query(
    collection(db, "products"),
    where("category", "==", category)
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map(toProduct);
});

// Tüm kategorileri paralel getirir
export const getAllProducts = cache(async () => {
  const lists = await Promise.all(
    CATEGORIES.map((category) => getProductsByCategory(category.key))
  );

  return Object.fromEntries(
    CATEGORIES.map((category, index) => [category.key, lists[index]])
  );
});

// Slug'a göre tek ürün getirir, yoksa null
export const getProductBySlug = cache(async (slug) => {
  const q = query(collection(db, "products"), where("slug", "==", slug));
  const snapshot = await getDocs(q);

  if (snapshot.empty) return null;
  return toProduct(snapshot.docs[0]);
});

// Tüm ürünler tek düz dizi halinde
export const getAllProductsFlat = cache(async () => {
  const grouped = await getAllProducts();
  return Object.values(grouped).flat();
});
