import { useEffect } from "react";
import { useState } from "react";
import HomeTitles from "../shared/HomeTitles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Rating, RoundedStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const starStyles = {
	itemShapes: RoundedStar,
	activeFillColor: "rgb(255, 145, 0)",
	inactiveFillColor: "rgb(115, 115, 115)",
};

const Testimonials = () => {
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		fetch("reviews.json")
			.then((res) => res.json())
			.then((data) => setReviews(data));
	}, []);

	return (
		<section className='mx-auto text-center w-4/5 md:w-3/4'>
			<HomeTitles
				smallTitle='What Our Clients Say'
				bigTitle='Testimonials'
				borderColor=''
			/>

			<Swiper
				className='mt-8'
				autoplay={{
					delay: 4000,
					disableOnInteraction: false,
				}}
				// loop={true}
				modules={[Autoplay, Navigation]}
				navigation={true}>
				{reviews.map((review) => (
					<SwiperSlide key={review._id}>
						<div className='flex flex-col items-center'>
							<Rating
								className='[&.rr--group]:w-3/5 md:[&.rr--group]:w-1/5'
								itemStyles={starStyles}
								readOnly
								value={review.rating}
							/>

							<div className='flex justify-center my-6 w-1/5'>
								<FontAwesomeIcon
									className='text-7xl md:text-8xl'
									icon={faQuoteLeft}
								/>
							</div>

							<p className='text-sm w-3/5 md:w-3/4'>
								{review.details}
							</p>

							<h3 className='font-medium mt-1 text-accent text-lg uppercase'>
								{review.name}
							</h3>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default Testimonials;
