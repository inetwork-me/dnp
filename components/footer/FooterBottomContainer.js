import React from "react";
import SocialIcons from "../SocialIcons";
import { footerSocialLinks } from "@/fakeData/data";
import { useTranslations } from "next-intl";

const FooterBottomContainer = () => {
	const t = useTranslations("app");
	const currentYear = new Date().getFullYear();
	return (
		<div className='w-full h-7 flex justify-between p-0 '>
			<p className='text-[16px] leading-7 font-normal text-white '>
				{t("Copyright")}
				{currentYear}
			</p>
			<SocialIcons icons={footerSocialLinks} />
		</div>
	);
};

export default FooterBottomContainer;
