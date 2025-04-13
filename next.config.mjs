/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,

	webpack(config) {
		// Simpler SVGR configuration
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});

		return config;
	},
};

export default nextConfig;
