import ProductCard from "./ProductCard";

// fake data
import { productsList } from "@/fakeData/data";

const ProductsCardsWrapper = ({
	products = productsList,
	gridCols = "grid-cols-4",
	discount,
}) => {
	return (
		<div className={`grid ${gridCols} gap-8`}>
			{products.map((product) => (
				<ProductCard key={product.id} product={product} discount={discount} />
			))}
		</div>
	);
};

export default ProductsCardsWrapper;
