"use client";

import { useTranslations } from "next-intl";

// components
import Headline from "@/app/_shared/ui/Headline";
import CreateNewPasswordForm from "@/app/_components/authComponents/CreateNewPasswordForm";

export default function page() {
	const t = useTranslations("app");

	return (
		<>
			<Headline
				className='items-center'
				titleClassName='text-[30px] font-bold leading-[42px]  '
				title={t("Create a new password")}
				description={t("Please set a new password for your account")}
			/>
			<div className='w-full border border-gray-200'></div>

			<CreateNewPasswordForm t={t} />
		</>
	);
}
