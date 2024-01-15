import carouselSlide1 from "../../assets/home/carouselSlide1.jpg";
import carouselSlide2 from "../../assets/home/carouselSlide2.jpg";
import carouselSlide3 from "../../assets/home/carouselSlide3.png";
import carouselSlide4 from "../../assets/home/carouselSlide4.jpg";
import carouselSlide5 from "../../assets/home/carouselSlide5.png";
import carouselSlide6 from "../../assets/home/carouselSlide6.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const carouselItems = [
	{ image: carouselSlide1 },
	{ image: carouselSlide2 },
	{ image: carouselSlide3 },
	{ image: carouselSlide4 },
	{ image: carouselSlide5 },
	{ image: carouselSlide6 },
];

const Hero = () => {
	return (
		<section>
			<Carousel
				className='[&_li.dot]:bg-primary [&_li.dot.selected]:bg-accent [&_ul.thumbs]:flex [&_ul.thumbs]:items-center [&_ul.thumbs]:justify-center [&_ul.control-dots]:my-12 [&_div.carousel_li.dot]:opacity-100 [&_li.dot]:rounded-full [&_ul.control-dots]:z-10'
				autoPlay
				emulateTouch
				infiniteLoop
				interval={4000}
				showArrows={false}
				showStatus={false}
				stopOnHover={false}>
				{carouselItems.map((carouselItem, index) => (
					<div key={index}>
						<img
							className='block h-full object-center object-cover w-full'
							src={carouselItem.image}
							alt='hero banner'
						/>
					</div>
				))}
			</Carousel>
		</section>
	);
};

export default Hero;
