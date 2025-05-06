import { packagesList } from "@/fakeData/data";
import PackagesCard from "../PackagesCard";

const PackagesCards = ({ headline }) => {
	return (
		<div className='grid grid-col-1 md:grid-cols-3 gap-8 pt-12'>
			{packagesList.map((pack) => (
				<PackagesCard key={pack.id} pack={pack} />
			))}
		</div>
	);
};

export default PackagesCards;
