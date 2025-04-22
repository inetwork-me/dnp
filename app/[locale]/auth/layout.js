import React from "react";

const page = ({ children }) => {
	return (
		<div className='w-full py-20 p-6 bg-[#F9FAFB] '>
			<div className=' flex flex-col items-center gap-12 p-0'>
				<div className='w-[592px] flex flex-col items-center gap-6 p-8 bg-white rounded-xl border border-gray-200 box-border'>
					{children}
				</div>
			</div>
		</div>
	);
};

export default page;
