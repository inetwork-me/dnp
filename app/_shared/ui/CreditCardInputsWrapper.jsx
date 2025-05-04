import React from "react";
import ErrorField from "@/app/_components/authComponents/ErrorField";

// INPUTS CLASS
const inputClassName =
	"w-full h-[49px] text-sm text-black placeholder:text-gray-500 py-3 px-5 border border-gray-300 bg-white rounded-lg box-border hover:border-[#B26BCA] focus:border-[#B26BCA] focus:outline-none";

export const CreditCardInputsWrapper = ({ formik, t }) => {
	return (
		<div className='w-full flex flex-col items-start gap-6'>
			<div className='w-full flex-1 flex items-start flex-wrap gap-5'>
				<input
					name='cardNumber'
					placeholder={t("Card number")}
					className={inputClassName}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.cardNumber}
				/>

				<ErrorField
					t={t}
					touched={formik.touched.cardNumber}
					error={formik.errors.cardNumber}
				/>
			</div>
			<div className='w-full flex flex-col  items-start flex-wrap justify-evenly'>
				<div className='w-full md:flex-row flex-col flex justify-between items-start gap-4  p-0'>
					<div className='flex-1 flex items-start flex-wrap gap-5'>
						<input
							name='cardHolderName'
							placeholder={t("Name on card")}
							className={inputClassName}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.cardHolderName}
						/>

						<ErrorField
							t={t}
							touched={formik.touched.cardHolderName}
							error={formik.errors.cardHolderName}
						/>
					</div>

					<div className='flex-1 flex items-start flex-wrap gap-5'>
						<input
							name='cardExpirationDate'
							placeholder={t("Expiry date")}
							className={inputClassName}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.cardExpirationDate}
						/>

						<ErrorField
							t={t}
							touched={formik.touched.cardExpirationDate}
							error={formik.errors.cardExpirationDate}
						/>
					</div>
					<div className='flex-1 flex items-start flex-wrap gap-5'>
						<input
							name='cardSecurityCode'
							placeholder={t("CSV")}
							className={inputClassName}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.cardSecurityCode}
						/>

						<ErrorField
							t={t}
							touched={formik.touched.cardSecurityCode}
							error={formik.errors.cardSecurityCode}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
