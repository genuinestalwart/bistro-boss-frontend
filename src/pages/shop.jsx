import { Helmet } from "react-helmet-async";
import TabChanger from "@/components/Shop/TabChanger";
import TabContent from "@/components/Shop/TabContent";
import Heading from "@/components/shared/Heading";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ShopPage = () => {
	const [activeTab, setActiveTab] = useState("dessert");
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (!location.search) {
			navigate("/shop?category=dessert", {
				replace: true,
			});
		} else {
			const category = location.search.split("=")[1];
			setActiveTab(category);
		}
	}, []);

	useEffect(() => {
		navigate(`/shop?category=${activeTab}`, {
			replace: true,
		});
	}, [activeTab]);

	return (
		<>
			<Helmet>
				<title>Bistro Boss | Shop</title>
			</Helmet>

			<Heading
				bgImage='bg-[url("./assets/banners/shop.jpg")]'
				title='Our Shop'
			/>

			<Box
				className='space-y-8'
				component='section'
				mx='auto'
				width={{
					xs: "80%",
					md: "75%",
				}}>
				<TabChanger activeTab={activeTab} setActiveTab={setActiveTab} />
				<TabContent activeTab={activeTab} />
			</Box>
		</>
	);
};

export default ShopPage;
