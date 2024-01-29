import { Box } from "@mui/material";
import SectionTitles from "@/components/shared/SectionTitles";
import MenuCards from "@/components/shared/MenuCards";
import { useEffect, useState } from "react";

const Recommended = () => {
	const [menu, setMenu] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/menu")
			.then((res) => res.json())
			.then((data) =>
				setMenu(data.filter((item) => item.type === "recommended"))
			);
	}, []);

	return (
		<Box
			className='space-y-8'
			component='section'
			mx='auto'
			width={{ xs: "80%", md: "75%" }}>
			<SectionTitles smallTitle='Should Try' bigTitle='Chef Recommends' />
			<MenuCards cards={menu} />
		</Box>
	);
};

export default Recommended;
