const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,

	// Add images configuration with more specific control
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "inetwork-hub.store",
				pathname: "/**",
			},
		],
	},

	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});

		return config;
	},
};

module.exports = withNextIntl(nextConfig);
