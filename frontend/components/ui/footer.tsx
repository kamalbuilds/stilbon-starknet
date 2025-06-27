import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = (): React.JSX.Element => {
	return (
		<footer className="text-white bg-opacity-50 backdrop-blur-sm">
			<div className="container mx-auto px-6 py-8">
				<div className="flex flex-col md:flex-row justify-between items-center mb-8">
					<div className="mb-6 md:mb-0">
						<h2 className="flex items-center mr-2">
							<Image
								src="/images/StilBonLogo.png"
								width={35}
								height={35}
								alt="StilBon app logo"
							/>
							<p className="font-logo px-3">StilBon</p>
						</h2>
						<p className="text-sm text-gray-400 mt-2">
							Power your finances with DeFi
						</p>
					</div>

					<div className="flex space-x-4">
						<a
							className="p-2 rounded-md bg-black bg-opacity-30 hover:bg-white hover:text-black transition-all duration-500"
							href="https://github.com/kamalbuilds"
							target="_blank"
							aria-label="GitHub"
						>
							<svg
								height="20"
								viewBox="0 0 24 24"
								width="20"
								className="fill-current"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M12,0.296c-6.627,0-12,5.372-12,12c0,5.302,3.438,9.8,8.206,11.387   c0.6,0.111,0.82-0.26,0.82-0.577c0-0.286-0.011-1.231-0.016-2.234c-3.338,0.726-4.043-1.416-4.043-1.416   C4.421,18.069,3.635,17.7,3.635,17.7c-1.089-0.745,0.082-0.729,0.082-0.729c1.205,0.085,1.839,1.237,1.839,1.237   c1.07,1.834,2.807,1.304,3.492,0.997C9.156,18.429,9.467,17.9,9.81,17.6c-2.665-0.303-5.467-1.332-5.467-5.93   c0-1.31,0.469-2.381,1.237-3.221C5.455,8.146,5.044,6.926,5.696,5.273c0,0,1.008-0.322,3.301,1.23   C9.954,6.237,10.98,6.104,12,6.099c1.02,0.005,2.047,0.138,3.006,0.404c2.29-1.553,3.297-1.23,3.297-1.23   c0.653,1.653,0.242,2.873,0.118,3.176c0.769,0.84,1.235,1.911,1.235,3.221c0,4.609-2.807,5.624-5.479,5.921   c0.43,0.372,0.814,1.103,0.814,2.222c0,1.606-0.014,2.898-0.014,3.293c0,0.319,0.216,0.694,0.824,0.576   c4.766-1.589,8.2-6.085,8.2-11.385C24,5.669,18.627,0.296,12,0.296z" />
							</svg>
						</a>
						<a
							className="p-2 rounded-md bg-black bg-opacity-30 hover:bg-white hover:text-black transition-all duration-500"
							href="https://x.com/kamalbuilds"
							target="_blank"
							aria-label="X"
						>
							<svg
								height="20"
								viewBox="0 0 24 24"
								width="20"
								className="fill-current"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="m0,0v24h24V0H0Zm15.063,19.232l-3.87-5.055-4.422,5.055h-2.458l5.733-6.554-6.046-7.91h5.062l3.494,4.621,4.043-4.621h2.455l-5.361,6.126,6.307,8.337h-4.937Z" />
							</svg>
						</a>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
					<div className="space-y-4">
						<h3 className="text-sm font-semibold uppercase tracking-wider">
							Company
						</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="/about"
									className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									href="/knowmore"
									className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
								>
									Know More
								</Link>
							</li>
						</ul>
					</div>

					{/* <div className="space-y-4">
						<h3 className="text-sm font-semibold uppercase tracking-wider">
							Tools
						</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="/calculators"
									className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
								>
									Calculators
								</Link>
							</li>
							<li>
								<Link
									href="/mypositions"
									className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
								>
									Positions
								</Link>
							</li>
							<li>
								<Link
									href="/pools"
									className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
								>
									Pools
								</Link>
							</li>
						</ul>
					</div> */}

					<div className="space-y-4">
						<h3 className="text-sm font-semibold uppercase tracking-wider">
							Support
						</h3>
						<ul className="space-y-2">
							<li>
								<a
									href="https://telegram.me/+zB6wXUOsWptjNzQx"
									target="_blank"
									className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
								>
									Contact Us
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="pt-8 border-t border-gray-800">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<p className="text-xs text-gray-400">
							StilBon App - Copyright ©{' '}
							{new Date().getFullYear()} - All rights reserved
						</p>
						<div className="mt-4 md:mt-0">
							<Link
								href="#"
								className="text-xs text-gray-400 hover:text-white mr-4 transition-colors duration-300"
							>
								Privacy Policy
							</Link>
							<Link
								href="#"
								className="text-xs text-gray-400 hover:text-white transition-colors duration-300"
							>
								Terms of Service
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
