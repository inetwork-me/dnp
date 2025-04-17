"use client";

import React, { useState } from "react";
import Image from "next/image";
import { productImages } from "@/fakeData/data";

const ProductImages = () => {
	const [selectedImage, setSelectedImage] = useState(productImages[0]);

	return (
		<div className='w-1/2 flex flex-col md:flex-row gap-4  rounded-lg'>
			<div className='w-[152px] h-[530px] flex md:flex-col gap-4'>
				{productImages.slice(1, 5).map((item, idx) => (
					<div
						key={item.id}
						className={`w-full cursor-pointer rounded-xl overflow-hidden border-2 ${
							item?.id === selectedImage?.id
								? "border-[#B26BCA]"
								: "border-transparent"
						}`}
						onClick={() => setSelectedImage(item)}>
						<Image
							src={item.image}
							alt={`Product thumbnail ${idx + 1}`}
							width={152}
							height={120}
							className='object-cover w-full h-auto'
						/>
					</div>
				))}
			</div>

			{/* Main Image */}
			<div className='w-[424px] h-[530px] flex-1 rounded-xl overflow-hidden'>
				<Image
					src={selectedImage?.image}
					alt='Main Product'
					width={424}
					height={530}
					className='w-full h-auto rounded-xl object-cover'
				/>
			</div>
		</div>
	);
};

export default ProductImages;
