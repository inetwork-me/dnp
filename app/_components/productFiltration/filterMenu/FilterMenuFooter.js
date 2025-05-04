import React from "react";

import { useTranslations } from "next-intl";
import { Button } from "@/app/_shared/ui/button";

const FilterMenuFooter = () => {
	const t = useTranslations("app");

	return (
		<div className='w-full py-5'>
			<Button className='h-[43px] rounded-lg' type='submit'>
				{t("Apply Filters")}
			</Button>
		</div>
	);
};

export default FilterMenuFooter;
