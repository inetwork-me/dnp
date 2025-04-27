"use client";

import { createContext, useContext, useState, useEffect } from "react";

const CurrencyContext = createContext();

export const CurrencyProvider = ({ children, defaultCurrency = "EGP" }) => {
	const [currency, setCurrency] = useState(defaultCurrency);

	// You could load the user's preferred currency from localStorage or API
	useEffect(() => {
		const savedCurrency = localStorage.getItem("preferredCurrency");
		if (savedCurrency) {
			setCurrency(savedCurrency);
		}
	}, []);

	const changeCurrency = (newCurrency) => {
		setCurrency(newCurrency);
		localStorage.setItem("preferredCurrency", newCurrency);
	};

	// You could add exchange rate functionality here
	const convertAmount = (amount, fromCurrency, toCurrency = currency) => {
		// This is a placeholder. In a real app, you'd use an exchange rate API
		if (fromCurrency === toCurrency) return amount;

		// Example conversion (replace with actual exchange rates)
		const rates = {
			EGP: { USD: 0.032, EUR: 0.03 },
			USD: { EGP: 31.25, EUR: 0.93 },
			EUR: { EGP: 33.33, USD: 1.07 },
		};

		return amount * (rates[fromCurrency]?.[toCurrency] || 1);
	};

	return (
		<CurrencyContext.Provider
			value={{ currency, setCurrency, changeCurrency, convertAmount }}>
			{children}
		</CurrencyContext.Provider>
	);
};

export const useCurrency = () => useContext(CurrencyContext);
