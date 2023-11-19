"use client";

import { IconClient } from "../IconClient";
import { CartComponent } from "../CartComponent";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectProductsCount } from "@/redux/cart/cartSelectors";

export function Header() {
  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  const { products } = useSelector((rootReducer: any) => rootReducer.cartSlice);

  const productsCount = useSelector(selectProductsCount);

  return (
    <>
      <div className="h-[101px] bg-[#0F52BA]/90 text-white py-6">
        <div className="flex items-center gap-2">
          <h1 className="text-[40px] font-semibold ml-16">NEXT</h1>{" "}
          <span className="text-xl font-light">Store</span>
        </div>

        <button
          onClick={handleShowCart}
          className="absolute right-20 top-7 w-[90px] h-11 bg-white hover:bg-white/90 transition-all duration-300 rounded-lg text-black flex justify-center items-center gap-4"
        >
          <IconClient icon="mdi:cart" />
          <span className="text-[18px] font-bold">{productsCount}</span>
        </button>
      </div>
      <CartComponent
        show={showCart}
        handleCloseCart={handleCloseCart}
        cart={products}
      />
    </>
  );
}
