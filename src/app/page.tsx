"use client";

import { ProductCard } from "@/components/ProductCard";
import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import { api } from "@/services/api";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    api.get("").then((res) => setProducts(res.data.products));
  }, []);

  return (
    <div className="h-screen px-60 py-20 bg-[#F9F9F9] flex flex-col items-center">
      <div className="flex gap-4 flex-wrap w-[60rem]">
        {products.map((product: Product) => {
          return (
            <ProductCard
              id={product.id}
              key={product.id}
              name={product.name}
              photo={product.photo}
              price={product.price}
            />
          );
        })}
      </div>
    </div>
  );
}
