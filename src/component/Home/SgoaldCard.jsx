import React from "react";

const SgoaldCard = ({ sData }) => {
	const { img, iAmount, dPeriod, iRate } = sData;

	return (
		<div className="card w-96 bg-base-100 shadow-xl items-start icon-group">
			<figure className="px-3 pt-10">
				<img src={img} alt="Shoes" className="rounded-xl " />
			</figure>
			<div className="card-body text-center">
				<div className="info-area">
					<div className="flex py-1">
						<h4 className="text-md text-slate-400">Instalment amount:</h4>
						<div className="text-md text-neutral flex align-middle items-center justify-between px-4">
							{iAmount}{" "}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="27"
								fill="none"
								viewBox="0 0 20 27"
								className="w-4 h-4"
							>
								<path
									fill="#646464"
									d="M0 25.946V27h10.653v-1.054c-2.597 0-3.246-1.995-3.246-2.993v-7.14h10.265v-1.429H7.407v-2.108h10.265v-1.428H7.407V1.904h7.443c3.048 0 3.974 2.834 4.057 4.25H20V0H.035v1.088c2.512 0 3.187 1.678 3.21 2.517v7.243H.282v1.428h2.963v2.108H.282v1.428h2.963v7.141c0 2.394-2.163 2.993-3.245 2.993z"
								></path>
							</svg>
						</div>
					</div>
					<div className="flex py-1">
						<h4 className="text-md text-slate-400">Duration period:</h4>
						<div className="text-md text-neutral flex align-middle items-center justify-between px-4">
							{dPeriod}{" "}
						</div>
					</div>
					<div className="flex py-1">
						<h4 className="text-md text-slate-400">Interest rate:</h4>
						<div className="text-md text-neutral flex align-middle items-center justify-between px-4">
							{iRate}{" "}
						</div>
					</div>
				</div>
				<div className="card-actions mt-5">
					<button className="btn btn-outline btn-primary rounded-2xl w-36">
						Explore
					</button>
					<div className="icon-small-dot"></div>
				</div>
			</div>
		</div>
	);
};

export default SgoaldCard;
