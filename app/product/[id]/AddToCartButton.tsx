"use client";

import { useCart } from "@/context/CartContext";


export default function AddToCartButton({
  product,
}:{
  product:any;
}) {


  const { addToCart } = useCart();




  function handleAdd(){


    if(product.colors?.length > 0 && !product.selectedColor){

      alert("Please choose color");

      return;

    }



    if(!product.selectedSize){

      alert("Please choose size");

      return;

    }



    addToCart(product);


  }





  return (

    <button

      onClick={handleAdd}

      className="mt-8 rounded-lg bg-black px-8 py-4 text-white"

    >

      Add To Cart

    </button>

  );

}