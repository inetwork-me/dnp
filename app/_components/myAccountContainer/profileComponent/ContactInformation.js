import { useTranslations } from "next-intl";
import React from "react";

const ContactInformation = () => {
	const t = useTranslations("app");
	return (
		<div className='flex flex-col items-start gap-6 '>
			<h4 className=' text-2xl font-semibold text-gray-950'>
				{t("myProfile.ContactInformation")}
			</h4>

			<div className='flex items-start flex-wrap gap-5'>
				<div className='flex flex-col justify-center items-start gap-1 p-0'>
					<h5 className='text-sm font-normal text-gray-500'>{t("Email")}</h5>
					<p className='text-[16px] font-medium leading-7 text-gray-800'>
						exmpple@gmail.com
					</p>
				</div>
			</div>
		</div>
	);
};

export default ContactInformation;
