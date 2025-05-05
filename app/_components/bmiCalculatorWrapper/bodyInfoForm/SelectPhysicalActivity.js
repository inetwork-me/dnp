import { useTranslations } from "next-intl";
import {
	Select,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
	SelectContent,
} from "@/app/_shared/ui/select";

// import components
import Headline from "@/app/_shared/ui/Headline";
import ErrorField from "../../authComponents/ErrorField";

const SelectPhysicalActivity = ({ formik }) => {
	const t = useTranslations("app");

	// Create a custom handler for the select component
	const handleActivityChange = (value) => {
		formik.setFieldValue("physicalActivity", value);
	};

	return (
		<div className='w-full flex flex-col gap-4 items-start py-5 border-t border-[#E5E7EB]'>
			<Headline
				titleClassName='text-2xl font-semibold'
				title={t("Physical Activity")}
			/>
			<div className='w-full flex flex-col gap-1'>
				<Select
					name='physicalActivity'
					onValueChange={handleActivityChange} // Use onValueChange instead of onChange
					onBlur={formik.handleBlur}
					value={formik.values.physicalActivity}>
					<SelectTrigger>
						<SelectValue placeholder={t("Select option")} />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectItem value='apple'>Apple</SelectItem>
							<SelectItem value='banana'>Banana</SelectItem>
							<SelectItem value='blueberry'>Blueberry</SelectItem>
							<SelectItem value='grapes'>Grapes</SelectItem>
							<SelectItem value='pineapple'>Pineapple</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
				<p className='text-sm font-normal text-muted-foreground '>
					{t("Your level of daily activity")}
				</p>
				<ErrorField
					t={t}
					touched={formik.touched.physicalActivity}
					error={formik.errors.physicalActivity}
				/>
			</div>
		</div>
	);
};

export default SelectPhysicalActivity;
