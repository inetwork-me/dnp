import { NextResponse } from "next/server";
import { intlMiddleware, handleLocale } from "./middleware/intl-middleware";
import { handleAuth } from "./middleware/auth-middleware";

export async function middleware(request) {
	// First, handle the internationalization
	const response = intlMiddleware(request);

	// Get locale information
	const { currentLocale, pathWithoutLocale } = handleLocale(request, response);

	// Handle authentication
	const authRedirect = await handleAuth(
		request,
		response,
		currentLocale,
		pathWithoutLocale
	);

	// If there's a redirect from auth middleware, return it
	if (authRedirect) {
		return authRedirect;
	}

	return response;
}

export const config = {
	matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
};
