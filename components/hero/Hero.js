import ProductsCards from "../topNav/ProductsCards";
import Categories from "./Categories";
import HeroBox from "./HeroBox";
import OffersSlides from "../offersSlider/OffersSlider";

const Hero = () => {
	return (
		<section className='w-full py-14  bg-[#F9FAFB] '>
			<div className='container mx-auto'>
				<section className='  w-full md:flex-row flex-col  flex items-start justify-end gap-8 py-8'>
					<Categories />
					<HeroBox />
				</section>

				<ProductsCards />
				<OffersSlides />
			</div>
		</section>
	);
};

export default Hero;
