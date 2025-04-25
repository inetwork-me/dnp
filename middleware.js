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

	// Return auth redirect if one was generated
	if (authRedirect) {
		return authRedirect;
	}

	return response;
}

export const config = {
	matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
};
