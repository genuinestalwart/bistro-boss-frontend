import { useEffect, useState } from "react";
import SectionTitles from "../shared/SectionTitles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Rating, RoundedStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import Quote from "../shared/icons/Quote";

const starStyles = {
	itemShapes: RoundedStar,
	activeFillColor: "rgb(255, 145, 0)",
	inactiveFillColor: grey[600],
};

const Testimonials = () => {
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		fetch("reviews.json")
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
				{reviews.map((review) => (
					<SwiperSlide key={review._id}>
						<Box
							alignItems='center'
							display='flex'
							flexDirection='column'>
							<Rating
								className='[&.rr--group]:w-3/5 md:[&.rr--group]:w-1/5'
								itemStyles={starStyles}
								readOnly
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
