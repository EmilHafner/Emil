/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects(){
        return [
            {
                source: '/cv',
                destination: '/cv.pdf',
                permanent: true,
            },
            // Add other redirections here
        ]
    }
}

module.exports = nextConfig
