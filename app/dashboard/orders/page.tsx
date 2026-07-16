import { prisma } from "@/lib/prisma";
import StatusButton from "./StatusButton";


export default async function OrdersPage(){


  const orders = await prisma.order.findMany({

    where:{
      status:{
        not:"Delivered"
      }
    },


    include:{
      items:{
        include:{
          product:true
        }
      }
    },


    orderBy:{
      createdAt:"desc"
    }

  });



  return (

    <div>


      <h1 className="mb-8 text-4xl font-bold">
        Orders
      </h1>



      <div className="overflow-hidden rounded-xl bg-white shadow">


      <table className="w-full">


      <thead className="bg-zinc-100">

      <tr>

      <th className="p-4 text-left">
      Customer
      </th>


      <th className="p-4 text-left">
      Products
      </th>


      <th className="p-4 text-left">
      Total
      </th>


      <th className="p-4 text-left">
      Status
      </th>


      <th className="p-4 text-left">
      Action
      </th>


      </tr>

      </thead>





      <tbody>


      {orders.length === 0 ? (

        <tr>

          <td
          colSpan={5}
          className="p-8 text-center"
          >
            No Orders
          </td>

        </tr>


      ) : (


      orders.map(order=>(

      <tr
      key={order.id}
      className="border-t"
      >



      <td className="p-4">

      <p className="font-bold">
      {order.name}
      </p>

      <p>
      {order.phone}
      </p>

      <p>
      {order.address}
      </p>

      </td>





      <td className="p-4">

      {order.items.map(item=>(

        <p key={item.id}>
          {item.product.name} × {item.quantity}
        </p>

      ))}

      </td>





      <td className="p-4 font-bold">

      {order.total} EGP

      </td>





      <td className="p-4">

      <span className="rounded bg-yellow-200 px-3 py-1">

      {order.status}

      </span>

      </td>





      <td className="p-4">

      <StatusButton
      id={order.id}
      status={order.status}
      />

      </td>




      </tr>


      ))

      )}


      </tbody>


      </table>


      </div>


    </div>

  );

}