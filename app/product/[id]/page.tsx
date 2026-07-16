import { prisma } from "@/lib/prisma";
import ProductGallery from "./ProductGallery";
import ProductOptions from "./ProductOptions";


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


    include: {

      images: true,

      colors: true,

    },

  });





  if (!product) {

    return (

      <div className="p-8">
        Product Not Found
      </div>

    );

  }






  const images = [

    product.image,

    ...product.images.map((img)=>img.url)

  ];






  return (

    <main className="min-h-screen bg-gray-100 p-8">



      <div className="mx-auto grid max-w-6xl gap-10 rounded-2xl bg-white p-8 shadow md:grid-cols-2">






        <ProductGallery

          images={images}

        />








        <div>



          <h1 className="text-5xl font-bold">

            {product.name}

          </h1>





          <p className="mt-5 text-lg text-gray-500">

            {product.description}

          </p>







          <div className="mt-8">


            {product.oldPrice && (

              <span className="mr-3 text-xl text-gray-400 line-through">

                {product.oldPrice} EGP

              </span>

            )}




            <span className="text-4xl font-extrabold">

              {product.price} EGP

            </span>



          </div>







          <p className="mt-4">

            Stock: {product.stock}

          </p>








          <ProductOptions

            product={product}

          />






        </div>





      </div>





    </main>

  );


}