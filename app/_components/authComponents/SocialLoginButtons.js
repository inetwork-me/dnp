import { signIn } from "next-auth/react";

import GoogleIcon from "@/public/icons/GoogleIcon.svg";
import FacebookIcon from "@/public/icons/CircleFacebookIcon.svg";
import AppleIcon from "@/public/icons/AppleIcon.svg";

const providers = [
	{
		name: "Google",
		icon: <GoogleIcon />,
		bg: "border border-gray-300 bg-white",
		text: "text-black",
		provider: "google",
	},
	{
		name: "Facebook",
		icon: <FacebookIcon />,
		bg: "bg-blue-600",
		text: "text-white",
		provider: "facebook",
	},
	{
		name: "Apple",
		icon: <AppleIcon />,
		bg: "bg-black",
		text: "text-white",
		provider: "apple",
	},
];

const SocialLoginButtons = ({ singIn, t }) => {
	return (
		<div className='w-full flex flex-col gap-3 '>
			{providers.map((p) => (
				<button
					key={p.provider}
					onClick={() => signIn(p.provider)}
					className={`w-full ${p.bg} ${p.text} h-[59px] cursor-pointer text-[16px] font-medium leading-[27px] rounded-xl  
             transition flex items-center justify-center gap-2`}>
					{p.icon}
					{t(`Sign ${singIn ? "in" : "up"} with ${p.name}`)}
				</button>
			))}
		</div>
	);
};

export default SocialLoginButtons;
