import { useTranslations } from "next-intl";

const ShippingInformation = () => {
	const t = useTranslations("app");
	return (
		<div className='w-full flex flex-col items-start gap-6 '>
			<h4 className=' text-2xl font-semibold text-gray-950'>
				{t("myProfile.ContactInformation")}
			</h4>

			<div className='w-full flex items-start flex-wrap justify-evenly '>
				<div className='flex-1 flex flex-col justify-center items-start gap-1 p-0'>
					<h5 className='text-sm font-normal text-gray-500'>
						{t("Full name")}
					</h5>
					<p className='text-[16px] font-medium leading-7 text-gray-800'>
						Waleed Salah
					</p>
				</div>

				<div className='flex-1 flex flex-col justify-center items-start gap-0 p-0'>
					<h5 className='text-sm font-normal text-gray-500'>
						{t("myProfile.PhoneNumber")}
					</h5>
					<p className='text-[16px] font-medium leading-7 text-gray-800'>
						01712345678
					</p>
				</div>
				<div className='flex-3 flex flex-col justify-center items-start gap-0 p-0'>
					<h5 className='text-sm font-normal text-gray-500'>
						{t("myProfile.AddressLine")}
					</h5>
					<p className='text-[16px] font-medium leading-7 text-gray-800'>
						214st name, villa 9, New Cairo, Cairo, Egypt
					</p>
				</div>
				<div className='flex-1 flex flex-col justify-center items-start gap-0 p-0'>
					<h5 className='text-sm font-normal text-gray-500'>
						{t("myProfile.PostalCode")}
					</h5>
					<p className='text-[16px] font-medium leading-7 text-gray-800'>
						54321
					</p>
				</div>
			</div>
		</div>
	);
};

export default ShippingInformation;
