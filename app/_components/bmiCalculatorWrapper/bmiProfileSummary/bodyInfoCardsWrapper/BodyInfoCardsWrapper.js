import { bmiProfileInfo } from "@/fakeData/data";
import BodyInfoCard from "./BodyInfoCard";

const BodyInfoCardsWrapper = () => {
	return (
		<div className='grid grid-cols-2 md:grid-cols-3 gap-8'>
			{bmiProfileInfo.map((item) => (
				<BodyInfoCard key={item.id} item={item} />
			))}
		</div>
	);
};

export default BodyInfoCardsWrapper;
