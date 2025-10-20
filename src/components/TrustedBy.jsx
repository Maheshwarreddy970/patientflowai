'use client';

import React from 'react';

const TrustedBySection = () => {


  return (

    <section className="bg-white border-b  px-3 lg:px-6">
      <div className="mx-auto max-w-6xl border-x  px-2 py-8 md:py-16">
        <div className="mx-auto mb-12 max-w-xl text-balance text-center md:mb-16">
          <p className="text-muted-foreground mt-4 text-sm md:text-lg">
            We build your website on a foundation of world-class technology.
            This ensures it is always fast, intelligent, and secure for your customers.
          </p>
        </div>
        <div className="mx-auto  max-w-5xl flex flex-wrap items-center justify-center gap-8 ">
          <img
            className="h-3 sm:h-4 w-auto mx-auto brightness-0 object-contain"
            src="/Meta_Platforms_Inc._logo.svg.webp"
            alt="Meta Platforms Logo"
            height="20"
            width="auto"
            loading="lazy"
          />
          <img
            className="h-3 sm:h-4 w-auto mx-auto object-contain"
            src="https://html.tailus.io/blocks/customers/github.svg"
            alt="GitHub Logo"
            height="16"
            width="auto"
            loading="lazy"
          />
          <img
            className="h-5 sm:h-6 w-auto mx-auto object-contain"
            src="https://html.tailus.io/blocks/customers/openai.svg"
            alt="OpenAI Logo"
            height="24"
            width="auto"
            loading="lazy"
          />
          <img
            className="h-5 sm:h-6 w-auto mx-auto brightness-0 object-contain"
            src="/NeonDB-White-1024x290.png"
            alt="NeonDB Logo"
            height="20"
            width="auto"
            loading="lazy"
          />
          <img
            className="h-4 sm:h-5 w-auto mx-auto object-contain"
            src="https://html.tailus.io/blocks/customers/vercel.svg"
            alt="Vercel Logo"
            height="20"
            width="auto"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;