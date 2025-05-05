import React from "react";

const InfoItem = ({ title, value }) => {
	return (
		<div className='border-r pr-6 last:pr-0 border-[#E5E7EB] last:border-none'>
			<h6 className='text-sm font-normal text-gray-500'>{title}</h6>
			<p className='text-base font-medium text-gray-800'>{value}</p>
		</div>
	);
};

export default InfoItem;
