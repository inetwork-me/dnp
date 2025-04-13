"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

// icons
import LanguageIcon from "@/public/icons/LanguageIcon.svg";

const LanguageSelector = () => {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();

	// Define available locales
	const locales = ["en", "ar"]; // Add more as needed

	// Extract current locale from pathname
	const currentLocale = pathname.split("/")[1] || "en";

	// Map of language codes to display names
	const languageNames = {
		en: "EG",
		ar: "العربية",
	};

	// handle open and close dropdown
	const handleDropdownToggle = () => {
		setIsOpen((prev) => !prev);
	};
	return (
		<div className='relative' onClick={(e) => e.stopPropagation()}>
			<button
				className='flex items-center gap-2 pr-2 border-r border-gray-200 cursor-pointer'
				onClick={handleDropdownToggle}>
				<LanguageIcon />
				<span className='text-sm text-gray-600'>
					{languageNames[currentLocale] || currentLocale}
				</span>
			</button>

			{isOpen && (
				<div className='absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-md overflow-hidden z-10'>
					{locales.map((locale) => {
						// Get the path without the locale prefix
						const pathWithoutLocale = pathname.replace(/^\/[^\/]+/, "") || "/";
						const newPath =
							locale === "en"
								? pathWithoutLocale
								: `/${locale}${pathWithoutLocale}`;

						return (
							<Link
								key={locale}
								href={newPath}
								className={`flex items-center gap-1 px-2 py-2 text-sm hover:bg-gray-100 ${
									locale === currentLocale ? "font-bold" : ""
								}`}
								onClick={() => setIsOpen(false)}>
								<LanguageIcon />
								<span className='text-sm font-medium text-gray-600 '>
									{" "}
									{languageNames[locale] || locale}
								</span>
							</Link>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default LanguageSelector;
