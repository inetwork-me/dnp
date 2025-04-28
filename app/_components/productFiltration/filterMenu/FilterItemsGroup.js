import { Accordion } from "@/components/ui/accordion";
import FilterItem from "./FilterItem";
import { categoriesFilterList } from "@/fakeData/data";

const FilterItemGroup = () => {
	return (
		<Accordion type='single' collapsible>
			{categoriesFilterList.map((category) => (
				<FilterItem key={category.id} category={category} />
			))}
		</Accordion>
	);
};

export default FilterItemGroup;
