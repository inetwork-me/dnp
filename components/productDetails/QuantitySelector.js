import React from "react";
import PlusIcon from "@/public/icons/plus.svg";
import MinusIcon from "@/public/icons/minus.svg";

const QuantitySelector = ({ quantity, setQuantity, t }) => {
	const handleQuantityChange = (newQuantity) => {
		if (newQuantity >= 1) {
			setQuantity(newQuantity);
		}
	};
	return (
		<div className='w-full flex items-center gap-4'>
			<div className='w-[170px] h-[59px] flex items-center justify-between border border-[#D1D5DB] rounded-[62px] px-4 py-2 box-border'>
				<button
					className='w-6 h-6 cursor-pointer'
					onClick={() => setQuantity(quantity + 1)}>
					<MinusIcon />
				</button>
				<input
					type='text'
					value={quantity}
					onChange={handleQuantityChange}
					className='text-lg h-[27px] w-6 text-center border-none outline-none'
				/>

				<button
					className='w-6 h-6 cursor-pointer'
					onClick={() => setQuantity(Math.max(1, quantity - 1))}>
					<PlusIcon />
				</button>
			</div>

			<button className='text-[16px] leading-7 font-medium cursor-pointer underline text-[#B26BCA] hover:text-[#9333EA]'>
				{t("Calories Guide")}
			</button>
		</div>
	);
};

export default QuantitySelector;

/* Stepper */
