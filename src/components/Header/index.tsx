import { IconClient } from "../IconClient";


export function Header() {
  return (
    <div className="h-[101px] bg-[#0F52BA]/90 text-white py-6">
      <div className="flex items-center gap-2">
        <h1 className="text-[40px] font-semibold ml-16">NEXT</h1>{" "}
        <span className="text-xl font-light">Store</span>
      </div>

      <button className="absolute right-20 top-7 w-[90px] h-11 bg-white hover:bg-white/90 transition-all duration-300 rounded-lg text-black flex justify-center items-center gap-4">
        <IconClient icon="mdi:cart" />
        <span className="text-[18px] font-bold">0</span>
      </button>
    </div>
  );
}
