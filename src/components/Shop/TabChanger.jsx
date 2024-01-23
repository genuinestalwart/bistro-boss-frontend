import { Tabs, Tab } from "@mui/material";

const tabItems = [
	{ value: "dessert", label: "Desserts" },
	{ value: "pizza", label: "Pizzas" },
	{ value: "salad", label: "Salads" },
	{ value: "soup", label: "Soups" },
];

const TabChanger = (props) => {
	const { activeTab, setActiveTab } = props;

	return (
		<Tabs
			aria-label='shop tabs'
			onChange={(event, newValue) => {
				setActiveTab(newValue);
			}}
			sx={{
				"& .MuiTabs-flexContainer": {
					justifyContent: { md: "center" },
				},
				"& .MuiTabs-indicator": {
					bgcolor: "accent.main",
				},
			}}
			value={activeTab}
			variant='scrollable'>
			{tabItems.map((tabItem, index) => (
				<Tab
					key={index}
					sx={{
						color: "secondary.main",
						fontWeight: 600,
						"&.Mui-selected": {
							color: "accent.main",
						},
					}}
					value={tabItem.value}
					label={tabItem.label}
				/>
			))}
		</Tabs>
	);
};

export default TabChanger;