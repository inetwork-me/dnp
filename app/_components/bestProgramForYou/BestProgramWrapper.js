import React from "react";
import BestProgramCard from "./BestProgramCard";

import Image1 from "@/public/images/bestProgram/image1.png";
import Image2 from "@/public/images/bestProgram/image2.png";
import Image3 from "@/public/images/bestProgram/image3.png";

const BestProgramWrapper = ({ t }) => {
	const bestProgramList = [
		{
			id: 1,
			title: t("navigation.packagesList"),
			link: "/packages",
			image: Image1,
		},
		{
			id: 2,
			title: t("navigation.onLineConsultation"),
			link: "/onLineConsultation",
			image: Image2,
		},
		{
			id: 3,
			title: t("navigation.slimmingSessions"),
			link: "/slimmingSessions",
			image: Image3,
		},
	];
	return (
		<div className='w-full h-[488px] grid grid-cols-3  gap-8 pt-6'>
			{bestProgramList.map((program) => (
				<BestProgramCard key={program.id} program={program} />
			))}
		</div>
	);
};

export default BestProgramWrapper;
