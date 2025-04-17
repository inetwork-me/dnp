import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import { ThemeProvider } from "next-themes";
import { Inter, Cairo } from "next/font/google";

// components
import Header from "@/components/Header";

// global css styles
import "@/styles/globals.css";

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
				<NextIntlClientProvider>
					<ThemeProvider attribute='class' defaultTheme='system' enableSystem>
						<Header />
						{children}
					</ThemeProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
