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
	const { pathname } = request.nextUrl;
	const currentLocale = pathname.split("/")[1];

	// Set locale cookie if valid
	if (routing.locales.includes(currentLocale)) {
		response.cookies.set("NEXT_LOCALE", currentLocale, {
			maxAge: 60 * 60 * 24 * 365,
			path: "/",
		});
	}

	const pathWithoutLocale = routing.locales.includes(currentLocale)
		? pathname.replace(`/${currentLocale}`, "") || "/"
		: pathname;

	if (
		!request.cookies.get("__next_hmr_refresh_hash__") &&
		pathWithoutLocale.startsWith("/myAccount/profile")
	) {
		return NextResponse.redirect(
			new URL(`/${currentLocale}/auth/signin`, request.url)
		);
	}

	return response;
}

export const config = {
	matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
};
