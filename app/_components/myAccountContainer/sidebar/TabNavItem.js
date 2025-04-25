import { signOut } from "next-auth/react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TabNavItem = ({ item }) => {
	const t = useTranslations("app");
	const pathname = usePathname();
	const isActive = pathname === item.href;

	const handleLogout = () => {
		signOut({ callbackUrl: "/" });
	};

	return item.title === "Logout" || item.title === "تسجيل الخروج" ? (
		<button
			className={`${
				isActive
					? "bg-[#723881] text-white"
					: "text-[#4B5563] hover:bg-[#E5E7EB]"
			} w-full h-[36px] group flex items-start py-2 px-3 gap-2 rounded-lg text-sm font-medium cursor-pointer `}
			onClick={handleLogout}>
			{item.icon}
			<span>{t(item.title)}</span>
		</button>
	) : (
		<Link
			className={`${
				isActive
					? "bg-[#723881] text-white"
					: "text-[#4B5563] hover:bg-[#E5E7EB]"
			} w-full h-[36px] group flex items-start py-2 px-3 gap-2 rounded-lg text-sm font-medium  `}
			href={item.href}>
			{item.icon}
			<span>{t(item.title)}</span>
		</Link>
	);
};

export default TabNavItem;
