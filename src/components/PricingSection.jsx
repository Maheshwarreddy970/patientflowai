'use client';

import { Button } from '@/components/ui/button';
import { CheckCircleIcon } from 'lucide-react';
import { AnimatedCard, CardBody, CardDescription, CardTitle, CardVisual, Visual1 } from './ui/chat';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';



export default function PricingWithChart() {
    return (
        <>
            <div id='pricing' className='bg-white w-full px-3'>
                <div className="relative   mx-auto max-w-6xl border-x px-4 sm:px-6 md:px-12">

                    <div
                        aria-hidden="true"
                        className="bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -left-[3.5px] -top-[3.5px]"
                    />
                    <div
                        aria-hidden="true"
                        className="bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -top-[3.5px] left-3 translate-x-[1.5px] sm:left-5 md:left-11"
                    />
                    <div
                        aria-hidden="true"
                        className="bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -right-[3.5px] -top-[3.5px]"
                    />
                    <div
                        aria-hidden="true"
                        className="bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -top-[3.5px] right-3 -translate-x-[1.5px] sm:right-5 md:right-11"
                    />
                    <div
                        aria-hidden="true"
                        className="bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -bottom-[3.5px] -left-[3.5px]"
                    />
                    <div
                        aria-hidden="true"
                        className="bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -bottom-[3.5px] left-3 translate-x-[1.5px] sm:left-5 md:left-11"
                    />
                    <div
                        aria-hidden="true"
                        className="bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -bottom-[3.5px] -right-[3.5px]"
                    />
                    <div
                        aria-hidden="true"
                        className="bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -bottom-[3.5px] right-3 -translate-x-[1.5px] sm:right-5 md:right-11"
                    />
                    <div className=" relative border-x flex flex-col gap-6 justify-center  py-10">
                        <div>
                            <div className="relative mx-auto w-fit bg-gray-950/5 p-2">
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
                                    <span className="text-title text-sm">Pricing Plans</span>

                                </div>
                            </div>
                        </div>
                        <div className="mx-auto max-w-2xl text-center ">
                            <h1 className="text-foreground text-balance text-3xl font-medium sm:text-5xl ">
                                Pricing That Powers Your Growth
                            </h1>
                            <p className="text-muted-foreground mx-auto mt-3   max-w-xl text-balance md:text-lg ">
                                Choose a plan designed to fit your ambition—no surprises, no long-term lock-ins.


                            </p>

                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:mx-auto max-w-6xl relative mx-3 ">
                <div
                    aria-hidden="true"
                    className="bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -bottom-[3.5px]  translate-x-[1.5px]   -left-[3.5px]"
                />
                <div
                    aria-hidden="true"
                    className="bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -bottom-[3.5px] -right-[3.5px]"
                />
                <div className="bg-background grid  border-x border-t  md:grid-cols-6">
                    <div className="flex flex-col justify-between border-b px-6 py-8 md:col-span-2 md:border-r md:border-b-0">
                        <div className="space-y-4">
                            <div>
                                <h2 className="backdrop-blur-2 inline rounded-[2px] p-1 text-xl font-semibold">
                                    Monthly Package
                                </h2>
                                <span className="my-3 block text-4xl relative bg-gradient-to-r from-[#0dc6ff]  to-[#9e58ff]  text-transparent bg-clip-text">
                                    $99
                                </span>
                                <p className="text-muted-foreground text-sm">
                                    Ideal for small businesses getting started

                                </p>
                            </div>

                            <a href='/getstarted' className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-9 px-4 py-2 border  bg-gradient-to-t from-[#0dc6ff] to-[#C69CFF] text-white shadow-md shadow-zinc-950/20 ring-1 ring-inset ring-white/20 hover:-translate-y-0.5 hover:scale-105 transition-all ease-in-out duration-300 group hover:brightness-110 active:brightness-90 dark:border-white/20 dark:ring-transparent">
                                <span>Get Started</span><ChevronRight className="ml-0 group-hover:translate-x-1 transition-all ease-in-out duration-300 !size-3.5 opacity-50" />
                            </a >

                            <div className="bg-border my-6 h-px w-full" />

                            <ul className="text-muted-foreground space-y-3 text-sm">
                                {[
                                    'Mobile-First Responsive Design',
                                    'Instant Booking & Reservations',
                                    'Lead Capture & Analytics Dashboard',
                                    'Secure Hosting & Ongoing Maintenance',
                                    '24/7 Customer Support',
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <CheckCircleIcon className="h-4 w-4 text-purple-600" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Pro Plan */}
                    <div className="z-10 grid gap-8 overflow-hidden px-6 py-8 md:col-span-4 lg:grid-cols-2">
                        {/* Pricing + Chart */}
                        <div className="flex flex-col justify-between space-y-6">
                            <div>
                                <h2 className="text-xl font-semibold">AI Monthly Package</h2>
                                <span className="my-3 block text-4xl relative bg-gradient-to-r from-[#0dc6ff]  to-[#9e58ff]  text-transparent bg-clip-text">
                                    $199
                                </span>
                                <p className="text-muted-foreground text-sm">
                                    Perfect for growing businesses ready to scale
                                </p>
                            </div>
                            <div className="bg-muted/30 h-fit w-full rounded-2xl border p-2">
                                <AnimatedCard className={"w-full max-w-full h-full "}>
                                    <CardVisual>
                                        <Visual1 mainColor="#ff6900" secondaryColor="#f54900" />
                                    </CardVisual>
                                    <CardBody>
                                        <CardTitle>Our Community Grew by 234 Businesses This Month
                                        </CardTitle>
                                        <CardDescription className='text-xs'>
                                            Smart companies are making the switch to AI-powered websites—see why more businesses choose SuperWorld Technologies every day.

                                        </CardDescription>
                                    </CardBody>
                                </AnimatedCard>

                            </div>
                        </div>
                        {/* Features */}
                        <div className="relative w-full">

                            <ul className="text-muted-foreground mt-4 space-y-3 text-sm">
                                {[
                                    'AI-Powered Visual Search',
                                    'AI Smart Recommendations',
                                    'Automated Follow-Ups',
                                    'AI-Powered Chatbot',
                                    'Priority Access to New AI Tools',
                                    'Custom AI Workflows & Integrations',
                                    'Mobile-First Responsive Design',
                                    'Instant Booking & Reservations',
                                    'Lead Capture & Analytics Dashboard',
                                    'Secure Hosting & Ongoing Maintenance',
                                    '24/7 Customer Support',

                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <CheckCircleIcon className="h-4 w-4 text-[#0dc6ff]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            {/* Call to Action */}
                            <div className="mt-10  w-full ">
                                <a href='/getstarted' className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-9 px-4 py-2 border  bg-gradient-to-t from-[#0dc6ff] to-[#C69CFF] text-white shadow-md shadow-zinc-950/20 ring-1 ring-inset ring-white/20 hover:-translate-y-0.5 hover:scale-105 transition-all ease-in-out duration-300 group hover:brightness-110 active:brightness-90 dark:border-white/20 dark:ring-transparent">
                                    <span>Get Started</span><ChevronRight className="ml-0 group-hover:translate-x-1 transition-all ease-in-out duration-300 !size-3.5 opacity-50" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

