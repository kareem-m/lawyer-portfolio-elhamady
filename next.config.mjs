import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin(
  // Path to your i18n config file created in step 1
  './src/i18n/request.js'
);
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your existing next.js config here (if any)
};
 
export default withNextIntl(nextConfig);