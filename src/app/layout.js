
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Footer from "@/components/footer";
import Header from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SuperWorld Technologies - AI-Powered Websites for Every Industry",
  description: "Transform your business with AI-powered websites. Industry-specific solutions for car dealerships, restaurants, real estate, healthcare, home services & waste management. Launch in 48-72 hours.",
  openGraph: {
    title: "SuperWorld Technologies - AI-Powered Websites for Every Industry",
    description: "Transform your business with AI-powered websites. Industry-specific solutions for car dealerships, restaurants, real estate, healthcare, home services & waste management. Launch in 48-72 hours.",
    url: "www.superworldtechnologies.com",
    siteName: "SuperWorld Technologies",
    images: [{
      url: "https://www.superworldtechnologies.com/thumbnail.png",
      width: 1200,
      height: 630,
      alt: "SuperWorld Technologies - AI-Powered Business Solutions",
    }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SuperWorld Technologies - AI-Powered Websites for Every Industry",
    description: "Transform your business with AI-powered websites. Industry-specific solutions for car dealerships, restaurants, real estate, healthcare, home services & waste management. Launch in 48-72 hours.",
    images: ["https://www.superworldtechnologies.com/thumbnail.png"],
  },
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon0.svg" type="image/svg+xml" />
        <link rel="icon" href="/icon1.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-icon.png" sizes="180x180" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
              <Header ></Header>

        {children}
              <Footer ></Footer>

        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
