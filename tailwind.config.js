/** @type {import('tailwindcss').Config} */
const rtl = require("tailwindcss-rtl");

module.exports = {
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				arabic: ["Cairo", "sans-serif"], // arabic font
				latin: ["Inter", "sans-serif"], // english font
			},
			colors: {
				primary: {
					DEFAULT: "#B26BCA",
					50: "#f7f1fa",
					100: "#efe3f5",
					200: "#dec7eb",
					300: "#ceabe1",
					400: "#bd8fd7",
					500: "#B26BCA",
					600: "#9c56b8",
					700: "#864499",
					800: "#6e377c",
					900: "#562c5f",
					950: "#3d1d43",
				},
				secondary: {
					50: "#fcfafd",
					100: "#f9f5fb",
					200: "#f3ebf8",
					300: "#ECDAF4",
					400: "#e0c1eb",
					500: "#d4a8e2",
					600: "#c78fd9",
					700: "#b976d0",
					800: "#ac5dc7",
					900: "#9f44be",
					950: "#7e2b9c",
				},
				gray: {
					50: "#f9fafb",
					100: "#f3f4f6",
					200: "#e5e7eb",
					300: "#d1d5db",
					400: "#9ca3af",
					500: "#6b7280",
					600: "#4B5563",
					700: "#374151",
					800: "#1f2937",
					900: "#111827",
					950: "#030712",
				},
			},
			boxShadow: {
				custom:
					"0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)",
			},
			container: {
				center: true,
				padding: {
					DEFAULT: "1rem",
					sm: "2rem",
					lg: "2rem",
				},
				screens: {
					sm: "40rem", // 640px
					md: "48rem", // 768px
					lg: "64rem", // 1024px
					xl: "76rem", // 1216px
					"2xl": "76rem", // 1216px
				},
			},
		},
	},
	plugins: [rtl()],
};
