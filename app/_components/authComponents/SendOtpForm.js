"use client";

import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useRouter, useSearchParams } from "next/navigation";
import { sendOtpSchema } from "@/app/_utils/validationSchemas";

import ErrorField from "./ErrorField";
import ActionButton from "../../_shared/ui/ActionButton";
import { Button } from "react-day-picker";

// INPUTS CLASS
const inputClassName =
	"w-full h-[49px] text-sm text-black placeholder:text-gray-500 py-3 px-5 border border-gray-300 bg-white rounded-lg box-border hover:border-[#B26BCA] focus:border-[#B26BCA] focus:outline-none";

const SendOtpForm = ({ t }) => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const emailSent = searchParams.get("emailSent");

	const [isResending, setIsResending] = useState(false);
	const [resendVisible, setResendVisible] = useState(false);

	const formik = useFormik({
		initialValues: {
			otp: "",
		},
		validationSchema: sendOtpSchema,
		validateOnChange: true,
		validateOnBlur: true,

		onSubmit: async (values, { setSubmitting, setStatus }) => {
			try {
				// Simulate verification success
				router.push("/auth/createNewPassword");
			} catch (error) {
				setStatus("حدث خطأ أثناء التحقق من الكود");
			} finally {
				setSubmitting(false);
			}
		},
	});

	const handleResend = () => {
		if (isResending) return;

		setIsResending(true);

		setTimeout(() => {
			setIsResending(false);
		}, 5000);
	};

	return (
		<form onSubmit={formik.handleSubmit} className='w-full flex flex-col gap-4'>
			{formik.status && (
				<p className='text-red-500 text-center mb-4'>{formik.status}</p>
			)}

			<div className='w-full'>
				<input
					name='otp'
					placeholder={t("OTP")}
					className={inputClassName}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.otp}
				/>

				<ErrorField
					t={t}
					touched={formik.touched.otp}
					error={formik.errors.otp}
				/>
			</div>

			<Button className='w-full' type='submit' disabled={formik.isSubmitting}>
				{formik.isSubmitting ? t("Loading") : t("Submit")}
			</Button>

			{resendVisible && (
				<div className='flex items-center justify-center gap-1.5'>
					<p>{t("Have you not received the verification code?")}</p>
					<button
						type='button'
						onClick={handleResend}
						className='cursor-pointer text-[16px] text-[#B26BCA] font-medium leading-[27px] underline'>
						{t("Send Again")}
					</button>
				</div>
			)}
		</form>
	);
};

export default SendOtpForm;
