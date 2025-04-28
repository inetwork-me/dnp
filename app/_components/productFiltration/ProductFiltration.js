import FilterMenu from "./filterMenu/FilterMenu";
import HeaderSection from "./HeaderSection";

const ProductFiltration = () => {
	return (
		<div className='container mx-auto px-4 py-8'>
			<HeaderSection />
			<div className='flex items-start gap-8 self-stretch'>
				<FilterMenu />
			</div>
		</div>
	);
};

export default ProductFiltration;
