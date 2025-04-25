"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import DarkIcon from "@/public/icons/DarkIcon.svg";
import LightIcon from "@/public/icons/LightIcon.svg";

const ThemeToggle = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	// Avoid hydration mismatch by rendering only after component is mounted
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<div className='flex items-center'>
			<LightIcon className='h-5 w-5 text-yellow-500 mr-2 rtl:ml-2' />
			<div
				className='relative inline-flex h-6 w-11 items-center rounded-full cursor-pointer bg-gray-200 dark:bg-gray-700 transition-colors'
				onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
				role='switch'
				aria-checked={theme === "dark"}
				tabIndex={0}>
				<span
					className={`absolute h-5 w-5 rounded-full bg-white transform transition-transform duration-200 ease-in-out ${
						theme === "dark"
							? "translate-x-5 rtl:-translate-x-5"
							: "translate-x-1 rtl:-translate-x-1"
					}`}
				/>
			</div>
			<DarkIcon className='h-5 w-5 text-blue-700 dark:text-blue-400 ml-2 rtl:mr-2' />
		</div>
	);
};

export default ThemeToggle;
