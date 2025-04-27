import { useTranslations } from "next-intl";

const ConfirmDeleteReview = ({ onClose }) => {
	const t = useTranslations("app");

	return (
		<div className='flex flex-col text-center gap-6 py-3 px-4'>
			<h4 className='text-2xl font-semibold text-gray-950'>
				{t("deleteReview")}
			</h4>

			<p className='text-[16px] font-normal leading-7 text-gray-500'>
				{t("are you sure you want to delete this review")}
			</p>

			<div className='w-full h-12 flex justify-center gap-4 items-center'>
				<button
					onClick={onClose}
					className='px-6 h-full rounded-xl border border-red-600 text-red-600 text-md font-normal  cursor-pointer'>
					{t("deleteReview")}
				</button>
				<button
					onClick={onClose}
					className='px-6 h-full cursor-pointer text-gray-600 text-md font-normal'>
					{t("cancel")}
				</button>
			</div>
		</div>
	);
};

export default ConfirmDeleteReview;
