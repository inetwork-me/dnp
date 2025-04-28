import {
	AccordionItem,
	AccordionContent,
	AccordionTrigger,
} from "@/components/ui/accordion";

const FilterItem = ({ category }) => {
	return (
		<AccordionItem value={category.id}>
			<AccordionTrigger>{category.title}</AccordionTrigger>

			{category.subCategories.map((item) => (
				<AccordionContent key={item.id}>{item.title}</AccordionContent>
			))}
		</AccordionItem>
	);
};

export default FilterItem;
