import React from "react";
import ProductImages from "./ProductImages";
import ProductsText from "./ProductsText";

const ProductDetails = () => {
	return (
		<div className='w-full container mx-auto flex justify-center items-start gap-8 pt-6 pb-12'>
			<ProductImages />
			<ProductsText />
		</div>
	);
};

export default ProductDetails;
