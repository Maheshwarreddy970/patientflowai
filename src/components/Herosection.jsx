'use client';

import React from 'react';
import Chatbot from './chatbot';
import { ChevronRight } from 'lucide-react';


const HeroSection = () => {
  return (
    <section id="home over-flow-hidden">
      <div className="relative mx-auto max-w-6xl  px-3 pb-10 pt-24 md:pb-20 md:pt-36">
        <div>
          <div className="relative mx-auto w-fit bg-green-100 p-2">
            <div
              aria-hidden="true"
              className="absolute left-1 top-1 size-[3px] rounded-full bg-gray-950/20"
            />
            <div
              aria-hidden="true"
              className="absolute right-1 top-1 size-[3px] rounded-full bg-gray-950/20"
            />
            <div
              aria-hidden="true"
              className="absolute bottom-1 left-1 size-[3px] rounded-full bg-gray-950/20"
            />
            <div
              aria-hidden="true"
              className="absolute bottom-1 right-1 size-[3px] rounded-full bg-gray-950/20"
            />
            <div className="relative flex h-fit items-center gap-2 rounded-full bg-white px-3 py-1 shadow">
              <span className="text-title text-xs lg:text-sm">Introducing AI Engine v3.0</span>

            </div>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-4xl text-center md:mt-10">
          <h1 className="text-foreground text-balance text-3xl font-semibold sm:text-6xl">
            If Your Website Isn't Your #1 Source of Leads, It's Broken. We Build {' '}
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
                    <stop stopColor="#86efac" /> {/* Tailwind's blue-400 */}
                    <stop offset="1" stopColor="#86efac" /> {/* Tailwind's blue-200 */}
                  </linearGradient>
                </defs>
              </svg>
              <span className="relative  text-green-500 ">Unbreakable </span>
            </span>
            {' '} Ones.
          </h1>
          <p className="text-muted-foreground mx-auto mb-8 mt-4 max-w-3xl text-balance text-base md:text-lg">
            Don't let a slow, outdated, or confusing website be the bottleneck in your growth. We engineer mobile-first, AI-driven platforms that are built for one purpose: to convert your visitors into paying customers. Guaranteed.
          </p>
          <div className="flex items-center justify-center gap-4">
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
        </div>
      </div>
      <div className="border-b px-3  border-t">
        <div className="relative mx-auto max-w-6xl border-x  px-0 sm:px-6 md:px-12">
          <div
            aria-hidden="true"
            className="bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -left-[3.5px] -top-[3.5px]"
          />

          <div
            aria-hidden="true"
            className="bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -right-[3.5px] -top-[3.5px]"
          />


          <div
            aria-hidden="true"
            className="bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -bottom-[3.5px] -right-[3.5px]"
          />
          <div
            aria-hidden="true"
            className="bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -bottom-[3.5px] -left-[3.5px]"
          />

          <Chatbot></Chatbot>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;