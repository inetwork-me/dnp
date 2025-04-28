import { brandsList } from "@/fakeData/data";
import Image from "next/image";
import React from "react";

const BrandsCards = () => {
	return (
		<div className=' grid grid-cols-4 gap-y-6 gap-x-8  p-0'>
			{brandsList.map((brand) => (
				<div
					key={brand.id}
					className='col-span-1 h-[112px]  flex items-center gap-2 p-[9px] transition-colors  duration-300 bg-white hover:bg-[#ECDAF4] border border-[#E5E7EB] rounded-xl box-border'>
					<div className='w-20 h-20 flex justify-center items-center bg-[#F3F4F6] rounded-lg'>
						<Image
							className=''
							src={brand.image}
							alt={brand.brandName}
							width={64}
							height={64}
						/>
					</div>
					<p className='text-lg  font-medium text-[#030712] text-start'>
						{brand.brandName}
					</p>
				</div>
			))}
		</div>
	);
};

export default BrandsCards;
