import { useTranslations } from "next-intl";
import FilterForm from "./FilterForm";

const FilterDoctors = () => {
	const t = useTranslations("app");
	return (
		<div className='w-full bg-white rounded-xl border border-gray-200 p-6'>
			<div className='w-full flex flex-col items-start gap-6'>
				<h4 className='text-xl font-semibold text-gray-950'>
					{t("Filter by")}
				</h4>
				<FilterForm />
			</div>
		</div>
	);
};

export default FilterDoctors;
