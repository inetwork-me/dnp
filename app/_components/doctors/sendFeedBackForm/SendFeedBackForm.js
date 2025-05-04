import { useTranslations } from "next-intl";
import React from "react";
import Headline from "../../../_shared/ui/Headline";
import Form from "./Form";
import ImageCard from "./ImageCard";

const SendFeedBackForm = ({ bgColor = "bg-white" }) => {
	const t = useTranslations("app");
	return (
		<div className={` ${bgColor}  w-full py-12`}>
			<div className='container mx-auto '>
				<Headline
					titleClassName='text-3xl font-semibold text-gray-950 '
					title={t("Feedback")}
					description={t(
						"We value your expert opinions on the medical profession"
					)}
				/>

				<div className='w-full grid grid-cols-2 gap-8 items-start'>
					<Form />
					<ImageCard />
				</div>
			</div>
		</div>
	);
};

export default SendFeedBackForm;
