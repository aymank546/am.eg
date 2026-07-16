import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


export async function POST(request: Request) {

  try {


    const body = await request.json();



    const product = await prisma.product.create({

      data: {


        name: body.name,


        description: body.description,


        price: Number(body.price),


        category: body.category,


        stock: Number(body.stock),


        image: body.image || "",


        video: body.video || null,



        images: {

          create: (body.images || []).map((img:string)=>({

            url: img

          }))

        }


      },


      include:{

        images:true

      }


    });



    return NextResponse.json(product);



  } catch(error) {


    console.log(error);



    return NextResponse.json(

      {
        error:"Failed"
      },

      {
        status:500
      }

    );


  }

}