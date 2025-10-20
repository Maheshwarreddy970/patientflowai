import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const CTA = () => {
  return (
    <section className=" px-3 ">
      <div className="mx-auto relative  max-w-6xl py-24 md:py-32   px-6">

        <div className="grid grid-cols-6 gap-4 sm:grid-cols-8">
          {/* Text and CTA */}
          <div className="col-span-6 max-md:pb-6 sm:col-span-5 md:col-span-4 md:pt-6">
            <h1 className="text-foreground text-balance text-5xl font-semibold sm:text-6xl">
              Modern Solutions for Your
              {' '}
              <span className="relative ">
                <svg
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 -bottom-3 w-full"
                  viewBox="0 0 283 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.24715 19.3744C72.4051 10.3594 228.122 -4.71194 281.724 7.12332"
                    stroke="url(#paint0_linear_pl)"
                    strokeWidth="4"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_pl"
                      x1="282"
                      y1="5.49999"
                      x2="40"
                      y2="13"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#0dc6ff" /> {/* Tailwind's blue-400 */}
                      <stop offset="1" stopColor="#C69CFF" /> {/* Tailwind's blue-200 */}
                    </linearGradient>
                  </defs>
                </svg>
                <span className="relative bg-green-500 inline-block text-transparent bg-clip-text">Customers</span>
              </span>
            </h1>
            <p className="text-gray-600 mb-6 mt-4 text-balance text-lg">
              Join Us Today to Streamline Operations and Drive Success with Cutting-Edge Technology.
            </p>
            <a
              href='/getstarted'
              className="
              bg-green-500  
              inline-flex items-center   justify-center gap-2 whitespace-nowrap text-sm font-medium
              transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
              disabled:pointer-events-none disabled:opacity-50
              [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0
              text-primary-foreground shadow-md  border  hover:bg-green-500/90
              h-10 px-6 rounded-full group relative overflow-hidden
            "
            >
              <span className="mr-6 transition-opacity duration-300 group-hover:opacity-0">
                Get Started
              </span>

              <span
                className="
                absolute right-1 top-1 border shadow-inner shadow-white/30  border-green-500/50   bottom-1 rounded-full z-10 flex items-center justify-center
                w-[22%] transition-all duration-300 bg-black
                group-hover:w-[calc(100%-0.5rem)] group-active:scale-95
              "
                aria-hidden="true"
              >
                <ChevronRight className=' ml-0.5 ' />
              </span>
            </a>
          </div>

          {/* Image 1 */}
          <div className="col-span-3 flex items-end sm:col-span-2 sm:col-start-6">
            <div className="relative overflow-hidden rounded-xl shadow-xl before:absolute before:inset-0 before:rounded-xl before:border before:border-gray-200/20 before:bg-blue-600/10 aspect-4/5">
              <Image
                src="https://res.cloudinary.com/dohqjvu9k/image/upload/v1757920113/work3_n5uspm.webp"
                alt="superworldtechnologies hero section work 3"
                width={927}
                height={1648}
                className="size-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Image 2 */}
          <div className="col-span-3 max-md:flex max-md:items-end sm:col-start-3">
            <div className="relative mt-auto aspect-square h-fit overflow-hidden rounded-xl shadow-xl before:absolute before:inset-0 before:rounded-xl before:border before:border-gray-200/20 before:bg-blue-600/10">
              <Image
                src="https://res.cloudinary.com/dohqjvu9k/image/upload/v1757920114/work2_eoxbvk.webp"
                alt="superworldtechnologies hero section work 2"
                width={3047}
                height={1868}
                className="size-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Image 3 */}
          <div className="relative col-span-4 aspect-video overflow-hidden rounded-xl shadow-xl before:absolute before:inset-0 before:rounded-xl before:border before:border-gray-200/20 before:bg-blue-600/10 max-md:col-start-3 md:col-span-3">
            <Image
              src="https://res.cloudinary.com/dohqjvu9k/image/upload/v1757920113/work1_e1gkt8.webp"
              alt="superworldtechnologies hero section work 1"
              width={2340}
              height={1560}
              className="size-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
