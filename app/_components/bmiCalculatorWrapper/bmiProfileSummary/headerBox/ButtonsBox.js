"use client";

import { Button } from "@/app/_shared/ui/button";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

const ShareIcon = () => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'>
			<path
				d='M14.5 17.5L9.5 14'
				stroke='#B26BCA'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M14.5 17.5L9.5 14'
				stroke='black'
				strokeOpacity='0.2'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M14.5 17.5L9.5 14'
				stroke='black'
				strokeOpacity='0.2'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M19.5 18.5C19.5 19.8807 18.3807 21 17 21C15.6193 21 14.5 19.8807 14.5 18.5C14.5 17.1193 15.6193 16 17 16C18.3807 16 19.5 17.1193 19.5 18.5Z'
				stroke='#B26BCA'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M19.5 18.5C19.5 19.8807 18.3807 21 17 21C15.6193 21 14.5 19.8807 14.5 18.5C14.5 17.1193 15.6193 16 17 16C18.3807 16 19.5 17.1193 19.5 18.5Z'
				stroke='black'
				strokeOpacity='0.2'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M19.5 18.5C19.5 19.8807 18.3807 21 17 21C15.6193 21 14.5 19.8807 14.5 18.5C14.5 17.1193 15.6193 16 17 16C18.3807 16 19.5 17.1193 19.5 18.5Z'
				stroke='black'
				strokeOpacity='0.2'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M9.5 12C9.5 13.3807 8.38072 14.5 7 14.5C5.61929 14.5 4.5 13.3807 4.5 12C4.5 10.6193 5.61929 9.5 7 9.5C8.38072 9.5 9.5 10.6193 9.5 12Z'
				stroke='#B26BCA'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M9.5 12C9.5 13.3807 8.38072 14.5 7 14.5C5.61929 14.5 4.5 13.3807 4.5 12C4.5 10.6193 5.61929 9.5 7 9.5C8.38072 9.5 9.5 10.6193 9.5 12Z'
				stroke='black'
				strokeOpacity='0.2'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M9.5 12C9.5 13.3807 8.38072 14.5 7 14.5C5.61929 14.5 4.5 13.3807 4.5 12C4.5 10.6193 5.61929 9.5 7 9.5C8.38072 9.5 9.5 10.6193 9.5 12Z'
				stroke='black'
				strokeOpacity='0.2'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M14.5 6.5L9.5 10'
				stroke='#B26BCA'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M14.5 6.5L9.5 10'
				stroke='black'
				strokeOpacity='0.2'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M14.5 6.5L9.5 10'
				stroke='black'
				strokeOpacity='0.2'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M19.5 5.5C19.5 6.88072 18.3807 8 17 8C15.6193 8 14.5 6.88072 14.5 5.5C14.5 4.11929 15.6193 3 17 3C18.3807 3 19.5 4.11929 19.5 5.5Z'
				stroke='#B26BCA'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M19.5 5.5C19.5 6.88072 18.3807 8 17 8C15.6193 8 14.5 6.88072 14.5 5.5C14.5 4.11929 15.6193 3 17 3C18.3807 3 19.5 4.11929 19.5 5.5Z'
				stroke='black'
				strokeOpacity='0.2'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M19.5 5.5C19.5 6.88072 18.3807 8 17 8C15.6193 8 14.5 6.88072 14.5 5.5C14.5 4.11929 15.6193 3 17 3C18.3807 3 19.5 4.11929 19.5 5.5Z'
				stroke='black'
				strokeOpacity='0.2'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};

const ButtonsBox = () => {
	const t = useTranslations("app");
	const route = useRouter();

	const handleClick = () => {
		route.push("/bmiCalculator");
	};

	return (
		<div className='flex items-center gap-4'>
			<Button className='rounded-lg' onClick={handleClick}>
				{t("New BMI")}
			</Button>
			<Button className='rounded-lg' variant='outline'>
				<ShareIcon />
				{t("Share results")}
			</Button>
		</div>
	);
};

export default ButtonsBox;
