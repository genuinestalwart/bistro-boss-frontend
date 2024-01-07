import Hero from "../components/Home/Hero";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";

const Home = () => {
	return (
		<>
			<Header />

			<main>
				<Hero />
			</main>

			<Footer />
		</>
	);
};

export default Home;
