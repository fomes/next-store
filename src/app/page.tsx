"use client";

import { ProductCard } from "@/components/ProductCard";
import { ProductsContext } from "@/context/productsContext";
import { useContext } from "react";

export default function Home() {
  const { products } = useContext(ProductsContext);

  return (
    <div className="h-screen px-60 py-20 bg-[#F9F9F9] flex flex-col items-center">
      <div className="flex gap-4 flex-wrap w-[60rem]">
        {products.map((product) => {
          return (
            <ProductCard
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
