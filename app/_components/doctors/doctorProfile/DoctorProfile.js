import Image from "next/image";
import DoctorImg from "@/public/images/doctors/img-1.png";
import InfoBox from "./InfoBox";
import Link from "next/link";
import { useTranslations } from "next-intl";

const DoctorProfile = () => {
	const t = useTranslations("app");
	return (
		<div className='container mx-auto py-14'>
			<div className='w-full grid grid-cols-4 items-start gap-8'>
				<div className='col-span-1'>
					<div className='relative w-full h-[412px]'>
						<Image
							src={DoctorImg}
							fill
							alt='doctor name'
							className='w-auto max-h-full object-cover rounded-xl'
						/>
					</div>
				</div>

				<div className='col-span-3'>
					<div className='w-full flex flex-col items-start gap-8'>
						<h3 className='text-2xl font-semibold text-gray-950'>
							Dr. Emily Hart
						</h3>

						<p className='text-lg font-normal text-gray-600'>
							Dr. Emily Hart specializes in nutrition for weight loss, offering
							personalized dietary plans that promote holistic health. She
							combines science-backed strategies with practical advice for
							sustainable results. Her focus on balanced meals and mindful
							eating helps clients seamlessly integrate lifestyle changes.
							Whether you want to lose a few pounds or undergo a complete
							transformation, Dr. Hart is here to guide you.
						</p>

						<div className='w-full grid grid-cols-3 gap-8'>
							<InfoBox
								icon={
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='20'
										height='20'
										viewBox='0 0 20 20'
										fill='none'>
										<path
											d='M10.1004 11.2752C10.0837 11.2752 10.0587 11.2752 10.0421 11.2752C10.0171 11.2752 9.98372 11.2752 9.95872 11.2752C8.06706 11.2169 6.65039 9.7419 6.65039 7.92523C6.65039 6.07523 8.15872 4.56689 10.0087 4.56689C11.8587 4.56689 13.3671 6.07523 13.3671 7.92523C13.3587 9.75023 11.9337 11.2169 10.1254 11.2752C10.1087 11.2752 10.1087 11.2752 10.1004 11.2752ZM10.0004 5.80856C8.83372 5.80856 7.89206 6.75856 7.89206 7.91689C7.89206 9.05856 8.78372 9.98356 9.91706 10.0252C9.94206 10.0169 10.0254 10.0169 10.1087 10.0252C11.2254 9.96689 12.1004 9.05023 12.1087 7.91689C12.1087 6.75856 11.1671 5.80856 10.0004 5.80856Z'
											fill='white'
										/>
										<path
											d='M10 18.9581C7.75836 18.9581 5.61669 18.1248 3.95836 16.6081C3.80836 16.4748 3.74169 16.2748 3.75836 16.0831C3.86669 15.0914 4.48336 14.1664 5.50836 13.4831C7.99169 11.8331 12.0167 11.8331 14.4917 13.4831C15.5167 14.1748 16.1334 15.0914 16.2417 16.0831C16.2667 16.2831 16.1917 16.4748 16.0417 16.6081C14.3834 18.1248 12.2417 18.9581 10 18.9581ZM5.06669 15.9164C6.45003 17.0748 8.19169 17.7081 10 17.7081C11.8084 17.7081 13.55 17.0748 14.9334 15.9164C14.7834 15.4081 14.3834 14.9164 13.7917 14.5164C11.7417 13.1498 8.26669 13.1498 6.20003 14.5164C5.60836 14.9164 5.21669 15.4081 5.06669 15.9164Z'
											fill='white'
										/>
										<path
											d='M10.0003 18.9582C5.05866 18.9582 1.04199 14.9415 1.04199 9.99984C1.04199 5.05817 5.05866 1.0415 10.0003 1.0415C14.942 1.0415 18.9587 5.05817 18.9587 9.99984C18.9587 14.9415 14.942 18.9582 10.0003 18.9582ZM10.0003 2.2915C5.75033 2.2915 2.29199 5.74984 2.29199 9.99984C2.29199 14.2498 5.75033 17.7082 10.0003 17.7082C14.2503 17.7082 17.7087 14.2498 17.7087 9.99984C17.7087 5.74984 14.2503 2.2915 10.0003 2.2915Z'
											fill='white'
										/>
									</svg>
								}
								title='Full Name'
								value='Dr. Emily Hart'
							/>
							<InfoBox
								icon={
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='20'
										height='20'
										viewBox='0 0 20 20'
										fill='none'>
										<path
											d='M12.4749 18.9582H7.47493C2.94993 18.9582 1.0166 17.0248 1.0166 12.4998V7.49984C1.0166 2.97484 2.94993 1.0415 7.47493 1.0415H12.4749C16.9999 1.0415 18.9333 2.97484 18.9333 7.49984V12.4998C18.9333 17.0248 17.0083 18.9582 12.4749 18.9582ZM7.47493 2.2915C3.63327 2.2915 2.2666 3.65817 2.2666 7.49984V12.4998C2.2666 16.3415 3.63327 17.7082 7.47493 17.7082H12.4749C16.3166 17.7082 17.6833 16.3415 17.6833 12.4998V7.49984C17.6833 3.65817 16.3166 2.2915 12.4749 2.2915H7.47493Z'
											fill='white'
										/>
										<path
											d='M9.54154 15.0501C9.34154 15.0501 8.8582 14.9751 8.57487 14.2501L7.62487 11.8501C7.49154 11.5084 7.01654 11.1917 6.6582 11.1917L1.6582 11.2084C1.31654 11.2084 1.0332 10.9334 1.0332 10.5834C1.0332 10.2417 1.3082 9.9584 1.6582 9.9584L6.6582 9.94173H6.66654C7.54154 9.94173 8.47487 10.5751 8.79987 11.3917L9.5582 13.3084L11.2749 8.9584C11.5332 8.3084 11.9915 8.21673 12.1832 8.20007C12.3749 8.19173 12.8415 8.2334 13.1665 8.85007L14.0332 10.4917C14.1832 10.7751 14.6332 11.0501 14.9582 11.0501H18.3415C18.6832 11.0501 18.9665 11.3334 18.9665 11.6751C18.9665 12.0167 18.6832 12.3001 18.3415 12.3001H14.9582C14.1665 12.3001 13.2999 11.7751 12.9332 11.0751L12.2832 9.84173L10.5332 14.2501C10.2249 14.9667 9.7332 15.0501 9.54154 15.0501Z'
											fill='white'
										/>
									</svg>
								}
								title='Department'
								value='nutrition'
							/>
							<InfoBox
								icon={
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='20'
										height='20'
										viewBox='0 0 20 20'
										fill='none'>
										<path
											d='M18.3337 18.9585H1.66699C1.32533 18.9585 1.04199 18.6752 1.04199 18.3335C1.04199 17.9918 1.32533 17.7085 1.66699 17.7085H18.3337C18.6753 17.7085 18.9587 17.9918 18.9587 18.3335C18.9587 18.6752 18.6753 18.9585 18.3337 18.9585Z'
											fill='white'
										/>
										<path
											d='M17.5 18.9582H2.5C2.15833 18.9582 1.875 18.6748 1.875 18.3332V4.99984C1.875 2.48317 3.31667 1.0415 5.83333 1.0415H14.1667C16.6833 1.0415 18.125 2.48317 18.125 4.99984V18.3332C18.125 18.6748 17.8417 18.9582 17.5 18.9582ZM3.125 17.7082H16.875V4.99984C16.875 3.14984 16.0167 2.2915 14.1667 2.2915H5.83333C3.98333 2.2915 3.125 3.14984 3.125 4.99984V17.7082Z'
											fill='white'
										/>
										<path
											d='M12.5 18.9583H7.5C7.15833 18.9583 6.875 18.675 6.875 18.3333V13.2833C6.875 12.5083 7.50834 11.875 8.28334 11.875H11.725C12.5 11.875 13.1333 12.5083 13.1333 13.2833V18.3333C13.125 18.675 12.8417 18.9583 12.5 18.9583ZM8.125 17.7083H11.875V13.2833C11.875 13.2 11.8083 13.125 11.7167 13.125H8.27499C8.19166 13.125 8.11667 13.1917 8.11667 13.2833V17.7083H8.125Z'
											fill='white'
										/>
										<path
											d='M10 9.79167C9.65833 9.79167 9.375 9.50833 9.375 9.16667V5C9.375 4.65833 9.65833 4.375 10 4.375C10.3417 4.375 10.625 4.65833 10.625 5V9.16667C10.625 9.50833 10.3417 9.79167 10 9.79167Z'
											fill='white'
										/>
										<path
											d='M12.0837 7.7085H7.91699C7.57533 7.7085 7.29199 7.42516 7.29199 7.0835C7.29199 6.74183 7.57533 6.4585 7.91699 6.4585H12.0837C12.4253 6.4585 12.7087 6.74183 12.7087 7.0835C12.7087 7.42516 12.4253 7.7085 12.0837 7.7085Z'
											fill='white'
										/>
									</svg>
								}
								title='Specializes'
								value='weight loss'
							/>
						</div>

						<Link
							href='/doctors'
							className='md:w-[280px] w-full h-12 p-2.5 rounded-lg btn-bg flex items-center justify-center  cursor-pointer text-bse font-medium  '>
							{t("Book Appointment")}
						</Link>
					</div>
				</div>

				<div className='col-span-full flex flex-col items-start gap-4'>
					<h3 className='text-2xl font-semibold  text-[#2C2F39]'>
						{t("Detailed Info")}
					</h3>
					<div className='w-full grid grid-cols-2 gap-8'>
						<ul className='col-span-1 list-disc list-inside flex flex-col gap-4'>
							<li className='text-lg font-medium text-gray-600'>
								Lorem ipsum dolor sit amet consectetur.
							</li>
							<li className='text-lg font-medium text-gray-600'>
								Lorem ipsum dolor sit amet consectetur.
							</li>
							<li className='text-lg font-medium text-gray-600'>
								Lorem ipsum dolor sit amet consectetur.
							</li>
						</ul>
						<ul className='col-span-1 list-disc list-inside flex flex-col gap-4'>
							<li className='text-lg font-medium text-gray-600'>
								Lorem ipsum dolor sit amet consectetur.
							</li>
							<li className='text-lg font-medium text-gray-600'>
								Lorem ipsum dolor sit amet consectetur.
							</li>
							<li className='text-lg font-medium text-gray-600'>
								Lorem ipsum dolor sit amet consectetur.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DoctorProfile;
