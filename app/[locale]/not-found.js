import { useTranslations } from "next-intl";
import Link from "next/link";

export default function NotFound() {
	const t = useTranslations("app");

	return (
		<div className='min-h-screen flex flex-col items-center justify-center text-center px-4'>
			<h1 className='text-5xl font-bold mb-4 text-gray-800'>404</h1>
			<p className='text-lg text-gray-600 mb-6'>{t("notFound.message")}</p>
			<Link
				href='/'
				className='elative w-10 h-10 rounded-full flex justify-center items-center p-2 z-10 cursor-pointer bg-[#B26BCA] hover:bg-[#723881] transition-all duration-300 transform hover:-rotate-45 hover:-translate-y-1 hover:translate-x-1'>
				{t("notFound.backToHome")}
			</Link>
		</div>
	);
}
