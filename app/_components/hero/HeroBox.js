import ImgTextContainer from "../ImgTextContainer";

// images
import heroImage from "@/public/images/heroImage.png";
import productImg2 from "@/public/images/productImg2.png";
import productImg1 from "@/public/images/productImg1.png";
import { useTranslations } from "next-intl";

const HeroBox = () => {
	const t = useTranslations("app");
	return (
		<div className='w-full col-span-3 grid grid-cols-3 gap-8 p-0 '>
			<ImgTextContainer
				isHero={true}
				imgSrc={heroImage}
				className='col-span-2  rounded-xl'
				containerTextSize='w-[60%]'
				altText='hero image'
				buttonText={t("shopNow")}
				text={"Get in shape today with our premium product."}
			/>

			<aside className=' flex flex-col gap-8'>
				<ImgTextContainer
					imgSrc={productImg2}
					imgBoxSize='w-full'
					btnHeight='h-[40px]'
					altText='product image'
					buttonText={t("shopNow")}
					containerTextSize='w-[70%]'
					leftPosition='left-[20px]'
					text={"Acquire the protein bundle now."}
				/>
				<ImgTextContainer
					imgSrc={productImg1}
					imgBoxSize='w-full'
					btnHeight='h-[40px]'
					altText='product image'
					containerTextSize='w-[70%]'
					buttonText={t("shopNow")}
					leftPosition='left-[20px]'
					text={"Sale on protein products with 35% off "}
				/>
			</aside>
		</div>
	);
};

export default HeroBox;
