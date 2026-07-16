"use client";

import Image from "next/image";
import { useState } from "react";


export default function ProductGallery({
  images,
}: {
  images: string[];
}) {


  const [current, setCurrent] = useState(0);



  function nextImage() {

    setCurrent((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );

  }



  function prevImage() {

    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );

  }




  if (images.length === 0) {

    return (

      <div className="h-[500px] rounded-xl bg-gray-100 flex items-center justify-center">

        No Image

      </div>

    );

  }





  return (

    <div className="relative z-0 h-[500px] overflow-hidden rounded-xl bg-gray-100">


      <Image

        src={images[current]}

        alt="Product"

        fill

        sizes="(max-width: 768px) 100vw, 50vw"

        className="object-cover z-0"

      />





      {images.length > 1 && (

        <>


          <button

            type="button"

            onClick={prevImage}

            className="absolute z-10 left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-4 py-2 text-white"

          >

            ←

          </button>






          <button

            type="button"

            onClick={nextImage}

            className="absolute z-10 right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-4 py-2 text-white"

          >

            →

          </button>






          <div className="absolute z-10 bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-4 py-1 text-white">

            {current + 1} / {images.length}

          </div>



        </>

      )}



    </div>

  );

}