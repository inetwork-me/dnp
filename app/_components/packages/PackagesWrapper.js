import Headline from "@/app/_shared/ui/Headline";
import { useTranslations } from "next-intl";
import PackagesCards from "./packagesCards/PackagesCards";

const PackagesWrapper = ({ headline }) => {
	const t = useTranslations("app");
	return (
		<div className='container mx-auto py-14'>
			<div className='space-y-12'>
				<Headline
					title={t(headline)}
					description={t(
						"Join our premium online coaching packages today to find the best programs for your needs and save more"
					)}
				/>

				<PackagesCards />
			</div>
		</div>
	);
};

export default PackagesWrapper;
