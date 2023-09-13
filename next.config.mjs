import {withContentlayer} from 'next-contentlayer'


/** @type {import('next').NextConfig} */
const nextConfig = {

    // pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],

    reactStrictMode: true,
    experimental: {
        appDir: true,

        // mdxRs: true, // ref: https://nextjs.org/docs/app/building-your-application/configuring/mdx
    },

    distDir: process.env.DIST ?? ".next",

    // swcMinify: true, // ref: https://contentlayer.dev/docs/getting-started-cddd76b7
}

export default withContentlayer(nextConfig)
