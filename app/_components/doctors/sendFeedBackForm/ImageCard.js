import Image from "next/image";
import FeedbackImg from "@/public/images/doctors/feedback.png";

const ImageCard = () => {
	return (
		<div className=' col-span-1'>
			<div className='relative w-full h-[416px]'>
				<Image
					src={FeedbackImg}
					fill
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					alt='Feed-back-image'
					className='w-auto max-h-full object-cover rounded-xl'
				/>
			</div>
		</div>
	);
};

export default ImageCard;
