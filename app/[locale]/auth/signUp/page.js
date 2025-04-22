"use client";

import { useTranslations } from "next-intl";

// components
import SocialLoginButtons from "@/components/authComponents/SocialLoginButtons";
import Headline from "@/components/Headline";
import SignUpForm from "@/components/authComponents/SignUpForm";
import NavigateLinkBtn from "@/components/authComponents/NavigateLinkBtn";

export default function page() {
	const t = useTranslations("app");

	return (
		<>
			<Headline
				HeadlineAlign='items-center'
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
