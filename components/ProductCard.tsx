import Image from "next/image";
import Link from "next/link";


type Props = {
  product: {
    id: number;
    name: string;
    description: string | null;
    price: number;
    oldPrice?: number | null;
    image: string | null;
    onSale?: boolean;
  };
};



export default function ProductCard({
  product,
}: Props) {


  return (

    <div className="relative overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl">



      {product.onSale && (

        <div className="absolute left-3 top-3 z-10 rounded-full bg-red-600 px-4 py-1 text-sm font-bold text-white">

          🔥 SALE

        </div>

      )}






      <Link href={`/product/${product.id}`}>


        <div className="relative h-80 w-full bg-gray-100">


          {product.image ? (

            <Image

              src={product.image}

              alt={product.name}

              fill

              className="object-cover"

            />

          ) : (

            <div className="flex h-full items-center justify-center text-gray-400">

              No Image

            </div>

          )}


        </div>





        <div className="p-5">



          <h2 className="text-xl font-bold">

            {product.name}

          </h2>





          <p className="mt-2 line-clamp-2 text-gray-500">

            {product.description}

          </p>






          <div className="mt-4 flex items-center gap-3">


            {product.oldPrice && (

              <span className="text-gray-400 line-through">

                {product.oldPrice} EGP

              </span>

            )}



            <span className="text-2xl font-extrabold">

              {product.price} EGP

            </span>


          </div>




        </div>



      </Link>



    </div>

  );

}