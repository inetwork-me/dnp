import FilterMenuHeader from "./FilterMenuHeader";
import FilterMenuBody from "./FilterMenuBody";
import FilterMenuFooter from "./FilterMenuFooter";

const FilterMenu = () => {
	return (
		<div className='cols-span-1 flex flex-col items-start border border-gray-200 rounded-xl bg-white'>
			<div className='w-full flex flex-col items-center self-stretch py-4 px-6'>
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
