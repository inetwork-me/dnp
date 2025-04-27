import { useTranslations } from "next-intl";
import ContentHeader from "@/app/_components/myAccountContainer/ContentHeader";
import ReviewsContainer from "@/app/_components/myAccountContainer/reviews/ReviewsContainer";

const page = () => {
	const t = useTranslations("app");

	return (
		<div className='w-full flex flex-col gap-8'>
			<ContentHeader title={t("My reviews")} />
			<ReviewsContainer />
		</div>
	);
};

export default page;
