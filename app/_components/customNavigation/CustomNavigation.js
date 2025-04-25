import React from "react";

import ArrowRight from "@/public/icons/offers/arrowRight.svg";
import ArrowLeft from "@/public/icons/offers/arrowLeft.svg";

import styles from "./CustomNavigation.module.css";

const CustomNavigation = ({
	nextRef,
	prevRef,
	right = "right-12",
	left = "left-12",
}) => {
	return (
		<>
			<button
				ref={prevRef}
				className={`${styles.customNextArrow} absolute ${right} top-1/2 transform -translate-y-1/2 z-10 cursor-pointer`}>
				<ArrowRight />
			</button>
			<button
				ref={nextRef}
				className={`${styles.customPrevArrow} absolute  ${left} top-1/2 transform -translate-y-1/2 z-10 cursor-pointer`}>
				<ArrowLeft />
			</button>
		</>
	);
};

export default CustomNavigation;
