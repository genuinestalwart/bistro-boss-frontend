import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Divider,
} from "@mui/material";
import caeserSalad from "../../assets/home/caeserSalad.jpg";

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
		<section className='mx-auto text-center w-3/4'>
			<div className='italic font-medium mb-2 text-accent text-sm'>
				---Should Try---
			</div>

			<Divider className='[&.css-9mgopn-MuiDivider-root]:border-y [&.css-9mgopn-MuiDivider-root]:mx-auto w-1/3' />

			<h1 className='font-medium my-3 text-2xl uppercase'>
				Chef Recommends
			</h1>

			<Divider className='[&.css-9mgopn-MuiDivider-root]:border-y [&.css-9mgopn-MuiDivider-root]:mx-auto w-1/3' />

			<div className='gap-6 grid grid-cols-3 mt-8'>
				{foodItems.map((foodItem, index) => (
					<Card key={index} className=''>
						<CardMedia
							component='img'
							image={foodItem.image}
							alt='caeser salad'
						/>

						<CardContent className='bg-neutral/10 space-y-1 text-center'>
							<div className='font-semibold'>{foodItem.name}</div>
							<p className='text-sm'>{foodItem.ingredients}</p>
						</CardContent>

						<CardActions className='bg-neutral/10 flex justify-center mb-2'>
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
