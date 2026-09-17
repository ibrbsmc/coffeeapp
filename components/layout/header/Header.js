"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/container";
import CartSheet from "@/components/CartSheet";
import { MobileHeader } from "./MobileHeader";
import { NAV_LINKS } from "@/lib/navigation";
import headerLogo from "@/public/images/header-logo.png";

export default function Header() {
  const pathname = usePathname();

  return (
    <Container>
      <header className="text-mauve-100 flex items-center justify-between gap-y-4 bg-transparent h-18 w-full">
        <nav className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <Image
              src={headerLogo}
              alt="Coffee App"
              className="h-16 w-16 object-cover"
            />
          </Link>
          <div className="w-px h-4 bg-mauve-100 mr-2" />
          <span className="font-(family-name:--font-merienda) typing-text">
            COFFEE APP
          </span>
        </nav>

        <nav className="hidden md:flex">
          <div className="flex items-center gap-8 font-(family-name:--font-merienda) text-sm">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`hover:text-mauve-300 transition-colors duration-300 ${
                  pathname === link.href &&
                  "underline underline-offset-8 decoration-mauve-300"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <CartSheet />
          </div>
        </nav>

        <nav className="md:hidden flex items-center gap-4">
          <CartSheet />
          <MobileHeader />
        </nav>
      </header>
    </Container>
  );
}
