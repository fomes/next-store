"use client";

import { IconClient } from "../IconClient";
import { CartComponent } from "../CartComponent";
import { Product } from "@/types/product";
import { useState } from "react";

export function Header(cart: Product[]) {
  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

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
          <span className="text-[18px] font-bold">{cart.length}</span>
        </button>
      </div>
      <CartComponent
        show={showCart}
        handleCloseCart={handleCloseCart}
        cart={[]}
      />
    </>
  );
}
