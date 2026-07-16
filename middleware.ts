import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {

  const admin = request.cookies.get("admin")?.value;

  console.log("ADMIN COOKIE:", admin);


  if (
    request.nextUrl.pathname.startsWith("/dashboard") &&
    admin !== "true"
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