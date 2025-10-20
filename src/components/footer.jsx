import Link from 'next/link';
import { HealthLogo } from './logo';

const Footer = () => {
  return (
    <footer role="contentinfo" className=" py-8 border-t sm:py-16">
      <div className="mx-auto max-w-6xl space-y-6 px-6">
        {/* Logo and Social Links */}
        <div className="flex flex-wrap justify-between gap-6">
          <Link aria-label="Home" href="/" className="">
              <HealthLogo className="h-11 w-11 p-1 " />
          </Link>
          <div className="flex flex-wrap gap-3 text-sm">

            <a
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              href="https://www.linkedin.com/company/super-world-technologies"
              className="text-gray-600 hover:text-blue-600 block"
            >
              <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                />
              </svg>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              href="mailto:superworldtechnologies@gmail.com"
              className="text-gray-600 hover:text-blue-600 block"
            >
              <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5l-8-5V6l8 5l8-5v2z"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap gap-4 md:gap-6">
          {['AI Features', 'Industry Solutions', 'Pricing', 'Competition', 'Demo', 'FAQ', 'Terms', 'Privacy'].map((item) => (
            <Link
              key={item}
              href="#"
              className="text-gray-900 hover:text-blue-600 block text-sm transition duration-150"
            >
              <span>{item}</span>
            </Link>
          ))}
        </div>

        {/* Divider */}
        <div
          aria-hidden="true"
          className="h-px bg-repeat-x opacity-25"
          style={{
            backgroundImage: 'linear-gradient(90deg, #000 1px, transparent 1px)',
            backgroundSize: '6px 1px',
          }}
        />

        {/* Footer Bottom */}
        <div className="flex flex-wrap justify-between gap-4">
          <span className="text-gray-600 text-sm">© 2025 SuperWorld Technologies</span>
          <div className="flex items-center gap-2 rounded-full border border-transparent bg-white py-1 pl-2 pr-4 shadow ring-1 ring-gray-200/20">
            <div className="relative flex size-3">
              <span className="absolute inset-0 block size-full animate-pulse rounded-full bg-emerald-100" />
              <span className="relative m-auto block size-1 rounded-full bg-emerald-500" />
            </div>
            <span className="text-sm">All Systems Normal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
