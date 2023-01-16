import React from "react";
import {
	ComposedChart,
	Line,
	Area,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	Scatter,
	ResponsiveContainer,
	LineChart,
} from "recharts";
const data = [
	{
		name: "January",
		revenue: 101520,
		expense: 90098,
	},
	{
		name: "February",
		revenue: 121520,
		expense: 100098,
	},
	{
		name: "March",
		revenue: 131520,
		expense: 110000,
	},
	{
		name: "April",
		revenue: 131520,
		expense: 112098,
	},
	{
		name: "May",
		revenue: 141520,
		expense: 121098,
	},
	{
		name: "June",
		revenue: 151520,
		expense: 111098,
	},
	{
		name: "July",
		revenue: 161520,
		expense: 111098,
	},
	{
		name: "August",
		revenue: 171520,
		expense: 111098,
	},
	{
		name: "September",
		revenue: 181520,
		expense: 111098,
	},
	{
		name: "October",
		revenue: 190937,
		expense: 121098,
	},
	{
		name: "November",
		revenue: 200937,
		expense: 131098,
	},
	{
		name: "December",

		revenue: 229397,
		expense: 151098,
	},
];
const DashChart = () => {
	return (
		<div className="chart-ar h-96 mx-auto">
			<ResponsiveContainer width="100%" height="100%">
				<LineChart
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
					<Line type="monotone" dataKey="revenue" stroke="#19A526" />
					<Line type="monotone" dataKey="expense" stroke="#FF8500" />
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default DashChart;
