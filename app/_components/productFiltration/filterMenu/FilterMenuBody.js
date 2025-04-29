import { Accordion } from "@/app/_shared/ui/accordion";
import FilterItem from "./FilterItem";
import { categoriesFilterList } from "@/fakeData/data";

const FilterMenuBody = () => {
	return (
		<div className='w-full flex flex-col items-start gap-4  px-0'>
			<Accordion
				defaultValue='item-1'
				className='w-full'
				type='single'
				collapsible>
				{categoriesFilterList.map((category) => (
					<FilterItem key={category.id} category={category} />
				))}
			</Accordion>
		</div>
	);
};

export default FilterMenuBody;
