import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export function middleware(request: NextRequest) {

  const cookie = request.cookies.get("admin");


  if (
    request.nextUrl.pathname.startsWith("/dashboard") &&
    cookie?.value !== "true"
  ) {

    return NextResponse.redirect(
      new URL("/login", request.url)
    );

  }


  return NextResponse.next();

}


export const config = {
  matcher: [
    "/dashboard/:path*"
  ],
};