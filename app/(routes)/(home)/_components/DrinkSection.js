"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Container from "@/components/container";
import { CATEGORIES } from "@/lib/categories";
import { ProductSlideCard } from "@/components/ProductCard";

const tabStyle =
  "border-0 border-b-2 border-white rounded-none bg-transparent text-mauve-400 hover:text-white transition-colors duration-200 data-[state=active]:text-white data-[state=active]:bg-transparent";

function ProductCarousel({ items }) {
  return (
    <div className="product-carousel w-full mt-6 relative isolate">
      <Swiper
        slidesPerView={3}
        spaceBetween={24}
        loop
        grabCursor
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        modules={[Navigation, Autoplay]}
        className="w-full"
      >
        {items.map((item) => (
          <SwiperSlide key={item.slug}>
            <ProductSlideCard product={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default function DrinkSection({ products }) {
  return (
    <section className="w-full font-(family-name:--font-roboto)">
      <Container>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-mauve-100 font-(family-name:--font-merienda)">
            What We Offer
          </h2>
          <p className="mt-2 text-mauve-400 text-sm max-w-md mx-auto">
            Explore our carefully crafted drinks, fresh bites, and more.
          </p>
        </div>

        <Tabs
          defaultValue={CATEGORIES[0].key}
          className="w-full font-(family-name:--font-roboto)"
        >
          <div className="flex justify-center mt-4">
            <TabsList className="bg-transparent gap-4 justify-center">
              {CATEGORIES.map((category) => (
                <TabsTrigger
                  key={category.key}
                  value={category.key}
                  className={tabStyle}
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {CATEGORIES.map((category) => {
            const items = products[category.key] ?? [];

            return (
              <TabsContent key={category.key} value={category.key}>
                {items.length > 0 ? (
                  <ProductCarousel items={items} />
                ) : (
                  <p className="text-mauve-400 text-center mt-8">
                    Coming soon...
                  </p>
                )}
              </TabsContent>
            );
          })}
        </Tabs>
      </Container>
    </section>
  );
}
