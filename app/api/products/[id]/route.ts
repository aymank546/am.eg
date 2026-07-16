import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {


  const { id } = await params;


  try {


    const product = await prisma.product.delete({
      where:{
        id:Number(id),
      },
    });



    return NextResponse.json(product);


  } catch(error){


    return NextResponse.json(
      {
        error:"Delete failed"
      },
      {
        status:500
      }
    );


  }

}