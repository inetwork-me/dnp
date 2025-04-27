import React from "react";
import SectionTitle from "../../SectionTitle";
import ErrorField from "@/app/_components/authComponents/ErrorField";

const EditShippingInformation = ({ inputClassName, formik, t }) => {
	return (
		<>
			<SectionTitle title={t("myProfile.ShippingInformation")} />

			<div className='w-full flex flex-col  items-start flex-wrap justify-evenly'>
				<div className='w-full md:flex-row flex-col flex justify-between items-start gap-4  p-0'>
					<div className='flex-1 flex items-start flex-wrap gap-5'>
						<input
							name='firstName'
							placeholder={t("myProfile.firstName")}
							className={inputClassName}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.firstName}
						/>

						<ErrorField
							t={t}
							touched={formik.touched.firstName}
							error={formik.errors.firstName}
						/>
					</div>

					<div className='flex-1 flex items-start flex-wrap gap-5'>
						<input
							name='lastName'
							placeholder={t("myProfile.lastName")}
							className={inputClassName}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.lastName}
						/>

						<ErrorField
							t={t}
							touched={formik.touched.lastName}
							error={formik.errors.lastName}
						/>
					</div>
				</div>
			</div>

			<div className='w-full flex-1 flex items-start flex-wrap gap-5'>
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

			<div className='w-full flex-1 flex items-start flex-wrap gap-5'>
				<input
					name='addressLine'
					placeholder={t("myProfile.AddressLine")}
					className={inputClassName}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.addressLine}
				/>

				<ErrorField
					t={t}
					touched={formik.touched.addressLine}
					error={formik.errors.addressLine}
				/>
			</div>

			<div className='w-full flex flex-col  items-start flex-wrap justify-evenly'>
				<div className='w-full md:flex-row flex-col flex justify-between items-start gap-4  p-0'>
					<div className='flex-1 flex items-start flex-wrap gap-5'>
						<input
							name='country'
							placeholder={t("myProfile.country")}
							className={inputClassName}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.country}
						/>

						<ErrorField
							t={t}
							touched={formik.touched.country}
							error={formik.errors.country}
						/>
					</div>

					<div className='w-full flex-1 flex items-start flex-wrap gap-5'>
						<input
							name='city'
							placeholder={t("myProfile.city")}
							className={inputClassName}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.city}
						/>

						<ErrorField
							t={t}
							touched={formik.touched.city}
							error={formik.errors.city}
						/>
					</div>
				</div>
			</div>

			<div className='w-full flex flex-col  items-start flex-wrap justify-evenly'>
				<div className='w-full md:flex-row flex-col flex justify-between items-start gap-4  p-0'>
					<div className='flex-1 flex items-start flex-wrap gap-5'>
						<input
							name='state'
							placeholder={t("myProfile.state")}
							className={inputClassName}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.state}
						/>

						<ErrorField
							t={t}
							touched={formik.touched.state}
							error={formik.errors.state}
						/>
					</div>

					<div className='w-full flex-1 flex items-start flex-wrap gap-5'>
						<input
							name='postalCode'
							placeholder={t("myProfile.PostalCode")}
							className={inputClassName}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.postalCode}
						/>

						<ErrorField
							t={t}
							touched={formik.touched.postalCode}
							error={formik.errors.postalCode}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default EditShippingInformation;
