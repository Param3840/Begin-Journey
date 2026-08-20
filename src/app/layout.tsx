import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#EDEAE4",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://begin-journey.vercel.app"),
  title: {
    default: "Begin Journey — Web Development & Digital Automation Studio by Paramveer",
    template: "%s | Begin Journey",
  },
  description:
    "Begin Journey is a premier web development and digital automation studio by Paramveer. We build high-converting websites, web platforms, custom digital systems, and WhatsApp automation for growing businesses.",
  keywords: [
    "Begin Journey",
    "Paramveer Singh",
    "Web Development Studio",
    "Custom Website Design",
    "WhatsApp Business Automation",
    "Next.js React Developer",
    "E-commerce Website Development",
    "Digital Automation India",
    "Freelance Web Developer India",
    "Begin Journey Web Studio",
  ],
  authors: [{ name: "Paramveer Singh", url: "https://paramveersingh.vercel.app/" }],
  creator: "Paramveer Singh",
  publisher: "Begin Journey",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://begin-journey.vercel.app",
  },
  openGraph: {
    title: "Begin Journey — Custom Web Development & Digital Automation by Paramveer",
    description:
      "Designing and building custom websites, web platforms, and WhatsApp business automation solutions for growing businesses.",
    url: "https://begin-journey.vercel.app",
    siteName: "Begin Journey",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Begin Journey Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Begin Journey — Web Development & Digital Automation Studio",
    description:
      "Designing and building custom websites, web platforms, and business automation solutions by Paramveer.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Begin Journey",
    url: "https://begin-journey.vercel.app",
    logo: "https://begin-journey.vercel.app/logo.png",
    image: "https://begin-journey.vercel.app/logo.png",
    description:
      "Begin Journey is a premier web development and digital automation studio by Paramveer. We create thoughtful websites, WhatsApp automation, and digital systems.",
    founder: {
      "@type": "Person",
      name: "Paramveer Singh",
      url: "https://paramveersingh.vercel.app/",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "beginjourney2003@gmail.com",
      telephone: "+918287784156",
      contactType: "customer service",
    },
    sameAs: [
      "https://paramveersingh.vercel.app/",
      "https://aquafine-minerals.vercel.app/",
      "https://local-market-place-ten.vercel.app/",
      "https://leet-code-revision.vercel.app/",
    ],
    priceRange: "₹4999 - ₹12999",
    offers: [
      {
        "@type": "Offer",
        name: "Startup Website Package",
        price: "4999",
        priceCurrency: "INR",
      },
      {
        "@type": "Offer",
        name: "Royal Web Package",
        price: "8999",
        priceCurrency: "INR",
      },
      {
        "@type": "Offer",
        name: "E-Commerce Silver Package",
        price: "12999",
        priceCurrency: "INR",
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Lavishly+Yours&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Sekuya&family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
