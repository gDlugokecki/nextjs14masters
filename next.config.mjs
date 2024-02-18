/** @type {import('next').NextConfig} */

import mdx from "@next/mdx";

const nextConfig = {
	experimental: {
		typedRoutes: true,
		mdxRs: true,
	},
	pageExtensions: ["ts", "tsx", "mdx"],
};

export default mdx()(nextConfig);
