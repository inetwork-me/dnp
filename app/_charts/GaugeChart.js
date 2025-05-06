"use client";

import React, { useEffect, useState } from "react";
import ValueLabel from "./ValueLabel";

const GaugeChart = ({ value = 50, max = 100, label = "label" }) => {
	const radius = 120;
	const strokeWidth = 20;
	const centerX = 150;
	const centerY = 150;

	const [animatedValue, setAnimatedValue] = useState(0);
	const duration = 1000;

	useEffect(() => {
		let start = 0;
		const step = Math.ceil(value / 60);
		const interval = setInterval(() => {
			start += step;
			if (start >= value) {
				setAnimatedValue(value);
				clearInterval(interval);
			} else {
				setAnimatedValue(start);
			}
		}, duration / 60);

		return () => clearInterval(interval);
	}, [value]);

	// حساب موقع الدائرة بناءً على القيمة المتحركة
	const percentage = Math.min(Math.max(animatedValue / max, 0), 1);
	const angleDeg = 180 * percentage;
	const angleRad = (angleDeg * Math.PI) / 180;
	const x = centerX - radius * Math.cos(angleRad);
	const y = centerY - radius * Math.sin(angleRad);

	return (
		<div className='relative w-full h-full'>
			<svg width='100%' height='100%' viewBox='0 0 300 180'>
				<defs>
					<linearGradient id='gaugeGradient' x1='0%' y1='0%' x2='100%' y2='0%'>
						<stop offset='2.53%' stopColor='#1BB1E8' />
						<stop offset='12.05%' stopColor='#39AE4B' />
						<stop offset='69.2%' stopColor='#FFC600' />
						<stop offset='78.72%' stopColor='#D19000' />
						<stop offset='97.77%' stopColor='#F9423A' />
					</linearGradient>
				</defs>

				{/* المسار الملون الثابت */}
				<path
					d='M30,150 A120,120 0 0,1 270,150'
					fill='none'
					stroke='url(#gaugeGradient)'
					strokeWidth={strokeWidth}
					strokeLinecap='round'
				/>

				{/* الدائرة المتحركة داخل المسار */}
				<circle
					cx={x}
					cy={y}
					r='12'
					fill='#ffffff'
					stroke='#723881'
					strokeWidth='5'
					style={{
						transition: "cx 0.05s linear, cy 0.05s linear",
					}}
				/>
			</svg>

			<ValueLabel value={animatedValue} label={label} />
		</div>
	);
};

export default GaugeChart;
