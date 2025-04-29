import ProductsCardsWrapper from "../productsSection/ProductsCardsWrapper";
import ProductsSkelton from "../productsSkelton/ProductsSkelton";
import FilterMenu from "./filterMenu/FilterMenu";
import HeaderSection from "./HeaderSection";

const ProductFiltration = () => {
	return (
		<div className='container mx-auto py-14'>
			<HeaderSection />
			<div className='grid grid-cols-4 items-start gap-8 self-stretch'>
				<FilterMenu />

				{/* products */}
				<div className='col-span-3'>
					<ProductsCardsWrapper gridCols='grid-cols-3' />
				</div>
			</div>
		</div>
	);
};

export default ProductFiltration;
