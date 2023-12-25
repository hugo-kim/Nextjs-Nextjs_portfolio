/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        // domains: [
        //     'www.notion.so',
        //     'images.unsplash.com',
        //     'prod-files-secure.s3.us-west-2.amazonaws.com',
        //     'images.unsplash.com',

        // ]
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.notion.so',

                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',

                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'prod-files-secure.s3.us-west-2.amazonaws.com',

                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',

                pathname: '**',
            },
        ],
    }
}

module.exports = nextConfig
