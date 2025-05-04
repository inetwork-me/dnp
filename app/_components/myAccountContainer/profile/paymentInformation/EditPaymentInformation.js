import React from "react";
import SectionTitle from "../../SectionTitle";
import { CreditCardInputsWrapper } from "../../../../_shared/ui/CreditCardInputsWrapper";
import { Button } from "react-day-picker";

const EditPaymentInformation = ({ formik, t }) => {
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

				<CreditCardInputsWrapper formik={formik} t={t} />
			</div>

			<Button size='default' className='md:w-auto w-full ' outline={true}>
				{t("Add new card")}
			</Button>
		</>
	);
};

export default EditPaymentInformation;
