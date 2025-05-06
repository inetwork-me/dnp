"use client";

import Headline from "@/app/_shared/ui/Headline";

import { useTranslations } from "next-intl";
import PackagePricing from "./PackagePricing";
import PackageFeatures from "./PackageFeatures";
import { Button } from "@/app/_shared/ui/button";
import Badge from "@/app/_shared/ui/Badge";
import { useRouter } from "next/navigation";

const PackageContent = ({ pack }) => {
	const t = useTranslations("app");

	const route = useRouter();

	const handleNavigate = () => {
		route.push(`/checkout`);
	};
	return (
		<div className='relative space-y-6'>
			<Headline
				className='space-y-3'
				titleClassName='text-xl font-semibold text-gray-800'
				descriptionClassName='text-base font-normal text-gray-600'
				title={pack.name}
				description={pack.description}>
				{pack.mostPopular ? (
					<Badge
						className={" bg-[#ECDAF4] text-[#723881] "}
						badge={"Most Popular"}
					/>
				) : null}
			</Headline>
			<PackagePricing
				price={pack.price}
				discount={pack.discount}
				period={pack.period}
			/>
			<div className='w-full h-[1px] bg-gray-200  my-12' />

			<PackageFeatures features={pack.features} />

			<Button
				onclick={handleNavigate}
				className={` w-full  ${
					pack.mostPopular
						? "bg-[#723881] hover:bg-[#ECDAF4] text-white hover:text-[#723881]"
						: "bg-[#ECDAF4] hover:bg-[#723881] text-[#723881] hover:text-white"
				}`}>
				{t("Subscribe")}
			</Button>
		</div>
	);
};

export default PackageContent;
