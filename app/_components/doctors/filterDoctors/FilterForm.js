"use client";

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/app/_shared/ui/select";
import ActionButton from "../../authComponents/ActionButton";
import { useTranslations } from "next-intl";

const FilterForm = () => {
	const t = useTranslations("app");
	return (
		<form className='w-full grid grid-cols-4 gap-4 '>
			<Select>
				<SelectTrigger>
					<SelectValue placeholder='Select Branch' />
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
					<SelectValue placeholder='Select specialty' />
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
					<SelectValue placeholder='Select doctor' />
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
			<ActionButton className='h-12 rounded-xl' type='submit'>
				{t("search")}
			</ActionButton>
		</form>
	);
};

export default FilterForm;
