import Image from "next/image";
import React from "react";

const ImgTextContainer = ({
	isHero,
	buttonText,
	text,
	imgSrc,
	imgHeight,
	leftPosition = "left-[32px]",
	topPosition,
	imgBoxSize = "w-[592px]",
	containerTextSize = "w-[289px]",
	altText = "Image",
	btnWidth = "w-[160px]",
	btnHeight = "h-[51px]",
}) => {
	return (
		<div className={`relative min-h-[207px] ${imgBoxSize} `}>
			<div className='relative  w-full'>
				<Image
					src={imgSrc}
					alt={altText}
					className={`w-full ${imgHeight} `}
					priority
				/>
				<div
					className={`absolute ${containerTextSize} inset-0 ${topPosition} ${leftPosition} flex flex-col justify-center items-start   bg-opacity-40 text-white p-4 text-start gap-[40px]`}>
					{isHero ? (
						<h1 className='text-[30px] font-semibold '>{text}</h1>
					) : (
						<h3 className='text-xl font-semibold '>{text}</h3>
					)}

					{buttonText && (
						<button
							className={`${btnWidth} ${btnHeight} flex justify-center items-center btn-bg py-3 px-[40px] text-white  rounded-xl text-[16px] font-medium cursor-pointer transition-all duration-300 hover:bg-gray-100 hover:-translate-y-1  `}>
							{buttonText}
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default ImgTextContainer;
