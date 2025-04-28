import { maskCardNumber } from "@/app/_utils/maskCardNumber";
import { useTranslations } from "next-intl";
import SectionTitle from "../../SectionTitle";

const PaymentInformation = () => {
	const t = useTranslations("app");
	return (
		<div className='w-full flex flex-col items-start gap-6 '>
			<SectionTitle title={t("myProfile.PaymentInformation")} />

			<div className='w-full flex items-start flex-wrap justify-evenly'>
				<div className='flex-1 flex flex-col justify-center items-start gap-1 p-0'>
					<h5 className='text-sm font-normal text-gray-500'>
						{t("myProfile.SavedCard")}
					</h5>
					<p className='text-[16px] font-medium leading-7 text-gray-800'>
						{maskCardNumber("1234 5678 9012 3456")}
					</p>
				</div>
			</div>
		</div>
	);
};

export default PaymentInformation;
