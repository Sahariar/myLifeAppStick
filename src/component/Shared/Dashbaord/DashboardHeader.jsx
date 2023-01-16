import React from "react";
import { NavLink } from "react-router-dom";
import SiteLogo from "../../SiteLogo/SiteLogo";

const DashboardHeader = () => {
	// const { user, logOut } = useContext(AuthContext);
	const handleLogOut = () => {
		logOut()
			.then(() => {})
			.catch((error) => {
				console.error(error);
			});
	};

	const navItems = (
		<>
			<li className="text-secondary hover:text-accent hover:bg-transparent  font-medium group">
				<NavLink to={"/banking"} className="hover:bg-transparent font-medium">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						fill="none"
						viewBox="0 0 32 32"
						className="stroke-secondary group-hover:stroke-accent"
					>
						<path
							stroke=""
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="1.5"
							d="M27.667 5h-24A2.667 2.667 0 001 7.667v16a2.667 2.667 0 002.667 2.666h24a2.667 2.667 0 002.666-2.666v-16A2.667 2.667 0 0027.667 5zM1 13h29.333"
						></path>
					</svg>
					Banking
				</NavLink>
			</li>
			<li className="text-secondary hover:text-accent font-medium group">
				<NavLink to={"/insurance"} className="hover:bg-transparent font-medium">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						fill="none"
						viewBox="0 0 32 32"
						className="stroke-secondary group-hover:stroke-accent"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="1.5"
							d="M15.653 29.667S26.32 24.333 26.32 16.333V7L15.653 3 4.987 7v9.333c0 8 10.666 13.334 10.666 13.334z"
						></path>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="1.5"
							d="M20.64 11.334l-6.874 6.875-3.125-3.125"
						></path>
					</svg>
					Insurance
				</NavLink>
			</li>
			<li className="text-secondary hover:text-accent  group">
				<NavLink
					to={"/travel"}
					className="hover:bg-transparent font-medium active:text-accent"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						fill="none"
						viewBox="0 0 32 32"
						className="stroke-secondary group-hover:stroke-accent"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="1.5"
							d="M24.157 27.427l-1.416-12.834 3.847-3.892c2.144-2.144 2.859-5.003 2.144-6.433-1.43-.715-4.289 0-6.433 2.144l-4.373 3.86-12.353-1.43c-.715-.142-1.286.144-1.572.715l-.43.715c-.285.715-.142 1.43.43 1.859l8.147 4.387-3.43 4.905H4.43L3 22.853l4.289 2.858L10.148 30l1.43-1.43v-4.288l4.904-3.43 4.387 8.147c.43.572 1.144.715 1.859.43l.715-.287c.571-.429.857-1 .714-1.715z"
						></path>
					</svg>
					Travel
				</NavLink>
			</li>
			<li className="text-secondary hover:text-accent stroke-secondary hover:stroke-accent font-medium group">
				<NavLink to={"/dashboard"} className="hover:bg-transparent font-medium">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						fill="none"
						viewBox="0 0 32 32"
						className="stroke-secondary group-hover:stroke-accent"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="1.5"
							d="M25 27a1 1 0 001-1v-2.667A5.333 5.333 0 0020.667 18h-9.334A5.333 5.333 0 006 23.333V26M16 14a5 5 0 100-10 5 5 0 000 10z"
						></path>
					</svg>
					My Profile
				</NavLink>
			</li>
		</>
	);

	return (
		<header className="header-area shadow-lg border-b-2">
			<div className="top-navbar-area"></div>
			<div className="container mx-auto navbar ">
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
						>
							{navItems}
						</ul>
					</div>
					<NavLink to={"/"}>
						<SiteLogo></SiteLogo>
					</NavLink>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal p-0">{navItems}</ul>
				</div>
				<div className="navbar-end">
					<button className="">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="none"
							viewBox="0 0 24 24"
							className="stroke-secondary hover:stroke-accent"
						>
							<path
								stroke=""
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"
							></path>
						</svg>
					</button>
				</div>
			</div>
		</header>
	);
};

export default DashboardHeader;
