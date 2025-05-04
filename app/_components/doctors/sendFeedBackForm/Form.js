"use client";

import { useFormik } from "formik";
import { useTranslations } from "next-intl";
import { feedbackSchema } from "@/app/_utils/validationSchemas";

// components

import ErrorField from "../../authComponents/ErrorField";
import { Button } from "@/app/_shared/ui/button";

// INPUTS CLASS
const inputClassName =
	"w-full h-[49px] text-sm text-black placeholder:text-gray-500 py-3 px-5 border border-gray-300 bg-white rounded-lg box-border hover:border-[#B26BCA] focus:border-[#B26BCA] focus:outline-none";

const Form = () => {
	const t = useTranslations("app");
	// The formik hook
	const formik = useFormik({
		initialValues: {
			fullName: "",
			email: "",
			message: "",
		},
		validationSchema: feedbackSchema,
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
		<div className='col-span-1'>
			<form
				className='flex flex-col items-start gap-6'
				onSubmit={formik.handleSubmit}>
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

				<div className='w-full'>
					<textarea
						name='message'
						placeholder={t("Tell us your feedback")}
						className={`${inputClassName} resize-none h-[120px]`}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.message}
					/>

					<ErrorField
						t={t}
						touched={formik.touched.message}
						error={formik.errors.message}
					/>
				</div>

				<Button className='md:w-72 w-full  h-14 rounded-xl' type='submit'>
					{t("Submit")}
				</Button>
			</form>
		</div>
	);
};

export default Form;
