import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import EditProductForm from "./EditProductForm";


export default async function EditProductPage({
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

    notFound();

  }



  return (

    <div className="mx-auto max-w-4xl p-8">


      <h1 className="mb-8 text-3xl font-bold">
        Edit Product
      </h1>



      <EditProductForm product={product}/>


    </div>

  );

}