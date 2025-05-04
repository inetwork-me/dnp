import DoctorImgBox from "../doctorProfile/DoctorImgBox";
import DoctorImg from "@/public/images/doctors/img-1.png";
import TitleWrapper from "./TitleWrapper";
import { useTranslations } from "next-intl";

import BookFormTabs from "./bookFormTabs/BookFormTabs";

const BookAppointmentWrapper = () => {
	const t = useTranslations("app");
	return (
		<div className='container mx-auto py-14'>
			<div className='w-full grid grid-cols-4 items-start gap-8'>
				<TitleWrapper title={`${t("Book with")} Dr. Emily Hart`} />
				<DoctorImgBox image={DoctorImg} />
				<BookFormTabs />
			</div>
		</div>
	);
};

export default BookAppointmentWrapper;
