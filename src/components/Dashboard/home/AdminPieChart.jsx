import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";

const label = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
	const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
	const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

	return (
		<text
			x={x}
			y={y}
			fill='white'
			textAnchor={x > cx ? "start" : "end"}
			dominantBaseline='central'>
			{`${(percent * 100).toFixed(0)}%`}
		</text>
	);
};

const legendText = (value, entry) => {
	const { color } = entry;

	return (
		<span className='capitalize' style={{ color }}>
			{value}
		</span>
	);
};

const AdminPieChart = ({ colors, sold = [] }) => {
	const pieData = sold.map((data) => {
		return { name: data.category, value: data.revenue };
	});

	return (
		<ResponsiveContainer height='100%' width='100%'>
			<PieChart>
				<Legend
					formatter={legendText}
					iconSize={20}
					iconType='diamond'
					verticalAlign='top'
				/>

				<Pie
					data={pieData}
					cx='50%'
					cy='50%'
					labelLine={false}
					label={label}
					outerRadius={80}
					fill='#8884d8'
					dataKey='value'>
					{pieData.map((entry, i) => (
						<Cell key={i} fill={colors[i % 4]} />
					))}
				</Pie>
			</PieChart>
		</ResponsiveContainer>
	);
};

export default AdminPieChart;
