import { useEffect } from "react";
import { useState } from "react";
import HomeTitles from "../shared/HomeTitles";

const Testimonials = () => {
	const [reviews, setReviews] = useState([]);

	useEffect(() => {}, []);

	return (
		<section className='mx-auto text-center w-3/4'>
			<HomeTitles
				smallTitle='What Our Clients Say'
				bigTitle='Testimonials'
				borderColor=''
			/>
		</section>
	);
};

export default Testimonials;
