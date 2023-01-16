import React from "react";

const HTrip = ({ TData }) => {
	const { img, title, duration } = TData;
	return (
		<div className="card card-compact bg-base-100 shadow-xl">
			<figure>
				<img src={img} alt={title} />
			</figure>
			<div className="card-body">
				<h2 className="card-title text-primary">{title}</h2>
				<p>{duration}</p>
			</div>
		</div>
	);
};

export default HTrip;
