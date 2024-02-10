import { useState, useEffect } from "react";
import MenuItems from "@/components/Menu/MenuItems";
import { Box } from "@mui/material";
import BorderButton from "@/components/shared/buttons/BorderButton";
import { Link, useLocation } from "react-router-dom";
import useAxiosPublic from "@/hooks/useAxiosPublic";

const FullMenu = ({ category }) => {
	const [menu, setMenu] = useState([]);
	const location = useLocation();
	const axiosPublic = useAxiosPublic();

	useEffect(() => {
		axiosPublic
			.get("/menu")
			.then(({ data }) =>
				setMenu(
					data.filter(
						(item) =>
							item.type === "none" && item.category === category
					)
				)
			);
	}, [axiosPublic, category]);

	return (
		<Box
			className='space-y-8'
			component='section'
			mx='auto'
			width={{ xs: "80%", md: "75%" }}>
			<MenuItems items={menu} />

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
