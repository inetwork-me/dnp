import Image from "next/image";

import BreadCrumbImg from "@/public/images/breadCrumb-img.png";
import OverLay from "./OverLay";
import Link from "next/link";
import { useTranslations } from "next-intl";

const BreadCrumb = ({ currentPage }) => {
	const t = useTranslations("app");
	return (
		<>
			<section className='relative w-full'>
				<div className='relative w-full h-[204px] flex flex-col items-start py-14 px-28 isolate  '>
					<OverLay />
					<Image
						fill
						src={BreadCrumbImg}
						alt={"breadCrumb-img"}
						className='object-cover'
					/>
				</div>

				<div className='w-1/2 absolute rtl:left-auto right-28 left-28 top-1/6 z-20'>
					<h3 className='text-[40px] font-semibold leading-[51px] text-white mb-6'>
						Product Page
					</h3>

					<div className='w-full flex items-start gap-4  p-0'>
						<Link href='/' className='text-sm font-normal  text-[#F3F4F6]'>
							{t("navigation.home")}
						</Link>
						<span className='text-sm font-medium leading-6 text-white'>/ </span>
						<Link href='/' className='text-sm font-medium leading-6 text-white'>
							{currentPage}
						</Link>
					</div>
				</div>
			</section>
		</>
	);
};

export default BreadCrumb;
