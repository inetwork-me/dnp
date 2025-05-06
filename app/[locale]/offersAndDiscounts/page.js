import { useTranslations } from "next-intl";

// components
import BreadCrumb from "@/app/_shared/ui/BreadCrumb";
import ProductFiltration from "@/app/_components/productFiltration/ProductFiltration";

export default function page() {
	const t = useTranslations("app");

	return (
		<section className='bg-[#F9FAFB] '>
			<BreadCrumb currentPage={t("navigation.offersAndDiscounts")} />

			<ProductFiltration />
		</section>
	);
}
