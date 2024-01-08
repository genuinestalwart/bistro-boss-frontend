import Hero from "../components/Home/Hero";
import OrderOnline from "../components/Home/OrderOnline";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";

const Home = () => {
	return (
		<>
			<Header />

			<main className='space-y-16'>
				<Hero />
				<OrderOnline />
			</main>

			<Footer />
		</>
	);
};

export default Home;
