import React from "react";

const PriceBox = ({ currentPrice = "100", oldPrice = "200", discount }) => {
	return (
		<>
			{discount ? (
				<div className='flex items-center gap-2 p-0'>
					<p className='text-2xl font-semibold text-[#030712]'>
						{currentPrice} L.E
					</p>

					<p className='text-2xl font-semibold text-[#9CA3AF] line-through'>
						{oldPrice} L.E
					</p>

					<span className='inline-flex justify-center items-center w-[58px] h-[28px] bg-[#FEE2E2] rounded-[62px] text-red-500 text-sm font-medium'>
						-{discount}%
					</span>
				</div>
			) : (
				<p className='text-2xl font-semibold text-[#030712]'>
					{currentPrice} L.E
				</p>
			)}
		</>
	);
};

export default PriceBox;
