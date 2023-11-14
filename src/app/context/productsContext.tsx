"use client";

import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface ProductsProps {
  products: any[];
}

const defaultState = {
  products: [],
};

export const ProductsContext = createContext<ProductsProps>(defaultState);

export default function ProductsProvider({ children }: PropsWithChildren) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("").then((res) => setProducts(res.data.products));
  }, []);

  const contextValue = {
    products,
    setProducts,
  };

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
}
