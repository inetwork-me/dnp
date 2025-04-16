"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { useTranslations } from "next-intl";

const Navigation = () => {
	const pathname = usePathname();
	const [openDropdown, setOpenDropdown] = useState(null);
	const t = useTranslations("app");
	const timeoutRef = useRef(null);

	// Define the navigation items
	const navItems = [
		{ name: t("navigation.home"), path: "/" },
		{ name: t("navigation.offersAndDiscounts"), path: "/offersAndDiscounts" },
		{ name: t("navigation.doctors"), path: "/doctors" },
		{ name: t("navigation.bmiCalculator"), path: "/bmiCalculator" },
		{
			name: t("navigation.packages"),
			subPages: [
				{ name: t("navigation.packagesList"), path: "/packages" },
				{
					name: t("navigation.onLineConsultation"),
					path: "/onLineConsultation",
				},
				{ name: t("navigation.slimmingSessions"), path: "/slimmingSessions" },
			],
			path: "/packages",
		},
		{ name: t("navigation.recipes"), path: "/recipes" },
		{ name: t("navigation.blogs"), path: "/blogs" },
		{ name: t("navigation.devices"), path: "/devices" },
	];

	// Handle mouse enter and leave events for dropdowns
	const handleMouseEnter = (index) => {
		clearTimeout(timeoutRef.current);
		setOpenDropdown(index);
	};

	// Handle mouse leave event for dropdowns
	const handleMouseLeave = () => {
		timeoutRef.current = setTimeout(() => {
			setOpenDropdown(null);
		}, 200);
	};

	return (
		<nav className='bg-white w-full py-4 border-b border-gray-200'>
			<div className='container mx-auto flex justify-between items-center px-4'>
				<div className='hidden md:flex space-x-8'>
					{navItems.map((item, index) => (
						<div
							key={index}
							className='relative'
							onMouseEnter={() => handleMouseEnter(index)}
							onMouseLeave={handleMouseLeave}>
							{item.subPages ? (
								<>
									<button
										className={`${
											pathname.startsWith(item.path)
												? "text-gray-700 font-medium"
												: "text-gray-600 hover:text-gray-700"
										} transition-colors duration-200 flex items-center cursor-pointer group`}>
										{item.name}
										<svg
											className='w-4 h-4 ml-1 transition-all duration-300 ease-in-out group-hover:translate-y-1'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d={
													openDropdown === index
														? "M5 15l7-7 7 7"
														: "M19 9l-7 7-7-7"
												}
											/>
										</svg>
									</button>

									{openDropdown === index && (
										<div
											className='absolute mt-2 w-[238px] bg-white border border-gray-200 rounded-lg shadow-lg py-3 z-50'
											onMouseEnter={() => clearTimeout(timeoutRef.current)}
											onMouseLeave={handleMouseLeave}>
											{item.subPages.map((subPage, subIndex) => (
												<Link
													key={subIndex}
													href={subPage.path}
													className={`${
														pathname === subPage.path
															? "bg-gray-100 text-gray-700"
															: "text-gray-600 hover:bg-gray-100"
													} block px-4 py-2 text-sm mx-3 rounded-md`}
													onClick={() => setOpenDropdown(null)}>
													{subPage.name}
												</Link>
											))}
										</div>
									)}
								</>
							) : (
								<Link
									href={item.path}
									className={`${
										pathname === item.path
											? "text-gray-700 font-medium"
											: "text-gray-600 hover:text-gray-700"
									} transition-colors duration-200`}>
									{item.name}
								</Link>
							)}
						</div>
					))}
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
