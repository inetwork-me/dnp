import { useTranslations } from "next-intl";
import BookFormTabs from "./bookFormTabs/BookFormTabs";
import DoctorImgBox from "../doctorProfile/DoctorImgBox";
import DoctorImg from "@/public/images/doctors/img-1.png";

const BookAppointmentWrapper = () => {
	const t = useTranslations("app");
	return (
		<div className='container mx-auto py-14'>
			<div className='w-full grid grid-cols-4 items-start gap-8'>
				<div className='col-span-full'>
					<h3 className='text-3xl font-semibold text-gray-950'>
						{t("Book with")} Dr. Emily Hart
					</h3>
				</div>

				<DoctorImgBox image={DoctorImg} />

				<BookFormTabs />
			</div>
		</div>
	);
};

export default BookAppointmentWrapper;
