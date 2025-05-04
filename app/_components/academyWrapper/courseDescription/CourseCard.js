import { Button } from "@/app/_shared/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";

const PlayVideoIcon = () => {
	return (
		<Button size='icon' className='cursor-pointer'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'>
				<path d='M8 19V5L19 12L8 19Z' fill='white' />
			</svg>
		</Button>
	);
};

const CourseCard = ({ item }) => {
	const t = useTranslations("app");

	return (
		<div className='col-span-1 flex flex-col items-start gap-4'>
			<div className='relative w-full h-[280px] rounded-xl overflow-hidden '>
				<Image
					src={item.image}
					alt={item.title}
					fill
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					className='object-cover object-center rounded-xl'
				/>

				<div className='w-full h-full absolute inset-0 bg-black/60 flex justify-center items-center isolate  '>
					<PlayVideoIcon />
				</div>
			</div>

			<div className='flex flex-col gap-2'>
				<h3 className='text-lg font-medium text-gray-950'>{item.title}</h3>
				<p className='text-base font-normal text-[#3C3F49] line-clamp-2 flex-1'>
					{item.description}
				</p>
			</div>
		</div>
	);
};

export default CourseCard;
