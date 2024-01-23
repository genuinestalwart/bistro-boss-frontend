import {
	Box,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import BorderButton from "./BorderButton";

const MenuCards = ({ cards }) => {
	return (
		<Box
			display='grid'
			gap={6}
			gridTemplateColumns={{
				xs: "repeat(1, 1fr)",
				md: "repeat(3, 1fr)",
			}}>
			{cards.map((card, index) => (
				<Card
					key={index}
					sx={{
						boxShadow: 2,
						"&.MuiPaper-root": {
							bgcolor: grey[100],
						},
					}}>
					<CardActionArea component='div'>
						<CardMedia
							alt={card.name}
							component='img'
							src={card.image}
						/>

						<CardContent
							className='space-y-2'
							sx={{ bgcolor: grey[100], textAlign: "center" }}>
							<Typography
								className='line-clamp-2'
								component='h3'
								fontWeight={600}
								variant='body1'>
								{card.name}
							</Typography>

							<Typography
								className='line-clamp-3'
								variant='body2'>
								{card.recipe}
							</Typography>
						</CardContent>

						<CardActions sx={{ bgcolor: grey[100], pb: 6 }}>
							<BorderButton
								sxProps={{
									bgcolor: grey[300],
									borderColor: "accent.main",
									color: "accent.main",
									display: "block",
									mx: "auto",
								}}
								text='Add to Cart'
							/>
						</CardActions>
					</CardActionArea>
				</Card>
			))}
		</Box>
	);
};

export default MenuCards;
