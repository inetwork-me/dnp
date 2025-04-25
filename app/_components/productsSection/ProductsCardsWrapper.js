import ProductCard from "./ProductCard";

// fake data
import { productsList } from "@/fakeData/data";

const ProductsCardsWrapper = ({ discount }) => {
	return (
		<div className='flex flex-wrap gap-8 justify-center items-start'>
			{productsList.map((product) => (
				<ProductCard key={product.id} product={product} discount={discount} />
			))}
		</div>
	);
};

export default ProductsCardsWrapper;
