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


        oldPrice: body.oldPrice
          ? Number(body.oldPrice)
          : null,



        category: body.category,


        stock: Number(body.stock),




        image: body.image || "",


        video: body.video || null,




        featured: body.featured || false,


        onSale: body.onSale || false,







        images: {


          create: (body.images || [])

            .filter(
              (img:string)=> img !== body.image
            )

            .map(
              (img:string)=>({

                url: img

              })
            )

        },









        colors: {


          create: (body.colors || [])

          .map((color:any)=>({



            name:

              typeof color === "string"

              ?

              color

              :

              color.name,






            value:

              typeof color === "string"


              ?


              (

                color === "Black"
                ? "#000000"

                :

                color === "White"
                ? "#ffffff"

                :

                color === "Red"
                ? "#ff0000"

                :

                color === "Blue"
                ? "#0000ff"

                :

                color === "Green"
                ? "#008000"

                :

                "#808080"

              )


              :


              color.value




          }))


        }





      },




      include:{


        images:true,


        colors:true


      }



    });







    return NextResponse.json(product);




  } catch(error){



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