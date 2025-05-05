"use client";

import { useTranslations } from "next-intl";

// components
import SocialLoginButtons from "@/app/_components/authComponents/SocialLoginButtons";
import Headline from "@/app/_shared/ui/Headline";
import SignUpForm from "@/app/_components/authComponents/SignUpForm";
import NavigateLinkBtn from "@/app/_components/authComponents/NavigateLinkBtn";

export default function page() {
	const t = useTranslations("app");

	return (
		<>
			<Headline
				className='items-center'
				titleClassName='text-[30px] font-bold leading-[42px] '
				title={t("Sign up")}
				description={t(
					"Please provide your information to create a new account"
				)}
			/>
			<div className='w-full border border-gray-200'></div>

			<SignUpForm t={t} />

			<div className='flex items-center justify-center gap-1.5'>
				<p>{t("Already have an account?")}</p>
				<NavigateLinkBtn text={t("Login")} href={"/auth/signin"} />
			</div>

			<div className='w-full border border-gray-200'></div>

			<SocialLoginButtons t={t} />
		</>
	);
}
