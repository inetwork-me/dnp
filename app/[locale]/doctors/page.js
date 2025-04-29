import { useTranslations } from "next-intl";

// components
import BreadCrumb from "@/app/_components/BreadCrumb";
import FilterDoctors from "@/app/_components/doctors/filterDoctors/FilterDoctors";
import DoctorsCardsWrapper from "@/app/_components/doctors/doctorsCardsWrapper/DoctorsCardsWrapper";

export default function page() {
	const t = useTranslations("app");

	return (
		<section className='bg-[#F9FAFB] '>
			<BreadCrumb currentPage={t("navigation.allDoctors")} />

			<div className='container mx-auto py-14'>
				<div className='w-full flex flex-col gap-8'>
					<FilterDoctors />
					<DoctorsCardsWrapper />
				</div>
			</div>
		</section>
	);
}
