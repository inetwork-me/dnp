import { useTranslations } from "next-intl";

import Headline from "@/app/_shared/ui/Headline";
import BodyInfoBox from "./BodyInfoBox";
import ButtonsBox from "./ButtonsBox";

const HeaderBox = () => {
	const t = useTranslations("app");
	return (
		<div className='w-full space-y-6 p-8 rounded-xl border border-gray-200 bg-white'>
			<Headline
				title={t("Your Profile Summary")}
				description={t("Check your BMI results to know how to stay healthy")}
			/>

			<div className='flex justify-between items-center'>
				<BodyInfoBox />
				<ButtonsBox />
			</div>
		</div>
	);
};

export default HeaderBox;
