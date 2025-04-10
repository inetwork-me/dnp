export const metadata = {
	title: "Nutrition",
	description: "Welcome to dnp e-commerce App",
	openGraph: {
		title: "Nutrition",
		description: "Welcome to dnp e-commerce App",
	},

	icons: {
		icon: { url: "public/favicon.ico" },
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
