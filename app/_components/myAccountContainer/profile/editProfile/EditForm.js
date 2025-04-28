"use client";

import { useFormik } from "formik";
import { editProfileSchema } from "@/app/_utils/validationSchemas";

import EditShippingInformation from "../shippingInformation/EditShippingInformation";
import EditContactInformation from "../contactInformation/EditContactInformation";
import EditPaymentInformation from "../paymentInformation/EditPaymentInformation";

// INPUTS CLASS
const inputClassName =
	"w-full h-[49px] text-sm text-black placeholder:text-gray-500 py-3 px-5 border border-gray-300 bg-white rounded-lg box-border hover:border-[#B26BCA] focus:border-[#B26BCA] focus:outline-none";

const EditForm = ({ t }) => {
	// The formik hook
	const formik = useFormik({
		initialValues: {
			email: "",
			firstName: "",
			lastName: "",
			phoneNumber: "",
			addressLine: "",
			country: "",
			city: "",
			state: "",
			postalCode: "",
			cardNumber: "",
			cardHolderName: "",
			cardExpirationDate: "",
			cardSecurityCode: "",
		},
		validationSchema: editProfileSchema,

		validateOnChange: true,
		validateOnBlur: true,
		onSubmit: async (values) => {
			// Replace this with your custom API call to create user
			console.log("edit user profile...", values);
		},
	});

	return (
		<form
			onSubmit={formik.handleSubmit}
			className='flex flex-col items-start gap-6 '>
			{formik.status && (
				<p className='text-red-500 text-center mb-4'>{formik.status}</p>
			)}

			<EditContactInformation
				inputClassName={inputClassName}
				formik={formik}
				t={t}
			/>

			<div className='w-full my-3 h-[1px] bg-gray-200' />

			<EditShippingInformation
				inputClassName={inputClassName}
				formik={formik}
				t={t}
			/>

			<div className='w-full my-3 h-[1px] bg-gray-200' />

			<EditPaymentInformation
				inputClassName={inputClassName}
				formik={formik}
				t={t}
			/>
		</form>
	);
};

export default EditForm;
