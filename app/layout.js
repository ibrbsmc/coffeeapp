import "./globals.css";
import { Merienda, Roboto } from "next/font/google";
import { Toaster } from "sonner";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import Campaign from "@/components/layout/campaign/Campaign";
import AosProvider from "./providers/AosProvider";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const merienda = Merienda({
  variable: "--font-merienda",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: {
    default: "Coffee App",
    template: "%s | Coffee App",
  },
  description: "Carefully crafted coffee in every sip",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${merienda.variable} antialiased min-h-screen flex flex-col`}
      >
        <AosProvider>
          <Campaign />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster position="top-right" theme="dark" />
        </AosProvider>
      </body>
    </html>
  );
}
