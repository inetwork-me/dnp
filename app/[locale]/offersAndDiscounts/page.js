"use client";

import { useTranslations } from "next-intl";
import BreadCrumb from "@/app/_components/BreadCrumb";

export default function page() {
	const t = useTranslations("app");

	return (
		<section className='bg-[#F9FAFB] '>
			<BreadCrumb currentPage={t("navigation.offersAndDiscounts")} />
		</section>
	);
}
