/** @type {import('next').NextConfig} */
import withPWA from 'next-pwa'; // Use import for ES6 modules

const nextConfig = {};

const pwaConfig = {
    dest: 'public'
  };
  
export default withPWA(pwaConfig)(nextConfig);
