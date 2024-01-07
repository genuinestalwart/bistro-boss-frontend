import swiperSlide1 from "../../assets/home/swiperSlide1.jpg";
import swiperSlide2 from "../../assets/home/swiperSlide2.jpg";
import swiperSlide3 from "../../assets/home/swiperSlide3.png";
import swiperSlide4 from "../../assets/home/swiperSlide4.jpg";
import swiperSlide5 from "../../assets/home/swiperSlide5.png";
import swiperSlide6 from "../../assets/home/swiperSlide6.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const carouselItems = [
	{ image: swiperSlide1 },
	{ image: swiperSlide2 },
	{ image: swiperSlide3 },
	{ image: swiperSlide4 },
	{ image: swiperSlide5 },
	{ image: swiperSlide6 },
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
				stopOnHover={false}>
				{carouselItems.map((carouselItem, index) => (
					<div
						key={index}
						className='h-screen min-[1440px]:max-h-[810px]'>
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
