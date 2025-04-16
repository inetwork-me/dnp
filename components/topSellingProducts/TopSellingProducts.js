import React from "react";
import Headline from "../Headline";
import ProductsCardsWrapper from "./ProductsCardsWrapper";
import { useTranslations } from "next-intl";

const TopSellingProducts = () => {
	const t = useTranslations("app");
	return (
		<section className='pb-14'>
			<Headline
				title={t("Top Selling Bundles")}
				description={t(
					"Explore our fitness programs to reach your best physical shape"
				)}
			/>

			<ProductsCardsWrapper />
		</section>
	);
};

export default TopSellingProducts;
