import { ProductCard } from "./components/ProductCard";

export default function Home() {
  return (
    <div className="h-screen p-60 bg-[#F9F9F9]">
      <ProductCard
        image="/products/watch.png"
        price="399"
        title="Apple Watch Series 4 GPS"
        desc="Redesigned from scratch and completely revised."
      />
    </div>
  );
}
