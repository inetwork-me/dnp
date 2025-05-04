import { useTranslations } from "next-intl";

// components
import BreadCrumb from "@/app/_shared/ui/BreadCrumb";
import SendFeedBackForm from "@/app/_components/doctors/sendFeedBackForm/SendFeedBackForm";
import CourseDescription from "@/app/_components/academyWrapper/courseDescription/CourseDescription";

export default function page() {
	const t = useTranslations("app");

	return (
		<section className='bg-[#F9FAFB] '>
			<BreadCrumb
				parentPage={t("navigation.academy")}
				currentPage='Course Name'
				nestedPageTitle={t("navigation.academy")}
			/>
			<CourseDescription />

			<SendFeedBackForm bgColor='bg-gray-100' />
		</section>
	);
}
