import React from "react";
import styles from "./ProductsSkelton.module.css";

const ProductsSkeltonItem = () => {
	return (
		<div className='w-[280px] flex flex-col items-start gap-6 rounded-[20px] bg-[#F9FAFB]'>
			<div
				className={`w-full h-[289px] flex flex-col justify-center items-center self-stretch rounded-sm bg-[rgba(0,0,0,0.08)] ${styles.shimmer}`}
			/>
			<div className='w-full flex flex-col items-start gap-6 '>
				<div
					className={`w-[241px] h-[24px] rounded-sm bg-[rgba(0,0,0,0.08)] ${styles.shimmer}`}
				/>
				<div
					className={`w-[156px] h-[24px] rounded-sm bg-[rgba(0,0,0,0.08)] ${styles.shimmer}`}
				/>
				<div
					className={`w-[79px] h-[24px] rounded-sm bg-[rgba(0,0,0,0.08)] ${styles.shimmer}`}
				/>
			</div>
		</div>
	);
};

export default ProductsSkeltonItem;
