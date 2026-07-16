"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";


export default function CheckoutPage() {


  const { cart } = useCart();



  const [name, setName] = useState("");

  const [phone, setPhone] = useState("");

  const [address, setAddress] = useState("");




  const subtotal = cart.reduce(

    (sum:number, item:any) =>

      sum + item.price * item.quantity,

    0

  );



  const shipping = 80;


  const total = subtotal + shipping;






  async function submitOrder(){



    const orderItems = cart.map((item:any)=>({


      productId: item.id,


      quantity: item.quantity,


      price: item.price,


      color: item.selectedColor || "",


    }));







    const res = await fetch("/api/products/orders",{


      method:"POST",


      headers:{


        "Content-Type":"application/json"


      },



      body:JSON.stringify({


        name,

        phone,

        address,

        total,

        shipping,

        items: orderItems,


      })


    });





    const data = await res.json();



    console.log(data);




    if(res.ok){


      alert("Order Confirmed");


      setName("");

      setPhone("");

      setAddress("");



    }else{


      alert("Order Failed");


    }



  }






  return (


    <main className="min-h-screen bg-gray-100 p-8">


      <div className="mx-auto max-w-xl rounded-2xl bg-white p-8 shadow">


        <h1 className="mb-8 text-4xl font-bold">

          Checkout

        </h1>




        <div className="space-y-4">



          <input

            className="w-full rounded border p-3"

            placeholder="Name"

            value={name}

            onChange={(e)=>setName(e.target.value)}

          />




          <input

            className="w-full rounded border p-3"

            placeholder="Phone"

            value={phone}

            onChange={(e)=>setPhone(e.target.value)}

          />





          <textarea

            className="w-full rounded border p-3"

            placeholder="Address"

            value={address}

            onChange={(e)=>setAddress(e.target.value)}

          />






          <div className="rounded-lg border p-4 space-y-2">


            <div className="flex justify-between">

              <span>Subtotal</span>

              <span>{subtotal} EGP</span>

            </div>




            <div className="flex justify-between">

              <span>Shipping</span>

              <span>{shipping} EGP</span>

            </div>




            <hr />




            <div className="flex justify-between text-xl font-bold">

              <span>Total</span>

              <span>{total} EGP</span>

            </div>


          </div>





          <button

            onClick={submitOrder}

            className="w-full rounded-lg bg-black py-3 text-white"

          >

            Confirm Order

          </button>



        </div>


      </div>


    </main>

  );

}