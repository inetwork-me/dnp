"use client";

import { useTranslations } from "next-intl";

// components
import Headline from "@/app/_shared/ui/Headline";
import RecoverAccountForm from "@/app/_components/authComponents/RecoverAccountForm";

export default function page() {
	const t = useTranslations("app");

	return (
		<>
			<Headline
				className='items-center'
				titleClassName='text-[30px] font-bold leading-[42px]  '
				title={t("Recover account")}
				description={t(
					"An OTP will be sent to your email to proceed with the recovery process"
				)}
			/>
			<div className='w-full border border-gray-200'></div>

			<RecoverAccountForm t={t} />
		</>
	);
}
