import SendFeedBackForm from "../doctors/sendFeedBackForm/SendFeedBackForm";
import AcademyHeader from "./AcademyHeader";
import AcademyTopics from "./academyTopics/AcademyTopics";

const AcademyWrapper = () => {
	return (
		<div className='bg-gray-100'>
			<AcademyHeader />
			<AcademyTopics />

			<SendFeedBackForm bgColor='bg-gray-100' />
		</div>
	);
};

export default AcademyWrapper;
