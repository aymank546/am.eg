import { prisma } from "@/lib/prisma";
import Products from "@/components/Products";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {

  const { q } = await searchParams;


  const products = await prisma.product.findMany({
    where: {
      name: {
        contains: q || "",
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });


  return (

    <main className="min-h-screen bg-gray-100 p-8">


      <div className="mx-auto max-w-7xl">


        <h1 className="mb-8 text-5xl font-bold">
          Search
        </h1>


        {q && (
          <p className="mb-6 text-gray-500">
            Results for: {q}
          </p>
        )}


        <Products products={products}/>


      </div>


    </main>

  );

}