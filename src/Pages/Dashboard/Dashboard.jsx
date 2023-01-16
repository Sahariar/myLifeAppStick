import React from "react";
import DashboardSidebar from "../../component/DashboardCom/DashboardSidebar";
import DashChart from "../../component/DashboardCom/DashChart";
import DashPilarChart from "../../component/DashboardCom/DashPilarChart";
import DashTopCard from "../../component/DashboardCom/DashTopCard";
import cardimg from "/img/png/carddou.png";

const Dashboard = () => {
	return (
		<>
			<section className="dashboard my-12">
				<div className="container mx-auto">
					<div className="flex flex-col lg:flex-row">
						{/* sidebar of Dashboard */}
						<div className=" lg:w-2/12">
							<DashboardSidebar></DashboardSidebar>
						</div>
						{/* Content of Dashboard */}
						<div className="lg:w-9/12 ml-2">
							{/* TopCard of Dashboard */}
							<div className="top-card-area">
								<DashTopCard></DashTopCard>
							</div>
							{/* charts */}
							<div className="flex flex-col lg:flex-row mt-10">
								<div className="lg:w-9/12">
									<div className="card rounded-lg shadow-lg py-10">
										<DashChart></DashChart>
									</div>
									<div className="flex justify-between mt-10 rounded-lg shadow-lg p-5">
										<div className=" w-7/12 ">
											<DashPilarChart></DashPilarChart>
										</div>

										<div className="w-5/12 space-y-5">
											{/* chart cards one */}
											<div className="card bg-custom shadow-sm ml-4">
												<div className="card-body">
													<h2 className="text-xl text-primary font-semibold flex justify-start items-center">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="20"
															height="27"
															fill="none"
															viewBox="0 0 20 27"
															className="w-4 h-4 stroke-primary fill-primary"
														>
															<path d="M0 25.946V27h10.653v-1.054c-2.597 0-3.246-1.995-3.246-2.993v-7.14h10.265v-1.429H7.407v-2.108h10.265v-1.428H7.407V1.904h7.443c3.048 0 3.974 2.834 4.057 4.25H20V0H.035v1.088c2.512 0 3.187 1.678 3.21 2.517v7.243H.282v1.428h2.963v2.108H.282v1.428h2.963v7.141c0 2.394-2.163 2.993-3.245 2.993z"></path>
														</svg>{" "}
														<span className="px-2">23,45,000</span>
													</h2>
													<p className="text-gray-400">Total Insurances cost</p>
												</div>
											</div>
											{/*chart cards two */}

											<div className="card bg-ac-custom shadow-sm ml-4">
												<div className="card-body">
													<h2 className="text-xl text-accent font-semibold flex justify-start items-center">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="20"
															height="27"
															fill="none"
															viewBox="0 0 20 27"
															className="w-4 h-4 stroke-accent fill-accent"
														>
															<path d="M0 25.946V27h10.653v-1.054c-2.597 0-3.246-1.995-3.246-2.993v-7.14h10.265v-1.429H7.407v-2.108h10.265v-1.428H7.407V1.904h7.443c3.048 0 3.974 2.834 4.057 4.25H20V0H.035v1.088c2.512 0 3.187 1.678 3.21 2.517v7.243H.282v1.428h2.963v2.108H.282v1.428h2.963v7.141c0 2.394-2.163 2.993-3.245 2.993z"></path>
														</svg>{" "}
														<span className="px-2">75,000</span>
													</h2>
													<p className="text-gray-400">
														Upcoming Insurances cost
													</p>
												</div>
											</div>
											{/*chart cards end */}
										</div>
									</div>
								</div>
								{/* right side credit cards */}
								<div className="lg:w-3/12">
									<div className="rounded-lg shadow-lg p-4 pb-2 ml-6 h-full">
										<div className="card">
											<div className="card-body">
												<h2 className="text-lg">My Cards</h2>
											</div>
										</div>
										{/* Jhon */}
										<div className="card dash-card-one shadow-sm my-5">
											<div className="card-body  dash-card-one-opa py-2 rounded-lg">
												<div className="flex justify-between">
													<div className="name-area">
														<h2 className="text-sm dash-card-one-text font-semibold flex justify-start items-center">
															<span className="text-sm">Jhon</span>
														</h2>
														<p className="text-xs text-gray-400">
															AC: 90876545123
														</p>
													</div>
													<img
														src={cardimg}
														alt="cardimg"
														className="w-6 h-4"
													/>
												</div>
											</div>
											<div className="card-body">
												<div className="details-area">
													<h2 className="text-xl dash-card-one-text font-semibold flex justify-start items-center">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="20"
															height="27"
															fill="none"
															viewBox="0 0 20 27"
															className="w-4 h-4 dash-card-one-stroke fill-accent"
														>
															<path d="M0 25.946V27h10.653v-1.054c-2.597 0-3.246-1.995-3.246-2.993v-7.14h10.265v-1.429H7.407v-2.108h10.265v-1.428H7.407V1.904h7.443c3.048 0 3.974 2.834 4.057 4.25H20V0H.035v1.088c2.512 0 3.187 1.678 3.21 2.517v7.243H.282v1.428h2.963v2.108H.282v1.428h2.963v7.141c0 2.394-2.163 2.993-3.245 2.993z"></path>
														</svg>{" "}
														<span className="px-2">75,000</span>
													</h2>
													<p className="dash-card-one-text">Total Balance</p>
												</div>
											</div>
										</div>
										{/* Martha */}

										<div className="card dash-card-two shadow-sm my-5">
											<div className="card-body dash-card-two-opa rounded-lg py-2">
												<div className="flex justify-between">
													<div className="name-area">
														<h2 className="text-sm dash-card-two-text  font-semibold flex justify-start items-center">
															<span className="text-sm">Martha</span>
														</h2>
														<p className="text-xs text-gray-400">
															AC: 90876545123
														</p>
													</div>
													<img
														src={cardimg}
														alt="cardimg"
														className="w-6 h-4"
													/>
												</div>
											</div>
											<div className="card-body">
												<div className="details-area">
													<h2 className="text-xl dash-card-two-text font-semibold flex justify-start items-center">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="20"
															height="27"
															fill="none"
															viewBox="0 0 20 27"
															className="w-4 h-4 dash-card-two-stroke"
														>
															<path d="M0 25.946V27h10.653v-1.054c-2.597 0-3.246-1.995-3.246-2.993v-7.14h10.265v-1.429H7.407v-2.108h10.265v-1.428H7.407V1.904h7.443c3.048 0 3.974 2.834 4.057 4.25H20V0H.035v1.088c2.512 0 3.187 1.678 3.21 2.517v7.243H.282v1.428h2.963v2.108H.282v1.428h2.963v7.141c0 2.394-2.163 2.993-3.245 2.993z"></path>
														</svg>{" "}
														<span className="px-2">56,45,000</span>
													</h2>
													<p className="dash-card-two-text">Total Balance</p>
												</div>
											</div>
										</div>

										{/* Leo */}

										<div className="card dash-card-three shadow-sm my-5">
											<div className="card-body  dash-card-three-opa py-2">
												<div className="flex justify-between">
													<div className="name-area">
														<h2 className="text-sm dash-card-three-text font-semibold flex justify-start items-center">
															<span className="text-sm">Leo</span>
														</h2>
														<p className="text-xs text-gray-400">
															AC: 90876545123
														</p>
													</div>
													<img
														src={cardimg}
														alt="cardimg"
														className="w-6 h-4"
													/>
												</div>
											</div>
											<div className="card-body">
												<div className="details-area">
													<h2 className="text-xl dash-card-three-text font-semibold flex justify-start items-center">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="20"
															height="27"
															fill="none"
															viewBox="0 0 20 27"
															className="w-4 h-4 dash-card-three-stroke fill-accent"
														>
															<path d="M0 25.946V27h10.653v-1.054c-2.597 0-3.246-1.995-3.246-2.993v-7.14h10.265v-1.429H7.407v-2.108h10.265v-1.428H7.407V1.904h7.443c3.048 0 3.974 2.834 4.057 4.25H20V0H.035v1.088c2.512 0 3.187 1.678 3.21 2.517v7.243H.282v1.428h2.963v2.108H.282v1.428h2.963v7.141c0 2.394-2.163 2.993-3.245 2.993z"></path>
														</svg>{" "}
														<span className="px-2">13,45,000</span>
													</h2>
													<p className="dash-card-three-text">Total Balance</p>
												</div>
											</div>
										</div>
										{/* three */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Dashboard;
