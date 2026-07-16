import Image from "next/image";
import { prisma } from "@/lib/prisma";
import AddToCartButton from "./AddToCartButton";


export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {


  const { id } = await params;


  const product = await prisma.product.findUnique({
    where: {
      id: Number(id),
    },
  });



  if (!product) {

    return (
      <div className="p-8">
        Product Not Found
      </div>
    );

  }



  return (

    <main className="min-h-screen bg-gray-100 p-8">


      <div className="mx-auto grid max-w-6xl gap-10 rounded-2xl bg-white p-8 shadow md:grid-cols-2">



        <div className="relative h-[500px] overflow-hidden rounded-xl bg-gray-100">

          {product.image && (

            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />

          )}

        </div>




        <div>


          <h1 className="text-5xl font-bold">
            {product.name}
          </h1>



          <p className="mt-5 text-lg text-gray-500">
            {product.description}
          </p>



          <p className="mt-8 text-4xl font-extrabold">
            {product.price} EGP
          </p>



          <p className="mt-4">
            Stock: {product.stock}
          </p>



          <AddToCartButton product={product}/>


        </div>


      </div>


    </main>

  );

}