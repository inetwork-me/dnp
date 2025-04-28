import React from "react";

const CancelSubButton = ({ t }) => {
	return (
		<div className='h-[43px] flex items-center  gap-4'>
			<button className='text-[16px] font-medium leading-7 text-gray-400 cursor-pointer'>
				{t("cancelSubscription")}
			</button>
		</div>
	);
};

export default CancelSubButton;
