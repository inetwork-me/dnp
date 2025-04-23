import { useTranslations } from "next-intl";

// components
import ContentHeader from "@/components/myAccountContainer/profileComponent/ContentHeader";
import ContentBox from "@/components/myAccountContainer/profileComponent/ContentBox";

const page = () => {
	const t = useTranslations("app");
	return (
		<div className='w-full flex flex-col gap-8'>
			<ContentHeader
				title={t("myProfile.profile")}
				btnText={t("myProfile.editProfile")}
				href={""}
			/>
			<ContentBox />
		</div>
	);
};

export default page;
