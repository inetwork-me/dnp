import React from "react";
import Headline from "../../_shared/ui/Headline";
import ProductsCardsWrapper from "./ProductsCardsWrapper";

const ProductsSection = ({ headlineTitle, headlineDescription, discount }) => {
	return (
		<section className='py-14 bg-[#F9FAFB]'>
			<div className='container mx-auto'>
				<Headline title={headlineTitle} description={headlineDescription} />

				<ProductsCardsWrapper discount={discount} />
			</div>
		</section>
	);
};

export default ProductsSection;
