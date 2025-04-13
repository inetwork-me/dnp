"use client";

import { createContext, useContext } from "react";

const LanguageContext = createContext({});

export const LanguageProvider = ({ dictionary, children }) => {
	return (
		<LanguageContext.Provider value={{ dictionary }}>
			{children}
		</LanguageContext.Provider>
	);
};

export const useLanguage = () => useContext(LanguageContext);
