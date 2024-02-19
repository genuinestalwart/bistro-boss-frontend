import { MenuItem } from "@mui/material";
const category = ["dessert", "pizza", "salad", "soup"];
const itemType = ["recommended", "today's offer", "popular", "none"];

export const fields = (item) => [
	{
		defaultValue: item.name,
		gridColumn: { md: "span 3 / span 3" },
		id: "name",
		label: "Name",
	},
	{
		children: category.map((option, i) => (
			<MenuItem key={i} value={option}>
				{option}
			</MenuItem>
		)),
		defaultValue: item.category || "dessert",
		id: "category",
		label: "Category",
		select: true,
	},
	{
		children: itemType.map((option, i) => (
			<MenuItem key={i} value={option}>
				{option}
			</MenuItem>
		)),
		defaultValue: item.type || "none",
		id: "type",
		label: "Type",
		select: true,
	},
	{
		defaultValue: item.price,
		id: "price",
		inputProps: { step: "0.01" },
		label: "Price",
		type: "number",
		validation: {
			min: 1,
			validate: (num) => (isNaN(parseFloat(num)) ? false : true),
		},
	},
	{
		defaultValue: item.sourceUrl,
		gridColumn: { md: "span 3 / span 3" },
		id: "sourceUrl",
		label: "Source URL",
	},
	{
		defaultValue: item.recipe,
		gridColumn: { md: "span 3 / span 3" },
		id: "recipe",
		label: "Recipe",
		minRows: 8,
		multiline: true,
	},
];
