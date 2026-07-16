import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


export async function POST(request: Request) {

  try {


    const body = await request.json();




    const order = await prisma.order.create({


      data: {


        name: body.name,


        phone: body.phone,


        address: body.address,


        total: Number(body.total),




        items: {


          create: body.items.map((item:any)=>(


            {


              productId: item.id,


              quantity: item.quantity,


              price: item.price,


              color: item.selectedColor || null


            }


          ))


        }



      },



      include:{


        items:true


      }



    });





    return NextResponse.json(order);



  } catch(error) {


    console.log(error);



    return NextResponse.json(

      {

        error:"Order Failed"

      },


      {

        status:500

      }


    );


  }


}