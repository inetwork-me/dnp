import { useTranslations } from "next-intl";

// components
import BreadCrumb from "@/app/_shared/ui/BreadCrumb";
import PackagesWrapper from "@/app/_components/packages/PackagesWrapper";

export default function page() {
	const t = useTranslations("app");

	return (
		<section className='bg-[#F9FAFB] '>
			<BreadCrumb currentPage={t("navigation.packagesList")} />

			<PackagesWrapper headline={"navigation.packagesList"} />
		</section>
	);
}
