import {withContentlayer} from 'next-contentlayer'


/** @type {import('next').NextConfig} */
const nextConfig = {

  // pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],

  reactStrictMode: true,
  experimental: {
    esmExternals: false,

    // mdxRs: true, // ref: https://nextjs.org/docs/app/building-your-application/configuring/mdx
  },



  distDir: process.env.DIST ?? ".next",

  // ref: https://nextjs.org/docs/api-reference/next/image#remote-patterns
  images: {
    remotePatterns: [// ref:https://stackoverflow.com/a/73951135/9422455
      {protocol: "http", hostname: "**"},
      {protocol: "https", hostname: "**"}
    ]
  },


  // swcMinify: true, // ref: https://contentlayer.dev/docs/getting-started-cddd76b7

  webpack: (config) => {
    config.module.rules.push({
      test: /\.node/,
      use: 'raw-loader',
    });

    return config;
  },
}

export default withContentlayer(nextConfig)
