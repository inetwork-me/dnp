import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const DoctorCard = ({ doctor }) => {
	const t = useTranslations("app");

	return (
		<div className='col-span-1 flex flex-col items-start gap-4'>
			<div className='relative w-full h-[280px] rounded-xl'>
				<Image
					src={doctor.image}
					alt={doctor.name}
					fill
					className='object-cover object-center rounded-xl'
				/>
			</div>

			<div className='flex flex-col gap-2'>
				<h3 className='text-lg font-medium text-gray-950'>{doctor.name}</h3>
				<p className='text-base font-normal text-[#3C3F49]  line-clamp-2 flex-1'>
					{doctor.job_title}
				</p>
			</div>

			<Link
				href={`/doctors/${doctor.id}`}
				className='h-12 w-full p-2.5 rounded-lg btn-bg flex items-center justify-center  cursor-pointer text-bse font-medium  '>
				{t("Doctor Profile")}
			</Link>
		</div>
	);
};

export default DoctorCard;
