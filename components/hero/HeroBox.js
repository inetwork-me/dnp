import ImgTextContainer from "../ImgTextContainer";

// images
import heroImage from "@/public/images/heroImage.png";
import productImg2 from "@/public/images/productImg2.png";
import productImg1 from "@/public/images/productImg1.png";

const HeroBox = () => {
	return (
		<div className='w-[952px] flex flex-row  justify-end gap-8 p-0 '>
			<ImgTextContainer
				isHero={true}
				imgSrc={heroImage}
				imgBoxSize='w-[624px]'
				containerTextSize='w-[60%]'
				altText='hero image'
				buttonText={"Shop Now"}
				text={"Get in shape today with our premium product."}
			/>
			<aside className='w-[296px] flex flex-col gap-8'>
				<ImgTextContainer
					imgSrc={productImg2}
					imgBoxSize='w-full'
					btnHeight='h-[40px]'
					imgHeight='h-[207px] w-[280px]'
					altText='product image'
					buttonText={"Shop Now"}
					containerTextSize='w-[70%]'
					leftPosition='left-[20px]'
					text={"Acquire the protein bundle now."}
				/>
				<ImgTextContainer
					imgSrc={productImg1}
					imgBoxSize='w-full'
					btnHeight='h-[40px]'
					imgHeight='h-[207px] w-[280px]'
					altText='product image'
					containerTextSize='w-[70%]'
					buttonText={"Shop Now"}
					leftPosition='left-[20px]'
					text={"Sale on protein products with 35% off "}
				/>
			</aside>
		</div>
	);
};

export default HeroBox;
