import ErrorField from "@/app/_components/authComponents/ErrorField";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/app/_shared/ui/select";
import TitleWrapper from "../../../TitleWrapper";

const ChooseDoctor = ({ formik, t }) => {
	return (
		<div className='col-span-full flex flex-col gap-4 items-start'>
			<TitleWrapper title={t("Choose doctor and Department")} />
			<Select
				name='doctorName'
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.fullName}>
				<SelectTrigger>
					<SelectValue placeholder={t("Doctor Name")} />
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

				<ErrorField
					t={t}
					touched={formik.touched.doctorName}
					error={formik.errors.doctorName}
				/>
			</Select>
			<Select
				name='departmentName'
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.departmentName}>
				<SelectTrigger>
					<SelectValue placeholder={t("Department Name")} />
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

				<ErrorField
					t={t}
					touched={formik.touched.departmentName}
					error={formik.errors.departmentName}
				/>
			</Select>
		</div>
	);
};

export default ChooseDoctor;
