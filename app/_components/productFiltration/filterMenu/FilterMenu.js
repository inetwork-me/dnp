import { useTranslations } from "next-intl";
import FilterMenuHeader from "./FilterMenuHeader";
import FilterMenuBody from "./FilterMenuBody";
import FilterMenuFooter from "./FilterMenuFooter";

const FilterMenu = () => {
	const t = useTranslations("app");
	return (
		<div className='w-[296px] flex flex-col items-start border border-gray-200 rounded-xl bg-white'>
			<div className='w-full flex flex-col items-center self-stretch py-0 px-6'>
				{/* Filter Menu header */}
				<FilterMenuHeader />
				{/* Filter Menu body */}

				<FilterMenuBody />

				{/* Filter Menu footer */}
				<FilterMenuFooter />
			</div>
		</div>
	);
};

export default FilterMenu;
