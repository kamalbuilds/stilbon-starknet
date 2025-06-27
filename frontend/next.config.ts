/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: false,
	async rewrites() {
		const elizaUrl =
			process.env.NEXT_PUBLIC_STILBON_AI_AGENT_URL ||
			'http://localhost:3001';
		return [
			{
				source: '/eliza/:path*',
				destination: `${elizaUrl}/:path*`,
			},
		];
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	/**
	 * Enable static exports for the App Router.
	 *
	 * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
	 */

	/**
	 * Set base path. This is the slug of your GitHub repository.
	 *
	 * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
	 */
	basePath: '',

	assetPrefix: '',

	/**
	 * Disable server-based image optimization. Next.js does not support
	 * dynamic features with static exports.
	 *
	 * @see https://nextjs.org/docs/app/api-reference/components/image#unoptimized
	 */
	images: {
		unoptimized: true,
	},
};

export default nextConfig;
