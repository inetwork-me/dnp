// ValueLabel.js
import React from "react";

const ValueLabel = ({ value, label }) => {
	return (
		<div className='relative text-center'>
			{/* القيمة */}
			<div className='absolute bottom-[38px] left-1/2 -translate-x-1/2 text-[#723881] text-[40px] font-semibold'>
				{value}
			</div>

			{/* الليبل */}
			<div className='absolute bottom-0 left-1/2 -translate-x-1/2 text-base font-medium text-gray-800'>
				{label}
			</div>
		</div>
	);
};

export default ValueLabel;
