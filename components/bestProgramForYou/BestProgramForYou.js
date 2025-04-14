import React from "react";
import Headline from "../Headline";
import BestProgramWrapper from "./BestProgramWrapper";

const BestProgramForYou = () => {
	return (
		<section className='pb-14'>
			<Headline
				title='Best program for your fitness'
				description='Discover our best-selling products loved by many!'
			/>

			<BestProgramWrapper />
		</section>
	);
};

export default BestProgramForYou;
