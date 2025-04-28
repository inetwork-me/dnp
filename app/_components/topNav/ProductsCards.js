import ImgTextContainer from "../ImgTextContainer";

import productImg1 from "@/public/images/productImg1.png";
import productImg2 from "@/public/images/productImg2.png";
import productImg3 from "@/public/images/productImg3.png";

const ProductsCards = () => {
	return (
		<section className='w-full grid grid-cols-4 gap-8 p-0 pb-8 '>
			<ImgTextContainer
				imgSrc={productImg3}
				imgBoxSize='w-[305px]'
				altText='product image'
				containerTextSize='w-[80%]'
				leftPosition='left-[24px]'
				topPosition='top-[131px]'
				text={"Acquire the protein bundle now."}
			/>
			<ImgTextContainer
				imgSrc={productImg1}
				imgBoxSize='w-[305px]'
				altText='product image'
				containerTextSize='w-[80%]'
				leftPosition='left-[24px]'
				topPosition='top-[131px]'
				text={"Acquire the protein bundle now."}
			/>
			<ImgTextContainer
				imgSrc={productImg2}
				imgBoxSize='w-[305px]'
				altText='product image'
				containerTextSize='w-[80%]'
				leftPosition='left-[24px]'
				topPosition='top-[131px]'
				text={"Acquire the protein bundle now."}
			/>
			<ImgTextContainer
				imgSrc={productImg3}
				imgBoxSize='w-[305px]'
				altText='product image'
				containerTextSize='w-[80%]'
				leftPosition='left-[24px]'
				topPosition='top-[131px]'
				text={"Acquire the protein bundle now."}
			/>
		</section>
	);
};

export default ProductsCards;
