import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import swiperSlide1 from "@/assets/home/swiperSlide1.jpg";
import swiperSlide2 from "@/assets/home/swiperSlide2.jpg";
import swiperSlide3 from "@/assets/home/swiperSlide3.jpg";
import swiperSlide4 from "@/assets/home/swiperSlide4.jpg";
import swiperSlide5 from "@/assets/home/swiperSlide5.jpg";
import SectionTitles from "@/components/shared/SectionTitles";
import { Box, Typography } from "@mui/material";

const swiperItems = [
	{ image: swiperSlide1, name: "Salads" },
	{ image: swiperSlide2, name: "Pizzas" },
	{ image: swiperSlide3, name: "Soups" },
	{ image: swiperSlide4, name: "Desserts" },
	{ image: swiperSlide5, name: "Salads" },
];

const OrderOnline = () => {
	return (
		<Box
			className='space-y-8'
			component='section'
			mx='auto'
			width={{
				xs: "80%",
				md: "75%",
			}}>
			<SectionTitles
				bigTitle='Order Online'
				component='h1'
				smallTitle='From 11:00am to 10:00pm'
			/>

			<Swiper
				autoplay={{
					delay: 4000,
					disableOnInteraction: false,
				}}
				breakpoints={{
					768: { slidesPerView: 4 },
				}}
				className='[&_div.swiper-pagination]:mt-3 [&_div.swiper-pagination]:static'
				grabCursor={true}
				modules={[Autoplay, Pagination]}
				pagination={{
					clickable: true,
				}}
				slidesPerView={1}
				spaceBetween={20}>
				{swiperItems.map((swiperItem, index) => (
					<SwiperSlide className='relative' key={index}>
						<img
							alt={swiperItem.name}
							className='block rounded-md w-full'
							src={swiperItem.image}
						/>

						<Typography
							className='bottom-4 z-10'
							component='h3'
							color='primary.main'
							fontFamily='"Cinzel Variable", sans-serif'
							position='absolute'
							sx={{
								textShadow: "1px 1px 1px #151515",
							}}
							textAlign='center'
							textTransform='uppercase'
							variant='h6'
							width='100%'>
							{swiperItem.name}
						</Typography>
					</SwiperSlide>
				))}
			</Swiper>
		</Box>
	);
};

export default OrderOnline;
