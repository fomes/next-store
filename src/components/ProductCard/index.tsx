import Image from "next/image";
import { IconClient } from "../IconClient";
import { useDispatch } from "react-redux";
import { addProduct } from "@/redux/cart/slice";
import { Product } from "@/types/product";

export function ProductCard(product: Product) {
  const dispatch = useDispatch();

  const handleUpdateCart = () => {
    dispatch(addProduct(product));
  };

  return (
    <div className="bg-[#fff] rounded-lg w-56 h-72 relative">
      <div className="m-3">
        <div className="flex justify-center">
          <Image src={product.photo} alt="Product" height={150} width={150} />
        </div>

        <div className="absolute bottom-10 w-52">
          <div className="flex items-center gap-1 justify-between">
            <h1 className="text-[#2C2C2C] text-sm font-normal">
              {product.name}
            </h1>
            <span className="text-white bg-[#373737] text-sm font-bold py-1 px-2 rounded-lg h-7 flex gap-[2px]">
              <span>RS</span>
              <span>{product.price}</span>
            </span>
          </div>

          <p className="text-[#2C2C2C] text-xs font-light mt-2">
            Redesigned from scratch and completely revised.
          </p>
        </div>
      </div>

      <button
        onClick={handleUpdateCart}
        className="bg-[#0F52BA]/90 hover:bg-[#0F52BA]/80 transition-all duration-300 text-white w-full absolute bottom-0 rounded-b-lg h-8 flex justify-center items-center gap-3"
      >
        <IconClient icon="eva:shopping-bag-outline" />
        <span className="text-sm font-semibold uppercase">comprar</span>
      </button>
    </div>
  );
}
