"use client";

import { useTranslations } from "next-intl";

// components
import Headline from "@/app/_components/Headline";
import SendOtpForm from "@/app/_components/authComponents/SendOtpForm";

export default function page() {
	const t = useTranslations("app");

	return (
		<>
			<Headline
				HeadlineAlign='items-center'
				titleClassName='text-[30px] font-bold leading-[42px]  '
				title={t("Recover account")}
				description={t(
					"An OTP will be sent to your email to proceed with the recovery process"
				)}
			/>
			<div className='w-full border border-gray-200'></div>

			<SendOtpForm t={t} />
		</>
	);
}
