import ProductCard from "./ProductCard";

// fake data
import { productsList } from "@/fakeData/data";

const ProductsCardsWrapper = ({ discount }) => {
	return (
		<div className=' grid grid-cols-4 gap-8 '>
			{productsList.map((product) => (
				<ProductCard key={product.id} product={product} discount={discount} />
			))}
		</div>
	);
};

export default ProductsCardsWrapper;
