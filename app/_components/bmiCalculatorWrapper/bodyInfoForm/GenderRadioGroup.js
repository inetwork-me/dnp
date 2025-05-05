import { useTranslations } from "next-intl";
import { RadioGroup, RadioGroupItem } from "@/app/_shared/ui/radio-group";

// import components
import Headline from "@/app/_shared/ui/Headline";
import ErrorField from "../../authComponents/ErrorField";

const GenderRadioGroup = ({ formik }) => {
	const t = useTranslations("app");

	// Create a custom handler that properly updates formik
	const handleGenderChange = (value) => {
		formik.setFieldValue("gender", value);
	};

	// Custom blur handler that manually marks the field as touched
	const handleBlur = () => {
		formik.setFieldTouched("gender", true);
	};

	return (
		<div className='w-full flex flex-col gap-4 items-start py-5 border-t border-[#E5E7EB]'>
			<Headline titleClassName='text-2xl font-semibold' title={t("Gender")} />

			<RadioGroup
				name='gender'
				onValueChange={handleGenderChange}
				onBlur={handleBlur} // Use custom blur handler
				value={formik.values.gender}
				className='flex flex-col items-start gap-4'>
				<div className='flex items-center gap-4 '>
					<RadioGroupItem value={t("Male")} id={t("Male")} />
					<label
						className='text-base font-medium text-gray-900'
						htmlFor={t("Male")}>
						{t("Male")}
					</label>
				</div>
				<div className='flex items-center gap-4 '>
					<RadioGroupItem value={t("Female")} id={t("Female")} />
					<label
						className='text-base font-medium text-gray-900'
						htmlFor={t("Female")}>
						{t("Female")}
					</label>
				</div>
			</RadioGroup>

			<ErrorField
				t={t}
				touched={formik.touched.gender}
				error={formik.errors.gender}
			/>
		</div>
	);
};

export default GenderRadioGroup;
