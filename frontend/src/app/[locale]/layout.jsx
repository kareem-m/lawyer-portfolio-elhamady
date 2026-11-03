import { Analytics } from "@vercel/analytics/next"
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Cairo, Amiri } from "next/font/google";
import AOSProvider from "@/components/AOSProvider";
import "./globals.scss";

const cairo = Cairo({
    subsets: ["arabic"],
    weight: ["200", "400", "700", "1000"],
    variable: "--font-cairo",
});

const amiri = Amiri({
    subsets: ["arabic"],
    weight: ["400", "700"],
    variable: "--font-amiri",
});

export async function generateMetadata({ params }) {
    const { locale } = await params;

    return {
        title:
            locale === "ar"
                ? "اللواء محمد الحمادي"
                : "General Mohamed Elhamady",

        description:
            locale === "ar"
                ? "مكتب اللواء محمد الحمادي للمحاماة والاستشارات القانونية والمالية"
                : "General Mohamed Elhamady Law Office for Legal and Financial Consultations",

        icons: {
            icon: "/logo.png"
        }
    };
}

export default async function RootLayout({ children, params }) {
    const { locale } = await params;


    const messages = await getMessages();

    return (
        <html 
            lang={locale} 
            dir={locale === 'ar' ? 'rtl' : 'ltr'} 
            className={`${cairo.variable} ${amiri.variable}`}
        >
            <body>
                <NextIntlClientProvider messages={messages}>
                    <AOSProvider>
                        {children}
                    </AOSProvider>
                </NextIntlClientProvider>
                
                <Analytics />
            </body>
        </html>
    );
}