"use client";

import { useState } from "react";
import { useFormik } from "formik";

import { useRouter } from "next/navigation";
import { signupSchema } from "@/app/_utils/validationSchemas";

import ErrorField from "./ErrorField";
import PasswordField from "./PasswordField";
import { Button } from "@/app/_shared/ui/button";

// INPUTS CLASS
const inputClassName =
	"w-full h-[49px] text-sm text-black placeholder:text-gray-500 py-3 px-5 border border-gray-300 bg-white rounded-lg box-border hover:border-[#B26BCA] focus:border-[#B26BCA] focus:outline-none";

const SignUpForm = ({ t }) => {
	const router = useRouter();
	const [loading, setLoading] = useState(false);

	// The formik hook
	const formik = useFormik({
		initialValues: {
			fullName: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
		validationSchema: signupSchema,

		validateOnChange: true,
		validateOnBlur: true,
		onSubmit: async (values) => {
			setLoading(true);
			// Replace this with your custom API call to create user
			console.log("Registering user...", values);
			setLoading(false);
		},
	});

	return (
		<form onSubmit={formik.handleSubmit} className='w-full flex flex-col gap-4'>
			{formik.status && (
				<p className='text-red-500 text-center mb-4'>{formik.status}</p>
			)}
			<div className='w-full'>
				<input
					name='fullName'
					placeholder={t("Full Name")}
					className={inputClassName}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.fullName}
				/>

				<ErrorField
					t={t}
					touched={formik.touched.fullName}
					error={formik.errors.fullName}
				/>
			</div>

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

			{/* Password input */}
			<PasswordField
				t={t}
				formik={formik}
				error={formik.errors.password}
				touched={formik.touched.password}
				value={formik.values.password}
			/>

			<PasswordField
				t={t}
				name='confirmPassword'
				placeholder='Confirm Password'
				formik={formik}
				error={formik.errors.confirmPassword}
				touched={formik.touched.confirmPassword}
				value={formik.values.confirmPassword}
			/>

			<Button className='w-full' type='submit' disabled={formik.isSubmitting}>
				{formik.isSubmitting ? t("Loading") : t("Create a new account")}
			</Button>
		</form>
	);
};

export default SignUpForm;
