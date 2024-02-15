import { Tabs, Tab } from "@mui/material";

const tabItems = [
	{ value: "dessert", label: "Desserts" },
	{ value: "pizza", label: "Pizzas" },
	{ value: "salad", label: "Salads" },
	{ value: "soup", label: "Soups" },
];

const TabChanger = ({ activeTab, setActiveTab }) => {
	return (
		<Tabs
			aria-label='shop tabs'
			onChange={(e, newValue) => setActiveTab(newValue)}
			sx={{
				"& .MuiTabs-flexContainer": {
					justifyContent: { md: "center" },
				},
				"& .MuiTabs-indicator": { bgcolor: "accent.main" },
			}}
			value={activeTab}
			variant='scrollable'>
			{tabItems.map((tabItem, i) => (
				<Tab
					key={i}
					sx={{
						color: "secondary.main",
						fontWeight: 600,
						"&.Mui-selected": { color: "accent.main" },
					}}
					value={tabItem.value}
					label={tabItem.label}
				/>
			))}
		</Tabs>
	);
};

export default TabChanger;
