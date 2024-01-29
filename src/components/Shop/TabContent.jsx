import { Box, Pagination, PaginationItem, Skeleton } from "@mui/material";
import MenuCards from "@/components/shared/MenuCards";
import { useEffect, useState } from "react";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const TabContent = ({ activeTab }) => {
	const [loading, setLoading] = useState(true);
	const [menu, setMenu] = useState([]);
	const [page, setPage] = useState(1);

	useEffect(() => {
		setLoading(true);
		fetch("http://localhost:5000/menu")
			.then((res) => res.json())
			.then((data) => {
				setMenu(data.filter((item) => item.category === activeTab));
				setLoading(false);
			});
	}, [activeTab]);

	return (
		<Box
			className='space-y-8'
			component='section'
			mx='auto'
			width={{ xs: "80%", md: "75%" }}>
			{loading ? (
				<Box
					display='grid'
					gap={6}
					gridTemplateColumns={{
						xs: "repeat(1, 1fr)",
						md: "repeat(3, 1fr)",
					}}>
					{[0, 1, 2, 3, 4, 5, 6, 7, 8].map((skeleton, index) => (
						<Skeleton
							animation='wave'
							height='50vh'
							key={index}
							variant='rounded'
						/>
					))}
				</Box>
			) : (
				<MenuCards cards={menu.slice(9 * (page - 1), 9 * page)} />
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
				sx={{
					"& .MuiPagination-ul": {
						justifyContent: "center",
					},
				}}
				variant='outlined'
			/>
		</Box>
	);
};

export default TabContent;
