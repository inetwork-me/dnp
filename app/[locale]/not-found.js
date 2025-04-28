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
				className='min-w-10 min-h-12 px-6 rounded-full flex justify-center items-center  cursor-pointer bg-[#B26BCA] hover:bg-[#723881] text-white transition-all duration-200 '>
				{t("notFound.backToHome")}
			</Link>
		</div>
	);
}
