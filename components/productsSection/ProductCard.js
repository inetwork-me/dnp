"use client";

import Image from "next/image";
import { useState } from "react";
import {
	HeartIcon as OutlineHeartIcon,
	HeartIcon as SolidHeartIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as FilledHeartIcon } from "@heroicons/react/24/solid";

import { useTranslations } from "use-intl";
import RatingStars from "../productDetails/StarRating";
import PriceBox from "../productDetails/PriceBox";

const ProductCard = ({ product, discount }) => {
	const t = useTranslations("app");
	const [isFavorite, setIsFavorite] = useState(false);

	const toggleFavorite = (e) => {
		e.stopPropagation(); // Prevent card click event from triggering
		setIsFavorite(!isFavorite);
	};

	return (
		<div className='w-[296px] h-[520px] flex flex-col items-start gap-4 isolate p-0 cursor-pointer group'>
			<div className='relative h-[330px] rounded-xl w-full overflow-hidden'>
				<Image
					className='w-full h-full rounded-xl'
					src={product.image}
					alt={product.title}
					priority
				/>
				<div className='absolute top-3 -right-12 group-hover:right-3 transition-all duration-300 ease-in-out'>
					<button
						className='w-8 h-8 flex justify-center items-center bg-[rgba(18,18,18,0.25)] rounded-lg hover:bg-[rgba(18,18,18,0.5)] transition-all cursor-pointer'
						onClick={toggleFavorite}>
						{isFavorite ? (
							<FilledHeartIcon className='w-5 h-5 text-red-500' />
						) : (
							<OutlineHeartIcon className='w-5 h-5 text-white' />
						)}
					</button>
				</div>
			</div>

			<div className=' flex flex-col items-start gap-2 p-0 py-3'>
				<h5 className='text-[20px] font-semibold leading-[31px] text-gray-900'>
					{product.title}
				</h5>

				<RatingStars />

				{/* Price */}
				<PriceBox currentPrice='817' oldPrice='1200' discount={discount} />
			</div>
			<button className='relative w-full h-[47px] text-[16px] font-medium leading-7 text-white rounded-lg flex justify-center items-center p-2 z-10 cursor-pointer bg-[#B26BCA] hover:bg-[#723881] transition-all '>
				{t("addToCart")}
			</button>
		</div>
	);
};

export default ProductCard;
