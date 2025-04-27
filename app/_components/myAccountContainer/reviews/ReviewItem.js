"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import Link from "next/link";
import RatingStars from "../../productDetails/StarRating";
import Modal from "../../Modal";
import ConfirmDeleteReview from "./ConfirmDeleteReview";

const ReviewItem = ({ review }) => {
	const t = useTranslations("app");
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<>
			<div className='w-full flex flex-col items-start p-6 gap-6 bg-white rounded-2xl border border-gray-200 shadow-[0px_0px_0px_0px_rgba(0,0,0,0.00)] '>
				<div className='w-full  flex  justify-between items-center '>
					<RatingStars rating={review.ratingCount} />
					<Link
						href={"/products/1"}
						className='flex justify-center items-center gap-1.5 bg-gray-100 border border-transparent hover:bg-white hover:border-gray-300 rounded-lg text-gray-800 text-[16px] leading-7 font-normal px-6 py-1.5 transition-all duration-100 ease-in-out cursor-pointer
					'>
						{t("myProfile.editProfile")}
					</Link>
				</div>

				<p className='text-[16px] font-normal leading-7 text-gray-700'>
					{review.comment}
				</p>

				<div className='h-[38px] flex items-start gap-5'>
					<button className='h-full text-[16px] font-medium text-[#B26BCA] hover:text-[#9CA3AF] leading-7  underline cursor-pointer '>
						{t("viewProduct")}
					</button>

					<div className='h-full w-[1px] border border-gray-200 ' />

					<button
						onClick={() => setIsModalOpen(true)}
						className='h-full text-[16px] font-medium text-[#9CA3AF] hover:text-[#B26BCA] leading-7 underline cursor-pointer'>
						{t("deleteReview")}
					</button>
				</div>
			</div>

			<Modal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				title='Delete Review'>
				<ConfirmDeleteReview onClose={() => setIsModalOpen(false)} />
			</Modal>
		</>
	);
};

export default ReviewItem;
