import { navSocialLinks } from "@/fakeData/data";
import SocialIcons from "../SocialIcons";
import TopNavLinks from "./TopNavLinks";

const TopNav = () => {
	return (
		<section className=' container mx-auto '>
			<div className='h-[41px] py-2 flex items-center justify-between'>
				<SocialIcons icons={navSocialLinks} />
				<TopNavLinks />
			</div>
		</section>
	);
};

export default TopNav;
