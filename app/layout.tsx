import { cookies } from "next/headers";
import LanguageProvider from "@/components/LanguageProvider";
import spanish from "@/lib/es.json";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
const imageUrl = "/assets/og_banner.png"; // Updated to the OG banner image
const faviconUrl = "/icon.png"; // Favicon image

function getLanguage() {
  return cookies().get("pobe-language")?.value === "es" ? "es" : "en";
}

function getMetadata() {
  const isSpanish = getLanguage() === "es";
  return {
    title: isSpanish ? spanish["Pobe Poxo - Central American Game Studio"] : "Pobe Poxo - Central American Game Studio",
    description: isSpanish ? spanish["Central American art and interactive studio"] : "Central American art and interactive studio",
  };
}

export function generateMetadata() {
  return getMetadata();
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const language = getLanguage();
  const metadata = getMetadata();
  return (
    <html lang={language}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Pobe Poxo, game studio, games, indie games, gaming, game development, central america, central american, honduras, costa rica" />
        <meta name="author" content="Pobe Poxo" />

        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href={faviconUrl} />
        <link rel="icon" type="image/png" sizes="16x16" href={faviconUrl} />

        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content="https://pobepoxo.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={imageUrl} />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Pobe Poxo",
              "url": "https://pobepoxo.com/",
              "logo": faviconUrl,
              "sameAs": [
                "https://x.com/pobepoxo",
                "https://instagram.com/pobepoxo"
              ]
            }),
          }}
        />
      </head>
      <body className={inter.className}><LanguageProvider initialLanguage={language}>{children}</LanguageProvider></body>
    </html>
  );
}
