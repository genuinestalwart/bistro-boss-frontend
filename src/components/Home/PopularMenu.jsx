import MenuItems from "@/components/Menu/MenuItems";
import SectionTitles from "@/components/shared/SectionTitles";
import { Box, Skeleton } from "@mui/material";
import BorderButton from "@/components/shared/buttons/BorderButton";
import { Link, useLocation } from "react-router-dom";
import useMenu from "@/hooks/useMenu";

const PopularMenu = () => {
	const [data, loading] = useMenu();
	const menu = data.filter((item) => item.type === "popular");
	const location = useLocation();

	return (
		<Box
			className='space-y-8'
			component='section'
			mx='auto'
			width={{ xs: "80%", md: "75%" }}>
			<SectionTitles bigTitle='From Our Menu' smallTitle='Check it out' />

			{loading ? (
				<Box
					display='grid'
					gap={6}
					gridTemplateColumns={{
						xs: "repeat(1, 1fr)",
						md: "repeat(2, 1fr)",
					}}>
					{[0, 1, 2, 3, 4, 5].map((skeleton, index) => (
						<Skeleton
							animation='wave'
							height='6rem'
							key={index}
							variant='rounded'
						/>
					))}
				</Box>
			) : (
				<MenuItems items={menu} />
			)}

			<Link className='block' state={{ from: location }} to='/menu'>
				<BorderButton
					sxProps={{
						bgcolor: "transparent",
						borderColor: "secondary.main",
						display: "block",
						mx: "auto",
					}}
					text='View Full Menu'
				/>
			</Link>
		</Box>
	);
};

export default PopularMenu;
