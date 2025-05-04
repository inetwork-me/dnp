"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/app/_shared/ui/button";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/app/_shared/ui/select";

const FilterForm = () => {
	const t = useTranslations("app");
	return (
		<form className='w-full grid grid-cols-4 gap-4 '>
			<Select>
				<SelectTrigger>
					<SelectValue placeholder='Select Branch' />
				</SelectTrigger>
				<SelectContent searchable={true}>
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
				<SelectContent searchable={true}>
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
				<SelectContent searchable={true}>
					<SelectGroup>
						<SelectItem value='apple'>Apple</SelectItem>
						<SelectItem value='banana'>Banana</SelectItem>
						<SelectItem value='blueberry'>Blueberry</SelectItem>
						<SelectItem value='grapes'>Grapes</SelectItem>
						<SelectItem value='pineapple'>Pineapple</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
			<Button className='h-12' type='submit'>
				{t("search")}
			</Button>
		</form>
	);
};

export default FilterForm;
