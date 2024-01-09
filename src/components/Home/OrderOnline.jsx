import { Divider } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import swiperSlide1 from "../../assets/home/swiperSlide1.jpg";
import swiperSlide2 from "../../assets/home/swiperSlide2.jpg";
import swiperSlide3 from "../../assets/home/swiperSlide3.jpg";
import swiperSlide4 from "../../assets/home/swiperSlide4.jpg";
import swiperSlide5 from "../../assets/home/swiperSlide5.jpg";

const swiperItems = [
	{ image: swiperSlide1 },
	{ image: swiperSlide2 },
	{ image: swiperSlide3 },
	{ image: swiperSlide4 },
	{ image: swiperSlide5 },
];

const OrderOnline = () => {
	return (
		<section className='mx-auto text-center w-3/4'>
			<div className='italic font-medium mb-2 text-accent text-sm'>
				---From 11:00am to 10:00pm---
			</div>

			<Divider className='[&.css-9mgopn-MuiDivider-root]:border-y [&.css-9mgopn-MuiDivider-root]:mx-auto w-1/3' />

			<h1 className='font-medium my-3 text-2xl uppercase'>
				Order Online
			</h1>

			<Divider className='[&.css-9mgopn-MuiDivider-root]:border-y [&.css-9mgopn-MuiDivider-root]:mx-auto w-1/3' />

			<Swiper
				className='mt-8 [&_div.swiper-pagination]:mt-3 [&_div.swiper-pagination]:static'
				autoplay={{
					delay: 4000,
					disableOnInteraction: false,
				}}
				centeredSlides={false}
				grabCursor={true}
				modules={[Autoplay, Pagination]}
				pagination={{
					clickable: true,
				}}
				slidesPerView={4}
				spaceBetween={20}>
				{swiperItems.map((swiperItem, index) => (
					<SwiperSlide key={index}>
						<img src={swiperItem.image} alt='swiper slide' />
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default OrderOnline;
