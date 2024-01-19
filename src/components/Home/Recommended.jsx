import { Box } from "@mui/material";
import caeserSalad from "../../assets/home/caeserSalad.jpg";
import SectionTitles from "../shared/SectionTitles";
import MenuCards from "../shared/MenuCards";

const foodItems = [
	{
		name: "Caeser Salad",
		ingredients: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
		image: caeserSalad,
	},
	{
		name: "Caeser Salad",
		ingredients: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
		image: caeserSalad,
	},
	{
		name: "Caeser Salad",
		ingredients: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
		image: caeserSalad,
	},
];

const Recommended = () => {
	return (
		<Box
			className='space-y-8'
			component='section'
			mx='auto'
			width={{ xs: "80%", md: "75%" }}>
			<SectionTitles smallTitle='Should Try' bigTitle='Chef Recommends' />
			<MenuCards cards={foodItems} />
		</Box>
	);
};

export default Recommended;
