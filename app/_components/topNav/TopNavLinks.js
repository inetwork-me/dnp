import { useTranslations } from "next-intl";

// components
import NavLink from "../NavLink";
import LanguageSelector from "../LanguageSelector";
import CurrencySelector from "../CurrencySelector";

// Icons
import TruckIcon from "@/public/icons/TruckIcon.svg";
import UserIcon from "@/public/icons/UserIcon.svg";
import ThemeToggle from "../ThemeToggle";

const TopNavLinks = () => {
	const t = useTranslations("app");

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
			<NavLink navigate={"/myAccount/profile"}>
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
