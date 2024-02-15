import { Box, Skeleton, Typography } from "@mui/material";
import MenuIcon from "@/components/shared/icons/MenuIcon";

const MenuItems = ({ items, loading }) => {
	return (
		<Box
			display='grid'
			gap={6}
			gridTemplateColumns={{
				xs: "repeat(1, 1fr)",
				md: "repeat(2, 1fr)",
			}}>
			{items.map((item, i) =>
				loading ? (
					<Skeleton
						animation='wave'
						height='6rem'
						key={i}
						variant='rounded'
					/>
				) : (
					<Box
						alignItems='start'
						display='flex'
						justifyContent='space-between'
						key={i}>
						<Box width='20%'>
							<MenuIcon />
						</Box>

						<Box className='space-y-2' width='60%'>
							<Typography
								className='line-clamp-1'
								component='h3'
								fontFamily='"Cinzel Variable", sans-serif'
								fontWeight={500}
								textTransform='uppercase'
								variant='body1'>
								{item.name}
							</Typography>

							<Typography
								className='line-clamp-3'
								fontWeight={300}
								variant='body2'>
								{item.recipe}
							</Typography>
						</Box>

						<Box color='accent.main'>${item.price}</Box>
					</Box>
				)
			)}
		</Box>
	);
};

export default MenuItems;
