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
import BorderButton from "@/components/shared/buttons/BorderButton";
import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import { ToastContext } from "@/providers/ToastProvider";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import useCart from "@/hooks/useCart";

const ShopCards = ({ cards }) => {
	const navigate = useNavigate();
	const location = useLocation();
	const axiosSecure = useAxiosSecure();
	const [, refetch] = useCart();
	const { loading, user } = useContext(AuthContext);
	const { toast } = useContext(ToastContext);

	const handleAddToCart = (item) => {
		if (!loading && !user) {
			navigate("/signin", {
				state: {
					from: location,
				},
			});
		} else if (user) {
			const cartItem = {
				email: user.email,
				image: item.image,
				menuID: item._id,
				name: item.name,
				price: item.price,
			};

			axiosSecure.post("/carts", cartItem).then(() => {
				toast({
					title: "Item Added!",
					type: "success",
					position: { horizontal: "right", vertical: "top" },
					description: "Go to your dashboard to manage your cart.",
				});
				refetch();
			});
		}
	};

	return (
		<Box
			display='grid'
			gap={8}
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
					<CardActionArea
						component='div'
						sx={{
							display: "flex",
							flexDirection: "column",
							height: "100%",
							justifyContent: "space-between",
						}}>
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
								onClick={() => handleAddToCart(card)}
								sxProps={{
									bgcolor: grey[300],
									borderColor: "secondary.main",
									color: "secondary.main",
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

export default ShopCards;
