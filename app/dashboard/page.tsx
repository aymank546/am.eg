import { prisma } from "@/lib/prisma";
import LogoutButton from "./LogoutButton";


export default async function DashboardPage(){


  const products = await prisma.product.count();


  const orders = await prisma.order.count();



  const sales = await prisma.order.aggregate({

    _sum:{
      total:true
    }

  });



  return (

    <div>


      <div className="mb-8 flex items-center justify-between">


        <h1 className="text-5xl font-bold">
          Dashboard
        </h1>


        <LogoutButton />


      </div>





      <div className="grid gap-6 md:grid-cols-3">



        <div className="rounded-xl bg-white p-6 shadow">

          <h2 className="text-gray-500">
            Products
          </h2>

          <p className="mt-3 text-4xl font-bold">
            {products}
          </p>

        </div>





        <div className="rounded-xl bg-white p-6 shadow">

          <h2 className="text-gray-500">
            Orders
          </h2>

          <p className="mt-3 text-4xl font-bold">
            {orders}
          </p>

        </div>





        <div className="rounded-xl bg-white p-6 shadow">

          <h2 className="text-gray-500">
            Sales
          </h2>

          <p className="mt-3 text-4xl font-bold">
            {sales._sum.total || 0} EGP
          </p>

        </div>



      </div>


    </div>

  );

}