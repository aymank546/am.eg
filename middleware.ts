import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {

  const admin = request.cookies.get("admin")?.value;

  const response = NextResponse.next();

  response.headers.set(
    "x-admin-cookie",
    admin || "NO_COOKIE"
  );

  if (
    request.nextUrl.pathname.startsWith("/dashboard") &&
    admin !== "true"
  ) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }

  return response;
}


export const config = {
  matcher: [
    "/dashboard/:path*"
  ],
};