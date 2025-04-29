import ProductsSkeltonItem from "./ProductsSkeltonItem";

const ProductsSkelton = () => {
	return (
		<div className=' grid grid-cols-3 items-start gap-8 self-stretch'>
			{Array(9)
				.fill(0)
				.map((_, i) => (
					<ProductsSkeltonItem key={i} />
				))}
		</div>
	);
};

export default ProductsSkelton;
