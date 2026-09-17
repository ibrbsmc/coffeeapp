import Image from "next/image";
import Container from "@/components/container";

const features = [
  {
    src: "/images/drawing-coffee.png",
    alt: "Coffee beans",
    title: "Crafted with Passion",
    text: "Our journey began with a passion for coffee. Along the way, we paired it with carefully curated flavors to craft a truly unique experience.",
  },
  {
    src: "/images/drawing-coffee-2.png",
    alt: "Coffee cup",
    title: "Unique Spaces",
    text: "We handpick each of our locations and design them with a distinctive architectural concept that feels both comfortable and inspiring.",
  },
  {
    src: "/images/drawing-coffee-mac.png",
    alt: "Coffee machine",
    title: "Global Beans",
    text: "From day one, we have sourced beans from different corners of the world and blended them with care to achieve the cup every time.",
  },
  {
    src: "/images/drawing-palace.webp",
    alt: "Coffee shop",
    title: "Growing Together",
    text: "With a growing number of locations, we continue to bring great coffee lovers a refined and flavorful experience they can count on.",
  },
];

export default function FeatureSection() {
  return (
    <section className="w-full font-(family-name:--font-roboto)">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-mauve-100 font-(family-name:--font-merienda)">
            What Sets Us Apart
          </h2>
          <p className="mt-2 text-mauve-400 text-sm max-w-md mx-auto">
            The values behind every cup we serve.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.src}
              data-aos="fade-down"
              data-aos-delay={index * 150}
              // AOS'un eklediği sınıflar hydration uyarısı vermesin diye
              suppressHydrationWarning
              className="flex flex-col items-center text-center p-6 rounded-2xl border border-mauve-800/30 hover:border-mauve-800/95 transition-colors duration-300"
            >
              <div className="mb-4 h-32 w-32">
                <Image
                  src={feature.src}
                  alt={feature.alt}
                  width={128}
                  height={128}
                  className="h-full w-full object-contain brightness-0 invert"
                />
              </div>
              <h3 className="text-sm font-bold text-mauve-100 mb-2 font-(family-name:--font-merienda)">
                {feature.title}
              </h3>
              <p className="text-xs leading-relaxed text-mauve-400">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
