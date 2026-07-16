import { prisma } from "@/lib/prisma";
import Products from "@/components/Products";


export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{
    category?: string;
  }>;
}) {


  const { category } = await searchParams;



  const products = await prisma.product.findMany({

    where: category
      ? {
          category: category,
        }
      : undefined,


    orderBy:{
      createdAt:"desc"
    }

  });



  return (

    <main className="min-h-screen bg-gray-100">


      <div className="mx-auto max-w-7xl px-6 py-12">


        <h1 className="mb-10 text-5xl font-bold">

          {category || "Shop"}

        </h1>



        <Products products={products}/>


      </div>


    </main>

  );

}