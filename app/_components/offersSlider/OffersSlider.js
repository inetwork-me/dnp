"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// icons
import ClockIcon from "@/public/icons/offers/clock.svg";
import FlashSaleIcon from "@/public/icons/offers/flashSale.svg";
import FairIcon from "@/public/icons/offers/fair.svg";
import CoinsIcon from "@/public/icons/offers/coins.svg";

import CustomNavigation from "../customNavigation/CustomNavigation";

const offersList = [
	{
		id: 1,
		title: "Lucky Hour",
		icon: <ClockIcon />,
		link: "/",
	},
	{
		id: 2,
		title: "Flash Sale",
		icon: <FlashSaleIcon />,
		link: "/",
	},
	{
		id: 3,
		title: "Top Deals",
		icon: <FairIcon />,
		link: "/",
	},
	{
		id: 4,
		title: "Lucky Hour",
		icon: <ClockIcon />,
		link: "/",
	},
	{
		id: 5,
		title: "Redeem Points",
		icon: <CoinsIcon />,
		link: "/",
	},
	{
		id: 6,
		title: "Lucky Hour",
		icon: <ClockIcon />,
		link: "/",
	},
	{
		id: 134,
		title: "Lucky Hour",
		icon: <ClockIcon />,
		link: "/",
	},
	{
		id: 234,
		title: "Flash Sale",
		icon: <FlashSaleIcon />,
		link: "/",
	},
	{
		id: 343,
		title: "Top Deals",
		icon: <FairIcon />,
		link: "/",
	},
	{
		id: 434,
		title: "Lucky Hour",
		icon: <ClockIcon />,
		link: "/",
	},
	{
		id: 534,
		title: "Redeem Points",
		icon: <CoinsIcon />,
		link: "/",
	},
	{
		id: 634,
		title: "Lucky Hour",
		icon: <ClockIcon />,
		link: "/",
	},
];

const OffersSlider = () => {
	const swiperRef = useRef(null);
	const prevRef = useRef(null);
	const nextRef = useRef(null);

	return (
		<div className=' relative bg-white h-[184px] py-7 px-5 rounded-xl  shadow-[0px_2px_6px_rgba(20,20,43,0.06)]'>
			{/* Custom navigation arrows */}
			<CustomNavigation prevRef={prevRef} nextRef={nextRef} />

			<Swiper
				className='w-[1040px]!'
				ref={swiperRef}
				modules={[Navigation, Autoplay]}
				spaceBetween={20}
				slidesPerView={2}
				navigation={{
					prevEl: prevRef.current,
					nextEl: nextRef.current,
				}}
				onInit={(swiper) => {
					swiper.params.navigation.prevEl = prevRef.current;
					swiper.params.navigation.nextEl = nextRef.current;
					swiper.navigation.init();
					swiper.navigation.update();
				}}
				autoplay={{ delay: 5000, disableOnInteraction: false }}
				breakpoints={{
					640: {
						slidesPerView: 5,
					},
					1024: {
						slidesPerView: 6,
					},
				}}>
				{offersList.map((offer, index) => (
					<SwiperSlide
						key={index}
						className='h-[128px] w-[146.67px] py-3 px-4 box-border bg-[#F5EDFA] border-2 border-[#ecdaf4] rounded-lg '>
						<Link
							href={offer.link}
							className='flex flex-col justify-center items-center gap-3'>
							<div className=' w-10 h-10'>{offer.icon}</div>
							<h3 className='w-1/2  text-lg font-bold text-[#37143E] text-center '>
								{offer.title}
							</h3>
						</Link>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default OffersSlider;
