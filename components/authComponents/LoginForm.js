"use client";

import { useFormik } from "formik";

import { useRouter } from "next/navigation";
import { signinSchema } from "@/utils/validationSchemas";
import RememberMe from "./RememberMe";
import NavigateLinkBtn from "./NavigateLinkBtn";

import ErrorField from "./ErrorField";
import PasswordField from "./PasswordField";
import ActionButton from "./ActionButton";
import { signIn } from "@/lib/auth";
import { useState } from "react";

// INPUTS CLASS
const inputClassName =
	"w-full h-[49px] text-sm text-black placeholder:text-gray-500 py-3 px-5 border border-gray-300 bg-white rounded-lg box-border hover:border-[#B26BCA] focus:border-[#B26BCA] focus:outline-none";

const LoginForm = ({ t }) => {
	const router = useRouter();
	const [fakeLoginStatus, setFakeLoginStatus] = useState(null);

	const handleNavigateTo = (href) => {
		router.push(href);
	};

	// Fake login handler to be passed to the LoginForm
	const handleFakeLogin = (credentials) => {
		// Simulate API delay
		setFakeLoginStatus("loading");

		setTimeout(() => {
			// Fake credentials check
			if (
				credentials.email === "test@example.com" &&
				credentials.password === "Password@123"
			) {
				setFakeLoginStatus("success");
				// Simulate successful login and redirect
				setTimeout(() => router.push("/"), 1000);
			} else {
				setFakeLoginStatus("error");
			}
		}, 1500);

		return fakeLoginStatus;
	};

	// The formik hook
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: signinSchema,
		validateOnChange: true,
		validateOnBlur: true,
		onSubmit: async (values, { setSubmitting, setStatus }) => {
			// Use the fake login handler instead of the real signIn function
			if (handleFakeLogin) {
				const status = handleFakeLogin(values);
				if (status === "error") {
					setStatus(t("Invalid email or password"));
				}
			} else {
				// Original code for real authentication
				try {
					const res = await signIn("credentials", {
						redirect: false,
						email: values.email,
						password: values.password,
					});

					if (res.error) {
						setStatus(res.error);
					} else {
						router.push("/");
					}
				} catch (error) {
					setStatus(t("Authentication failed"));
				}
			}
			setSubmitting(false);
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

			<ActionButton type='submit' disabled={formik.isSubmitting}>
				{formik.isSubmitting ? t("Loading") : t("Login")}
			</ActionButton>
		</form>
	);
};

export default LoginForm;
