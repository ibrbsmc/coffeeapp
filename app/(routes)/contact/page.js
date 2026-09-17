import Image from "next/image";
import Container from "@/components/container";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "./_components/ContactForm";
import { SOCIAL_LINKS } from "@/lib/navigation";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "ibrbsmc@gmail.com",
    href: "mailto:ibrbsmc@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+90 542 824 75 06",
    href: "tel:+905428247506",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "Kadıköy, Istanbul, Turkey",
    href: null,
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Mon – Sun, 08:00 – 22:00",
    href: null,
  },
];

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="text-mauve-100 font-(family-name:--font-roboto)">
      <section className="relative w-full h-72 sm:h-96 mt-2 overflow-hidden">
        <Image
          src="/images/carousel-3.jpg"
          alt="Contact Coffee App"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#121212] via-black/60 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="inline-block px-3 py-1 mb-3 text-xs uppercase tracking-widest text-mauve-300 border border-mauve-600 rounded-full">
            Get in Touch
          </span>
          <h1 className="font-(family-name:--font-merienda) text-3xl sm:text-5xl font-bold text-mauve-100">
            Contact Us
          </h1>
          <p className="mt-3 text-mauve-400 text-sm sm:text-base max-w-lg">
            Have a question, feedback, or just want to say hello? We&apos;d love
            to hear from you.
          </p>
        </div>
      </section>

      <Container>
        <section className="py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-2 flex flex-col gap-8">
              <div>
                <span className="text-xs uppercase tracking-widest text-mauve-400">
                  Contact Information
                </span>
                <h2 className="font-(family-name:--font-merienda) text-2xl font-bold mt-2">
                  Let&apos;s Talk
                </h2>
                <div className="w-12 h-px bg-mauve-600 mt-4" />
              </div>

              <div className="flex flex-col gap-5">
                {contactInfo.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-full border border-mauve-700 flex items-center justify-center shrink-0 group-hover:border-mauve-400 transition-colors duration-300">
                      <item.icon
                        size={16}
                        className="text-mauve-400 group-hover:text-mauve-200 transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-mauve-500">
                        {item.title}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm text-mauve-200 mt-0.5 block"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-mauve-200 mt-0.5">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

                <div>
                <p className="text-xs uppercase tracking-wider text-mauve-500 mb-3">
                  Follow Us
                </p>
                <div className="flex items-center gap-3">
                  {SOCIAL_LINKS.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="w-9 h-9 rounded-full border border-mauve-700 flex items-center justify-center text-mauve-400 hover:text-mauve-100 hover:border-mauve-400 transition-all duration-300"
                    >
                      <social.icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </section>
      </Container>

      <section className="border-t border-mauve-800/50">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48173.09590924158!2d29.0!3d40.99!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9e7a37e1d63%3A0x2c9b4e38e45bc7c0!2sKad%C4%B1k%C3%B6y%2C%20Istanbul!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
          width="100%"
          height="400"
          style={{
            border: 0,
            filter: "invert(90%) hue-rotate(180deg) grayscale(30%)",
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Coffee App Location"
        />
      </section>
    </div>
  );
}
