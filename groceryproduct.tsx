"use client";

import { useState } from "react";
import Product from "./products";

export default function GroceryProduct() {
  const [selectedOption, setSelectedOption] = useState("pickup");

  const handleToggle = () => {
    setSelectedOption(selectedOption === "pickup" ? "delivery" : "pickup");
  };

 
  const pickupColorClass =
    selectedOption === "pickup"
      ? "bg-[#eef7ee] text-[#3bb77e] border-[#3bb77e]"
      : "bg-[#ffffff] text-[#9b9b9b] border-[#9b9b9b]";
  const deliveryColorClass =
    selectedOption === "delivery"
      ? "bg-[#eef7ee] text-[#3bb77e] border-[#3bb77e]"
      : "bg-[#ffffff] text-[#9b9b9b] border-[#9b9b9b]";

  return (
    <div className="w-full">
      <div className="w-full flex justify-between items-center my-10 px-32">
        <h2>Vegetable</h2>
        <div>
          <div className="flex flex-col w-[358px]">
            <div className="overflow-hidden bg-[#f1f3f1] flex flex-row items-center px-1 rounded-[23px]">
              <button
                id="ButtonMainDefault"
                className={`bg-transparent border-solid overflow-hidden flex flex-col w-[182px] h-8 items-center my-1 p-2 border rounded-full transition-colors duration-300 ${pickupColorClass}`}
                onClick={handleToggle}
              >
                <div className="text-sm  font-semibold tracking-[-0.17] leading-[16.8px]">
                  Pickup
                </div>
              </button>
              <button
                className={`bg-transparent overflow-hidden flex flex-col w-[182px] h-8 items-center my-1 p-2 border-none transform rounded-full transition-colors duration-300 ${deliveryColorClass}`}
                onClick={handleToggle}
              >
                <div className="text-sm  font-semibold tracking-[-0.17] leading-[16.8px]">
                  Delivery
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="px-32">
      {selectedOption === "pickup" ? <Product /> : null}
      </div>
    </div>
  );
}
