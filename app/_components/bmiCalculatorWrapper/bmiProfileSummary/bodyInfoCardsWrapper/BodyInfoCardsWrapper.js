import { bmiProfileInfo } from "@/fakeData/data";
import BodyInfoCard from "./BodyInfoCard";
import RecommendationsAndTips from "../recommendationsAndTips/RecommendationsAndTips";
import DescriptionContent from "./DescriptionContent";

const BodyInfoCardsWrapper = () => {
	return (
		<div className='grid grid-cols-2 md:grid-cols-3 gap-8'>
			{bmiProfileInfo.map((item) => (
				<BodyInfoCard key={item.id} item={item} />
			))}

			<RecommendationsAndTips className='col-span-1' title={"Tips"}>
				<DescriptionContent
					description={
						"This is a phase where the body mass indicates a standard weight, although this doesn’t mean that the health status of this human being is ideal. Therefore, in order to fit the standards both the fat percentage and the muscular mass must meet the optimal level."
					}
				/>
			</RecommendationsAndTips>
			<RecommendationsAndTips
				className='col-span-1 md:col-span-2'
				title={"Recommendations"}>
				<ul className='space-y-2 list-decimal '>
					<li className='text-lg font-normal text-gray-700'>
						Follow a well-balanced diversified diet.
					</li>{" "}
					<li className='text-lg font-normal text-gray-700'>
						Regularly check-up with a registered dietitian to perform a full
						body composition analysis.
					</li>{" "}
					<li className='text-lg font-normal text-gray-700'>
						Practice moderate physical activity to keep tight muscles.
					</li>{" "}
					<li className='text-lg font-normal text-gray-700'>
						Take food low in fat and moderate in protein and carbohydrates.
					</li>{" "}
					<li className='text-lg font-normal text-gray-700'>
						Increase water intake.
					</li>{" "}
					<li className='text-lg font-normal text-gray-700'>
						Increase salads intake.
					</li>
				</ul>
			</RecommendationsAndTips>
		</div>
	);
};

export default BodyInfoCardsWrapper;
