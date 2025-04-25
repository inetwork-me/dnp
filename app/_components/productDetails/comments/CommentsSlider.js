"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import RatingStars from "../StarRating";
import { commentsList } from "@/fakeData/data";

import SlideContentBox from "./SlideContentBox";
import CustomNavigation from "../../customNavigation/CustomNavigation";

const CommentsSlider = ({ t }) => {
	const swiperRef = useRef(null);
	const prevRef = useRef(null);
	const nextRef = useRef(null);

	return (
		<div className=' relative min-h-[276px] '>
			{/* Custom navigation arrows */}
			<CustomNavigation
				right='-right-20'
				left='-left-20'
				prevRef={prevRef}
				nextRef={nextRef}
			/>

			<Swiper
				className='w-full! '
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
						slidesPerView: 2,
					},
					1024: {
						slidesPerView: 3,
					},
				}}>
				{commentsList.map((item, id) => (
					<SwiperSlide
						key={id}
						className='w-full h-full flex! flex-col items-start gap-6  p-6 box-border bg-white  rounded-xl shadow-[0px_2px_6px_rgba(20,20,43,0.06)]'>
						<RatingStars rating={item.ratingCount} />

						<SlideContentBox item={item} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default CommentsSlider;
