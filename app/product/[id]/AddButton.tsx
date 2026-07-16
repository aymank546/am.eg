"use client";

import { useCart } from "@/context/CartContext";

export default function AddButton({
  product,
}: {
  product:any;
}) {

  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      className="mt-8 rounded bg-black px-8 py-3 text-white"
    >
      Add To Cart
    </button>
  );
}