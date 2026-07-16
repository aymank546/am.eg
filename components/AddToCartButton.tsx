"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";


export default function AddToCartButton({ product }: any) {

  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);


  return (
    <div className="space-y-5">


      <div className="flex items-center gap-4">

        <button
          onClick={() =>
            setQuantity(
              quantity > 1 ? quantity - 1 : 1
            )
          }
          className="bg-gray-200 px-4 py-2 rounded"
        >
          -
        </button>


        <span className="text-xl font-bold">
          {quantity}
        </span>


        <button
          onClick={() =>
            setQuantity(quantity + 1)
          }
          className="bg-gray-200 px-4 py-2 rounded"
        >
          +
        </button>

      </div>



      <button
        onClick={() =>
          addToCart({
            ...product,
            quantity
          })
        }
        className="bg-black text-white px-8 py-3 rounded-lg"
      >
        Add To Cart
      </button>


    </div>
  );
}