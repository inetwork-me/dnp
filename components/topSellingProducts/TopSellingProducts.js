import React from "react";
import Headline from "../Headline";
import ProductsCardsWrapper from "./ProductsCardsWrapper";

const TopSellingProducts = () => {
	return (
		<section className='pb-14'>
			<Headline
				title='Top Selling Bundles'
				description='Explore our fitness programs to reach your best physical shape.'
			/>

			<ProductsCardsWrapper />
		</section>
	);
};

export default TopSellingProducts;
