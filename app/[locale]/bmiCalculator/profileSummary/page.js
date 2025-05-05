import { useTranslations } from "next-intl";

import BreadCrumb from "@/app/_shared/ui/Breadcrumb";
import BmiProfileSummary from "@/app/_components/bmiCalculatorWrapper/bmiProfileSummary/BmiProfileSummary";

export default function page() {
	const t = useTranslations("app");

	return (
		<section className='bg-[#F9FAFB]'>
			<BreadCrumb currentPage={t("Your Profile Summary")} />

			<BmiProfileSummary />
		</section>
	);
}
