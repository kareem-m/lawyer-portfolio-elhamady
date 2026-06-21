import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "اللواء محمد الحمادي",
  description: "مكتب اللواء محمد الحمادي للمحاماه والاستشارات القانونيه",
  icons: {
    icon: "/logo.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&family=Cairo:wght@200..1000&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
