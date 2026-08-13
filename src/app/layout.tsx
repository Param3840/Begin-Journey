import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Begin Journey — Begin Your Journey with Paramveer and Sheetal",
  description:
    "Begin Your Journey with Paramveer and Sheetal. A modern creative studio building websites, automation, and digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Lavishly+Yours&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Sekuya&family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
