import Badge from "@/app/_shared/ui/Badge";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const TopicCard = ({ topic }) => {
	const t = useTranslations("app");
	return (
		<div className='col-span-1 flex flex-col items-start gap-4'>
			<div className='relative w-full h-[280px] rounded-xl'>
				<Image
					src={topic.image}
					alt={topic.title}
					fill
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					className='object-cover object-center rounded-xl'
				/>

				<Badge
					className='absolute top-4 right-4 text-[#723881] bg-[#ECDAF4]'
					badge={topic.category}
				/>
			</div>

			<div className='flex flex-col gap-2'>
				<h3 className='text-lg font-medium text-gray-950'>{topic.title}</h3>
				<p className='text-base font-normal text-[#3C3F49] line-clamp-2 flex-1'>
					{topic.description}
				</p>
			</div>

			<Link
				href={`academy/${topic.id}`}
				className='h-12 w-full p-2.5 rounded-lg btn-bg flex items-center justify-center  cursor-pointer text-bse font-medium  '>
				{t("Learn More")}
			</Link>
		</div>
	);
};

export default TopicCard;
