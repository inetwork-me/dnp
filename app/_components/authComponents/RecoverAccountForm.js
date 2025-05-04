"use client";

import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { recoverAccountSchema } from "@/app/_utils/validationSchemas";

import ErrorField from "./ErrorField";

import { Button } from "react-day-picker";

// INPUTS CLASS
const inputClassName =
	"w-full h-[49px] text-sm text-black placeholder:text-gray-500 py-3 px-5 border border-gray-300 bg-white rounded-lg box-border hover:border-[#B26BCA] focus:border-[#B26BCA] focus:outline-none";

const RecoverAccountForm = ({ t }) => {
	const router = useRouter();

	const formik = useFormik({
		initialValues: {
			email: "",
		},
		validationSchema: recoverAccountSchema,
		validateOnChange: true,
		validateOnBlur: true,

		onSubmit: async (values, { setSubmitting, setStatus }) => {
			try {
				//  i will replace this with axios post request
				// await axios.post("/api/reset-password", values);

				// Simulate a successful password reset
				router.push("/auth/sendOtp?emailSent=true");
			} catch (error) {
				setStatus("حدث خطأ أثناء إرسال البريد الإلكتروني");
			} finally {
				setSubmitting(false);
			}
		},
	});

	return (
		<form onSubmit={formik.handleSubmit} className='w-full flex flex-col gap-4'>
			{formik.status && (
				<p className='text-red-500 text-center mb-4'>{formik.status}</p>
			)}
			<div className='w-full'>
				<input
					name='email'
					placeholder={t("Email")}
					className={inputClassName}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.email}
				/>

				<ErrorField
					t={t}
					touched={formik.touched.email}
					error={formik.errors.email}
				/>
			</div>

			<Button className='w-full' type='submit' disabled={formik.isSubmitting}>
				{formik.isSubmitting ? t("Loading") : t("Send")}
			</Button>
		</form>
	);
};

export default RecoverAccountForm;
