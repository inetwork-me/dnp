import React from "react";
import ActionButton from "../../authComponents/ActionButton";
import { useTranslations } from "next-intl";

const FilterMenuFooter = () => {
	const t = useTranslations("app");

	return (
		<div className='w-full py-5'>
			<ActionButton className='h-[43px] rounded-lg' type='submit'>
				{t("Apply Filters")}
			</ActionButton>
		</div>
	);
};

export default FilterMenuFooter;
