import BreadCrumb from "@/components/BreadCrumb";
import ProductDetails from "@/components/productDetails/ProductDetails";

import { useTranslations } from "next-intl";

export default function page() {
	const t = useTranslations("app");
	return (
		<section>
			<BreadCrumb currentPage={t("navigation.offersAndDiscounts")} />
			<ProductDetails />
		</section>
	);
}
