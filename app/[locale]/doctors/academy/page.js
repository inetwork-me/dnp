import { useTranslations } from "next-intl";

// components
import BreadCrumb from "@/app/_shared/ui/BreadCrumb";
import AcademyWrapper from "@/app/_components/academyWrapper/AcademyWrapper";

export default function page() {
	const t = useTranslations("app");

	return (
		<section className='bg-[#F9FAFB] '>
			<BreadCrumb currentPage={t("navigation.academy")} />
			<AcademyWrapper />
		</section>
	);
}
