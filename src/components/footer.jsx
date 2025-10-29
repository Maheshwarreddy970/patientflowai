"use client";

import Link from "next/link";
import { HealthLogo } from "./logo";
import { Instagram, Twitter, Linkedin, Mail } from "lucide-react"; // ✅ Added Lucide Icons

const footerText = {
  logo: {
    ariaLabel: "PatientFlowAI Home",
  },
  socialLinks: [
    {
      name: "Instagram",
      ariaLabel: "Follow on Instagram",
      href: "https://www.instagram.com/maheshwarr02/",
      icon: Instagram,
    },
    {
      name: "LinkedIn",
      ariaLabel: "Connect on LinkedIn",
      href: "https://linkedin.com/in/mahesh-war-bb057738a",
      icon: Linkedin,
    },
    {
      name: "Email",
      ariaLabel: "Email Us",
      href: "mailto:superworldtechnologies@gmail.com",
      icon: Mail,
    },
    {
      name: "Twitter",
      ariaLabel: "Follow on Twitter",
      href: "https://x.com/MutupuriR8476",
      icon: Twitter,
    },
  ],
  navLinks: [
    "AI Features",
    "For Dentists",
    "For Therapists",
    "For Specialists",
    "Design Gallery",
    "Pricing",
    "Comparison",
    "Live Demo",
    "FAQ",
    "Privacy Policy",
    "Terms",
    "HIPAA Compliance",
    "Contact",
  ],
  footerBottom: {
    copyright: "© 2025 PatientFlowAI",
    status: "All Systems Secure & Operational ✓",
  },
};

const Footer = () => {
  return (
    <footer role="contentinfo" className="py-8 border-t sm:py-16">
      <div className="mx-auto max-w-6xl space-y-6 px-6">
        {/* Logo and Social Links */}
        <div className="flex flex-wrap justify-between gap-6">
          <Link aria-label={footerText.logo.ariaLabel} href="/">
            <HealthLogo className="h-11 w-11 p-1" />
          </Link>

          <div className="flex flex-wrap gap-3 text-sm">
            {footerText.socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel}
                  href={link.href}
                  className="text-gray-600 hover:text-green-600 transition duration-200"
                >
                  <Icon className="size-5" strokeWidth={1.8} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap gap-4 md:gap-6">
          {footerText.navLinks.map((item, index) => (
            <Link
              key={index}
              href="#"
              className="text-gray-900 hover:text-green-600 text-sm transition duration-150"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Divider */}
        <div
          aria-hidden="true"
          className="h-px bg-repeat-x opacity-25"
          style={{
            backgroundImage: "linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "6px 1px",
          }}
        />

        {/* Footer Bottom */}
        <div className="flex flex-wrap justify-between gap-4">
          <span className="text-gray-600 text-sm">
            {footerText.footerBottom.copyright}
          </span>
          <div className="flex items-center gap-2 rounded-full border border-transparent bg-white py-1 pl-2 pr-4 shadow ring-1 ring-gray-200/20">
            <div className="relative flex size-3">
              <span className="absolute inset-0 block size-full animate-pulse rounded-full bg-emerald-100" />
              <span className="relative m-auto block size-1 rounded-full bg-emerald-500" />
            </div>
            <span className="text-sm">{footerText.footerBottom.status}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
