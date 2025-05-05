"use client";

import { useState } from "react";
import { useFormik } from "formik";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

// import components
import { Button } from "@/app/_shared/ui/button";
import SliderInput from "@/app/_shared/ui/SliderInput";
import Headline from "@/app/_shared/ui/Headline";
import GenderRadioGroup from "./GenderRadioGroup";
import SelectPhysicalActivity from "./SelectPhysicalActivity";

// validation schemas
import { bmiCalculatorSchema } from "@/app/_utils/validationSchemas";
import LoadingBmiCalculator from "../LoadingBmiCalculator";

const BodyInfoForm = () => {
	const t = useTranslations("app");
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);

	// The formik hook
	const formik = useFormik({
		initialValues: {
			gender: t("Male"),
			physicalActivity: "",
			weight: 0,
			height: 0,
		},
		validationSchema: bmiCalculatorSchema,
		validateOnChange: true,
		validateOnBlur: true,
		onSubmit: async (values, { setStatus }) => {
			try {
				setIsLoading(true);

				// Simulate API call or processing time
				await new Promise((resolve) => setTimeout(resolve, 2000));

				// Here you would typically send the data to your backend
				// const response = await fetch('/api/bmi-calculator', { method: 'POST', body: JSON.stringify(values) });

				// Navigate to profile summary page
				router.push("bmiCalculator/profileSummary");
			} catch (error) {
				setStatus(t("Error submitting form"));
				console.error("Form submission error:", error);
			} finally {
				setIsLoading(false);
			}
		},
	});

	return (
		<div className='relative w-full flex flex-col items-center gap-6 rounded-xl border border-gray-200 bg-white p-8'>
			{isLoading && <LoadingBmiCalculator />}
			<Headline
				className='items-center text-center '
				titleClassName='text-3xl font-semibold text-gray-950'
				descriptionClassName='text-base font-normal leading-7 text-gray-700'
				title={t("Body Info")}
				description={t("Please provide your body measurements")}
			/>
			<form
				className='w-full flex flex-col gap-6'
				onSubmit={formik.handleSubmit}>
				{formik.status && (
					<p className='text-red-500 text-center mb-4'>{formik.status}</p>
				)}
				<GenderRadioGroup formik={formik} />
				<SelectPhysicalActivity formik={formik} />
				<SliderInput
					label={t("Weight")}
					min={30}
					max={250}
					value={formik.values.weight}
					onChange={formik.handleChange}
					t={t}
					error={formik.errors.weight}
					touched={formik.touched.weight}
					name='weight'
					unit={t("kg")}
				/>
				<SliderInput
					label={t("Height")}
					min={30}
					max={250}
					value={formik.values.height}
					onChange={formik.handleChange}
					t={t}
					error={formik.errors.height}
					touched={formik.touched.height}
					name='height'
					unit={t("cm")}
				/>

				<Button type='submit' className='w-full' disabled={isLoading}>
					{isLoading ? t("Processing") : t("Submit")}
				</Button>
			</form>
		</div>
	);
};

export default BodyInfoForm;
