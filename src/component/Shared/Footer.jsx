import React from "react";
import SiteLogo from "../SiteLogo/SiteLogo";
import Gplay from "../../../public/img/png/gplay.jpg";
import face from "../../../public/img/png/face.png";
import insta from "../../../public/img/png/insta.png";
import link from "../../../public/img/png/liken.png";
import youtu from "../../../public/img/png/youtu.png";

const Footer = () => {
	return (
		<footer className="px-4 bg-neutral py-24">
			<div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
				<div className="lg:w-1/3">
					<h3 className="text-4xl text-primary font-semibold">Anything ?</h3>
					<p className="text-xl text-white">We are here to support you! </p>
					<button className="btn mt-5 text-white btn-accent rounded-2xl w-36">
						Contact Us
					</button>
				</div>
				<div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
					<div className="space-y-3 divide-y">
						<h3 className="tracking-wide text-gray-400 ">Banking</h3>
						<ul className="space-y-1 text-white">
							<li>
								<a rel="noopener noreferrer" href="#">
									Add new account
								</a>
							</li>
							<li>
								<a rel="noopener noreferrer" href="#">
									My account
								</a>
							</li>
							<li>
								<a rel="noopener noreferrer" href="#">
									My savings
								</a>
							</li>
							<li>
								<a rel="noopener noreferrer" href="#">
									Add new cards
								</a>
							</li>
							<li>
								<a rel="noopener noreferrer" href="#">
									My cards
								</a>
							</li>
						</ul>
					</div>
					<div className="space-y-3 divide-y">
						<h3 className="tracking-wide text-gray-400">Insurance</h3>
						<ul className="space-y-1 text-white">
							<li>
								<a rel="noopener noreferrer" href="#">
									Home insuraces
								</a>
							</li>
							<li>
								<a rel="noopener noreferrer" href="#">
									Mobility insurances
								</a>
							</li>
							<li>
								<a rel="noopener noreferrer" href="#">
									Travel insurances
								</a>
							</li>
						</ul>
					</div>
					<div className="space-y-3 divide-y">
						<h3 className="tracking-wide text-gray-400">Traveling</h3>
						<ul className="space-y-1 text-white">
							<li>
								<a rel="noopener noreferrer" href="#">
									Add new booking
								</a>
							</li>
							<li>
								<a rel="noopener noreferrer" href="#">
									My booking
								</a>
							</li>
							<li>
								<a rel="noopener noreferrer" href="#">
									Plan & roots
								</a>
							</li>
						</ul>
					</div>
					<div className="space-y-3 divide-y">
						<h3 className="tracking-wide text-gray-400">More</h3>
						<ul className="space-y-1 text-white">
							<li>
								<a rel="noopener noreferrer" href="#">
									About us
								</a>
							</li>
							<li>
								<a rel="noopener noreferrer" href="#">
									Send email
								</a>
							</li>
							<li>
								<a rel="noopener noreferrer" href="#">
									Blog
								</a>
							</li>
							<li>
								<a rel="noopener noreferrer" href="#">
									FAQ
								</a>
							</li>
							<li>
								<a rel="noopener noreferrer" href="#">
									Service policy
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="py-6">
				<div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
					<div className="lg:w-1/3">
						<SiteLogo></SiteLogo>
					</div>
					<div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-6">
						<div className="space-y-3">
							<img src={Gplay} alt="googleplay" />
						</div>
						<div className="space-y-3">
							<div className="flex">
								<img src={face} alt="face" />
								<img src={insta} alt="insta" />
								<img src={link} alt="linkedin" />
								<img src={youtu} alt="youtu" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
