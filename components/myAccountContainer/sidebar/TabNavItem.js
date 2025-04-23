import Link from "next/link";
import { usePathname } from "next/navigation";

const TabNavItem = ({ item }) => {
	const pathname = usePathname();
	const isActive = pathname === item.href;

	return (
		<Link
			className={`${
				isActive
					? "bg-[#723881] text-white"
					: "text-[#4B5563] hover:bg-[#E5E7EB]"
			} w-full h-[36px] group flex items-start py-2 px-3 gap-2 rounded-lg text-sm font-medium  `}
			href={item.href}>
			{item.icon}
			<span>{item.title}</span>
		</Link>
	);
};

export default TabNavItem;
