'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useScroll } from 'framer-motion';
import Footer from '../components/ui/footer';
import LoginModal from '../components/ui/modals/LoginModal';
import Navbar from '../components/ui/navbar';
import axios from 'axios';
// import Link from 'next/link';

const StilbonLandingPage = () => {
	const [openLogin, setOpenLogin] = useState<boolean>(false);
	const [email, setEmail] = useState<string>('');
	const [submitted, setSubmitted] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);
	const waitlistRef = useRef<HTMLDivElement>(null);
	const heroRef = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: heroRef,
		offset: ['start start', 'end start'],
	});

	const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
	const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);

		try {
			await axios.post(`/api/stilbon/waitlist`, {
				email,
			});
			setSubmitted(true);
			setEmail('');
			setTimeout(() => {
				setSubmitted(false);
			}, 5000);
		} catch (error) {
			console.error('Failed to join waitlist:', error);
		} finally {
			setLoading(false);
		}
	};

	const scrollToWaitlist = () => {
		waitlistRef.current?.scrollIntoView({ behavior: 'smooth' });
	};

	const features = [
		{
			icon: '🧠',
			title: 'AI-Powered Intelligence',
			description:
				'Advanced DeFi strategist with predictive analytics and automated optimization',
		},
		{
			icon: '📊',
			title: 'Advanced Analytics',
			description:
				'Real-time impermanent loss calculations and portfolio performance tracking',
		},
		{
			icon: '⚡',
			title: 'Lightning Fast',
			description:
				'Built on Starknet for instant transactions and minimal gas fees',
		},
		{
			icon: '🔒',
			title: 'Enterprise Security',
			description:
				'Multi-signature wallets and comprehensive security audits',
		},
	];

	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />

			{/* Hero Section */}
			<motion.section
				ref={heroRef}
				className="relative min-h-screen flex items-center justify-center overflow-hidden"
				style={{ y, opacity }}
			>
				{/* Animated Background */}
				<div className="absolute inset-0 stilbon-animated-bg" />

				{/* Floating Particles */}
				<div className="absolute inset-0">
					{[...Array(20)].map((_, i) => (
						<motion.div
							key={i}
							className="absolute w-2 h-2 bg-primary/30 rounded-full"
							style={{
								left: `${Math.random() * 100}%`,
								top: `${Math.random() * 100}%`,
							}}
							animate={{
								y: [0, -30, 0],
								x: [0, Math.random() * 20 - 10, 0],
								opacity: [0.3, 1, 0.3],
							}}
							transition={{
								duration: 3 + Math.random() * 2,
								repeat: Infinity,
								delay: Math.random() * 2,
							}}
						/>
					))}
				</div>

				<div className="relative z-10 text-center max-w-6xl mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="mb-8"
					>
						<motion.h1
							className="font-display text-5xl md:text-7xl lg:text-8xl font-black mb-6"
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 1, delay: 0.2 }}
						>
							<span className="stilbon-gradient-text">
								STILBON PROTOCOL
							</span>
						</motion.h1>

						<motion.p
							className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4 font-light"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.4 }}
						>
							Illuminating DeFi Intelligence
						</motion.p>

						<motion.p
							className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.6 }}
						>
							Illuminate your DeFi journey with intelligent
							automation, predictive analytics, and seamless user
							experience. Built on Starknet for lightning-fast
							transactions and optimal portfolio management.
						</motion.p>
					</motion.div>

					{/* <div className="absolute md:bottom-[calc(43%-280px)] right-1/2 translate-x-1/2 md:right-[calc(10%-200px)] md:translate-x-0 z-20 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
						<Link href="/calculators" className="custom-button">
							Get Started
						</Link>
						<Link href="/knowmore" className="custom-button">
							Know More
						</Link>
					</div> */}

					<motion.div
						className="flex flex-col sm:flex-row gap-4 justify-center items-center"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.8 }}
					>
						<motion.button
							onClick={scrollToWaitlist}
							className="stilbon-button text-lg px-8 py-4"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							Join the Illumination
						</motion.button>

						<motion.button
							className="stilbon-button-outline text-lg px-8 py-4"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							Explore Features
						</motion.button>
					</motion.div>
				</div>

				{/* Scroll Indicator */}
				<motion.div
					className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
					animate={{ y: [0, 10, 0] }}
					transition={{ duration: 2, repeat: Infinity }}
				>
					<div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
						<motion.div
							className="w-1 h-3 bg-white/60 rounded-full mt-2"
							animate={{ y: [0, 12, 0] }}
							transition={{ duration: 2, repeat: Infinity }}
						/>
					</div>
				</motion.div>
			</motion.section>

			{/* Features Section */}
			<section className="py-24 px-4">
				<div className="max-w-7xl mx-auto">
					<motion.div
						className="text-center mb-16"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
					>
						<h2 className="font-display text-4xl md:text-5xl font-black mb-6">
							<span className="nexus-gradient-text">
								Intelligent DeFi Platform
							</span>
						</h2>
						<p className="text-xl text-gray-400 max-w-3xl mx-auto">
							Experience the future of decentralized finance with
							our cutting-edge technology and AI-powered insights.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{features.map((feature, index) => (
							<motion.div
								key={index}
								className="nexus-card nexus-lift group"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.6,
									delay: index * 0.1,
								}}
							>
								<div className="text-center">
									<div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
										{feature.icon}
									</div>
									<h3 className="text-xl font-semibold mb-3 text-white">
										{feature.title}
									</h3>
									<p className="text-gray-400 leading-relaxed">
										{feature.description}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Waitlist Section */}
			<section
				ref={waitlistRef}
				className="py-24 px-4 relative overflow-hidden"
			>
				<div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10" />

				<div className="max-w-4xl mx-auto relative z-10">
					<motion.div
						className="nexus-glass p-8 md:p-12 text-center"
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
					>
						<h2 className="font-display text-3xl md:text-5xl font-black mb-6">
							<span className="nexus-gradient-text">
								Join the Elite Waitlist
							</span>
						</h2>
						<p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
							Be among the first to access our revolutionary DeFi
							intelligence platform. Early access members get
							exclusive benefits and priority support.
						</p>

						<form
							onSubmit={handleSubmit}
							className="max-w-lg mx-auto"
						>
							<div className="flex flex-col md:flex-row gap-4">
								<input
									type="email"
									value={email}
									onChange={handleEmailChange}
									placeholder="Enter your email address"
									required
									disabled={loading}
									className="nexus-input flex-1"
								/>
								<motion.button
									type="submit"
									disabled={loading || submitted}
									className="nexus-button whitespace-nowrap px-8"
									whileHover={{ scale: loading ? 1 : 1.05 }}
									whileTap={{ scale: loading ? 1 : 0.95 }}
								>
									{loading ? (
										<div className="nexus-spinner" />
									) : submitted ? (
										'Added ✓'
									) : (
										'Join Waitlist'
									)}
								</motion.button>
							</div>

							{submitted && (
								<motion.div
									className="nexus-success mt-4 p-4 rounded-xl text-center"
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
								>
									🎉 Welcome to the future! You've been added
									to our exclusive waitlist.
								</motion.div>
							)}
						</form>

						<p className="text-sm text-gray-500 mt-6">
							We respect your privacy and will never share your
							information. Unsubscribe at any time.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="py-16 px-4">
				<div className="max-w-6xl mx-auto">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
						{[
							{ value: '$50M+', label: 'Total Value Locked' },
							{ value: '10K+', label: 'Active Users' },
							{ value: '99.9%', label: 'Uptime' },
							{ value: '24/7', label: 'AI Monitoring' },
						].map((stat, index) => (
							<motion.div
								key={index}
								className="text-center"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.6,
									delay: index * 0.1,
								}}
							>
								<div className="text-3xl md:text-4xl font-black nexus-gradient-text mb-2">
									{stat.value}
								</div>
								<div className="text-gray-400 text-sm md:text-base">
									{stat.label}
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			<Footer />
			<LoginModal isOpen={openLogin} onClose={setOpenLogin} />
		</div>
	);
};

export default StilbonLandingPage;
