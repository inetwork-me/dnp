import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/app/_shared/ui/accordion";
import FilterByPriceRing from "./FilterByPriceRing";
import { CheckboxWithText } from "@/app/_shared/ui/checkboxWithText";

const FilterItem = ({ category }) => {
	return (
		<AccordionItem value={`item-${category.id}`}>
			<AccordionTrigger>{category.title}</AccordionTrigger>

			{category.title === "price" ? (
				<FilterByPriceRing />
			) : (
				category.subCategories.map((item) => (
					<AccordionContent key={item.id}>
						<CheckboxWithText id={item.id} label={item.title} />
					</AccordionContent>
				))
			)}
		</AccordionItem>
	);
};

export default FilterItem;
