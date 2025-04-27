import React from "react";
import SectionTitle from "../../SectionTitle";
import ErrorField from "@/app/_components/authComponents/ErrorField";
import ActionButton from "@/app/_components/authComponents/ActionButton";

const EditPaymentInformation = ({ inputClassName, formik, t }) => {
	return (
		<>
			<SectionTitle title={t("myProfile.PaymentInformation")} />

			<div className='w-full flex flex-col items-start border border-gray-200 rounded-xl gap-6 p-6'>
				<div className='flex flex-col items-start gap-2'>
					<h5 className='text-xl font-semibold text-gray-800'>
						{t("Credit Card")}
					</h5>
					<p className='text-[16px] font-normal leading-7 text-gray-600'>
						{t("Visa, Mastercard, Meeza")}
					</p>
				</div>

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

			<ActionButton
				btnSize='md:w-auto w-full h-[48px] py-3 px-[40px]'
				outline={true}>
				{t("Add new card")}
			</ActionButton>
		</>
	);
};

export default EditPaymentInformation;
