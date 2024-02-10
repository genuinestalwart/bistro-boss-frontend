import Heading from "@/components/shared/Heading";
import TodaysOffer from "@/components/Menu/TodaysOffer";
import MenuBanner from "@/components/Menu/MenuBanner";
import FullMenu from "@/components/Menu/FullMenu";
import { Helmet } from "react-helmet-async";

const MenuPage = () => {
	return (
		<>
			<Helmet>
				<title>Bistro Boss | Menu</title>
			</Helmet>

			<Heading
				bgImage='bg-[url("./assets/banners/menu.jpg")]'
				title='Our Menu'
			/>

			<TodaysOffer />

			<MenuBanner
				bgImage='bg-[url("./assets/menu/dessert-bg.jpg")]'
				title='Desserts'
				description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
			/>

			<FullMenu category='dessert' />

			<MenuBanner
				bgImage='bg-[url("./assets/menu/pizza-bg.jpg")]'
				title='Pizzas'
				description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
			/>

			<FullMenu category='pizza' />

			<MenuBanner
				bgImage='bg-[url("./assets/menu/salad-bg.jpg")]'
				title='Salads'
				description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
			/>

			<FullMenu category='salad' />

			<MenuBanner
				bgImage='bg-[url("./assets/menu/soup-bg.jpg")]'
				title='Soups'
				description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
			/>

			<FullMenu category='soup' />
		</>
	);
};

export default MenuPage;
