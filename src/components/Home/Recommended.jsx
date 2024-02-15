import { Box } from "@mui/material";
import SectionTitles from "@/components/shared/SectionTitles";
import ShopCards from "@/components/Shop/ShopCards";
import useMenu from "@/hooks/useMenu";

const Recommended = () => {
	const [data, dataLoading] = useMenu();
	const menu = data.filter((item) => item.type === "recommended");

	return (
		<Box
			className='space-y-8'
			component='section'
			mx='auto'
			width={{ xs: "80%", md: "75%" }}>
			<SectionTitles bigTitle='Chef Recommends' smallTitle='Should Try' />

			<ShopCards
				cards={dataLoading ? [0, 1, 2] : menu}
				dataLoading={dataLoading}
			/>
		</Box>
	);
};

export default Recommended;
