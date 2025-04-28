import ProductsSkeltonItem from "./ProductsSkeltonItem";

const ProductsSkelton = () => {
	return Array(10)
		.fill(0)
		.map((_, i) => <ProductsSkeltonItem key={i} />);
};

export default ProductsSkelton;
