import { Box, Skeleton } from "@mui/material";
import SectionTitles from "@/components/shared/SectionTitles";
import ShopCards from "@/components/Shop/ShopCards";
import useMenu from "@/hooks/useMenu";

const Recommended = () => {
	const [data, loading] = useMenu();
	const menu = data.filter((item) => item.type === "recommended");

	return (
		<Box
			className='space-y-8'
			component='section'
			mx='auto'
			width={{ xs: "80%", md: "75%" }}>
			<SectionTitles bigTitle='Chef Recommends' smallTitle='Should Try' />

			{loading ? (
				<Box
					display='grid'
					gap={8}
					gridTemplateColumns={{
						xs: "repeat(1, 1fr)",
						md: "repeat(3, 1fr)",
					}}>
					{[0, 1, 2].map((skeleton, i) => (
						<Skeleton
							animation='wave'
							height='26rem'
							key={i}
							variant='rounded'
						/>
					))}
				</Box>
			) : (
				<ShopCards cards={menu} />
			)}
		</Box>
	);
};

export default Recommended;
