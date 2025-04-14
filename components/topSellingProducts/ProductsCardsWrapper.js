import React from "react";
import ProductCard from "./ProductCard";

import ProductImg1 from "@/public/images/bestSellingProducts/image1.png";
import ProductImg2 from "@/public/images/bestSellingProducts/image2.png";
import ProductImg3 from "@/public/images/bestSellingProducts/image3.png";

const productsList = [
	{
		id: 1,
		title: "Product name",
		link: "/products",
		image: ProductImg1,
	},
	{
		id: 2,
		title: "Product name",
		link: "/products",
		image: ProductImg2,
	},
	{
		id: 3,
		title: "Product name",
		link: "/products",
		image: ProductImg2,
	},
	{
		id: 4,
		title: "Product name",
		link: "/products",
		image: ProductImg3,
	},
];

const ProductsCardsWrapper = () => {
	return (
		<div className='flex flex-wrap gap-8 justify-center items-start'>
			{productsList.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
};

export default ProductsCardsWrapper;
