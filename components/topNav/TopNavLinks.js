import { useTranslations } from "next-intl";

// components
import NavLink from "../NavLink";
import LanguageSelector from "../LanguageSelector";
import CurrencySelector from "../CurrencySelector";

// Icons
import TruckIcon from "@/public/icons/TruckIcon.svg";
import UserIcon from "@/public/icons/UserIcon.svg";
import ThemeToggle from "../ThemeToggle";
import { getServerSession } from "next-auth";

const TopNavLinks = () => {
	const t = useTranslations("app");

	// const session = await getServerSession();
	const session = {
		user: {
			name: "John Doe",
			email: "john.doe@example.com",
			image: "https://example.com/avatar.jpg",
		},
	};
	// const session = await getServerSession();

	return (
		<div className='flex items-center gap-4'>
			<NavLink navigate={"/trackYourOrder"}>
				<TruckIcon />
				<span className='text-sm font-medium text-gray-600 '>
					{t("trackYourOrder")}
				</span>
			</NavLink>
			<LanguageSelector />
			<CurrencySelector />
			<NavLink navigate={!session ? "/auth/signin" : "/myAccount/profile"}>
				<UserIcon />
				<span className='text-sm font-medium text-gray-600 '>
					{t("My Account")}
				</span>
			</NavLink>
			<ThemeToggle />
		</div>
	);
};

export default TopNavLinks;
