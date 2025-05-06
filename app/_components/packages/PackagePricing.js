import Currency from "@/app/_shared/ui/Currency";

const PackagePricing = ({ price, discount, period }) => {
	return (
		<div className='space-y-2'>
			<Currency
				className='text-3xl font-bold text-gray-950'
				amount={price}
				discount={discount}
				currency='EGP'
			/>

			<p className='text-base font-normal text-gray-500'>{period}</p>
		</div>
	);
};

export default PackagePricing;
