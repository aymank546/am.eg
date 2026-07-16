import { NextResponse } from "next/server";

export async function POST(request: Request) {

  const { password } = await request.json();


  if (password !== "1/3/2006") {

    return NextResponse.json(
      {
        error: "Wrong password"
      },
      {
        status: 401
      }
    );

  }


  const response = NextResponse.json({
    success: true,
  });



  response.cookies.set("admin", "true", {

    httpOnly: false,

    secure: true,

    sameSite: "lax",

    path: "/",

    maxAge: 60 * 60 * 24 * 30,

  });



  return response;

}