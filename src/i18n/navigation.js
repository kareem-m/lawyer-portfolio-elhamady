import {createNavigation} from 'next-intl/navigation';

export const locales = ['ar', 'en'];

export const {Link, redirect, usePathname, useRouter} =
    createNavigation({locales});