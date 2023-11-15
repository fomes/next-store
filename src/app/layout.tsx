import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";
import ProductsProvider from "@/context/productsContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
  title: "Next store",
  description: "Made by Fomes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProductsProvider>
      <html lang="en">
        <body className={montserrat.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ProductsProvider>
  );
}
