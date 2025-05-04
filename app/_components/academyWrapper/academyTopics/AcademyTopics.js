import Headline from "@/app/_shared/ui/Headline";
import { useTranslations } from "next-intl";
import TopicsWrapper from "./topicsWrapper/TopicsWrapper";

const AcademyTopics = () => {
	const t = useTranslations("app");
	return (
		<div className='bg-white'>
			<div className='container mx-auto py-12 '>
				<div className='flex flex-col items-start gap-8'>
					<Headline
						titleClassName='text-3xl font-semibold text-gray-950 '
						title={t("Academy topics")}
						description={t(
							"Check out our Nutrition Academy for tips on healthy eating"
						)}
					/>

					<TopicsWrapper />
				</div>
			</div>
		</div>
	);
};

export default AcademyTopics;
