import { formatDate } from "@/app/_utils/formatDate";
import Image from "next/image";

const SlideContentBox = ({ item }) => {
	return (
		<>
			<p className='text-[16px] leading-7 font-normal text-[#374151]'>
				"{item.comment}"
			</p>
			<div className='flex items-center gap-3'>
				<Image
					priority
					width={48}
					height={48}
					src={item.user.image}
					alt={item.user.name}
					className='w-[48px] h-[48px] rounded-lg object-cover object-center'
				/>
				<div className='flex flex-col items-start gap-0.5 py-0 p-1'>
					<h3 className='text-[16px] leading-7 font-medium text-[#111827]'>
						{item.user.name}
					</h3>
					<span className='text-sm font-normal text-[#374151]'>
						{formatDate(item.date)}
					</span>
				</div>
			</div>
		</>
	);
};

export default SlideContentBox;
