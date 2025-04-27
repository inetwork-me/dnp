import ErrorField from "@/app/_components/authComponents/ErrorField";
import SectionTitle from "../../SectionTitle";

const EditContactInformation = ({ inputClassName, formik, t }) => {
	return (
		<>
			<SectionTitle title={t("myProfile.ContactInformation")} />

			<div className='w-full flex items-start flex-wrap gap-5'>
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
		</>
	);
};

export default EditContactInformation;
