import { NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware({
	locales: routing.locales,
	defaultLocale: routing.defaultLocale,
	localePrefix: "as-needed",
});

export function middleware(request) {
	const response = intlMiddleware(request);

	const currentLocale = request.nextUrl.pathname.split("/")[1];

	if (routing.locales.includes(currentLocale)) {
		response.cookies.set("NEXT_LOCALE", currentLocale, {
			maxAge: 60 * 60 * 24 * 365, // سنة
			path: "/",
		});
	}

	return response;
}

export const config = {
	matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
