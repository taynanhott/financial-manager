/** @type {import('next').NextConfig} */

export default {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/gerenciar/dashboard',
                permanent: false,
            },
        ];
    },
};