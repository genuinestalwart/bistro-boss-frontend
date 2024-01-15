import MenuIcon from "../shared/MenuIcon";
import HomeTitles from "../shared/HomeTitles";

const menuItems = [
	{
		name: "ROAST DUCK BREAST",
		price: 14.5,
		description:
			"Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
	},
	{
		name: "TUNA NIÇOISE",
		price: 14.5,
		description:
			"Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
	},
	{
		name: "ESCALOPE DE VEAU",
		price: 14.5,
		description:
			"Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
	},
	{
		name: "CHICKEN AND WALNUT SALAD",
		price: 14.5,
		description:
			"Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
	},
	{
		name: "FISH PARMENTIER",
		price: 14.5,
		description:
			"Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
	},
	{
		name: "ROASTED PORK BELLY",
		price: 14.5,
		description:
			"Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
	},
];

const FoodMenu = () => {
	return (
		<section className='mx-auto text-center w-4/5 md:w-3/4'>
			<HomeTitles
				smallTitle='Check it out'
				bigTitle='From Our Menu'
				borderColor=''
			/>

			<div className='gap-6 grid grid-cols-1 md:grid-cols-2 mt-8'>
				{menuItems.map((menuItem, index) => (
					<div key={index} className='flex items-start'>
						<div className='w-1/5'>
							<MenuIcon />
						</div>

						<div className='text-left pl-5 pr-1 space-y-2 w-3/4'>
							<div className='font-cinzel font-medium uppercase'>
								{menuItem.name}
							</div>

							<p className='font-light text-sm'>
								{menuItem.description}
							</p>
						</div>

						<div className='text-accent'>${menuItem.price}</div>
					</div>
				))}
			</div>

			<button className='hover:bg-secondary hover:border-transparent border-b-2 border-secondary font-semibold mt-8 p-3 rounded-lg text-sm hover:text-accent uppercase'>
				View Full Menu
			</button>
		</section>
	);
};

export default FoodMenu;
