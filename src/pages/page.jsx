import AboutService from "../components/Home/AboutService";
import CallUs from "../components/Home/CallUs";
import Featured from "../components/Home/Featured";
import PopularMenu from "../components/Home/PopularMenu";
import Hero from "../components/Home/Hero";
import OrderOnline from "../components/Home/OrderOnline";
import Recommended from "../components/Home/Recommended";
import Testimonials from "../components/Home/Testimonials";

const HomePage = () => {
	return (
		<>
			<Hero />
			<OrderOnline />
			<AboutService />
			<PopularMenu />
			<CallUs />
			<Recommended />
			<Featured />
			<Testimonials />
		</>
	);
};

export default HomePage;
