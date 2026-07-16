"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";


export default function CartPage() {


  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();



  const total = cart.reduce(
    (sum:number, item:any) =>
      sum + item.price * item.quantity,
    0
  );



  if(cart.length === 0){

    return (

      <main className="min-h-screen bg-gray-100 p-8">

        <div className="mx-auto max-w-xl rounded-xl bg-white p-10 text-center shadow">

          <h1 className="text-4xl font-bold">
            Your Cart is Empty
          </h1>


          <Link
            href="/shop"
            className="mt-6 inline-block rounded bg-black px-8 py-3 text-white"
          >
            Go Shopping
          </Link>


        </div>

      </main>

    );

  }





  return (

    <main className="min-h-screen bg-gray-100 p-8">


      <div className="mx-auto max-w-6xl">


        <h1 className="mb-8 text-5xl font-bold">
          Shopping Cart
        </h1>




        <div className="grid gap-8 md:grid-cols-3">



          {/* Products */}

          <div className="space-y-5 md:col-span-2">


          {cart.map((item:any)=>(


            <div
              key={item.id}
              className="flex items-center gap-5 rounded-xl bg-white p-5 shadow"
            >



              <div className="relative h-28 w-28 overflow-hidden rounded-lg bg-gray-100">


                {item.image && (

                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />

                )}


              </div>




              <div className="flex-1">


                <h2 className="text-xl font-bold">
                  {item.name}
                </h2>



                <p>
                  {item.price} EGP
                </p>




                <div className="mt-3 flex items-center gap-3">


                  <button
                    onClick={()=>decreaseQuantity(item.id)}
                    className="rounded bg-gray-200 px-3 py-1"
                  >
                    -
                  </button>



                  <span className="font-bold">
                    {item.quantity}
                  </span>



                  <button
                    onClick={()=>increaseQuantity(item.id)}
                    className="rounded bg-gray-200 px-3 py-1"
                  >
                    +
                  </button>



                </div>


              </div>





              <button
                onClick={()=>removeFromCart(item.id)}
                className="rounded bg-red-600 px-4 py-2 text-white"
              >
                Delete
              </button>



            </div>


          ))}


          </div>






          {/* Summary */}

          <div className="h-fit rounded-xl bg-white p-6 shadow">


            <h2 className="text-3xl font-bold">
              Summary
            </h2>



            <div className="mt-6 flex justify-between text-xl">

              <span>
                Total
              </span>


              <span className="font-bold">
                {total} EGP
              </span>


            </div>




            <Link
              href="/checkout"
              className="mt-8 block rounded bg-black py-4 text-center text-white"
            >
              Checkout
            </Link>



          </div>




        </div>


      </div>


    </main>

  );

}