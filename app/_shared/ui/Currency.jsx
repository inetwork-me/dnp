"use client";

import { useTranslations } from "next-intl";
import { useCurrency } from "@/contexts/CurrencyContext";

/**
 * Currency component to handle price display with currency
 * @param {Object} props
 * @param {number|string} props.amount - The original price amount
 * @param {string} props.currency - The original currency code of the amount
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.currencyClassName - Additional CSS classes for currency span
 * @param {boolean} props.showCurrency - Whether to show currency symbol/code
 * @param {boolean} props.convertCurrency - Whether to convert to user's preferred currency
 * @param {number} props.discount - Discount percentage (0-100)
 * @param {string} props.discountClassName - Additional CSS classes for original price
 * @param {boolean} props.showOriginalPrice - Whether to show the original price with strikethrough
 * @param {boolean} props.showDiscountBadge - Whether to show the discount percentage badge
 * @param {string} props.discountBadgeClassName - Additional CSS classes for discount badge
 */
const Currency = ({
	amount,
	currency = "EGP",
	className = "text-base font-normal text-gray-800",
	currencyClassName = "text-base font-semibold text-gray-700 ml-1",
	showCurrency = true,
	convertCurrency = true,
	discount = 0,
	discountClassName = "text-sm line-through text-gray-500 mr-2",
	showOriginalPrice = false,
	showDiscountBadge = true,
	discountBadgeClassName = "inline-flex justify-center items-center w-[58px] h-[28px] bg-[#FEE2E2] rounded-[62px] text-red-500 text-sm font-medium ml-2",
}) => {
	const t = useTranslations("app");
	const { currency: userCurrency, convertAmount } = useCurrency();

	// Calculate discounted amount
	const discountedAmount =
		discount > 0 ? amount - amount * (discount / 100) : amount;

	// Convert amounts if needed
	const displayOriginalAmount = convertCurrency
		? convertAmount(amount, currency)
		: amount;

	const displayDiscountedAmount = convertCurrency
		? convertAmount(discountedAmount, currency)
		: discountedAmount;

	// Display currency
	const displayCurrency = convertCurrency ? userCurrency : currency;

	// Format the amount only
	const formatAmount = (amount) => {
		try {
			// Format the number with 2 decimal places
			return new Intl.NumberFormat("en-US", {
				minimumFractionDigits: 0,
				maximumFractionDigits: 0,
			}).format(amount);
		} catch (error) {
			// Fallback format
			return amount;
		}
	};

	return (
		<div className='flex items-center flex-wrap'>
			{showOriginalPrice && discount > 0 && (
				<p className={discountClassName}>
					{formatAmount(displayOriginalAmount)}
					{showCurrency && (
						<span className={currencyClassName}>{displayCurrency}</span>
					)}
				</p>
			)}
			<div className='flex items-center'>
				<p className={className}>
					{formatAmount(
						discount > 0 ? displayDiscountedAmount : displayOriginalAmount
					)}
					{showCurrency && (
						<span className={currencyClassName}>{displayCurrency}</span>
					)}
				</p>
				{discount > 0 && showDiscountBadge && (
					<span className={discountBadgeClassName}>-{discount}%</span>
				)}
			</div>
		</div>
	);
};

export default Currency;
