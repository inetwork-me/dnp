import React from "react";
import BestProgramCard from "./BestProgramCard";

import Image1 from "@/public/images/bestProgram/image1.png";
import Image2 from "@/public/images/bestProgram/image2.png";
import Image3 from "@/public/images/bestProgram/image3.png";

const bestProgramList = [
	{
		id: 1,
		title: "Packages list",
		link: "/packages",
		image: Image1,
	},
	{
		id: 2,
		title: "Online consultation",
		link: "/onlineConsultation",
		image: Image2,
	},
	{
		id: 3,
		title: "Slimming Sessions",
		link: "/slimmingSessions",
		image: Image3,
	},
];

const BestProgramWrapper = () => {
	return (
		<div className='w-full h-[488px] flex md:flex-row flex-col items-center gap-8 p-0'>
			{bestProgramList.map((program) => (
				<BestProgramCard key={program.id} program={program} />
			))}
		</div>
	);
};

export default BestProgramWrapper;
