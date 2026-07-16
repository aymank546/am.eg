"use client";

import { useState } from "react";
import AddToCartButton from "./AddToCartButton";


export default function ProductOptions({
  product,
}: {
  product: any;
}) {


  const [selectedColor, setSelectedColor] = useState("");

  const [selectedSize, setSelectedSize] = useState("");



  const sizes = [
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ];



  return (

    <div>



      {/* COLORS */}

      {product.colors?.length > 0 && (

        <div className="mt-6">


          <h3 className="mb-3 text-xl font-bold">
            Choose Color
          </h3>



          <div className="flex flex-wrap gap-3">


            {product.colors.map((color:any)=>(


              <button

                key={color.id}

                onClick={()=>setSelectedColor(color.name)}

                className={`
                  flex items-center gap-2 rounded-full border px-5 py-2
                  ${
                    selectedColor === color.name
                    ?
                    "bg-black text-white"
                    :
                    ""
                  }
                `}

              >


                <span

                  className="h-5 w-5 rounded-full border"

                  style={{
                    backgroundColor: color.value
                  }}

                />


                {color.name}


              </button>


            ))}


          </div>


        </div>

      )}







      {/* SIZES */}

      <div className="mt-6">


        <h3 className="mb-3 text-xl font-bold">
          Choose Size
        </h3>



        <div className="flex flex-wrap gap-3">


          {sizes.map((size)=>(


            <button

              key={size}

              onClick={()=>setSelectedSize(size)}

              className={`
                rounded border px-5 py-2
                ${
                  selectedSize === size
                  ?
                  "bg-black text-white"
                  :
                  ""
                }
              `}

            >

              {size}

            </button>


          ))}


        </div>


      </div>






      <div className="mt-8">


        <AddToCartButton

          product={{

            ...product,

            selectedColor,

            selectedSize

          }}

        />


      </div>



    </div>

  );

}