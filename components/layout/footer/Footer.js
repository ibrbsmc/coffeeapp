import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import Container from "@/components/container";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/navigation";
import headerLogo from "@/public/images/header-logo.png";

export default function Footer() {
  return (
    <footer className="bg-black text-mauve-100 pt-16 pb-6 font-(family-name:--font-roboto)">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pb-12 border-b border-mauve-800">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={headerLogo}
                alt="Coffee App"
                className="h-14 w-14 object-cover"
              />
              <span className="font-(family-name:--font-merienda) text-lg">
                COFFEE APP
              </span>
            </Link>
            <p className="text-mauve-400 text-sm leading-relaxed max-w-xs">
              Carefully crafted coffee in every sip. Fresh beans, a warm
              atmosphere.
            </p>

            <div className="flex items-center gap-3 mt-2">
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

          <div className="flex flex-col gap-4">
            <h3 className="font-(family-name:--font-merienda) text-sm uppercase tracking-widest text-mauve-300">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-mauve-400 text-sm hover:text-mauve-100 transition-colors duration-300 flex items-center gap-1 group w-fit"
                >
                  {link.name}
                  <ArrowUpRight
                    size={12}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-(family-name:--font-merienda) text-sm uppercase tracking-widest text-mauve-300">
              Contact
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:ibrbsmc@gmail.com"
                className="text-mauve-400 text-sm hover:text-mauve-100 transition-colors duration-300 flex items-center gap-2"
              >
                <Mail size={14} />
                <span className="leading-none">ibrbsmc@gmail.com</span>
              </a>
              <a
                href="tel:+05428247506"
                className="text-mauve-400 text-sm hover:text-mauve-100 transition-colors duration-300 flex items-center gap-2"
              >
                <Phone size={14} />
                <span className="leading-none">+90 555 123 45 67</span>
              </a>
              <span className="text-mauve-400 text-sm flex items-center gap-2">
                <MapPin size={14} />
                <span className="leading-none">Istanbul, Turkey</span>
              </span>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-mauve-600 text-xs">
            © {new Date().getFullYear()} Coffee App. All rights reserved. |
            İbrahim Basmacı
          </p>
        </div>
      </Container>
    </footer>
  );
}
