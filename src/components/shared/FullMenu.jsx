import { useState, useEffect } from "react";
import MenuItems from "../shared/MenuItems";
import { Box } from "@mui/material";
import BorderButton from "../shared/BorderButton";

const FullMenu = (props) => {
	const { category } = props;
	const [menu, setMenu] = useState([]);

	useEffect(() => {
		fetch("menu.json")
			.then((res) => res.json())
			.then((data) =>
				setMenu(
					data.filter(
						(item) =>
							item.type === "none" && item.category === category
					)
				)
			);
	}, [category]);

	return (
		<Box
			className='space-y-8'
			component='section'
			mx='auto'
			width={{ xs: "80%", md: "75%" }}>
			<MenuItems items={menu} />

			<BorderButton
				sxProps={{
					bgcolor: "transparent",
					borderColor: "secondary.main",
					display: "block",
					mx: "auto",
				}}
				text='Order Your Favorite Food'
			/>
		</Box>
	);
};

export default FullMenu;
