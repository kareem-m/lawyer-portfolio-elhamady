import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: ['ar', 'en'],
    defaultLocale: 'ar',
    localePrefix: 'as-needed'
});

export const config = {
    matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)']
};