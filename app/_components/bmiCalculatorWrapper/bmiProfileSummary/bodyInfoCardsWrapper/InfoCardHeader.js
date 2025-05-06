import { Button } from "@/app/_shared/ui/button";
import Headline from "@/app/_shared/ui/Headline";
import { useTranslations } from "next-intl";

const Icon = ({ showDescription }) => {
	return showDescription ? (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'>
			<path
				d='M4.5 12H19.5M19.5 12L13.875 6M19.5 12L13.875 18'
				stroke='#B26BCA'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M4.5 12H19.5M19.5 12L13.875 6M19.5 12L13.875 18'
				stroke='black'
				strokeOpacity='0.2'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M4.5 12H19.5M19.5 12L13.875 6M19.5 12L13.875 18'
				stroke='black'
				strokeOpacity='0.2'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	) : (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'>
			<path
				d='M12 15.9961V15.4961'
				stroke='#B26BCA'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M12 15.9961V15.4961'
				stroke='black'
				strokeOpacity='0.2'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M12 15.9961V15.4961'
				stroke='black'
				strokeOpacity='0.2'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M12 13.4961C12 11.4927 14 11.9935 14 9.99017C14 7.33137 10 7.33139 10 9.99019'
				stroke='#B26BCA'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M12 13.4961C12 11.4927 14 11.9935 14 9.99017C14 7.33137 10 7.33139 10 9.99019'
				stroke='black'
				strokeOpacity='0.2'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M12 13.4961C12 11.4927 14 11.9935 14 9.99017C14 7.33137 10 7.33139 10 9.99019'
				stroke='black'
				strokeOpacity='0.2'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<circle
				cx='12'
				cy='12'
				r='9'
				stroke='#B26BCA'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<circle
				cx='12'
				cy='12'
				r='9'
				stroke='black'
				strokeOpacity='0.2'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<circle
				cx='12'
				cy='12'
				r='9'
				stroke='black'
				strokeOpacity='0.2'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};

const InfoCardHeader = ({ onClick, showDescription, item }) => {
	const t = useTranslations("app");
	return (
		<div className='flex justify-between items-center'>
			<Headline
				titleClassName='text-2xl font-semibold text-gray-950'
				title={t(item.title)}
			/>
			<Button
				onClick={onClick}
				variant='outline'
				size='icon'
				className='rounded-md shadow-[0px_1px_2px_0px_rgba(18,18,23,0.05)] border border-gray-200  hover:bg-gray-200 p-0'>
				<Icon showDescription={showDescription} className='w-6 h-6' />
			</Button>
		</div>
	);
};

export default InfoCardHeader;
