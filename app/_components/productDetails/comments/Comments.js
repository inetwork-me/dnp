import React from "react";
import CommentsSlider from "./CommentsSlider";

const Comments = ({ t }) => {
	return (
		<div className='w-full h-[276px]'>
			<h3 className=' text-[32px] leading-[42px] font-semibold mb-8 text-[#111827] '>
				{t("Comments")}
			</h3>

			<CommentsSlider t={t} />
		</div>
	);
};

export default Comments;
