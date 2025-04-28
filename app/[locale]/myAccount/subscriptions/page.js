import { useTranslations } from "next-intl";
import ContentHeader from "@/app/_components/myAccountContainer/ContentHeader";
import SubscriptionsContainer from "@/app/_components/myAccountContainer/subscriptions/SubscriptionsContainer";

const page = () => {
	const t = useTranslations("app");

	return (
		<div className='w-full flex flex-col gap-8'>
			<ContentHeader title={t("Subscriptions")} />
			<SubscriptionsContainer t={t} />
		</div>
	);
};

export default page;
