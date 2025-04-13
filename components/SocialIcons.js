// components
import Button from "./Button";

// Icons
import FacebookIcon from "@/public/icons/Facebook.svg";
import InstagramIcon from "@/public/icons/Instagram.svg";
import TikTokIcon from "@/public/icons/TikTok.svg";

const SocialIcons = () => {
	return (
		<div className='flex gap-4'>
			<Button to='https://www.facebook.com/'>
				<FacebookIcon />
			</Button>
			<Button to='https://www.instagram.com/'>
				<InstagramIcon />
			</Button>
			<Button to='https://www.tiktok.com/'>
				<TikTokIcon />
			</Button>
		</div>
	);
};

export default SocialIcons;
