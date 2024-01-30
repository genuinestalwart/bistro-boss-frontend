import { useEffect, useState } from "react";
import SectionTitles from "@/components/shared/SectionTitles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Box, Rating, Typography } from "@mui/material";
import Quote from "@/components/shared/icons/Quote";

const Testimonials = () => {
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		fetch("https://gs-bistro-boss-backend.vercel.app/reviews")
			.then((res) => res.json())
			.then((data) => setReviews(data));
	}, []);

	return (
		<Box
			className='space-y-8'
			component='section'
			mx='auto'
			width={{ xs: "80%", md: "75%" }}>
			<SectionTitles
				smallTitle='What Our Clients Say'
				bigTitle='Testimonials'
			/>

			<Swiper
				autoplay={{
					delay: 4000,
					disableOnInteraction: false,
				}}
				modules={[Autoplay, Navigation]}
				navigation={true}>
				{reviews.map((review, index) => (
					<SwiperSlide key={index}>
						<Box
							alignItems='center'
							display='flex'
							flexDirection='column'>
							<Rating
								name='reviews'
								readOnly
								size='large'
								value={review.rating}
							/>

							<Box
								display='flex'
								justifyContent='center'
								my={6}
								width='20%'>
								<Quote />
							</Box>

							<Typography
								textAlign='center'
								variant='body2'
								width={{ xs: "60%", md: "75%" }}>
								{review.details}
							</Typography>

							<Typography
								color='accent.main'
								component='h3'
								fontWeight={500}
								mt={2}
								textTransform='uppercase'
								variant='h6'>
								{review.name}
							</Typography>
						</Box>
					</SwiperSlide>
				))}
			</Swiper>
		</Box>
	);
};

export default Testimonials;
