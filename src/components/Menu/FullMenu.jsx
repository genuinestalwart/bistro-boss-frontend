import MenuItems from "@/components/Menu/MenuItems";
import { Box, Skeleton } from "@mui/material";
import BorderButton from "@/components/shared/buttons/BorderButton";
import { Link, useLocation } from "react-router-dom";
import useMenu from "@/hooks/useMenu";

const FullMenu = ({ category }) => {
	const location = useLocation();
	const [data, loading] = useMenu();

	const menu = data.filter(
		(item) => item.type === "none" && item.category === category
	);

	return (
		<Box
			className='space-y-8'
			component='section'
			mx='auto'
			width={{ xs: "80%", md: "75%" }}>
			{loading ? (
				<Box
					display='grid'
					gap={6}
					gridTemplateColumns={{
						xs: "repeat(1, 1fr)",
						md: "repeat(2, 1fr)",
					}}>
					{[0, 1, 2, 3, 4, 5, 6, 7].map((skeleton, i) => (
						<Skeleton
							animation='wave'
							height='6rem'
							key={i}
							variant='rounded'
						/>
					))}
				</Box>
			) : (
				<MenuItems items={menu} />
			)}

			<Link className='block' state={{ from: location }} to='/shop'>
				<BorderButton
					sxProps={{
						bgcolor: "transparent",
						borderColor: "secondary.main",
						display: "block",
						mx: "auto",
					}}
					text='Order Your Favorite Food'
				/>
			</Link>
		</Box>
	);
};

export default FullMenu;
