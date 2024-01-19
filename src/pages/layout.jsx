import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";
import { Box } from "@mui/material";
import Footer from "../components/shared/Footer";

const RootLayout = () => {
	return (
		<>
			<Header />

			<Box className='space-y-16' component='main'>
				<Outlet />
				<Footer />
			</Box>
		</>
	);
};

export default RootLayout;
