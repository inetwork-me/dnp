"use client";

import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { createNewPasswordSchema } from "@/app/_utils/validationSchemas";

import PasswordField from "./PasswordField";
import ActionButton from "../../_shared/ui/ActionButton";
import { Button } from "@/app/_shared/ui/button";

const CreateNewPasswordForm = ({ t }) => {
	const router = useRouter();

	// The formik hook
	const formik = useFormik({
		initialValues: {
			password: "",
			confirmPassword: "",
		},
		validationSchema: createNewPasswordSchema,
		validateOnChange: true,
		validateOnBlur: true,

		onSubmit: async (values, { setSubmitting, setStatus }) => {
			try {
				//  i will replace this with axios post request
				// await axios.post("/api/reset-password", values);

				// Simulate a successful password reset
				router.push("/auth/signin");
			} catch (error) {
				setStatus("حدث خطأ أثناء حفظ كلمة المرور الجديدة");
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

			{/* Password input */}
			<PasswordField
				t={t}
				formik={formik}
				error={formik.errors.password}
				touched={formik.touched.password}
				value={formik.values.password}
			/>
			{/* Confirm Password input */}
			<PasswordField
				t={t}
				name='confirmPassword'
				placeholder='Confirm Password'
				formik={formik}
				error={formik.errors.confirmPassword}
				touched={formik.touched.confirmPassword}
				value={formik.values.confirmPassword}
			/>
			<Button type='submit' disabled={formik.isSubmitting}>
				{formik.isSubmitting ? t("Loading") : t("Save & back to login")}
			</Button>
		</form>
	);
};

export default CreateNewPasswordForm;
