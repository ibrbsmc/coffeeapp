import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Container from "@/components/container";
import AddToCartButton from "@/components/AddToCartButton";
import { getProductBySlug, getAllProductsFlat } from "@/lib/getProducts";
import { getDiscountedPrice, formatPrice, DISCOUNT_RATE } from "@/lib/pricing";

export const revalidate = 3600;

// Build sırasında tüm ürünlerin detay sayfasını üretir
export async function generateStaticParams() {
  const products = await getAllProductsFlat();
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return { title: product.name };
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;

  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="text-mauve-100 font-(family-name:--font-roboto)">
      <Container>
        <section className="py-16 sm:py-24">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 text-mauve-400 text-sm mb-10 hover:text-mauve-100 transition-colors duration-300"
          >
            <ArrowLeft size={16} />
            <span className="leading-none">Back to Menu</span>
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex items-center justify-center rounded-2xl border border-mauve-800/50 p-8">
              <div className="relative w-80 h-80">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 80vw, 320px"
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div>
                <span className="text-xs uppercase tracking-widest text-mauve-400">
                  Product Detail
                </span>
                <h1 className="font-(family-name:--font-merienda) text-3xl sm:text-4xl font-bold mt-2">
                  {product.name}
                </h1>
                <div className="w-12 h-px bg-mauve-600 mt-8" />
              </div>

              <p className="text-mauve-400 text-sm leading-relaxed">
                {product.longDescription}
              </p>

              <div className="flex items-center gap-3">
                <span className="text-mauve-600 text-base line-through">
                  {formatPrice(product.price)}
                </span>
                <span className="text-mauve-100 font-bold text-2xl">
                  {formatPrice(getDiscountedPrice(product.price))}
                </span>
                <span className="text-xs text-mauve-400 border border-mauve-700 rounded-full px-2 py-0.5">
                  {DISCOUNT_RATE * 100}% OFF
                </span>
              </div>

              <AddToCartButton product={product} />
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
