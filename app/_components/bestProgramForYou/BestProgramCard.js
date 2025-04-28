// icons
import ArrowUpRight from "@/public/images/bestProgram/arrow-up-right.svg";
import Image from "next/image";
import Link from "next/link";

const BestProgramCard = ({ program }) => {
	return (
		<div className='col-span-1 h-[488px] flex flex-col justify-end items-start  rounded-xl overflow-hidden isolate'>
			<div className='relative w-full h-full group  rounded-xl '>
				<Image
					src={program.image}
					alt={program.title}
					className='h-full w-full object-cover rounded-xl'
					priority
				/>
				<div
					className='absolute inset-0 text-white transition-all duration-300 rounded-xl'
					style={{
						background:
							"linear-gradient(210.39deg, rgba(0, 0, 0, 0) 32.49%, rgba(0, 0, 0, 0.6) 101.1%)",
					}}>
					<div
						className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
						style={{
							background:
								"linear-gradient(211.32deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.75) 101.08%)",
						}}></div>

					{/* Content positioned at the bottom */}
					<div className='absolute bottom-0 left-0 right-0 p-6 flex justify-between items-center'>
						<h3 className='text-xl font-semibold relative z-10'>
							{program.title}
						</h3>
						<Link
							href={program.link}
							className='relative w-10 h-10 rounded-full flex justify-center items-center p-2 z-10 cursor-pointer bg-[#B26BCA] hover:bg-[#723881] transition-all duration-300 transform
    hover:-rotate-45 hover:-translate-y-1 hover:translate-x-1
    rtl:rotate-180  rtl:hover:rotate-[217deg] rtl:hover:translate-y-1 rtl:hover:translate-x-1'>
							<ArrowUpRight />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BestProgramCard;
