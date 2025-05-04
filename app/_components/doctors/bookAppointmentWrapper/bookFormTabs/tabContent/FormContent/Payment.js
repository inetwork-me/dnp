import { CreditCardInputsWrapper } from "@/app/_shared/ui/CreditCardInputsWrapper";
import React from "react";
import TitleWrapper from "../../../TitleWrapper";

const Payment = ({ formik, t }) => {
	return (
		<div className='col-span-full flex flex-col gap-4 items-start'>
			<TitleWrapper title={t("Enter payment details")} />

			<div className='w-full'>
				<CreditCardInputsWrapper formik={formik} t={t} />
			</div>
		</div>
	);
};

export default Payment;
