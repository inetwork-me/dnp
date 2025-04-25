import React from "react";
import Headline from "../Headline";
import BrandsCards from "./BrandsCards";

const ShopByBrands = ({ headlineTitle, headlineDescription }) => {
	return (
		<section className='py-14 bg-[#F9FAFB]'>
			<div className='container mx-auto'>
				<Headline title={headlineTitle} description={headlineDescription} />

				<BrandsCards />
			</div>
		</section>
	);
};

export default ShopByBrands;
