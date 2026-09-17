"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AosProvider({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  // Sayfa geçişinde animasyonları yeniden tara
  useEffect(() => {
    AOS.refreshHard();
  }, [pathname]);

  return children;
}
