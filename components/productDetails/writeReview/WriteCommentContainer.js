import React from "react";

const reviewsData = [
	{ stars: 5, count: 194 },
	{ stars: 4, count: 78 },
	{ stars: 3, count: 25 },
	{ stars: 2, count: 2 },
	{ stars: 1, count: 0 },
];

const WriteCommentContainer = ({ t }) => {
	const total = reviewsData.reduce((acc, cur) => acc + cur.count, 0);

	return (
		<div className='flex flex-col md:flex-row items-start w-full gap-8 p-0 pb-10 border-b border-[#E5E7EB]'>
			{/* Left Side */}
			<div className='flex-1 pr-8 border-r border-[#E5E7EB]'>
				<h3 className='text-[16px] leading-[27px] font-normal mb-1 '>
					{t("Write your review")}
				</h3>
				<div className='flex flex-col gap-6 p-0'>
					<textarea
						className='resize-none w-full min-h-[119px] pt-6 px-6 pb-20 bg-white box-border border border-[#E2E8F0] rounded-lg p-3 text-[16px] font-normal text-gray-[#111827] placeholder:text-[#64748B] outline-none '
						placeholder={t("Let us know what you think")}
					/>
					<button className=' w-full h-[59px] btn-bg text-white  py-3 px-10 rounded-xl text-[16px] font-medium  cursor-pointer'>
						{t("Write a review")}
					</button>
				</div>
			</div>

			{/* Right Side */}
			<div className='w-full min-h-[233px] flex-1 flex flex-col items-start gap-8 p-0'>
				{reviewsData.map((review) => {
					const percentage = total ? (review.count / total) * 100 : 0;

					return (
						<div key={review.stars} className='w-full  flex items-center gap-2'>
							<span className='text-[16px] leading-7 font-medium text-[#1F2937] min-w-[60px]'>
								{review.stars} Stars
							</span>
							<div className='flex-1 bg-[#E5E7EB] h-[12px] rounded-full overflow-hidden'>
								<div
									className='bg-[#FDD032] h-full rounded-full transition-all'
									style={{ width: `${percentage}%` }}
								/>
							</div>
							<span className='text-[16px] leading-7 font-normal text-[#1F2937]  min-w-[20px]'>
								{review.count}
							</span>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default WriteCommentContainer;
