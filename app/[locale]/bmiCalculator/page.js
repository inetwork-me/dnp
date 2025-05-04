import BreadCrumb from "@/app/_shared/ui/Breadcrumb";
import { useTranslations } from "next-intl";

export default function page() {
	const t = useTranslations("app");

	return (
		<section className='bg-[#F9FAFB]'>
			<BreadCrumb currentPage={t("navigation.bmiCalculator")} />

			<section className='container mx-auto py-14'></section>
		</section>
	);
}
