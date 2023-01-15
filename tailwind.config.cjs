/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#19A526",

					secondary: "#006838;",

					accent: "#FF8500",

					neutral: "#202531",

					"base-100": "#FFFFFF",

					info: "#60a5fa",

					success: "#29BC9A",

					warning: "#EFA51A",

					error: "#DA3125",
				},
			},
		],
	},
	plugins: [require("daisyui")],
};
