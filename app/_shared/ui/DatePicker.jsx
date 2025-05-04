"use client";

import ErrorField from "@/app/_components/authComponents/ErrorField";

// CALENDAR
import { Button } from "@/app/_shared/ui/button";
import { Calendar } from "@/app/_shared/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/app/_shared/ui/popover";

import { cn } from "@/lib/utils";
import { formatDate } from "@/app/_utils/formatDate";

const inputClassName =
	"w-full h-[49px] flex justify-between text-sm text-black placeholder:text-gray-500 py-3 px-5 border border-gray-300 bg-white rounded-lg box-border hover:border-[#B26BCA] focus:border-[#B26BCA] focus:outline-none cursor-pointer";

const DtePickerIcon = () => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='25'
			viewBox='0 0 24 25'
			fill='none'>
			<path
				d='M3 12.5C3 8.25736 3 7.13604 4.31802 5.81802C5.63604 4.5 7.75736 4.5 12 4.5C16.2426 4.5 18.364 4.5 19.682 5.81802C21 7.13604 21 8.25736 21 12.5C21 16.7426 21 18.864 19.682 20.182C18.364 21.5 16.2426 21.5 12 21.5C7.75736 21.5 5.63604 21.5 4.31802 20.182C3 18.864 3 16.7426 3 12.5Z'
				stroke='#6B7280'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M3.25 8.5H20.75'
				stroke='#6B7280'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M16.5 5.5V3.5'
				stroke='#6B7280'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M7.5 5.5V3.5'
				stroke='#6B7280'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};

function DatePicker({ formik, t }) {
	return (
		<div className='w-full'>
			<Popover>
				<PopoverTrigger asChild>
					<Button
						variant={"outline"}
						className={cn(
							inputClassName,
							!formik.values.pickDate && "text-muted-foreground"
						)}>
						{formik.values.pickDate ? (
							formatDate(formik.values.pickDate)
						) : (
							<span>{t("Pick a Date")}</span>
						)}
						<DtePickerIcon />
					</Button>
				</PopoverTrigger>
				<PopoverContent className='w-auto p-0'>
					<Calendar
						mode='single'
						selected={formik.values.pickDate}
						onSelect={(date) => {
							formik.setFieldValue("pickDate", date);
						}}
						initialFocus
					/>
				</PopoverContent>
			</Popover>

			<ErrorField
				t={t}
				touched={formik.touched.pickDate}
				error={formik.errors.pickDate}
			/>
		</div>
	);
}

export default DatePicker;
