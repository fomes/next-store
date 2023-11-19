"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { ProductCartItem } from "../ProductCartItem";
import { Product } from "@/types/product";
import { useSelector } from "react-redux";
import { selectTotalPrice } from "@/redux/cart/cartSelectors";

interface CartComponentProps {
  show?: boolean;
  cart: Product[];
  handleCloseCart: () => void;
}

export function CartComponent({
  show,
  cart,
  handleCloseCart,
}: CartComponentProps) {
  const totalPrice = useSelector(selectTotalPrice);

  return (
    <div
      className={`${
        show ? "translate-x-0" : "translate-x-full"
      } h-screen w-[30rem] bg-[#0F52BA] absolute z-10 top-0 right-0 py-9 pl-11 pr-[3.75rem] transition-all duration-500`}
    >
      <div>
        <h1 className="text-white text-3xl font-bold mb-[4.38rem]">
          Carrinho <br /> de Compras
        </h1>

        <Icon
          onClick={handleCloseCart}
          icon="carbon:close-filled"
          className="absolute right-[1.38rem] top-10 text-4xl rounded-full cursor-pointer transition-all duration-300 bg-white"
        />
      </div>

      <div className="flex flex-col gap-[1.38rem]">
        {cart.map((item: Product) => {
          return (
            <ProductCartItem
              id={item.id}
              key={item.id}
              name={item.name}
              photo={item.photo}
              price={item.price}
              quantity={item.quantity}
            />
          );
        })}
      </div>

      <div className="absolute bottom-[8.69rem] w-96">
        <div className="text-3xl font-bold text-white flex justify-between">
          <h1>Total:</h1> <h1>R$ {totalPrice}</h1>
        </div>
      </div>

      <div className="w-full h-24 bg-black text-white absolute bottom-0 left-0 flex justify-center items-center cursor-pointer hover:bg-black/80 transition-all duration-300 ">
        <h1 className="text-3xl font-bold">Finalizar Compra</h1>
      </div>
    </div>
  );
}
