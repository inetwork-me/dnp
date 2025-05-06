'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';

// icons
import LanguageIcon from '@/public/icons/LanguageIcon.svg';

const LanguageSelector = () => {
	const t = useTranslations('app');
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();
	const locale = useLocale();
	const router = useRouter();

	const locales = ['en', 'ar'];

	const languageNames = {
		en: t('en'),
		ar: t('ar'),
	};

	const handleChangeLanguage = (targetLocale) => {
		const pathWithoutLocale = pathname.replace(/^\/(en|ar)/, '') || '/';

		const newPath =
			targetLocale === 'en'
				? pathWithoutLocale
				: `/${targetLocale}${pathWithoutLocale}`;

		document.cookie = `NEXT_LOCALE=${targetLocale}; path=/; max-age=${
			60 * 60 * 24 * 365
		}`;

		router.push(newPath);
	};

	const handleDropdownToggle = () => setIsOpen((prev) => !prev);
	//  handle close dropdown when click outside
	useEffect(() => {
		const handleOutsideClick = (e) => {
			if (!e.target.closest('.dropdown')) {
				setIsOpen(false);
			}
		};

		document.addEventListener('click', handleOutsideClick);
		return () => document.removeEventListener('click', handleOutsideClick);
	}, []);

	return (
		<div className='relative dropdown' onClick={(e) => e.stopPropagation()}>
			<button
				className='flex items-center gap-2 pr-2 rtl:pr-0 rtl:pl-2  rtl:border-l rtl:border-0 border-r border-gray-200 cursor-pointer'
				onClick={handleDropdownToggle}
			>
				<LanguageIcon />
				<span className='text-sm text-gray-600'>
					{languageNames[locale] || locale}
				</span>
			</button>

			{isOpen && (
				<div className='absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-md overflow-hidden z-10'>
					{locales.map((targetLocale) => {
						if (targetLocale === locale) return null;

						return (
							<button
								key={targetLocale}
								onClick={() => handleChangeLanguage(targetLocale)}
								className='w-full text-left flex items-center gap-1 px-2 py-2 text-sm hover:bg-gray-100 cursor-pointer'
							>
								<LanguageIcon />
								<span className='text-sm font-medium text-gray-600'>
									{languageNames[targetLocale]}
								</span>
							</button>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default LanguageSelector;
