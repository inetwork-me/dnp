import Link from "next/link";

export const BillingInfoBtn = ({ t }) => {
	return (
		<div className='flex items-center gap-4'>
			<p className='text-xl font-medium text-gray-800'>{t("billing")}</p>
			<Link
				className='flex justify-center items-center py-1 px-2.5 gap-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-50'
				href='/myAccount/profile'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='17'
					height='11'
					viewBox='0 0 17 11'
					fill='none'>
					<path
						fillRule='evenodd'
						clip-rule='evenodd'
						d='M8.71431 9.19762C7.83671 9.93392 6.69831 10.3784 5.45437 10.3784C2.67872 10.3784 0.428619 8.16541 0.428619 5.43554C0.428619 2.70567 2.67872 0.492676 5.45437 0.492676C6.69832 0.492676 7.83672 0.937169 8.71433 1.67347C9.59193 0.937177 10.7303 0.492691 11.9743 0.492691C14.7499 0.492691 17 2.70569 17 5.43555C17 8.16542 14.7499 10.3784 11.9743 10.3784C10.7303 10.3784 9.59191 9.93393 8.71431 9.19762Z'
						fill='#ED0006'
					/>
					<path
						fillRule='evenodd'
						clip-rule='evenodd'
						d='M8.71429 9.19762C9.7949 8.29101 10.4801 6.94197 10.4801 5.43554C10.4801 3.9291 9.7949 2.58007 8.71429 1.67346C9.59189 0.937161 10.7303 0.492676 11.9742 0.492676C14.7499 0.492676 17 2.70567 17 5.43554C17 8.16541 14.7499 10.3784 11.9742 10.3784C10.7303 10.3784 9.59189 9.93392 8.71429 9.19762Z'
						fill='#F9A000'
					/>
					<path
						fillRule='evenodd'
						clip-rule='evenodd'
						d='M8.71432 9.19746C9.79491 8.29084 10.4801 6.94182 10.4801 5.4354C10.4801 3.92898 9.79491 2.57995 8.71432 1.67334C7.63374 2.57995 6.94855 3.92898 6.94855 5.4354C6.94855 6.94182 7.63374 8.29084 8.71432 9.19746Z'
						fill='#FF5E00'
					/>
				</svg>
				5506
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='20'
					height='21'
					viewBox='0 0 20 21'
					fill='none'>
					<path
						d='M8.33333 3.00537C5.87853 3.03208 4.50857 3.18798 3.59835 4.0982C2.5 5.19655 2.5 6.96432 2.5 10.4999C2.5 14.0354 2.5 15.8032 3.59835 16.9015C4.6967 17.9999 6.46447 17.9999 10 17.9999C13.5355 17.9999 15.3033 17.9999 16.4016 16.9015C17.286 16.0172 17.4583 14.6989 17.4919 12.3735'
						stroke='#4B5563'
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M17.5 3H11.875M17.5 3V8.625M17.5 3L10.625 9.875'
						stroke='#4B5563'
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			</Link>
		</div>
	);
};
