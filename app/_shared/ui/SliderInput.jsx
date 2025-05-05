import ErrorField from "@/app/_components/authComponents/ErrorField";
import React from "react";
import Headline from "./Headline";
import { useParams } from "next/navigation";

const SliderInput = ({
	label,
	min = 0,
	max = 100,
	name,
	value,
	unit = "",
	onChange,
	t,
	error,
	touched,
}) => {
	// Calculate fill percentage for gradient
	const percentage = ((value - min) / (max - min)) * 100;

	// Determine gradient direction based on RTL setting

	const { locale } = useParams();

	const isRTL = locale === "ar";

	// Determine gradient direction based on RTL setting
	const gradientDirection = isRTL ? "to left" : "to right";

	return (
		<div className='w-full flex flex-col gap-4 items-start py-5 border-t border-[#E5E7EB] dark:border-gray-700'>
			<div className='w-full flex items-center justify-between'>
				<Headline title={label} titleClassName='text-2xl font-semibold' />
				<div className='flex items-center gap-2'>
					<input
						type='number'
						id={name}
						name={name}
						value={value}
						min={min}
						max={max}
						onChange={onChange}
						className='max-w-20 px-3 py-2 h-10 text-sm font-normal text-gray-500 dark:text-gray-300 border border-[#E2E8F0] dark:border-gray-600 rounded-md text-center focus:outline-none hover:border-[#7c3c8f] focus:border-[#7c3c8f] transition-colors duration-300 ease-in-out bg-white dark:bg-gray-800'
					/>
					{unit && (
						<span className='text-sm font-normal text-gray-500 dark:text-gray-400'>
							{unit}
						</span>
					)}
				</div>
			</div>

			<div className='w-full flex items-center'>
				<input
					type='range'
					id={name}
					name={name}
					min={min}
					max={max}
					value={value}
					onChange={onChange}
					className='w-full h-[5px] appearance-none rounded-lg cursor-pointer focus:outline-none transition'
					style={{
						background: `linear-gradient(${gradientDirection}, #7c3c8f 0%, #7c3c8f ${percentage}%, #E5E7EB ${percentage}%, #E5E7EB 100%)`,
					}}
					dir={isRTL ? "rtl" : "ltr"}
				/>

				<style jsx>{`
					input[type="range"]::-webkit-slider-thumb {
						-webkit-appearance: none;
						height: 24px;
						width: 24px;
						border-radius: 50%;
						background: white;
						box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.06),
							0px 3px 6px rgba(156, 163, 175, 0.35);
						cursor: pointer;

						margin-top: -10px; /* to align thumb vertically */
						transition: transform 0.15s ease-in-out;
					}
					input[type="range"]:active::-webkit-slider-thumb {
						transform: scale(1.1);
					}
					input[type="range"]::-moz-range-thumb {
						height: 24px;
						width: 24px;
						border-radius: 50%;
						background: white;
						box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.06),
							0px 3px 6px rgba(156, 163, 175, 0.35);
						cursor: pointer;

						transition: transform 0.15s ease-in-out;
					}
					input[type="range"]:active::-moz-range-thumb {
						transform: scale(1.1);
					}
					input[type="range"]::-webkit-slider-runnable-track {
						height: 5px;
						border-radius: 9999px;
					}
					input[type="range"]::-moz-range-track {
						height: 5px;
						border-radius: 9999px;
					}
				`}</style>
			</div>

			<div className='w-full flex justify-between text-sm text-gray-500 dark:text-gray-400'>
				<span>{min}</span>
				<span>{max}</span>
			</div>

			<ErrorField t={t} error={error} touched={touched} />
		</div>
	);
};

export default SliderInput;
