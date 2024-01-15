import { Card, CardActions, CardContent, CardMedia } from "@mui/material";
import caeserSalad from "../../assets/home/caeserSalad.jpg";
import HomeTitles from "../shared/HomeTitles";

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
		<section className='mx-auto text-center md:w-3/4'>
			<HomeTitles
				smallTitle='Should Try'
				bigTitle='Chef Recommends'
				borderColor=''
			/>

			<div className='gap-6 md:grid grid-cols-3 mt-8 overflow-x-auto overflow-y-hidden md:overflow-visible px-12 [&::-webkit-scrollbar]:hidden space-x-6 whitespace-nowrap'>
				{foodItems.map((foodItem, index) => (
					<Card
						key={index}
						className='[&.css-bhp9pd-MuiPaper-root-MuiCard-root]:bg-neutral/10 inline-block [&.css-bhp9pd-MuiPaper-root-MuiCard-root]:shadow-md [&.css-bhp9pd-MuiPaper-root-MuiCard-root]:shadow-neutral/25 w-full whitespace-normal'>
						<CardMedia
							component='img'
							image={foodItem.image}
							alt='caeser salad'
						/>

						<CardContent className='space-y-1 text-center'>
							<div className='font-semibold'>{foodItem.name}</div>
							<p className='text-sm'>{foodItem.ingredients}</p>
						</CardContent>

						<CardActions className='flex justify-center mb-2'>
							<button className='bg-neutral/25 hover:bg-secondary border-b-2 border-accent font-semibold p-3 rounded-lg text-sm hover:text-accent uppercase'>
								Add To Cart
							</button>
						</CardActions>
					</Card>
				))}
			</div>
		</section>
	);
};

export default Recommended;
