import AboutService from "../components/Home/AboutService";
import CallUs from "../components/Home/CallUs";
import Featured from "../components/Home/Featured";
import FoodMenu from "../components/Home/FoodMenu";
import Hero from "../components/Home/Hero";
import OrderOnline from "../components/Home/OrderOnline";
import Recommended from "../components/Home/Recommended";
import Testimonials from "../components/Home/Testimonials";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";

const Home = () => {
	return (
		<>
			<Header />

			<main className='space-y-16'>
				<Hero />
				<OrderOnline />
				<AboutService />
				<FoodMenu />
				<CallUs />
				<Recommended />
				<Featured />
				<Testimonials />
				<Footer />
			</main>
		</>
	);
};

export default Home;
