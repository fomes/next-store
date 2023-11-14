"use client";

import { useContext } from "react";
import { ProductCard } from "./components/ProductCard";
import { ProductsContext } from "./context/productsContext";

export default function Home() {
  const { products } = useContext(ProductsContext);

  return (
    <div className="h-screen px-60 py-32 bg-[#F9F9F9]">
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
