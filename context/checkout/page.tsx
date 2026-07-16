"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";


export default function CheckoutPage() {


  const { cart } = useCart();


  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");



  const total = cart.reduce(
    (sum:number, item:any) =>
      sum + item.price * item.quantity,
    0
  );



  function submitOrder(){

    alert("Order Sent Successfully");

  }



  return (

    <main className="min-h-screen bg-gray-100 p-8">


      <div className="mx-auto max-w-xl bg-white rounded-2xl p-8 shadow">


        <h1 className="text-4xl font-bold mb-8">
          Checkout
        </h1>



        <div className="space-y-4">


          <input
            className="border p-3 w-full rounded"
            placeholder="Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />



          <input
            className="border p-3 w-full rounded"
            placeholder="Phone"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
          />



          <textarea
            className="border p-3 w-full rounded"
            placeholder="Address"
            value={address}
            onChange={(e)=>setAddress(e.target.value)}
          />



          <h2 className="text-2xl font-bold">
            Total: {total} EGP
          </h2>



          <button
            onClick={submitOrder}
            className="w-full bg-black text-white py-3 rounded-lg"
          >
            Place Order
          </button>


        </div>


      </div>


    </main>

  );

}