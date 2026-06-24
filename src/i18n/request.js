import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({requestLocale}) => {
    const locale = await requestLocale;

    return {
        locale,
        messages: {
            navbar: (await import(`../messages/${locale}/navbar.json`)).default,
            footer: (await import(`../messages/${locale}/footer.json`)).default,
            home: (await import(`../messages/${locale}/home.json`)).default,
            contact: (await import(`../messages/${locale}/contact.json`)).default
        }
    };
});