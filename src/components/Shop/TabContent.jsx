import { Box, Pagination, PaginationItem, Skeleton } from "@mui/material";
import ShopCards from "@/components/Shop/ShopCards";
import { useEffect, useState } from "react";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import useMenu from "@/hooks/useMenu";

const TabContent = ({ activeTab }) => {
	const [menu, setMenu] = useState([]);
	const [page, setPage] = useState(1);
	const [data, loading] = useMenu();

	useEffect(() => {
		setMenu(data.filter((item) => item.category === activeTab));
	}, [activeTab, data]);

	return (
		<Box className='space-y-8' component='section'>
			{loading ? (
				<Box
					display='grid'
					gap={8}
					gridTemplateColumns={{
						xs: "repeat(1, 1fr)",
						md: "repeat(3, 1fr)",
					}}>
					{[0, 1, 2, 3, 4, 5, 6, 7, 8].map((skeleton, i) => (
						<Skeleton
							animation='wave'
							height='26rem'
							key={i}
							variant='rounded'
						/>
					))}
				</Box>
			) : (
				<ShopCards cards={menu.slice(9 * (page - 1), 9 * page)} />
			)}

			<Pagination
				color='accent'
				count={Math.ceil(menu.length / 9)}
				onChange={(event, page) => setPage(page)}
				renderItem={(item) => (
					<PaginationItem
						slots={{ previous: ArrowBack, next: ArrowForward }}
						{...item}
					/>
				)}
				shape='rounded'
				sx={{ "& .MuiPagination-ul": { justifyContent: "center" } }}
				variant='outlined'
			/>
		</Box>
	);
};

export default TabContent;
