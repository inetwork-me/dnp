import BodyInfoCardsWrapper from "./bodyInfoCardsWrapper/BodyInfoCardsWrapper";
import HeaderBox from "./headerBox/HeaderBox";

const BmiProfileSummary = () => {
	return (
		<section className='container mx-auto py-14 '>
			<div className='space-y-8'>
				<HeaderBox />
				<BodyInfoCardsWrapper />
			</div>
		</section>
	);
};

export default BmiProfileSummary;
