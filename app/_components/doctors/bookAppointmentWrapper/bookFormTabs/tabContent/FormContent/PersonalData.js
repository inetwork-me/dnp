import ErrorField from "@/app/_components/authComponents/ErrorField";
import React from "react";
import TitleWrapper from "../../../TitleWrapper";

// INPUTS CLASS
const inputClassName =
	"w-full h-[49px] text-sm text-black placeholder:text-gray-500 py-3 px-5 border border-gray-300 bg-white rounded-lg box-border hover:border-[#B26BCA] focus:border-[#B26BCA] focus:outline-none";

const PersonalData = ({ formik, t }) => {
	return (
		<div className='col-span-full flex flex-col gap-4 items-start'>
			<TitleWrapper title={t("Enter your personal information")} />

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
				<input
					name='phoneNumber'
					placeholder={t("myProfile.PhoneNumber")}
					className={inputClassName}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.phoneNumber}
				/>

				<ErrorField
					t={t}
					touched={formik.touched.phoneNumber}
					error={formik.errors.phoneNumber}
				/>
			</div>
		</div>
	);
};

export default PersonalData;
