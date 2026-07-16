import { prisma } from "@/lib/prisma";
import Link from "next/link";
import DeleteButton from "./DeleteButton";

export default async function ProductsPage() {

  const products = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });


  return (
    <div className="p-8">

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold">
          Products
        </h1>

        <Link
          href="/dashboard/products/add"
          className="bg-black text-white px-5 py-3"
        >
          Add Product
        </Link>

      </div>


      <div className="space-y-4">

        {products.length === 0 && (
          <p>No Products Found</p>
        )}


        {products.map((product)=>(

          <div
            key={product.id}
            className="border p-5 flex justify-between items-center"
          >

            <div>

              <h2 className="text-xl font-bold">
                {product.name}
              </h2>

              <p>
                Price: {product.price}
              </p>

              <p>
                Stock: {product.stock}
              </p>

              <p>
                Category: {product.category}
              </p>

            </div>


            <div className="flex gap-3">

              <Link
                href={`/dashboard/products/${product.id}/edit`}
                className="bg-gray-800 text-white px-4 py-2"
              >
                Edit
              </Link>


              <DeleteButton id={product.id}/>

            </div>


          </div>

        ))}

      </div>

    </div>
  );
}