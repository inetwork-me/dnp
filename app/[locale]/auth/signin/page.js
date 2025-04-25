"use client";

import { useRouter } from "next/navigation";

import { useTranslations } from "next-intl";
import Headline from "@/app/_components/Headline";

import ActionButton from "@/app/_components/authComponents/ActionButton";
import SocialLoginButtons from "@/app/_components/authComponents/SocialLoginButtons";
import LoginForm from "@/app/_components/authComponents/LoginForm";

export default function page() {
	const t = useTranslations("app");

	const router = useRouter();
	const handleNavigateTo = (href) => {
		router.push(href);
	};

	return (
		<>
			<Headline
				HeadlineAlign='items-center'
				titleClassName='text-[30px] font-bold leading-[42px]  '
				title={t("Login")}
				description={t("Please log in to your account to retrieve your data")}
			/>
			<div className='w-full border border-gray-200'></div>

			<LoginForm t={t} />

			<ActionButton outline onClick={() => handleNavigateTo("/auth/signUp")}>
				{t("Create new account")}
			</ActionButton>

			<div className='w-full border border-gray-200'></div>

			<SocialLoginButtons t={t} singIn={true} />
		</>
	);
}
