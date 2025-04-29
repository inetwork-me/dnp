"use client";

import { Checkbox } from "./checkbox";

export function CheckboxWithText({ className = "", id, label }) {
	return (
		<div className={`flex justify-between  items-center gap-2 ${className}`}>
			<div className='grid gap-1.5 leading-none'>
				<label
					htmlFor={id}
					className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer'>
					{label}
				</label>
			</div>

			<Checkbox id={id} />
		</div>
	);
}
