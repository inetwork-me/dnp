import TopNavLinks from "./TopNavLinks";
import SocialIcons from "../SocialIcons";

const TopNav = () => {
	return (
		<section className=' container mx-auto h-[41px] py-2 flex items-center justify-between'>
			<SocialIcons />
			<TopNavLinks />
		</section>
	);
};

export default TopNav;
