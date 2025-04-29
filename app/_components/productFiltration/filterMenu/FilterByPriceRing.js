"use client";
import React, { useState, useEffect } from "react";
import { AccordionContent } from "@radix-ui/react-accordion";
import { useTranslations } from "next-intl";

import "./FilterByPriceRing.css";

// INPUTS CLASS
const inputClassName =
	"w-full text-center border border-gray-300 rounded-md py-2 px-2 text-base text-black placeholder:text-gray-500 py-3 px-5 border border-gray-300 bg-white rounded-lg box-border hover:border-[#B26BCA] focus:border-[#B26BCA] focus:outline-none";

const FilterByPriceRing = () => {
	const t = useTranslations("app");
	const initialMinPrice = 0;
	const initialMaxPrice = 1000;

	const [sliderMinValue] = useState(initialMinPrice);
	const [sliderMaxValue] = useState(initialMaxPrice);

	const [minVal, setMinVal] = useState(initialMinPrice);
	const [maxVal, setMaxVal] = useState(initialMaxPrice);
	const [minInput, setMinInput] = useState(initialMinPrice);
	const [maxInput, setMaxInput] = useState(initialMaxPrice);

	const [isDragging, setIsDragging] = useState(false);

	const minGap = 5;

	useEffect(() => {
		setSliderTrack();
	}, [minVal, maxVal]);

	const slideMin = (e) => {
		const value = parseInt(e.target.value, 10);
		if (value >= sliderMinValue && maxVal - value >= minGap) {
			setMinVal(value);
			setMinInput(value);
		}
	};

	const slideMax = (e) => {
		const value = parseInt(e.target.value, 10);
		if (value <= sliderMaxValue && value - minVal >= minGap) {
			setMaxVal(value);
			setMaxInput(value);
		}
	};

	const setSliderTrack = () => {
		const range = document.querySelector(".slider-track");

		if (range) {
			const minPercent =
				((minVal - sliderMinValue) / (sliderMaxValue - sliderMinValue)) * 100;
			const maxPercent =
				((maxVal - sliderMinValue) / (sliderMaxValue - sliderMinValue)) * 100;

			range.style.left = `${minPercent}%`;
			range.style.right = `${100 - maxPercent}%`;
		}
	};

	const handleMinInput = (e) => {
		const value =
			e.target.value === "" ? sliderMinValue : parseInt(e.target.value, 10);
		if (value >= sliderMinValue && value < maxVal - minGap) {
			setMinInput(value);
			setMinVal(value);
		}
	};

	const handleMaxInput = (e) => {
		const value =
			e.target.value === "" ? sliderMaxValue : parseInt(e.target.value, 10);
		if (value <= sliderMaxValue && value > minVal + minGap) {
			setMaxInput(value);
			setMaxVal(value);
		}
	};

	const handleInputKeyDown = (e, type) => {
		if (e.key === "Enter") {
			const value = parseInt(e.target.value, 10);
			if (
				type === "min" &&
				value >= sliderMinValue &&
				value < maxVal - minGap
			) {
				setMinVal(value);
			} else if (
				type === "max" &&
				value <= sliderMaxValue &&
				value > minVal + minGap
			) {
				setMaxVal(value);
			}
		}
	};

	const startDrag = () => {
		setIsDragging(true);
	};

	const stopDrag = () => {
		setIsDragging(false);
	};

	return (
		<AccordionContent className='py-4'>
			<div className='flex flex-col gap-4'>
				{/* Price Range Slider */}
				<div className='range-slider'>
					<div className='slider-track'></div>
					<input
						type='range'
						min={sliderMinValue}
						max={sliderMaxValue}
						value={minVal}
						onChange={slideMin}
						onMouseDown={startDrag}
						onMouseUp={stopDrag}
						onTouchStart={startDrag}
						onTouchEnd={stopDrag}
						className='min_val'
					/>
					<input
						type='range'
						min={sliderMinValue}
						max={sliderMaxValue}
						value={maxVal}
						onChange={slideMax}
						onMouseDown={startDrag}
						onMouseUp={stopDrag}
						onTouchStart={startDrag}
						onTouchEnd={stopDrag}
						className='max-val'
					/>
					{isDragging && <div className='min-tooltip'>{minVal}</div>}
					{isDragging && <div className='max-tooltip'>{maxVal}</div>}
				</div>

				{/* Price Inputs */}
				<div className='w-full flex items-center gap-6'>
					<div className='flex-1'>
						<input
							type='number'
							value={minInput}
							onChange={handleMinInput}
							onKeyDown={(e) => handleInputKeyDown(e, "min")}
							className={inputClassName}
							min={sliderMinValue}
							max={maxVal - minGap}
							placeholder='0'
						/>
					</div>

					<div className='text-sm text-gray-500'>{t("to")}</div>

					<div className='flex-1'>
						<input
							type='number'
							value={maxInput}
							onChange={handleMaxInput}
							onKeyDown={(e) => handleInputKeyDown(e, "max")}
							className={inputClassName}
							min={minVal + minGap}
							max={sliderMaxValue}
							placeholder='1000'
						/>
					</div>
				</div>
			</div>
		</AccordionContent>
	);
};

export default FilterByPriceRing;
