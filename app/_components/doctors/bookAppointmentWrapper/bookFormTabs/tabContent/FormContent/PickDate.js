"use client";

import ErrorField from "@/app/_components/authComponents/ErrorField";
import DatePicker from "@/app/_shared/ui/DatePicker";
import TitleWrapper from "../../../TitleWrapper";

function PickDate({ formik, t }) {
	return (
		<div className='col-span-full flex flex-col gap-4 items-start'>
			<TitleWrapper title={t("Enter your personal information")} />

			<div className='w-full'>
				<DatePicker formik={formik} t={t} />

				<ErrorField
					t={t}
					touched={formik.touched.pickDate}
					error={formik.errors.pickDate}
				/>
			</div>
		</div>
	);
}

export default PickDate;
