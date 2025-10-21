
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
  title: "PatientFlowAI - Trusted AI-Powered Websites for Healthcare & More",
  description: "Transform your healthcare business with PatientFlowAI’s trusted AI-powered websites. Deliver seamless patient experiences, industry-specific solutions, and rapid launch times. Build trust and increase patient engagement with secure, custom websites launching in 48-72 hours.",
  openGraph: {
    title: "PatientFlowAI - Trusted AI-Powered Websites for Healthcare & More",
    description: "Transform your healthcare business with PatientFlowAI’s trusted AI-powered websites. Deliver seamless patient experiences, industry-specific solutions, and rapid launch times. Build trust and increase patient engagement with secure, custom websites launching in 48-72 hours.",
    url: "https://www.patientflowai.com",
    siteName: "PatientFlowAI",
    images: [
      {
        url: "https://patientflowai.superworldtechnologies.com/Screenshot2025-10-21185522.png",
        width: 1200,
        height: 630,
        alt: "PatientFlowAI - AI-Powered Healthcare Website Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PatientFlowAI - AI-Powered Healthcare Websites That Build Trust",
    description: "Deliver seamless, AI-powered healthcare websites with PatientFlowAI. Trusted by providers to launch fast, increase patient engagement, and offer secure, industry-specific solutions.",
    images: ["https://patientflowai.superworldtechnologies.com/Screenshot2025-10-21185522.png"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon-16x16.png" type="image/svg+xml" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
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
