import { use } from "react";
import InfoItem from "./InfoItem";
import { useTranslations } from "next-intl";

const BodyInfoBox = () => {
	const t = useTranslations("app");
	return (
		<div className='flex-1 flex items-center gap-4'>
			<InfoItem title={t("Gender")} value={t("Male")} />
			<InfoItem title={t("Age")} value={`25 ${t("Years old")}`} />
			<InfoItem title={t("Height")} value={`175 ${t("cm")}`} />
			<InfoItem title={t("Weight")} value={`70 ${t("kg")}`} />
		</div>
	);
};

export default BodyInfoBox;
