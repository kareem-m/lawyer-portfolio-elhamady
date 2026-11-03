import { Analytics } from "@vercel/analytics/next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Cairo, Amiri } from "next/font/google";
import AOSProvider from "@/components/AOSProvider";
import "./globals.scss";

const SITE_URL = "https://www.elhamady.com";
const SEO_KEYWORDS = [
    "Mohamed Elhamady",
    "Elhamady",
    "Mohamed Elhamady lawyer",
    "General Mohamed Elhamady",
    "Egyptian lawyer",
    "law office Egypt",
    "legal consultation Egypt",
    "financial consultation Egypt",
    "محمد الحمادي",
    "الحمادي",
    "محامي",
    "مكتب محاماة",
    "استشارات قانونية",
    "استشارات مالية",
    "محامي قضايا",
];

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
    const isArabic = locale === "ar";

    const title = isArabic
        ? "اللواء محمد الحمادي"
        : "General Mohamed Elhamady";

    const description = isArabic
        ? "مكتب اللواء محمد الحمادي للمحاماة والاستشارات القانونية والمالية."
        : "General Mohamed Elhamady Law Office for Legal and Financial Consultations.";
    const localePath = isArabic ? "/" : "/en";

    return {
        metadataBase: new URL(SITE_URL),

        title,
        description,
        keywords: SEO_KEYWORDS,
        verification: {
            google: "jif_YcAZDRe70I0AV6I5C8iRWttooVCyTTbG0IwiXGc",
        },
        authors: [{ name: "General Mohamed Elhamady Law Office" }],
        creator: "General Mohamed Elhamady Law Office",
        publisher: "General Mohamed Elhamady Law Office",
        alternates: {
            canonical: localePath,
            languages: {
                ar: "/",
                en: "/en",
                "x-default": "/",
            },
        },

        icons: {
            icon: "/logo.png",
        },

        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
            },
        },

        openGraph: {
            title,
            description,
            siteName: title,
            locale: isArabic ? "ar_EG" : "en_US",
            type: "website",
            url: localePath,
            images: [{ url: "/logo.png", alt: title }],
        },

        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: ["/logo.png"],
        },

        other: {
            "content-language": isArabic ? "ar" : "en",
        },
    };
}

export default async function RootLayout({ children, params }) {
    const { locale } = await params;
    const messages = await getMessages();

    return (
        <html
            lang={locale}
            dir={locale === "ar" ? "rtl" : "ltr"}
            className={`${cairo.variable} ${amiri.variable}`}
        >
            <body>
                <NextIntlClientProvider messages={messages}>
                    <AOSProvider>
                        {children}
                    </AOSProvider>
                </NextIntlClientProvider>

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "LegalService",
                            name: "General Mohamed Elhamady Law Office",
                            url: SITE_URL,
                            logo: `${SITE_URL}/logo.png`,
                            description: "Legal and financial consultation office in Egypt.",
                            areaServed: "Egypt",
                            availableLanguage: ["Arabic", "English"],
                        }),
                    }}
                />
                <Analytics />
            </body>
        </html>
    );
}
