import "./globals.css";

export const metadata = {
  title: "Blog Admin",
  description: "Manage legal blog articles",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
