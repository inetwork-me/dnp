import GaugeChart from "@/app/_charts/GaugeChart";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedCounter = ({ value }) => {
	const count = useMotionValue(0);
	const rounded = useTransform(count, (latest) => {
		// Handle different value formats (numeric or with units like "2.5 Ltr")
		if (typeof value === "string" && isNaN(parseFloat(value))) {
			const numericPart = parseFloat(value);
			const unit = value.replace(numericPart, "").trim();
			return `${Math.round(latest * 10) / 10}${unit}`;
		}
		return Math.round(latest);
	});

	const [displayValue, setDisplayValue] = useState("0");

	useEffect(() => {
		const numericValue = typeof value === "string" ? parseFloat(value) : value;

		if (!isNaN(numericValue)) {
			const animation = animate(count, numericValue, {
				duration: 1.5,
				ease: "easeOut",
			});

			return animation.stop;
		}
	}, [value, count]);

	useEffect(() => {
		const unsubscribe = rounded.onChange(setDisplayValue);
		return unsubscribe;
	}, [rounded]);

	return <>{displayValue}</>;
};

const ChartContent = ({ item }) => {
	return (
		<>
			{item.icon ? (
				<>
					<div className='flex justify-center items-center'>{item.icon}</div>
					{item.bmiValue && (
						<motion.h3
							className='text-[40px] font-semibold text-[#723881]'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5 }}>
							<AnimatedCounter value={item.bmiValue} />
						</motion.h3>
					)}
					{item.result && (
						<p className='text-base font-medium text-gray-800'>{item.result}</p>
					)}
				</>
			) : (
				<GaugeChart label={item.result} value={item.bmiValue} />
			)}
		</>
	);
};

export default ChartContent;
