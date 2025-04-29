"use client";

import { useTranslations } from "next-intl";
import { CheckboxWithText } from "@/app/_shared/ui/checkboxWithText";

const HeaderSection = ({ filters, handleFilterChange }) => {
	const t = useTranslations("app");
	return (
		<div className='w-full flex justify-between items-center self-stretch pb-8'>
			<h3 className='text-3xl font-semibold text-gray-950'>
				{t("Search results")}
				<span>"Product name"</span>
			</h3>
			<div className='flex gap-8 items-center'>
				<CheckboxWithText
					className='flex-row-reverse'
					id='onSale'
					label={t("Show only products on sale")}
				/>

				<div className='flex gap-3 items-center'>
					<p className='text-base font-normal  text-gray-700'>{t("Sort by")}</p>
					<select
						value={filters?.sortBy}
						onChange={(e) => handleFilterChange("sortBy", e.target.value)}
						className='text-base font-bold border-gray-800 focus:outline-none focus:ring-[#954CAD] focus:border-[#954CAD] sm:text-sm rounded-md'>
						<option value='relevance'>Relevance</option>
						<option value='price-low'>Price: Low to High</option>
						<option value='price-high'>Price: High to Low</option>
						<option value='newest'>Newest</option>
						<option value='popular'>Most Popular</option>
					</select>
				</div>
			</div>
		</div>
	);
};

export default HeaderSection;
