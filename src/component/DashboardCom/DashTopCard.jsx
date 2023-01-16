import React from "react";

const DashTopCard = () => {
	return (
		<div className="flex space-x-6">
			{/* one */}
			<div className="card w-80 bg-base-100 shadow-xl">
				<div className="card-body">
					<h2 className="text-xl text-accent font-semibold">05</h2>
					<p className="text-gray-400">Total Accounts</p>
				</div>
			</div>
			{/* two */}
			{/* one */}
			<div className="card w-80 bg-base-100 shadow-xl">
				<div className="card-body">
					<h2 className="text-xl text-accent font-semibold">02</h2>
					<p className="text-gray-400">Total Savings Accounts</p>
				</div>
			</div>
			{/* two */}
			{/* one */}
			<div className="card w-80 bg-base-100 shadow-xl">
				<div className="card-body">
					<h2 className="text-xl text-accent font-semibold">03</h2>
					<p className="text-gray-400">Total Cards</p>
				</div>
			</div>
			{/* two */}
			{/* one */}
			<div className="card w-80 bg-base-100 shadow-xl">
				<div className="card-body">
					<h2 className="text-xl text-primary font-semibold">07</h2>
					<p className="text-gray-400">Total Insurances</p>
				</div>
			</div>
			{/* two */}
		</div>
	);
};

export default DashTopCard;
