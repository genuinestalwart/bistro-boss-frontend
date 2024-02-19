import { useEffect, useState } from "react";
import SectionTitles from "@/components/shared/SectionTitles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Box, Rating, Typography } from "@mui/material";
import Quote from "@/components/shared/icons/Quote";
import useAxiosPublic from "@/hooks/useAxiosPublic";

const Testimonials = () => {
	const [reviews, setReviews] = useState([]);
	const axiosPublic = useAxiosPublic();

	useEffect(() => {
		axiosPublic.get("/reviews").then(({ data }) => setReviews(data));
	}, [axiosPublic]);

	return (
		<Box
			className='space-y-8'
			component='section'
			mx='auto'
			width={{ xs: "80%", md: "75%" }}>
			<SectionTitles
				bigTitle='Testimonials'
				smallTitle='What Our Clients Say'
			/>

			<Swiper
				autoplay={{ delay: 4000, disableOnInteraction: false }}
				modules={[Autoplay, Navigation]}
				navigation={true}>
				{reviews.map((review, i) => (
					<SwiperSlide key={i}>
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
								{review.review}
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
