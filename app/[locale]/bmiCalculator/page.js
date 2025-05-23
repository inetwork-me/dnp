import { useTranslations } from "next-intl";

import BreadCrumb from "@/app/_shared/ui/Breadcrumb";
import BmiCalculatorWrapper from "@/app/_components/bmiCalculatorWrapper/BmiCalculatorWrapper";

export default function page() {
	const t = useTranslations("app");

	return (
		<section className='bg-[#F9FAFB]'>
			<BreadCrumb currentPage={t("navigation.bmiCalculator")} />

			<BmiCalculatorWrapper />
		</section>
	);
}
