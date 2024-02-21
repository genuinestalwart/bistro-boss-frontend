import {
	Bar,
	BarChart,
	CartesianGrid,
	Cell,
	ResponsiveContainer,
	XAxis,
	YAxis,
} from "recharts";

const getPath = (x, y, width, height) => {
	return `M${x},${y + height}C${x + width / 3},${y + height} ${
		x + width / 2
	},${y + height / 3} ${x + width / 2}, ${y} C${x + width / 2},${
		y + height / 3
	} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height} Z`;
};

const TriangleBar = (props) => {
	const { fill, x, y, width, height } = props;
	return <path d={getPath(x, y, width, height)} stroke='none' fill={fill} />;
};

const AdminBarChart = ({ colors, sold = [] }) => {
	return (
		<ResponsiveContainer height='100%' width='100%'>
			<BarChart data={sold}>
				<CartesianGrid strokeDasharray='3 3' />
				<XAxis className='capitalize' dataKey='category' />
				<YAxis allowDecimals={false} />

				<Bar
					dataKey='quantity'
					fill='#8884d8'
					shape={<TriangleBar />}
					label={{ position: "top" }}>
					{sold.map((entry, i) => (
						<Cell key={i} fill={colors[i % 4]} />
					))}
				</Bar>
			</BarChart>
		</ResponsiveContainer>
	);
};

export default AdminBarChart;
