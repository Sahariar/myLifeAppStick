import React from "react";

const HCard = ({ hdata }) => {
	const { title, img, bankData } = hdata;
	return (
		<div className="card w-70 bg-base-100 shadow-xl">
			<figure>
				<img src={img} alt="Shoes" />
			</figure>
			<div className="card-body">
				<h2 className="text-md mt-8 font-medium tracking-[0.5em] uppercase text-accent ">
					{title}
				</h2>
				<div className="button-area mt-4">
					{bankData.map((btnAction) => (
						<div
							className="button cursor-pointer hover:bg-secondary/10 rounded-lg"
							key={btnAction.id}
						>
							<div className="text-secondary flex w-full justify-start items-center py-4">
								<div className="icon-area w-3/12">
									<figure>
										<img
											src={btnAction.icon}
											alt="Shoes"
											className="fill-secondary"
										/>
									</figure>
								</div>
								<div className="description-area w-9/12">
									<h3 className="text-lg font-medium">{btnAction.info}</h3>
									<p className="text-xs text-gray-400">{btnAction.desc}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default HCard;
