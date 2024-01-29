import { Box, Typography } from "@mui/material";
import featuredFood from "@/assets/home/featured.jpg";
import SectionTitles from "@/components/shared/SectionTitles";
import BorderButton from "@/components/shared/BorderButton";

const Featured = () => {
	return (
		<Box
			className='bg-[url("./assets/banners/home.jpg")]'
			color='primary.main'
			component='section'
			sx={{
				backgroundAttachment: "fixed",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
			}}>
			<Box className='bg-secondary/75' py={20}>
				<Box
					className='[&_hr]:border-primary space-y-8'
					mx='auto'
					width={{ xs: "80%", md: "75%" }}>
					<SectionTitles
						smallTitle='Check it out'
						bigTitle='From Our Menu'
					/>

					<Box
						className='space-y-8 md:space-y-0'
						display={{ md: "flex" }}
						justifyContent='space-between'>
						<img
							alt='featured food'
							className='block h-auto rounded w-full md:w-[45%]'
							src={featuredFood}
						/>

						<Box
							className='space-y-4'
							display='flex'
							flexDirection='column'
							justifyContent='center'
							width={{ md: "45%" }}>
							<Box>
								<Typography variant='subtitle2'>
									March 20, 2023
								</Typography>

								<Typography
									component='h3'
									textTransform='uppercase'
									variant='h6'>
									Where Can I Get Some?
								</Typography>
							</Box>

							<Typography variant='body2'>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Error voluptate facere,
								deserunt dolores maiores quod nobis quas quasi.
								Eaque repellat recusandae ad laudantium tempore
								consequatur consequuntur omnis ullam maxime
								tenetur.
							</Typography>

							<BorderButton
								sxProps={{
									bgcolor: "transparent",
									borderColor: "primary.main",
									color: "primary.main",
								}}
								text='Read More'
							/>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Featured;
