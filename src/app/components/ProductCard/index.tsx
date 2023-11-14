import Image from "next/image";
import { IconClient } from "../IconClient";

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  desc: string;
}

export function ProductCard({ image, title, price, desc }: ProductCardProps) {
  return (
    <div className="bg-[#fff] rounded-lg w-56 h-[17rem] relative">
      <div className="m-4">
        <div className="flex justify-center">
          <Image src={image} alt="Product" height={120} width={120} />
        </div>

        <div className="flex items-center">
          <h1 className="text-[#2C2C2C] text-base font-normal">{title}</h1>
          <span className="text-white bg-[#373737] text-sm font-bold py-1 px-2 rounded-lg h-7">
            RS{price}
          </span>
        </div>

        <p className="text-[#2C2C2C] text-xs font-light mt-2">{desc}</p>
      </div>

      <button className="bg-[#0F52BA]/90 text-white w-full absolute bottom-0 rounded-b-lg h-8 flex justify-center items-center gap-3">
        <IconClient icon="eva:shopping-bag-outline" />
        <span className="text-sm font-semibold uppercase">comprar</span>
      </button>
    </div>
  );
}
