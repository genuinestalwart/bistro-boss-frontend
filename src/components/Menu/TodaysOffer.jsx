import MenuItems from "@/components/Menu/MenuItems";
import SectionTitles from "@/components/shared/SectionTitles";
import { Box, Skeleton } from "@mui/material";
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

			{loading ? (
				<Box
					display='grid'
					gap={6}
					gridTemplateColumns={{
						xs: "repeat(1, 1fr)",
						md: "repeat(2, 1fr)",
					}}>
					{[0, 1, 2, 3, 4, 5].map((skeleton, index) => (
						<Skeleton
							animation='wave'
							height='6rem'
							key={index}
							variant='rounded'
						/>
					))}
				</Box>
			) : (
				<MenuItems items={menu} />
			)}

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
