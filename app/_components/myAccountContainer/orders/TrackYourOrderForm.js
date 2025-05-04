"use client";
import { useFormik } from "formik";
import { useTranslations } from "next-intl";

// utils
import { trackYourOrderSchema } from "@/app/_utils/validationSchemas";

// components
import SectionTitle from "../SectionTitle";
import ErrorField from "../../authComponents/ErrorField";

import { Button } from "@/app/_shared/ui/button";

// INPUTS CLASS
const inputClassName =
	"w-full h-[49px] text-sm text-black placeholder:text-gray-500 py-3 px-5 border border-gray-300 bg-white rounded-lg box-border hover:border-[#B26BCA] focus:border-[#B26BCA] focus:outline-none";

const TrackYourOrderForm = () => {
	const t = useTranslations("app");

	// The formik hook
	const formik = useFormik({
		initialValues: {
			orderId: "",
		},
		validationSchema: trackYourOrderSchema,
		validateOnChange: true,
		validateOnBlur: true,
		onSubmit: async (values) => {
			// Replace this with your custom API call to create user
			console.log("edit user profile...", values);
		},
	});

	return (
		<div className='w-full flex flex-col items-start border border-gray-200 rounded-xl gap-6 p-8 '>
			<SectionTitle title={t("trackYourOrder")} />
			<p className='text-[16px] font-normal leading-7 text-gray-600'>
				{t(
					"orders.Enter your Order ID below and click Truck to see your order status"
				)}
			</p>

			<form
				onSubmit={formik.handleSubmit}
				className='w-full flex items-start gap-6'>
				{formik.status && (
					<p className='text-red-500 text-center mb-4'>{formik.status}</p>
				)}

				<div className='w-full flex justify-start flex-wrap gap-5'>
					<div className='w-full flex-1 flex items-start flex-wrap gap-5'>
						<input
							name='orderId'
							placeholder={t("orders.orderId")}
							className={inputClassName}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.orderID}
						/>

						<ErrorField
							t={t}
							touched={formik.touched.orderID}
							error={formik.errors.orderID}
						/>
					</div>
					<Button size='default' className='md:w-auto w-full '>
						{t("orders.trackOrder")}
					</Button>
				</div>
			</form>
		</div>
	);
};

export default TrackYourOrderForm;
