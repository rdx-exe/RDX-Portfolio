import type { Metadata } from "next";
import { inter } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: "Ritam Das - Portfolio",
    template: "%s | Ritam Das"
  },
  description: "Portfolio of Ritam Das - Cyber Security Analyst. Specializing in Penetration Testing, Cloud Security, and Security Operations.",
  keywords: ["Cyber Security", "Penetration Testing", "Cloud Security", "Security Operations", "Ritam Das", "InfoSec", "Ethical Hacking"],
  authors: [{ name: "Ritam Das" }],
  creator: "Ritam Das",
  openGraph: {
    title: "Ritam Das",
    description: "Portfolio of Ritam Das - Cyber Security Analyst. Specializing in Penetration Testing, Cloud Security, and Security Operations.",
    url: "/",
    siteName: "Ritam Das",
    images: [
      {
        url: "/hero_bg.png",
        width: 1200,
        height: 630,
        alt: "Ritam Das - Cyber Security Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ritam Das",
    description: "Portfolio of Ritam Das - Cyber Security Analyst",
    images: ["/hero_bg.png"],
    creator: "",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ritam Das",
    jobTitle: "Cyber Security Enthusiast",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    sameAs: [
      "https://github.com/rdx-exe",
      "https://x.com/rdx_exe",
      "https://linkedin.com/in/das-ritam",
    ],
    description: "Cyber Security Enthusiast specializing in Penetration Testing, Cloud Security, and Security Operations.",
    image: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/hero_bg.png`,
    knowsAbout: ["Penetration Testing", "Cloud Security", "Security Operations", "Splunk", "Azure", "AWS"],
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* Microsoft Clarity Analytics */}
        {process.env.NEXT_PUBLIC_CLARITY_ID && (
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
              `,
            }}
          />
        )}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}