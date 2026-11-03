"use client";

import {useLocale} from "next-intl";
import {usePathname, useRouter} from "@/i18n/navigation";

export default function LanguageSwitcher() {
    const locale = useLocale();
    const pathname = usePathname();
    const router = useRouter();

    function toggleLanguage() {
        const newLocale = locale === "ar" ? "en" : "ar";

        router.replace(pathname, {
            locale: newLocale
        });
    }

    return (
        <button onClick={toggleLanguage}>
            {locale === "ar" ? "English" : "العربية"}
        </button>
    );
}