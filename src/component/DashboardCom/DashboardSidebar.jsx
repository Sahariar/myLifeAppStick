import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const DashboardSidebar = () => {
	const { user } = useContext(AuthContext);
	return (
		<>
			<div className="h-full p-1 space-y-2 bg-white rounded-lg shadow-lg">
				<div className="flex items-center space-x-4 bg-custom px-7 py-10">
					{user?.email ? (
						<div className="flex items-center">
							<div className="avatar">
								<div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-0">
									<img
										src={
											user?.photoURL
												? user?.photoURL
												: "https://placeimg.com/80/80/people"
										}
									/>
								</div>
							</div>
						</div>
					) : (
						<div className="flex">
							<div className="avatar">
								<div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-0">
									<img src="https://placeimg.com/192/192/people" />
								</div>
							</div>
						</div>
					)}

					<div>
						<h2 className="text-md font-semibold text-primary">
							{user?.email ? user?.displayName : "Martha Uilson"}
						</h2>
						<span className="flex items-center space-x-1">
							<a
								rel="noopener noreferrer"
								href="#"
								className="text-xs hover:underline dark:text-gray-400"
							>
								{user?.email ? user?.email : "uilson@email.com"}
							</a>
						</span>
					</div>
				</div>
				<div className="px-7">
					<ul className="py-4 space-y-1 text-sm">
						<li className="text-secondary hover:text-accent stroke-secondary hover:stroke-accent font-medium group">
							<NavLink
								to={"/dashboard"}
								className="flex items-center p-2 space-x-3 rounded-md "
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									fill="none"
									viewBox="0 0 32 32"
									className="w-5 h-5 group-hover:stroke-accent gray-nine"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="1.5"
										d="M28.28 21.187a13.335 13.335 0 01-25.005-1.208 13.333 13.333 0 017.392-16.206"
									></path>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="1.5"
										d="M29.333 16A13.333 13.333 0 0016 2.665v13.333h13.333z"
									></path>
								</svg>
								<span>Dashboard</span>
							</NavLink>
						</li>
						<li className="group hover:text-accent"></li>
					</ul>

					<div className="banking-area py-4">
						<h3 className="text-lg tracking-widest text-gray-400 mb-4">
							BANKING
						</h3>
						<ul className="space-y-2 text-sm">
							<li className="group hover:text-accent">
								<a
									rel="noopener noreferrer"
									href="#"
									className="flex items-center p-2 space-x-3 rounded-md"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="32"
										height="32"
										fill="none"
										viewBox="0 0 32 32"
										className="w-5 h-5 group-hover:stroke-accent gray-nine "
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="1.5"
											d="M27.667 5h-24A2.667 2.667 0 001 7.667v16a2.667 2.667 0 002.667 2.666h24a2.667 2.667 0 002.666-2.666v-16A2.667 2.667 0 0027.667 5zM1 13h29.333"
										></path>
									</svg>

									<span>My Accounts</span>
								</a>
							</li>
							<li className="group hover:text-accent">
								<a
									rel="noopener noreferrer"
									href="#"
									className="flex items-center p-2 space-x-3 rounded-md"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="32"
										height="32"
										fill="none"
										viewBox="0 0 32 32"
										className="w-6 h-6 group-hover:stroke-accent gray-nine"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeMiterlimit="10"
											strokeWidth="1.5"
											d="M18.7 9.6l-.3-.6h-4.8l-.2.7c-.6 1.7-1.8 3.2-3.4 4.3-6.1 4.1-5 12.5 2 15.2 2.6 1 5.5 1 8 0 7-2.7 8.1-11.2 2.1-15.3-1.6-1.1-2.8-2.5-3.4-4.3zM10.4 3.5L13.8 9M11.6 4.6l1.1-1.1c.6-.6 1.6-.6 2.2 0 .6.6 1.6.6 2.2 0 .6-.6 1.6-.6 2.2 0l1.1 1.1"
										></path>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeMiterlimit="10"
											strokeWidth="1.5"
											d="M21.6 9h-3.4l3.4-5.5"
										></path>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="1.5"
											d="M12 23h8M12 20h8"
										></path>
									</svg>

									<span>My Savings</span>
								</a>
							</li>
							<li className="group hover:text-accent">
								<a
									rel="noopener noreferrer"
									href="#"
									className="flex items-center p-2 space-x-3 rounded-md"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="32"
										height="32"
										fill="none"
										viewBox="0 0 32 32"
										className="w-5 h-5 group-hover:stroke-accent gray-nine"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="1.5"
											d="M27.667 5h-24A2.667 2.667 0 001 7.667v16a2.667 2.667 0 002.667 2.666h24a2.667 2.667 0 002.666-2.666v-16A2.667 2.667 0 0027.667 5zM1 13h29.333"
										></path>
									</svg>

									<span>My Cards</span>
								</a>
							</li>
						</ul>
					</div>
					<div className="insurance-area py-4">
						<h3 className="text-lg tracking-widest text-gray-400 mb-4">
							INSURANCE
						</h3>
						<ul className="space-y-2 text-sm">
							<li className="group hover:text-accent">
								<a
									rel="noopener noreferrer"
									href="#"
									className="flex items-center p-2 space-x-3 rounded-md"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="32"
										height="32"
										fill="none"
										viewBox="0 0 32 32"
										className="w-5 h-5 group-hover:stroke-accent gray-nine "
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="1.5"
											d="M4 12l12-9.334 12 9.333v14.667a2.667 2.667 0 01-2.667 2.667H6.667A2.667 2.667 0 014 26.666V11.999z"
										></path>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="1.5"
											d="M12 29.333V16h8v13.333"
										></path>
									</svg>
									<span>My Home</span>
								</a>
							</li>
							<li className="group hover:text-accent">
								<a
									rel="noopener noreferrer"
									href="#"
									className="flex items-center p-2 space-x-3 rounded-md"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="32"
										height="32"
										fill="none"
										viewBox="0 0 32 32"
										className="w-6 h-6 group-hover:stroke-accent gray-nine"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeMiterlimit="10"
											strokeWidth="1.5"
											d="M8 25a3 3 0 100-6 3 3 0 000 6zM23 25a3 3 0 100-6 3 3 0 000 6zM4 14h21M13 8l-3 6"
										></path>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeMiterlimit="10"
											strokeWidth="1.5"
											d="M26 22h4c.6 0 1-.4 1-1v-3c0-2.2-1.8-4-4-4h-2l-4.8-5.6A4.1 4.1 0 0017.1 7H9.5C8 7 7.6 8.9 6.9 10.2L5 14H3c-1.1 0-2 .9-2 2v5c0 .6.4 1 1 1h2M11 22h9"
										></path>
									</svg>
									<span>My Mobility</span>
								</a>
							</li>
							<li className="group hover:text-accent">
								<a
									rel="noopener noreferrer"
									href="#"
									className="flex items-center p-2 space-x-3 rounded-md"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="32"
										height="32"
										fill="none"
										viewBox="0 0 32 32"
										className="w-5 h-5 group-hover:stroke-accent gray-nine"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="1.5"
											d="M24.157 27.427l-1.416-12.834 3.847-3.892c2.144-2.144 2.859-5.003 2.144-6.433-1.43-.715-4.289 0-6.433 2.144l-4.373 3.86-12.353-1.43c-.715-.142-1.286.144-1.572.715l-.43.715c-.285.715-.142 1.43.43 1.859l8.147 4.387-3.43 4.905H4.43L3 22.853l4.289 2.858L10.148 30l1.43-1.43v-4.288l4.904-3.43 4.387 8.147c.43.572 1.144.715 1.859.43l.715-.287c.571-.429.857-1 .714-1.715z"
										></path>
									</svg>
									<span>My Traveling</span>
								</a>
							</li>
						</ul>
					</div>
					<div className="travel-area py-4">
						<h3 className="text-lg tracking-widest text-gray-400 mb-4">
							TRAVEL
						</h3>
						<ul className="space-y-2 text-sm">
							<li className="group hover:text-accent">
								<a
									rel="noopener noreferrer"
									href="#"
									className="flex items-center p-2 space-x-3 rounded-md"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="32"
										height="32"
										fill="none"
										viewBox="0 0 32 32"
										className="w-5 h-5 group-hover:stroke-accent gray-nine "
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="1.5"
											d="M16 9v8M12 13h8M27.667 5h-24A2.667 2.667 0 001 7.667v16a2.667 2.667 0 002.667 2.666h24a2.667 2.667 0 002.666-2.666v-16A2.667 2.667 0 0027.667 5zM1 13h8m21.333 0H23"
										></path>
									</svg>
									<span>My Bookings</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default DashboardSidebar;
