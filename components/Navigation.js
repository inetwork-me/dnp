"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navigation = () => {
	const pathname = usePathname();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [openDropdown, setOpenDropdown] = useState(null);

	const navItems = [
		{ name: "Home", path: "/" },
		{ name: "Offers & Discounts", path: "/offersAndDiscounts" },
		{ name: "Bundles", path: "/dundles" },
		{ name: "Doctors", path: "/doctors" },
		{ name: "Bmi calculator", path: "/bmiCalculator" },
		{
			name: "Packages",
			subPages: [
				{ name: "Packages List", path: "/packages" },
				{ name: "OnLine Consultation", path: "/onLineConsultation" },
				{ name: "Slimming Sessions", path: "/slimmingSessions" },
			],
			path: "/packages",
		},
		{ name: "OnLine Consultation", path: "/onLineConsultation" },
		{ name: "Recipes", path: "/recipes" },
		{ name: "Blogs", path: "/blogs" },
		{ name: "Devices", path: "/devices" },
	];

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const toggleDropdown = (index) => {
		if (openDropdown === index) {
			setOpenDropdown(null);
		} else {
			setOpenDropdown(index);
		}
	};

	return (
		<nav className='bg-white w-full py-4 border-b border-gray-200'>
			<div className='container mx-auto flex justify-between items-center px-4'>
				{/* Desktop Navigation */}
				<div className='hidden md:flex space-x-8'>
					{navItems.map((item, index) => (
						<div key={index} className='relative inline-block'>
							{item.subPages ? (
								<>
									<button
										onClick={() => toggleDropdown(index)}
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
											viewBox='0 0 24 24'
											xmlns='http://www.w3.org/2000/svg'>
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
										<div className='absolute z-10 mt-2 w-[238px] bg-white border border-[#E5E7EB] rounded-lg  py-3 shadow-md'>
											{item.subPages.map((subPage, subIndex) => (
												<Link
													key={subIndex}
													href={subPage.path}
													className={`${
														pathname === subPage.path
															? "bg-gray-100 text-gray-700"
															: "text-gray-600 hover:bg-gray-100"
													}  px-4 py-2 text-sm flex justify-between items-center mx-3 rounded-md`}
													onClick={() => setOpenDropdown(null)}>
													{subPage.name}
													<svg
														className='w-4 h-4'
														fill='none'
														stroke='currentColor'
														viewBox='0 0 24 24'
														xmlns='http://www.w3.org/2000/svg'>
														<path
															strokeLinecap='round'
															strokeLinejoin='round'
															strokeWidth={2}
															d='M9 5l7 7-7 7'
														/>
													</svg>
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

				{/* Mobile menu button */}
				<button
					className='md:hidden text-gray-600 dark:text-gray-300 focus:outline-none'
					onClick={toggleMenu}>
					<svg
						className='w-6 h-6'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'>
						{isMenuOpen ? (
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M6 18L18 6M6 6l12 12'
							/>
						) : (
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M4 6h16M4 12h16M4 18h16'
							/>
						)}
					</svg>
				</button>
			</div>

			{/* Mobile Navigation */}
			{isMenuOpen && (
				<div className='md:hidden bg-white dark:bg-gray-900 py-2 px-4'>
					<div className='flex flex-col space-y-4'>
						{navItems.map((item, index) => (
							<div key={index}>
								{item.subPages ? (
									<>
										<button
											onClick={() => toggleDropdown(index)}
											className={`${
												pathname.startsWith(item.path)
													? "text-gray-700 font-medium"
													: "text-gray-600 hover:text-gray-700"
											} transition-colors duration-200 flex items-center justify-between w-full py-2`}>
											{item.name}
											<svg
												className='w-4 h-4'
												fill='none'
												stroke='currentColor'
												viewBox='0 0 24 24'
												xmlns='http://www.w3.org/2000/svg'>
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
											<div className='pl-4 mt-2 space-y-2'>
												{item.subPages.map((subPage, subIndex) => (
													<Link
														key={subIndex}
														href={subPage.path}
														className={`${
															pathname === subPage.path
																? "text-gray-700 font-medium"
																: "text-gray-600 hover:text-gray-700"
														} block py-2`}
														onClick={() => {
															setOpenDropdown(null);
															setIsMenuOpen(false);
														}}>
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
										} transition-colors duration-200 block py-2`}
										onClick={() => setIsMenuOpen(false)}>
										{item.name}
									</Link>
								)}
							</div>
						))}
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navigation;
