import Image from "next/image";
import OverLay from "../OverLay";

const BundlesCard = ({ item, t }) => {
	return (
		<div className='w-[410px] h-full rounded-xl overflow-hidden group'>
			<div className='relative w-full'>
				<Image
					src={item.image}
					alt={item.title}
					className='w-full rounded-xl object-cover'
					priority
				/>

				<OverLay />

				<div className='w-1/2 absolute left-8 top-[calc(50%-84px)] z-20'>
					<h3 className='text-2xl font-semibold leading-9 text-white'>
						{item.title}
					</h3>
				</div>

				<button
					className={`
						absolute top-[157px] left-8
						w-[160px] h-[43px] flex justify-center items-center py-3 px-[40px]
						text-white rounded-xl text-[16px] font-medium cursor-pointer
						 bg-opacity-70  btn-bg
						transition-all duration-500 ease-in-out
						translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 z-20
					`}>
					{t("shopNow")}
				</button>
			</div>
		</div>
	);
};

export default BundlesCard;
