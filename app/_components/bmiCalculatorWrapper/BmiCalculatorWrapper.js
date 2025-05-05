import Headline from "@/app/_shared/ui/Headline";
import { useTranslations } from "next-intl";
import BodyInfoForm from "./bodyInfoForm/BodyInfoForm";

const BmiCalculatorWrapper = () => {
	const t = useTranslations("app");
	return (
		<section className='container mx-auto py-14 px-28'>
			<div className='w-full md:w-[37rem] flex flex-col items-center mx-auto  gap-12'>
				<Headline
					className='items-center text-center '
					titleClassName='text-4xl font-semibold  text-gray-950'
					title={t("navigation.bmiCalculator")}
					description={t(
						"Discover your Body Mass Index (BMI) by entering your personal body information"
					)}
				/>
				<BodyInfoForm />
			</div>
		</section>
	);
};

export default BmiCalculatorWrapper;
