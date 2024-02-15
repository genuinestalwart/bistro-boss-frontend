import MenuItems from "@/components/Menu/MenuItems";
import { Box } from "@mui/material";
import BorderButton from "@/components/shared/buttons/BorderButton";
import { Link } from "react-router-dom";
import useMenu from "@/hooks/useMenu";

const FullMenu = ({ category }) => {
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
			<MenuItems
				items={loading ? [0, 1, 2, 3, 4, 5, 6, 7] : menu}
				loading={loading}
			/>

			<Link className='block' to='/shop'>
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
