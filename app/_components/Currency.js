"use client";

import { useTranslations } from "next-intl";
import { useCurrency } from "@/contexts/CurrencyContext";

/**
 * Currency component to handle price display with currency
 * @param {Object} props
 * @param {number|string} props.amount - The price amount
 * @param {string} props.currency - The original currency code of the amount
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.showCurrency - Whether to show currency symbol/code
 * @param {boolean} props.convertCurrency - Whether to convert to user's preferred currency
 */
const Currency = ({
	amount,
	currency = "EGP",
	className = "text-[16px] font-normal leading-7 text-gray-800",
	showCurrency = true,
	convertCurrency = true,
}) => {
	const t = useTranslations("app");
	const { currency: userCurrency, convertAmount } = useCurrency();

	// Convert amount if needed
	const displayAmount = convertCurrency
		? convertAmount(amount, currency)
		: amount;

	// Display currency
	const displayCurrency = convertCurrency ? userCurrency : currency;

	// Format the price with currency on the right side
	const formatPrice = (amount, currency) => {
		try {
			// Format the number with 2 decimal places
			const formattedAmount = new Intl.NumberFormat("en-US", {
				minimumFractionDigits: 0,
				maximumFractionDigits: 0,
			}).format(amount);

			// Return the amount with currency on the right side
			return `${formattedAmount} ${currency}`;
		} catch (error) {
			// Fallback format with currency on the right
			return `${amount} ${currency}`;
		}
	};

	return (
		<p className={className}>
			{showCurrency
				? formatPrice(displayAmount, displayCurrency)
				: displayAmount}
		</p>
	);
};

export default Currency;
