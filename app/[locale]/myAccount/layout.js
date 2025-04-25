"use client";

import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

// components

import BreadCrumb from "@/app/_components/BreadCrumb";
import Sidebar from "@/app/_components/myAccountContainer/sidebar/Sidebar";
import MyAccountContainer from "@/app/_components/myAccountContainer/MyAccountContainer";

// profile data
import { profileData } from "@/app/_components/myAccountContainer/data";

const Page = ({ children }) => {
	const t = useTranslations("app");
	const pathname = usePathname();

	const currentPage = profileData.find((item) => item.href === pathname)?.title;

	return (
		<section className='bg-[#F9FAFB]'>
			<BreadCrumb
				currentPage={t(currentPage)}
				nestedPageTitle={t("My Account")}
				parentPage={"myAccount"}
			/>

			<section className='container mx-auto py-14'>
				<div className=' relative w-full flex items-start gap-8  '>
					<Sidebar profileData={profileData} />

					<MyAccountContainer>{children}</MyAccountContainer>
				</div>
			</section>
		</section>
	);
};

export default Page;
