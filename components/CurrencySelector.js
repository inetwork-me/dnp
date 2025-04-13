"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

// icons
import CurrencyIcon from "@/public/icons/Currency.svg";

const CurrencySelector = () => {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();

	// Define available currencies
	const currencies = ["USD", "EUR", "AED"]; // Add more as needed

	// Get current currency from localStorage or default to USD
	const [currentCurrency, setCurrentCurrency] = useState("USD");

	// Load the saved currency preference on component mount
	useEffect(() => {
		const savedCurrency = localStorage.getItem("currency") || "USD";
		setCurrentCurrency(savedCurrency);
	}, []);

	// Currency display names/symbols if needed
	const currencySymbols = {
		USD: "USD",
		EUR: "EUR",
		AED: "د.إ",
	};

	// Handle open and close dropdown
	const handleDropdownToggle = () => {
		setIsOpen((prev) => !prev);
	};

	// Handle currency change
	const handleCurrencyChange = (currency) => {
		localStorage.setItem("currency", currency);
		setCurrentCurrency(currency);
		setIsOpen(false);
		// You might want to trigger a context update or refetch data with new currency
	};

	return (
		<div className='relative' onClick={(e) => e.stopPropagation()}>
			<button
				className='flex items-center gap-2 pr-2 border-r border-gray-200 cursor-pointer'
				onClick={handleDropdownToggle}>
				<CurrencyIcon />
				<span className='text-sm text-gray-600'>
					{currencySymbols[currentCurrency] || currentCurrency}
				</span>
			</button>

			{isOpen && (
				<div className='absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-md overflow-hidden z-10'>
					{currencies.map((currency) => (
						<div
							key={currency}
							className={`flex items-center gap-1 px-2 py-2 text-sm hover:bg-gray-100 cursor-pointer ${
								currency === currentCurrency ? "font-bold" : ""
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
