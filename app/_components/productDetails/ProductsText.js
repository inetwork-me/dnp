"use client";
import { use, useState } from "react";

import WhatsappIcon from "@/public/icons/whatsapp.svg";

import RatingStars from "./StarRating";
import FlavourSelector from "./FlavourSelector";
import PriceBox from "./PriceBox";
import QuantitySelector from "./QuantitySelector";
import { useTranslations } from "next-intl";

const ProductsText = ({ openModal }) => {
	const t = useTranslations("app");
	const [selectedFlavour, setSelectedFlavour] = useState("Chocolate");
	const [quantity, setQuantity] = useState(1);

	const flavours = ["Chocolate", "Dreamy Vanilla", "Juicy Strawberry"];

	return (
		<div className='w-1/2 h-[530px] flex flex-col items-start gap-4  '>
			{/* Product Title */}
			<div className='flex flex-col items-start gap-5 border-b pb-4 border-b-gray-200'>
				<h2 className='text-[30px] font-semibold leading-10 text-[#111827]'>
					ISO Triple Zero Next Gen, Gourmet Chocolate, 4 LB, Up To 93.5% Protein
				</h2>

				{/* Vendor */}
				<p className='text-[16px] leading-7 font-medium '>
					{t("Sold by")}:{" "}
					<span className='text-[#B26BCA] underline cursor-pointer'>
						Vendor Name
					</span>
				</p>

				{/* Rating */}
				<RatingStars editable={true} showRating={true} rating={4.5} />

				{/* Price */}
				<PriceBox currentPrice='817' oldPrice='1200' discount={40} />
			</div>

			{/* Flavours */}
			<FlavourSelector
				t={t}
				flavours={flavours}
				selectedFlavour={selectedFlavour}
				onSelect={setSelectedFlavour}
			/>

			<div className='w-full flex flex-col gap-8 '>
				{/* Quantity and Calories */}
				<QuantitySelector
					t={t}
					quantity={quantity}
					setQuantity={setQuantity}
					openModal={openModal}
				/>

				{/* Buttons */}
				<div className='w-full flex flex-col md:flex-row gap-8'>
					<button className='w-1/2 md:w-full h-[59px] btn-bg text-white py-2 px-4 rounded-lg   transition cursor-pointer'>
						{t("addToCart")}
					</button>
					<button className='w-1/2 md:w-full  h-[59px] border border-green-600 text-green-600 py-2 px-4 rounded-lg flex justify-center items-center gap-2 hover:bg-green-50 transition cursor-pointer'>
						<WhatsappIcon /> {t("Order by WhatsApp")}
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductsText;
/* Vendor Info */
