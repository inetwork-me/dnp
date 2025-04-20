"use client";

import CancelIcon from "@/public/icons/cancelIcon.svg";
import PlusIcon from "@/public/icons/plus.svg";

function ProductAccordion({ isOpen, onToggle, icon, question, answer }) {
	return (
		<section className='w-full min-h-[63px] flex flex-col bg-white shadow-[0px_8px_8px_#F1F5F9] rounded-lg px-6 py-4'>
			<div
				className='flex items-center justify-between w-full cursor-pointer'
				onClick={onToggle}>
				<div className='flex items-center gap-2'>
					{icon}
					<h6 className='text-xl font-semibold text-[#1F2937]'>{question}</h6>
				</div>

				<div className='w-6 h-6 flex justify-center items-center'>
					{isOpen ? (
						<CancelIcon className='w-6 h-6 ' />
					) : (
						<PlusIcon className='w-6 h-6' />
					)}
				</div>
			</div>

			<div
				className={`transition-all duration-500 ease-in-out overflow-hidden ${
					isOpen ? "max-h-50 mt-5 " : "max-h-0"
				}`}>
				<p className='text-lg font-normal text-[#374151]'>{answer}</p>
			</div>
		</section>
	);
}

export default ProductAccordion;
