import MenuItems from "@/components/Menu/MenuItems";
import SectionTitles from "@/components/shared/SectionTitles";
import { Box } from "@mui/material";
import BorderButton from "@/components/shared/buttons/BorderButton";
import { Link } from "react-router-dom";
import useMenu from "@/hooks/useMenu";

const PopularMenu = () => {
	const [data, loading] = useMenu();
	const menu = data.filter((item) => item.type === "popular");

	return (
		<Box
			className='space-y-8'
			component='section'
			mx='auto'
			width={{ xs: "80%", md: "75%" }}>
			<SectionTitles bigTitle='From Our Menu' smallTitle='Check it out' />

			<MenuItems
				items={loading ? [0, 1, 2, 3, 4, 5] : menu}
				loading={loading}
			/>

			<Link className='block' to='/menu'>
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
