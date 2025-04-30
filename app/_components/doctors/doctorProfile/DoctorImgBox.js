import Image from "next/image";

const DoctorImgBox = ({ image }) => {
	return (
		<div className='col-span-1 '>
			<div className='relative w-full h-[412px]'>
				<Image
					src={image}
					fill
					alt='doctor name'
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					className='w-auto max-h-full object-cover rounded-xl'
				/>
			</div>
		</div>
	);
};

export default DoctorImgBox;
