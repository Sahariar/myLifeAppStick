import React from "react";
import { createBrowserRouter } from "react-router-dom";
import DashboardRoot from "../Layout/DashboardRoot";
import Root from "../Layout/Root";
import Banking from "../Pages/Banking/Banking";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ErrorElement from "../Pages/ErrorElement/ErrorElement";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

export const route = createBrowserRouter([
	{
		path: "/",
		element: <Root></Root>,
		errorElement: <ErrorElement />,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/home",
				element: <Home></Home>,
			},
			{
				path: "/banking",
				element: <Banking></Banking>,
			},
			{
				path: "/insurance",
				element: <Banking></Banking>,
			},
			{
				path: "/travel",
				element: <Banking></Banking>,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/register",
				element: <Register />,
			},
		],
	},
	{
		path: "/dashboard",
		element: <DashboardRoot></DashboardRoot>,
		errorElement: <ErrorElement />,
		children: [
			{
				path: "/dashboard",
				element: <Dashboard></Dashboard>,
			},
		],
	},
]);
