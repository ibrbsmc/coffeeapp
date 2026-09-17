import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";
import { Coffee, Leaf, Users, MapPin, ArrowRight } from "lucide-react";

const stats = [
  { number: "12+", label: "Years of Experience" },
  { number: "50K+", label: "Happy Customers" },
  { number: "35+", label: "Coffee Varieties" },
  { number: "8", label: "Locations" },
];

const values = [
  {
    icon: Coffee,
    title: "Crafted with Passion",
    description:
      "Every cup we serve reflects years of dedication to the art of coffee making. We obsess over every detail, from bean selection to the final pour.",
  },
  {
    icon: Leaf,
    title: "Sustainably Sourced",
    description:
      "We partner with ethical farms across the globe, ensuring fair wages and eco-friendly practices that protect the land for future generations.",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "More than a coffee shop — we're a gathering place. Our spaces are designed to bring people together over great conversation and even better coffee.",
  },
  {
    icon: MapPin,
    title: "Locally Rooted",
    description:
      "Born in Istanbul, we carry the spirit of Turkish hospitality in everything we do. Each location reflects the character of its neighborhood.",
  },
];

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="text-mauve-100 font-(family-name:--font-roboto)">
      <section className="relative w-full h-72 sm:h-96 mt-2 overflow-hidden">
        <Image
          src="/images/carousel-2.jpg"
          alt="About Coffee App"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#121212] via-black/60 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="inline-block px-3 py-1 mb-3 text-xs uppercase tracking-widest text-mauve-300 border border-mauve-600 rounded-full">
            Our Story
          </span>
          <h1 className="font-(family-name:--font-merienda) text-3xl sm:text-5xl font-bold text-mauve-100">
            About Us
          </h1>
          <p className="mt-3 text-mauve-400 text-sm sm:text-base max-w-lg">
            A journey that started with a single cup and grew into a passion
            shared across the city.
          </p>
        </div>
      </section>

      <Container>
        <section className="py-16 sm:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div data-aos="fade-right" suppressHydrationWarning className="relative h-80 sm:h-112 rounded-2xl overflow-hidden">
              <Image
                src="/images/carousel-4.jpg"
                alt="Our coffee story"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>

                  <div data-aos="fade-left" suppressHydrationWarning className="flex flex-col gap-5">
              <span className="text-xs uppercase tracking-widest text-mauve-400">
                Est. 2013
              </span>
              <h2 className="font-(family-name:--font-merienda) text-2xl sm:text-3xl font-bold">
                From Bean to Cup
              </h2>
              <div className="w-12 h-px bg-mauve-600" />
              <p className="text-mauve-400 text-sm leading-relaxed">
                What began as a small roastery in Istanbul has evolved into a
                beloved coffee destination. We believed that great coffee
                shouldn&apos;t be complicated it should be honest, carefully
                prepared, and enjoyed in a space that feels like home.
              </p>
              <p className="text-mauve-400 text-sm leading-relaxed">
                Over the years, we&apos;ve traveled to coffee farms in Ethiopia,
                Colombia, and Guatemala, building relationships with growers who
                share our commitment to quality. Every bean we source tells a
                story, and every cup we serve carries that story forward.
              </p>
              <Link
                href="/menu"
                className="flex items-center gap-2 text-mauve-300 text-sm mt-2 group w-fit hover:text-mauve-100 transition-colors duration-300"
              >
                Explore Our Menu
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </Link>
            </div>
          </div>
        </section>
      </Container>

      <section className="border-y border-mauve-800/50 py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                suppressHydrationWarning
                className="text-center"
              >
                <p className="font-(family-name:--font-merienda) text-3xl sm:text-4xl font-bold text-mauve-100">
                  {stat.number}
                </p>
                <p className="mt-2 text-mauve-500 text-xs uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Container>
        <section className="py-16 sm:py-24">
          <div data-aos="fade-up" suppressHydrationWarning className="text-center mb-12">
            <h2 className="font-(family-name:--font-merienda) text-2xl sm:text-3xl font-bold">
              What We Stand For
            </h2>
            <p className="mt-3 text-mauve-400 text-sm max-w-md mx-auto">
              The principles that guide every decision we make, from sourcing to
              serving.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                suppressHydrationWarning
                className="group flex flex-col items-center text-center p-6 rounded-2xl border border-transparent hover:border-mauve-800 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full border border-mauve-700 flex items-center justify-center mb-4 group-hover:border-mauve-400 transition-colors duration-300">
                  <value.icon
                    size={20}
                    className="text-mauve-400 group-hover:text-mauve-200 transition-colors duration-300"
                  />
                </div>
                <h3 className="font-(family-name:--font-merienda) text-sm font-bold mb-2">
                  {value.title}
                </h3>
                <p className="text-mauve-500 text-xs leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Container>

      <section className="relative w-full h-64 sm:h-80 overflow-hidden">
        <Image
          src="/images/carousel-5.jpg"
          alt="Visit us"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div data-aos="fade-up" suppressHydrationWarning className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h2 className="font-(family-name:--font-merienda) text-2xl sm:text-3xl font-bold mb-3">
            Come Say Hello
          </h2>
          <p className="text-mauve-400 text-sm max-w-md mb-6">
            We&apos;d love to welcome you. Stop by any of our locations and
            experience the warmth of Coffee App firsthand.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-mauve-100 text-black px-5 py-2.5 rounded-md text-sm font-(family-name:--font-merienda) hover:bg-mauve-300 transition-colors duration-300"
          >
            Contact Us
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}