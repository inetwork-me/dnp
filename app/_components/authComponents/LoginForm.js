"use client";

import { signIn } from "next-auth/react";
import { useFormik } from "formik";

import { useRouter } from "next/navigation";
import { signinSchema } from "@/app/_utils/validationSchemas";
import RememberMe from "./RememberMe";
import NavigateLinkBtn from "./NavigateLinkBtn";

import ErrorField from "./ErrorField";
import PasswordField from "./PasswordField";

import { Button } from "@/app/_shared/ui/button";

// INPUTS CLASS
const inputClassName =
	"w-full h-[49px] text-sm text-black placeholder:text-gray-500 py-3 px-5 border border-gray-300 bg-white rounded-lg box-border hover:border-[#B26BCA] focus:border-[#B26BCA] focus:outline-none";

const LoginForm = ({ t }) => {
	const router = useRouter();

	const handleNavigateTo = (href) => {
		router.push(href);
	};

	// The formik hook
	const formik = useFormik({
		initialValues: {
			email: "test@example.com",
			password: "Password@123",
		},
		validationSchema: signinSchema,
		validateOnChange: true,
		validateOnBlur: true,
		onSubmit: async (values, { setStatus }) => {
			const res = await signIn("credentials", {
				redirect: false,
				email: values.email,
				password: values.password,
			});
			if (res?.error) {
				setStatus(t("Invalid email or password"));
			} else {
				handleNavigateTo("/");
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

			{/* Password input */}
			<PasswordField
				t={t}
				formik={formik}
				error={formik.errors.password}
				touched={formik.touched.password}
				value={formik.values.password}
			/>

			<div className='w-full flex items-start justify-between'>
				<RememberMe t={t} />
				<NavigateLinkBtn
					href='/auth/resetPassword'
					text={t("Reset password")}
				/>
			</div>

			<Button className='w-full' type='submit' disabled={formik.isSubmitting}>
				{formik.isSubmitting ? t("Loading") : t("Login")}
			</Button>
		</form>
	);
};

export default LoginForm;
