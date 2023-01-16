import React from "react";
import { Outlet } from "react-router-dom";
import DashboardHeader from "../component/Shared/Dashbaord/DashboardHeader";

const DashboardRoot = () => {
	return (
		<>
			<DashboardHeader></DashboardHeader>
			<Outlet></Outlet>
		</>
	);
};

export default DashboardRoot;
