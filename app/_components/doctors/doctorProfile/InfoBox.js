import { useTranslations } from "next-intl";
import React from "react";

function InfoBox({ icon, title, value }) {
	const t = useTranslations("app");
	return (
		<div className=' flex items-start py-4 px-0 gap-4 border-r border-gray-200 last:border-r-0'>
			<div className=' w-9 h-9 flex items-center justify-center p-2 bg-[#37143E] rounded-full'>
				{icon}
			</div>
			<div className='flex-1 flex flex-col items-start gap-1'>
				<h4 className='text-xl font-medium text-gray-800'>{t(title)}</h4>
				<p className='text-base font-normal text-gray-600'>{value}</p>
			</div>
		</div>
	);
}

export default InfoBox;
