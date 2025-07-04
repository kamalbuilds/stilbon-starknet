'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
// import LoginModal from './modals/LoginModal';
// import { activeUser } from '@/state/user';
// import { auth } from '@/lib/firebase';
// import { signOut } from 'firebase/auth';
// import { useAtom } from 'jotai';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
// import WalletConnector from './connectWallet';

export default function Navbar({
	scrollToHero,
	scrollToFeatures,
	scrollToWaitlist,
	scrollToStats,
}: {
	scrollToHero?: () => void;
	scrollToFeatures?: () => void;
	scrollToWaitlist?: () => void;
	scrollToStats?: () => void;
}) {
	// const [openLogin, setOpenLogin] = useState<boolean>(false);
	// const [user, setUser] = useAtom(activeUser);
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
	const [visible, setVisible] = useState<boolean>(true);

	const handleScroll = () => {
		const currentScrollPos = window.scrollY;

		const isScrollingDown = currentScrollPos > prevScrollPos;

		setVisible(!isScrollingDown || currentScrollPos < 10);

		setPrevScrollPos(currentScrollPos);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [prevScrollPos]);

	// const handleLogout = async () => {
	// 	await signOut(auth);
	// 	setUser(undefined);
	// 	setIsMenuOpen(false);
	// };

	return (
		<>
			<button
				onClick={() => setIsMenuOpen(!isMenuOpen)}
				className="md:hidden fixed top-6 left-6 z-50 p-2 rounded-sm bg-white/5 hover:bg-white/10 transition-all ring-1 ring-white/20"
			>
				{isMenuOpen ? (
					<X className="w-5 h-5" />
				) : (
					<Menu className="w-5 h-5" />
				)}
			</button>

			{isMenuOpen && (
				<div
					className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
					onClick={() => setIsMenuOpen(false)}
				/>
			)}
			{/* <div
				className={`md:hidden fixed top-0 left-0 h-full w-64 bg-[#212322] backdrop-blur-sm border-r border-white/20 transform transition-transform duration-300 ease-in-out z-40 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
			>
				<div className="flex flex-col h-full p-6">
					<div className="mt-14 mb-8">
						<Link href="/" onClick={() => setIsMenuOpen(false)}>
							<Image
								src="/images/StilBonLogo.png"
								width={45}
								height={45}
								alt="StilBon app logo"
								className="transition duration-500 hover:scale-110 opacity-75 hover:opacity-100"
							/>
						</Link>
					</div>
					<div className="flex flex-col gap-4">
						<Link
							href="/calculators"
							className="text-gray-400 hover:text-white transition-colors duration-300"
							onClick={() => setIsMenuOpen(false)}
						>
							Calculators
						</Link>
						<Link
							href="/mypositions"
							className="text-gray-400 hover:text-white transition-colors duration-300"
							onClick={() => setIsMenuOpen(false)}
						>
							My positions
						</Link>
						<Link
							href="/pools"
							className="text-gray-400 hover:text-white transition-colors duration-300"
							onClick={() => setIsMenuOpen(false)}
						>
							Pools
						</Link>
					</div>
					<div className="mt-auto">
						{user !== undefined ? (
							<div className="flex flex-col gap-4">
								{user.pfp && (
									<Link
										href="/profile"
										className="text-gray-400 hover:text-white transition-colors duration-300"
										onClick={() => setIsMenuOpen(false)}
									>
										<Image
											src={user.pfp}
											alt="User Profile"
											width={40}
											height={40}
											className="rounded-full object-cover ring-1 ring-white/20"
										/>
									</Link>
								)}
								<button
									className="w-full px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 
                                    transition-all duration-300 text-base ring-1 ring-white/20"
									onClick={() => handleLogout()}
								>
									Logout
								</button>
							</div>
						) : (
							<button
								className="w-full px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 
                                transition-all duration-300 text-base ring-1 ring-white/20"
								onClick={() => {
									setIsMenuOpen(false);
									setOpenLogin(true);
								}}
							>
								Login
							</button>
						)}
					</div>
					<div className="flex justify-center mt-4">
						<WalletConnector />
					</div>
				</div>
			</div> */}
			{/* Desktop Navigation */}
			<motion.nav
				initial={{ y: -60, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5 }}
				className={`hidden md:flex fixed top-0 left-0 right-0 z-40 px-6 py-6 items-center justify-center font-bodyRegular backdrop-blur-md bg-black/60 shadow-lg transition-all duration-300 ease-in-out ${
					visible ? 'transform-none' : '-translate-y-full'
				}`}
			>
				<Link
					href="/"
					className="absolute left-6 flex items-center transition duration-500 hover:scale-110 opacity-75 hover:opacity-100 mr-2"
				>
					<Image
						src="/images/StilBonLogo.png"
						width={35}
						height={35}
						alt="StilBon app logo"
					/>
					<p className="font-logo px-3">StilBon</p>
				</Link>
				<div className="flex space-x-8">
					<button onClick={scrollToHero} className="text-gray-200 hover:text-white font-semibold transition-colors duration-200">Home</button>
					<button onClick={scrollToFeatures} className="text-gray-200 hover:text-white font-semibold transition-colors duration-200">Features</button>
					<button onClick={scrollToWaitlist} className="text-gray-200 hover:text-white font-semibold transition-colors duration-200">Waitlist</button>
					<button onClick={scrollToStats} className="text-gray-200 hover:text-white font-semibold transition-colors duration-200">Stats</button>
				</div>
				{/* <div className="absolute right-6 flex items-center space-x-4">
					<WalletConnector />
					{user !== undefined ? (
						<div className="flex items-center space-x-4">
							{user.pfp && (
								<Link href="/profile">
									<Image
										src={user.pfp}
										alt="User Profile"
										width={35}
										height={35}
										className="rounded-full object-cover ring-1 ring-white/20"
									/>
								</Link>
							)}
							<button
								className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 
                                transition-all duration-300 text-base ring-1 ring-white/20"
								onClick={() => handleLogout()}
							>
								Logout
							</button>
						</div>
					) : (
						<button
							className="px-8 py-2 rounded-sm bg-white/5 hover:bg-white/10 
                            transition-all duration-300 text-base ring-1 ring-white/20"
							onClick={() => setOpenLogin(true)}
						>
							Login
						</button>
					)}
				</div> */}
			</motion.nav>

			{/* Login Modal */}
			{/* <LoginModal isOpen={openLogin} onClose={setOpenLogin} /> */}
		</>
	);
}
