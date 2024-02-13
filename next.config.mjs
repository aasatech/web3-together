import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            { hostname: 's3-alpha-sig.figma.com', },
        ],
    },
};

export default withNextIntl(nextConfig);
