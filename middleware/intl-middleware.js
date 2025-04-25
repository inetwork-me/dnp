import createMiddleware from "next-intl/middleware";
import { routing } from "../i18n/routing";

export const intlMiddleware = createMiddleware({
	locales: routing.locales,
	defaultLocale: routing.defaultLocale,
	localePrefix: "as-needed",
});

export function handleLocale(request, response) {
	const { pathname } = request.nextUrl;

	// Extract the first path segment
	const firstPathSegment = pathname.split("/")[1] || "";

	// Check if the first path segment is a valid locale
	let currentLocale;
	let pathWithoutLocale;

	if (routing.locales.includes(firstPathSegment)) {
		// If URL has a valid locale prefix
		currentLocale = firstPathSegment;
		pathWithoutLocale = pathname.replace(`/${firstPathSegment}`, "") || "/";
	} else {
		// If URL doesn't have a locale prefix, use the default or cookie locale
		// First check if there's a locale cookie
		const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;

		if (cookieLocale && routing.locales.includes(cookieLocale)) {
			currentLocale = cookieLocale;
		} else {
			currentLocale = routing.defaultLocale;
		}

		pathWithoutLocale = pathname;
	}

	// Set locale cookie
	response.cookies.set("NEXT_LOCALE", currentLocale, {
		maxAge: 60 * 60 * 24 * 365,
		path: "/",
	});

	// If the user changed locale (cookie locale doesn't match URL locale)
	// and the URL doesn't already have the correct locale prefix,
	// we need to redirect to add the locale prefix
	const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;

	if (
		cookieLocale &&
		cookieLocale !== routing.defaultLocale &&
		firstPathSegment !== cookieLocale
	) {
		// We need to redirect to add the locale prefix
		const newUrl = new URL(request.nextUrl.origin);
		newUrl.pathname = `/${cookieLocale}${pathname}`;

		return {
			currentLocale,
			pathWithoutLocale,
			redirect: newUrl.toString(),
		};
	}

	return {
		currentLocale,
		pathWithoutLocale,
		redirect: null,
	};
}
