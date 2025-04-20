import { useTranslations } from "next-intl";

// components
import Hero from "@/components/hero/Hero";
import BestProgramForYou from "@/components/bestProgramForYou/BestProgramForYou";
import ProductsSection from "@/components/productsSection/ProductsSection";
import BundlesSection from "@/components/bundlesSection/BundlesSection";
import ShopByBrands from "@/components/ShopByBrands.js/ShopByBrands";

export default function Page() {
	const t = useTranslations("app");
	return (
		<main>
			<Hero />
			<BestProgramForYou />

			<ProductsSection
				headlineTitle={t("Top Selling Products")}
				headlineDescription={t(
					"Discover our best-selling products loved by many"
				)}
			/>

			<BundlesSection
				headlineTitle={t("Top Selling Bundles")}
				headlineDescription={t(
					"Explore our fitness programs to reach your best physical shape"
				)}
			/>
			<ProductsSection
				discount={40}
				headlineTitle={t("Products on sale")}
				headlineDescription={t(
					"Discover our range of discounted products—don't miss out!"
				)}
			/>
			<BundlesSection
				headlineTitle={t("Bundles on sale")}
				headlineDescription={t(
					"Discover our best-selling bundles loved by many"
				)}
			/>

			<ShopByBrands
				headlineTitle={t("Shop By brand")}
				headlineDescription={t(
					"Discover brands works with dnp and selling together"
				)}
			/>
		</main>
	);
}
