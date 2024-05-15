/** @type {import('next').NextConfig} */

export default {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/gerenciar/dashboard/',
                permanent: false, // Define se o redirecionamento é permanente ou temporário
            },
        ];
    },
};