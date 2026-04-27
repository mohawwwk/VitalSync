import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

  // Define public routes
  const isPublicRoute = 
    pathname === "/" || 
    pathname.startsWith("/login") || 
    pathname.startsWith("/signup") || 
    pathname.startsWith("/about") ||
    pathname.startsWith("/api/auth") ||
    pathname.startsWith("/knowledge") || // Knowledge is public but articles might be restricted? User said "users MUST be logged in to: Access assessments, Submit responses, View results"
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
    pathname.startsWith("/api/user") ||
    pathname.startsWith("/api/ai/diagnose") ||
    pathname.startsWith("/api/ai/latest-assessment");

  // If there's no token and the user is trying to access a protected route, redirect to login
  if (!token && isProtectedRoute) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // If there's a token and the user is trying to access login/signup, redirect to dashboard
  if (token && (pathname.startsWith("/login") || pathname.startsWith("/signup"))) {
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
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
