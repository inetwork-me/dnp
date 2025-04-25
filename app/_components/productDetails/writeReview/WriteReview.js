import React from "react";
import Rating from "./Rating";
import WriteCommentContainer from "./WriteCommentContainer";
import Comments from "../comments/Comments";

const WriteReview = ({ t }) => {
	return (
		<section
			id='rating'
			className='w-full flex flex-col  px-28 gap-8   border-b border-y-gray-200 pt-12 pb-22'>
			<h3 className='text-[30px] leading-[42px] font-semibold text-[#111827] mb-4'>
				{t("Write a review")}
			</h3>
			<Rating />
			<WriteCommentContainer t={t} />
			<Comments t={t} />
		</section>
	);
};

export default WriteReview;
