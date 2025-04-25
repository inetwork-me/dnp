import { useTranslations } from "next-intl";

// components
import ContentHeader from "@/app/_components/myAccountContainer/profileComponent/ContentHeader";
import ContentBox from "@/app/_components/myAccountContainer/profileComponent/ContentBox";

const page = () => {
	const t = useTranslations("app");
	return (
		<div className='w-full flex flex-col gap-8'>
			<ContentHeader
				title={t("profile")}
				btnText={t("myProfile.editProfile")}
				href={""}
			/>
			<ContentBox />
		</div>
	);
};

export default page;
