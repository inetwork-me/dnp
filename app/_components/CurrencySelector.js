"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
// icons
import CurrencyIcon from "@/public/icons/currency.svg";
import { useCurrency } from "@/contexts/CurrencyContext";

const CurrencySelector = () => {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();

	// Define available currencies
	const currencies = ["USD", "EGP"]; // Add more as needed

	// Get current currency from context
	const {
		currency: userCurrency,
		convertAmount,
		changeCurrency,
	} = useCurrency();

	// Currency display names/symbols if needed
	const currencySymbols = {
		USD: "$",
		EGP: "£",
	};

	// Handle open and close dropdown
	const handleDropdownToggle = () => {
		setIsOpen((prev) => !prev);
	};

	// Handle currency change
	const handleCurrencyChange = (currency) => {
		changeCurrency(currency);
		setIsOpen(false);
	};

	useEffect(() => {
		const handleOutsideClick = (e) => {
			if (!e.target.closest(".dropdown")) {
				setIsOpen(false);
			}
		};
		document.addEventListener("click", handleOutsideClick);
		return () => document.removeEventListener("click", handleOutsideClick);
	}, []);

	return (
		<div className='relative dropdown' onClick={(e) => e.stopPropagation()}>
			<button
				className='flex items-center gap-2 pr-2 rtl:pr-0 rtl:pl-2 rtl:border-l rtl:border-0 border-r border-gray-200 cursor-pointer'
				onClick={handleDropdownToggle}>
				<CurrencyIcon />
				<span className='text-sm text-gray-600'>
					{currencySymbols[userCurrency]}
				</span>
			</button>
			{isOpen && (
				<div className='absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-md overflow-hidden z-10'>
					{currencies.map((currency) => (
						<div
							key={currency}
							className={`flex items-center gap-1 px-2 py-2 text-sm hover:bg-gray-100 cursor-pointer ${
								currency === userCurrency ? "font-bold" : ""
							}`}
							onClick={() => handleCurrencyChange(currency)}>
							<CurrencyIcon />
							<span className='text-sm font-medium text-gray-600'>
								{currencySymbols[currency]} {currency}
							</span>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default CurrencySelector;
