import { doctorsDataList } from "@/fakeData/data";
import DoctorCard from "./DoctorCard";

const DoctorsCardsWrapper = () => {
	return (
		<div className='w-full grid grid-cols-4 gap-8'>
			{doctorsDataList.map((doctor) => (
				<DoctorCard key={doctor.id} doctor={doctor} />
			))}
		</div>
	);
};

export default DoctorsCardsWrapper;
