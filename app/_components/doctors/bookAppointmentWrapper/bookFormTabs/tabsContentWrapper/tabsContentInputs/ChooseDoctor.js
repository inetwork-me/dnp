import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/app/_shared/ui/select";
import React from "react";

const ChooseDoctor = ({ t }) => {
	return (
		<div className='col-span-full flex flex-col gap-4 items-start'>
			<h3 className='text-3xl font-semibold text-gray-950'>
				{t("Choose doctor and Department")}
			</h3>

			<Select>
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
			</Select>

			<Select>
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
			</Select>
		</div>
	);
};

export default ChooseDoctor;
