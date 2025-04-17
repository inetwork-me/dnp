import { useTranslations } from "next-intl";

import Headline from "../Headline";
import BundlesWrapper from "./BundlesWrapper";

const BundlesSection = ({ headlineTitle, headlineDescription }) => {
	const t = useTranslations("app");

	return (
		<section className='py-14 '>
			<div className='container mx-auto'>
				<Headline title={headlineTitle} description={headlineDescription} />

				<BundlesWrapper t={t} />
			</div>
		</section>
	);
};

export default BundlesSection;
