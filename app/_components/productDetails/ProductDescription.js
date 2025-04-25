"use client";
import { useState } from "react";

import { productAccordingList } from "@/fakeData/data";
import ProductAccording from "./ProductAccording";

const ProductDescription = ({ t }) => {
	const [activeIndex, setActiveIndex] = useState(null);

	const handleToggle = (index) => {
		setActiveIndex(index === activeIndex ? null : index);
	};

	return (
		<div className='w-full flex flex-col items-start gap-2 border-y border-y-gray-200 py-12'>
			<div className='container mx-auto'>
				<div className='flex flex-col gap-4'>
					{productAccordingList.map((item, index, id) => (
						<ProductAccording
							key={id}
							icon={item.icon}
							question={t(item.question)}
							answer={item.answer}
							isOpen={activeIndex === index}
							onToggle={() => handleToggle(index)}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProductDescription;
