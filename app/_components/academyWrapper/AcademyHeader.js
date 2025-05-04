import Headline from "@/app/_shared/ui/Headline";
import DoctorImgBox from "../doctors/doctorProfile/DoctorImgBox";

import DoctorImage from "@/public/images/academy/image1.png";

const AcademyHeader = () => {
	return (
		<div className='container mx-auto py-12 '>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
				<Headline
					titleClassName='text-3xl font-semibold text-gray-950 '
					title='Our academy offers insights from nutrition specialists for better health.'
					description={`Our academy is dedicated to providing exceptional and
								specialized training courses in various aspects of nutrition to
								empower individuals seeking to improve their dietary habits and
								enhance their overall health. We offer ongoing education and
								accredited training programs, enabling participants to expand
								their knowledge, which contributes to better nutritional choices
								and advances the field of nutrition.`}
				/>
				<DoctorImgBox image={DoctorImage} />
			</div>
		</div>
	);
};

export default AcademyHeader;
