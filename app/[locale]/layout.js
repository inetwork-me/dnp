import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "next-themes";
import { Inter, Cairo } from "next/font/google";
import { Suspense } from "react";

// components
import Loading from "./loading";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/footer/Footer";

// providers to handle authentication and session management with NextAuth.js
import NextAuthProvider from "../_components/providers/NextAuthProvider";

// global css styles
import "@/styles/globals.css";
import ErrorBoundary from "../_components/ErrorBoundary";
import { CurrencyProvider } from "@/contexts/CurrencyContext";

const inter = Inter({ subsets: ["latin"] }); // english font
const cairo = Cairo({ subsets: ["arabic"] }); // arabic font

export const metadata = {
	title: "DNP-Nutrition",
	description: "description",
};

export default async function RootLayout({ children, params }) {
	const { locale } = await params;

	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	const isRTL = locale === "ar";
	const fontClass = isRTL ? cairo.className : inter.className;

	return (
		<html
			lang={locale}
			dir={isRTL ? "rtl" : "ltr"}
			suppressHydrationWarning={true}>
			<body className={`${fontClass} bg-[#F9FAFB] ${isRTL ? "rtl" : "ltr"}`}>
				<NextIntlClientProvider locale={locale}>
					<NextAuthProvider>
						<ThemeProvider attribute='class' defaultTheme='system' enableSystem>
							<CurrencyProvider defaultCurrency='EGP'>
								<Header />
								<ErrorBoundary>
									<Suspense fallback={<Loading />}>{children}</Suspense>
								</ErrorBoundary>

								<Footer />
							</CurrencyProvider>
						</ThemeProvider>
					</NextAuthProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
