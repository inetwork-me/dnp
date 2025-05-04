"use client";

import { useRouter } from "next/navigation";

import { useTranslations } from "next-intl";
import Headline from "@/app/_shared/ui/Headline";

import SocialLoginButtons from "@/app/_components/authComponents/SocialLoginButtons";
import LoginForm from "@/app/_components/authComponents/LoginForm";
import { Button } from "@/app/_shared/ui/button";

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

			<Button
				variant='outline'
				className='w-full'
				onClick={() => handleNavigateTo("/auth/signup")}>
				{t("Create new account")}
			</Button>

			<div className='w-full border border-gray-200'></div>

			<SocialLoginButtons t={t} singIn={true} />
		</>
	);
}
