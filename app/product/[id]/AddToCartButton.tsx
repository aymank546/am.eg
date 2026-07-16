"use client";

import { useCart } from "@/context/CartContext";


export default function AddToCartButton({
  product,
}:{
  product:any;
}) {


  const { addToCart } = useCart();



  return (

    <button
      onClick={() => addToCart(product)}
      className="mt-8 rounded-lg bg-black px-8 py-4 text-white"
    >
      Add To Cart
    </button>

  );

}