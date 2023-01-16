import React from "react";
import {
	BarChart,
	Bar,
	Cell,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";
const data = [
	{
		name: "Home",
		expense: 4000,
	},
	{
		name: "Mobility",
		expense: 3000,
	},
	{
		name: "Travel",
		expense: 2000,
	},
	{
		name: "net",
		expense: 1500,
	},
	{
		name: "Med",
		expense: 2000,
	},
	{
		name: "Food",
		expense: 2000,
	},
];

const DashPilarChart = () => {
	return (
		<div className="chart-pilar h-64 mx-auto">
			<ResponsiveContainer width="100%" height="100%">
				<BarChart
					width={500}
					height={300}
					data={data}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Bar dataKey="expense" fill="#19A526" />
					<Bar dataKey="" fill="#fff" />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default DashPilarChart;
