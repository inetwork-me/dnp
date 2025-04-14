// Icons
import FacebookIcon from "@/public/icons/Facebook.svg";
import InstagramIcon from "@/public/icons/Instagram.svg";
import TikTokIcon from "@/public/icons/TikTok.svg";

const SocialIcons = () => {
	return (
		<div className='flex gap-4'>
			<button className=' cursor-pointer'>
				<FacebookIcon />
			</button>
			<button className=' cursor-pointer'>
				<InstagramIcon />
			</button>
			<button className=' cursor-pointer'>
				<TikTokIcon />
			</button>
		</div>
	);
};

export default SocialIcons;
