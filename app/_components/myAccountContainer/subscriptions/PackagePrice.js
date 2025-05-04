import Currency from "../../../_shared/ui/Currency";

const PackagePrice = ({ t }) => {
	return (
		<div className='flex items-center gap-4'>
			<Currency amount={11885} className='text-3xl font-bold text-gray-950' />
			<div className='h-[32px] w-[1px] border border-gray-200' />

			<p className='text-[16px] font-normal leading-7 text-gray-500'>
				{t("monthlyBilling")}
			</p>
		</div>
	);
};

export default PackagePrice;
