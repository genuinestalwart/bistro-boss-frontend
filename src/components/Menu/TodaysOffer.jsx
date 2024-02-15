import MenuItems from "@/components/Menu/MenuItems";
import SectionTitles from "@/components/shared/SectionTitles";
import { Box } from "@mui/material";
import BorderButton from "@/components/shared/buttons/BorderButton";
import useMenu from "@/hooks/useMenu";

const TodaysOffer = () => {
	const [data, loading] = useMenu();
	const menu = data.filter((item) => item.type === "today's offer");

	return (
		<Box
			className='space-y-8'
			component='section'
			mx='auto'
			width={{ xs: "80%", md: "75%" }}>
			<SectionTitles bigTitle="Today's Offer" smallTitle="Don't miss" />

			<MenuItems
				items={loading ? [0, 1, 2, 3, 4, 5] : menu}
				loading={loading}
			/>

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

export default TodaysOffer;
