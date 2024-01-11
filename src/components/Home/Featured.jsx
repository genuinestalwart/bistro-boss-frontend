import featuredFood from "../../assets/home/featured.jpg";
import HomeTitles from "../shared/HomeTitles";

const Featured = () => {
	return (
		<section className='bg-center bg-cover bg-[url("./assets/home/banner.jpg")] bg-no-repeat'>
			<div className='bg-secondary/75 py-20 text-primary'>
				<div className='mx-auto text-center w-3/4'>
					<HomeTitles
						smallTitle='Check it out'
						bigTitle='From Our Menu'
						borderColor='border-primary'
					/>

					<div className='gap-12 grid grid-cols-2 mt-8'>
						<div>
							<img
								className='h-auto rounded w-full'
								src={featuredFood}
								alt='featured food'
							/>
						</div>

						<div className='flex flex-col justify-center text-left'>
							<p>March 20, 2023</p>
							<h3 className='uppercase'>Where Can I Get Some?</h3>

							<p className='text-sm'>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Error voluptate facere,
								deserunt dolores maiores quod nobis quas quasi.
								Eaque repellat recusandae ad laudantium tempore
								consequatur consequuntur omnis ullam maxime
								tenetur.
							</p>

							<button className='hover:bg-secondary hover:border-transparent border-b-2 border-primary font-semibold mt-6 p-3 rounded-lg text-sm hover:text-accent uppercase max-w-max'>
								Read More
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Featured;
