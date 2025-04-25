import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function handleAuth(
	request,
	response,
	currentLocale,
	pathWithoutLocale
) {
	// Skip auth check for HMR requests
	if (request.cookies.get("next-auth.session-token")) {
		return response;
	}

	// Define protected routes
	const isProtectedRoute = pathWithoutLocale.startsWith("/myAccount");

	// Define auth routes
	const isAuthRoute =
		pathWithoutLocale.startsWith("/auth/signin") ||
		pathWithoutLocale.startsWith("/auth/signup");

	// Get the authentication token
	const token = await getToken({
		req: request,
		secret: process.env.NEXTAUTH_SECRET,
	});

	// Redirect logic for protected routes
	if (isProtectedRoute && !token) {
		// Create a completely new URL object with the full absolute path
		const redirectUrl = new URL(request.nextUrl.origin);
		redirectUrl.pathname = `/${currentLocale}/auth/signin`;

		return NextResponse.redirect(redirectUrl);
	}

	// Redirect authenticated users away from auth pages
	if (isAuthRoute && token) {
		const redirectUrl = new URL(request.nextUrl.origin);
		redirectUrl.pathname = `/${currentLocale}`;

		return NextResponse.redirect(redirectUrl);
	}

	return null; // No redirect needed
}
