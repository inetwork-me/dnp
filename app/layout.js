import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";

import Header from "@/components/Header";
import "@/styles/globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "DNP-Nutrition",
	description: "description",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={`${inter.className}`}>
				<ThemeProvider attribute='class'>
					<Header />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
