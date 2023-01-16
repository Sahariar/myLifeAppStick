import React from "react";
import HCard from "../../component/Home/HCard";
import HTrip from "../../component/Home/HTrip";
import SgoaldCard from "../../component/Home/SgoaldCard";
import EfgLogo from "/img/brand/efg.svg";
import Postfinance from "/img/brand/postfinance.svg";
import Mirabad from "/img/brand/mirabad.svg";
import UsbLogo from "/img/brand/usbLogo.svg";
import PicetLogo from "/img/brand/Pictet_logo.svg";
const dataHeroCard = [
	{
		id: 1,
		title: "BANKING",
		img: "/img/card/bankingCard.svg",
		bankData: [
			{
				id: 92,
				info: "Add Account",
				desc: "Your multiple bank account",
				icon: "/img/png/credit-card.png",
			},
			{
				id: 42,
				info: "Savings",
				desc: "Explore saving plans",
				icon: "/img/png/savings.png",
			},
			{
				id: 52,
				info: "Add Cards",
				desc: "Personalize your cards",
				icon: "/img/png/credit-card (2).png",
			},
		],
	},
	{
		id: 2,
		title: "Insurance",
		img: "/img/card/InsuracnecCard.svg",
		bankData: [
			{
				id: 52,
				info: "Home",
				desc: "1 year - 25 years",
				icon: "/img/png/house.png",
			},
			{
				id: 32,
				info: "Mobility",
				desc: "3 months - 10 years",
				icon: "/img/png/car.png",
			},
			{
				id: 72,
				info: "Traveling",
				desc: "Day long - 6 months",
				icon: "/img/png/plane.png",
			},
		],
	},
	{
		id: 3,
		title: "Travel",
		img: "/img/card/travel.svg",
		bankData: [
			{
				id: 22,
				info: "New Booking",
				desc: "Book a new schedule",
				icon: "/img/png/booking.png",
			},
			{
				id: 62,
				info: "Plan & Roots",
				desc: "Explore all packages",
				icon: "/img/png/plan.png",
			},
		],
	},
];

const dataSavingCard = [
	{
		id: 1,
		title: "ubs",
		img: "/img/bg/banklogo.png",
		iAmount: "50 - 250",
		dPeriod: "1 - 10 years",
		iRate: "3.5 - 10%",
	},
	{
		id: 2,
		title: "pictet",
		img: "/img/bg/logopictet.png",
		iAmount: "50 - 250",
		dPeriod: "1 - 10 years",
		iRate: "3.5 - 10%",
	},
	{
		id: 3,
		title: "mirabud",
		img: "/img/bg/logomirabud.png",
		iAmount: "50 - 250",
		dPeriod: "1 - 10 years",
		iRate: "3.5 - 10%",
	},
];
const dataTripCard = [
	{
		id: 1,
		title: "Germany",
		img: "/img/png/germany.jpg",
		duration: "15 days",
	},
	{
		id: 2,
		title: "Norway",
		img: "/img/png/norway.jpg",
		duration: "1 months",
	},
	{
		id: 3,
		title: "United States Of America",
		img: "/img/png/usa.jpg",
		duration: "10 days",
	},
];
const Home = () => {
	return (
		<>
			{/* Home Hero Section Start */}
			<section className="home-hero-area py-10 lg:pt-48 -mt-28 relative">
				<div className="icon-orange absolute "></div>
				<div className="container mx-auto">
					<div className="w-9/12 mx-auto">
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
							{dataHeroCard.map((data) => (
								<HCard key={data.id} hdata={data}></HCard>
							))}
						</div>
					</div>
					<div className="icon-green -mt-14"></div>
					<div className="icon-rail -mt-20"></div>
				</div>
			</section>
			{/* Home Hero Section End */}
			{/* Home Saving Deal Section Start */}
			<section className="home-saving-deal relative mb-20">
				<div className="icon-edge -mt-20 absolute "></div>
				<div className="container mx-auto py-10">
					<div className="w-9/12 mx-auto">
						<div className="flex justify-between">
							<div className="title-area">
								<h2 className="text-3xl">Our Saving Deal</h2>
							</div>
							<div className="slide-area flex items-center justify-center align-middle">
								<h3 className="underline text-lg">Show All</h3>
								<div className="flex justify-center align-bottom left-5 right-5 top-1/2">
									<a href="#slide3" className="">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className="w-6 h-6"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M15.75 19.5L8.25 12l7.5-7.5"
											/>
										</svg>
									</a>
									<a href="#slide1" className="">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className="w-6 h-6"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M8.25 4.5l7.5 7.5-7.5 7.5"
											/>
										</svg>
									</a>
								</div>
							</div>
						</div>

						<div className="grid grid-cols-1 lg:grid-cols-3 gap-20 my-10">
							{dataSavingCard.map((data) => (
								<SgoaldCard key={data.id} sData={data}></SgoaldCard>
							))}
						</div>
					</div>
				</div>
			</section>
			{/* Home Saving Deal Section End */}
			{/* Home newsletter-area Section Start */}
			<section className="newsletter-area py-16 bg-primary">
				<div className="w-full ">
					<div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
						<h1 className="text-5xl antialiased font-semibold leading-none text-center dark:text-gray-100">
							Get Our Updates
						</h1>
						<p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-100">
							Subscribe us for new offerings and travel packages.
						</p>
						<div className="flex flex-row">
							<input
								type="text"
								placeholder="example@email.com"
								className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
							/>
							<button
								type="button"
								className="w-2/5 p-3 font-semibold rounded-r-full sm:w-1/3 btn-accent text-white"
							>
								Subscribe
							</button>
						</div>
					</div>
				</div>
			</section>
			{/* Home newsletter-area Section End */}
			{/* Home Travel Section Start */}
			<section className="home-travel relative">
				<div className="icon-travel-one -mt-48 absolute "></div>
				<div className="icon-travel-two absolute "></div>
				<div className="container mx-auto py-20">
					<div className="w-9/12 mx-auto">
						<div className="flex justify-between">
							<div className="title-area">
								<h2 className="text-3xl">Inspiration for your next trip</h2>
							</div>
							<div className="slide-area flex items-center justify-center align-middle">
								<h3 className="underline text-lg">Show All</h3>
								<div className="flex justify-center align-bottom left-5 right-5 top-1/2">
									<a href="#slide3" className="">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className="w-6 h-6"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M15.75 19.5L8.25 12l7.5-7.5"
											/>
										</svg>
									</a>
									<a href="#slide1" className="">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className="w-6 h-6"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M8.25 4.5l7.5 7.5-7.5 7.5"
											/>
										</svg>
									</a>
								</div>
							</div>
						</div>
						<div className="icon-green"></div>
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 my-10">
							{dataTripCard.map((data) => (
								<HTrip key={data.id} TData={data}></HTrip>
							))}
						</div>
					</div>
					<div className="icon-last absolute right-0 bottom-0"></div>
				</div>
			</section>
			{/* Home Travel Section End */}
			{/* Home Travel Section Start */}
			<section className="home-brand-area bg-accent/10 py-20">
				<div className="">
					<div className="container p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8">
						<h2 className="text-4xl font-bold text-primary py-10">
							Our Remunerative <span className="text-accent">Banks</span>
						</h2>
						<div className="w-9/12 mx-auto">
							<div className="flex flex-wrap justify-center lg:justify-between">
								{/* efg Brand  start*/}
								<div className="efg-brand-area">
									<img src={EfgLogo} alt="efgLogo" className="w-24 h-16" />
								</div>
								{/* efg Brand  end*/}
								{/* Mirabad Brand  start*/}
								<div className="brand-area">
									<img src={Mirabad} alt="Mirabad" className="w-48 h-16" />
								</div>
								{/* Mirabad Brand  start*/}
								{/* usb Brand  start*/}
								<div className="brand-area">
									<img src={UsbLogo} alt="UsbLogo" className="w-24 h-16" />
								</div>
								{/* usb Brand  start*/}
								{/* PicetLogo Brand  start*/}
								<div className="brand-area">
									<img src={PicetLogo} alt="PicetLogo" className="w-48 h-16" />
								</div>
								{/* PicetLogo Brand  start*/}
								{/* Postfinance Brand  start*/}
								<div className="brand-area">
									<img
										src={Postfinance}
										alt="Postfinance"
										className="w-48 h-16"
									/>
								</div>
								{/* Postfinance Brand  start*/}
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Home Travel Section End */}
		</>
	);
};

export default Home;
