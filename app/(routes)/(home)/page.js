import Carousel from "@/components/Carousel";
import FeatureSection from "./_components/FeatureSection";
import DrinkSection from "./_components/DrinkSection";
import { getAllProducts } from "@/lib/getProducts";

// Sayfa saatte bir arka planda yeniden üretilir (ISR)
export const revalidate = 3600;

export default async function Home() {
  const products = await getAllProducts();

  return (
    <div className="flex flex-col">
      <Carousel />

      <div className="py-12 border-b border-mauve-800/30">
        <FeatureSection />
      </div>

      <div className="py-12">
        <DrinkSection products={products} />
      </div>
    </div>
  );
}
