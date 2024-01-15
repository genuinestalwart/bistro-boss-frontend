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
import HomeTitles from "../shared/HomeTitles";

const swiperItems = [
	{ image: swiperSlide1 },
	{ image: swiperSlide2 },
	{ image: swiperSlide3 },
	{ image: swiperSlide4 },
	{ image: swiperSlide5 },
];

const OrderOnline = () => {
	return (
		<section className='mx-auto text-center w-4/5 md:w-3/4'>
			<HomeTitles
				smallTitle='From 11:00am to 10:00pm'
				bigTitle='Order Online'
				borderColor=''
			/>

			<Swiper
				className='mt-8 [&_div.swiper-pagination]:mt-3 [&_div.swiper-pagination]:static'
				autoplay={{
					delay: 4000,
					disableOnInteraction: false,
				}}
				breakpoints={{
					768: { slidesPerView: 4 },
				}}
				centeredSlides={false}
				grabCursor={true}
				modules={[Autoplay, Pagination]}
				pagination={{
					clickable: true,
				}}
				slidesPerView={2}
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
