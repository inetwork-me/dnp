import React from "react";
import Headline from "../Headline";
import BestProgramWrapper from "./BestProgramWrapper";
import { useTranslations } from "next-intl";

const BestProgramForYou = () => {
	const t = useTranslations("app");
	return (
		<section className='pb-14'>
			<Headline
				title={t("Best program for your fitness")}
				description={t("Discover our best-selling products loved by many")}
			/>

			<BestProgramWrapper />
		</section>
	);
};

export default BestProgramForYou;
