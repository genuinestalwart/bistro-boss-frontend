import { useState, useEffect } from "react";
import MenuItems from "@/components/shared/MenuItems";
import SectionTitles from "@/components/shared/SectionTitles";
import { Box } from "@mui/material";
import BorderButton from "@/components/shared/BorderButton";

const PopularMenu = () => {
	const [menu, setMenu] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/menu")
			.then((res) => res.json())
			.then((data) =>
				setMenu(data.filter((item) => item.type === "popular"))
			);
	}, []);

	return (
		<Box
			className='space-y-8'
			component='section'
			mx='auto'
			width={{ xs: "80%", md: "75%" }}>
			<SectionTitles smallTitle='Check it out' bigTitle='From Our Menu' />
			<MenuItems items={menu} />

			<BorderButton
				sxProps={{
					bgcolor: "transparent",
					borderColor: "secondary.main",
					display: "block",
					mx: "auto",
				}}
				text='View Full Menu'
			/>
		</Box>
	);
};

export default PopularMenu;
