"use client";

import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Product } from "@/types/product";
import { useDispatch } from "react-redux";
import {
  decreaseProductQtd,
  increaseProductQtd,
  removeProduct,
} from "@/redux/cart/slice";

export function ProductCartItem(product: Product) {
  const dispatch = useDispatch();

  const handleIncreaseClick = () => {
    dispatch(increaseProductQtd(product.id));
  };

  const handleDecreaseClick = () => {
    dispatch(decreaseProductQtd(product.id));
  };

  const handleDeleteCartItem = () => {
    dispatch(removeProduct(product.id));
  };

  return (
    <div className="w-96 h-24 bg-white flex px-[1.44rem] py-7 justify-between items-center [box-shadow:-2px_2px_10px_0px_rgba(0,_0,_0,_0.05)] rounded-lg relative">
      <Icon
        onClick={handleDeleteCartItem}
        icon="carbon:close-filled"
        className="absolute w-5 h-5 -right-[0.425rem] -top-[0.425rem] text-4xl rounded-full cursor-pointer transition-all duration-300 bg-white"
      />

      <div className="flex items-center gap-[1.31rem]">
        <div className="w-[2.8rem] h-[3.56rem] bg-slate-500 flex ">
          <Image
            src={product.photo}
            alt="Product"
            width={44.8}
            height={56.96}
          />
        </div>

        <p className="w-28 text-[0.8125]">{product.name}</p>
      </div>

      <span className="text-[0.5rem] font-normal absolute top-7 right-[9.3rem]">
        Qtd:
      </span>
      <div className="flex gap-10">
        <div>
          <div className="flex items-center font-bold text-sm h-[1.1875rem] gap-2 py-1 px-2 rounded border-[0.3px] border-[solid] border-[#BFBFBF] select-none">
            <span className="cursor-pointer" onClick={handleDecreaseClick}>
              -
            </span>
            <span className="">{product.quantity}</span>
            <span className="cursor-pointer" onClick={handleIncreaseClick}>
              +
            </span>
          </div>
        </div>

        <span className="text-sm font-bold">
          R${Number(product.price).toFixed(0)}
        </span>
      </div>
    </div>
  );
}
