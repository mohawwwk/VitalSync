import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = process.env.JWT_SECRET || "fallback-secret-change-me";
const encodedSecret = new TextEncoder().encode(JWT_SECRET);

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

  let isValidToken = false;
  if (token) {
    try {
      await jwtVerify(token, encodedSecret);
      isValidToken = true;
    } catch (error) {
      isValidToken = false;
    }
  }

  // Define public routes
  const isPublicRoute = 
    pathname === "/" || 
    pathname.startsWith("/login") || 
    pathname.startsWith("/signup") || 
    pathname.startsWith("/about") ||
    pathname.startsWith("/api/auth") ||
    pathname.startsWith("/knowledge") || 
    pathname === "/contact" ||
    pathname === "/careers" ||
    pathname === "/privacy" ||
    pathname === "/terms" ||
    pathname === "/services";

  // Define strictly protected routes
  const isProtectedRoute = 
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/assess") ||
    pathname.startsWith("/profile") ||
    pathname.startsWith("/booking");

  // If there's no valid token and the user is trying to access a protected route, redirect to login
  if (!isValidToken && isProtectedRoute) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("from", pathname);
    
    // Clear the invalid token cookie if it exists
    const response = NextResponse.redirect(loginUrl);
    if (token) {
      response.cookies.delete("token");
    }
    return response;
  }

  // If there's a valid token and the user is trying to access login/signup, redirect to dashboard
  if (isValidToken && (pathname.startsWith("/login") || pathname.startsWith("/signup"))) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder assets
     */
    "/((?!api|_next/static|_next/image|favicon.ico|public|.*\\..*).*)",
  ],
};
