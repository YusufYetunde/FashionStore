import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Products(product) {
  return (
    <div className="border-solid border-[rgba(173,_173,_173,_0.25)] bg-white w-full flex flex-col items-center p-[2px] border rounded-sm">
      <img src={product.imageSrc} alt={product.name} />
      <div className="bg-white flex flex-col gap-8 w-56 h-40 shrink-0 items-start p-2">
        <div className="flex flex-col gap-3 w-full items-start">
          <div className="flex flex-col gap-2 w-full items-start">
            <h3 className="text-xs text-[#adadad]">{product.category}</h3>
            <p className="font-semibold text-[#253d4e]">{product.name}</p>
          </div>
          <div className="text-xs text-[#adadad]">
            By <span className="text-[#3bb77e]">{product.brand}</span>
          </div>
        </div>
        <div className="self-stretch flex flex-row mr-px gap-12 items-center">
          <div className="flex flex-row gap-2 w-16 shrink-0 items-center">
            <div className="text-lg font-semibold text-[#3bb77e] self-start">
              ${product.price}
            </div>
            <div className="text-sm line-through font-medium text-[#adadad]">
              ${product.originalPrice}
            </div>
          </div>
          <button className="bg-[#def9ec] self-start flex flex-row justify-center gap-1 w-24 shrink-0 h-8 items-center rounded-sm">
            <div className="flex flex-col gap-px w-3 shrink-0 items-start">
              <AiOutlineShoppingCart className="text-[#3bb77e]" />
            </div>
            <Link href="/groceryaddtocart" className="text-sm font-medium text-[#3bb77e]">
              Add
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
