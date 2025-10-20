import React from 'react';
import { WorldMap } from './ui/dotted-map';
import { IconAppWindow } from '@tabler/icons-react';
import { Calendar } from './ui/calendar';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { IconAppWindowFilled } from '@tabler/icons-react';
import { IconWorldWww } from '@tabler/icons-react';
import { IconTemplateFilled } from '@tabler/icons-react';
import { IconAi } from '@tabler/icons-react';

const FeaturesSection = () => {
    return (
        <>
            <div id='features' className='bg-white w-full px-3'>
                <div className="relative  mx-auto max-w-6xl border-x px-4 sm:px-6 md:px-12">
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
                                    <span className="text-title text-sm">Features</span>

                                </div>
                            </div>
                        </div>
                        <div className="mx-auto max-w-3xl text-center ">
                            <h1 className="text-foreground text-balance text-3xl font-medium sm:text-5xl ">
                                Experience Advanced Features Built for Your Growth

                            </h1>
                            <p className="text-muted-foreground mx-auto mt-3   max-w-xl text-balance md:text-lg ">
                                Discover how powerful, AI-driven tools—combined with effortless service—transform your business and make lead generation automatic.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
            <section className="bg-white border-t">
                <div className="@container">
                    <div className="mx-auto w-full max-w-6xl px-3 md:px-6 xl:px-0">
                        <div className="relative">
                            <div
                                aria-hidden="true"
                                className="bg-card ring-foreground/10 pointer-events-none absolute z-10 size-[6px] border border-transparent shadow-sm ring-1 -left-[3.5px] -bottom-[3.5px]"
                            />
                            <div
                                aria-hidden="true"
                                className="bg-card ring-foreground/10 pointer-events-none absolute z-10 size-[6px] border border-transparent shadow-sm ring-1 -right-[3.5px] -bottom-[3.5px]"
                            />

                            <div className="*:nth-3:border-r @max-3xl:*:nth-[1n+1]:nth-[-n+6]:border-b @3xl:*:nth-6:border-r @3xl:*:nth-[1n+3]:nth-[-n+4]:border-r @3xl:*:nth-[1n+1]:nth-[-n+5]:border-b border-foreground/10 divide-foreground/10 grid-cols-4 @3xl:*:first:border-r relative grid  overflow-hidden border border-b-0 *:p-8">

                                {/* Get a Modern Website—Free & Fully Managed */}
                                <div className="col-span-4 grid-cols-2  bg-white gap-8 border-b grid ">
                                    <div className=" col-span-2  text-center mb-4">
                                        <h3 className="text-balance font-semibold text-2xl">Get a Modern Website—Free & Fully Managed</h3>
                                    </div>
                                    <div className="flex flex-col items-center lg:items-start gap-2 col-span-2 lg:col-span-1">
                                        <div aria-hidden="true" className="group">
                                            <div className="flex items-center gap-1.5 px-6 py-2.5 text-sm rounded-xl font-medium">We handle every technical detail for you:</div>
                                            <div className="relative">
                                                <div className="bg-card relative overflow-hidden sm:px-6 py-3">
                                                    <div className="flex items-center gap-3 border-b border-dashed py-3 last:border-b-0">
                                                        <div className="cursor-pointer inline-flex rounded-md items-center bg-gradient-to-r from-[#0dc6ff] to-[#9e58ff] overflow-hidden justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 p-1 shadow-black/15 border border-transparent bg-background ring-1 ring-foreground/10 duration-200 hover:bg-muted/50 dark:ring-foreground/15 dark:hover:bg-muted/50 h-9 w-9 shrink-0">
                                                            <IconTemplateFilled stroke={1} className="h-full w-full fill-white" />
                                                        </div>
                                                        <div className="space-y-0.5">
                                                            <h3 className="text-sm font-medium">Free website build:</h3>
                                                            <p className="text-muted-foreground line-clamp-1 text-sm">Custom, professionally designed for your business</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-3 border-b border-dashed py-3 last:border-b-0">
                                                        <div className="cursor-pointer inline-flex rounded-md items-center bg-gradient-to-r from-[#0dc6ff] to-[#9e58ff] overflow-hidden justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 p-0.5 shadow-black/15 border border-transparent bg-background ring-1 ring-foreground/10 duration-200 hover:bg-muted/50 dark:ring-foreground/15 dark:hover:bg-muted/50 h-9 w-9 shrink-0">
                                                            <IconWorldWww stroke={0.9} className="h-full w-full text-white fill-[#9e58ff]" />
                                                        </div>
                                                        <div className="space-y-0.5">
                                                            <h3 className="text-sm font-medium">Hosting included:</h3>
                                                            <p className="text-muted-foreground line-clamp-1 text-sm">Reliable, secure, and fast</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-3 border-b border-dashed py-3 last:border-b-0">
                                                        <div className="cursor-pointer inline-flex rounded-md items-center bg-gradient-to-r from-[#0dc6ff] to-[#9e58ff] overflow-hidden justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow-black/15 border border-transparent bg-background ring-1 ring-foreground/10 duration-200 hover:bg-muted/50 dark:ring-foreground/15 dark:hover:bg-muted/50 h-9 w-9 shrink-0">
                                                            <IconAi stroke={1.6} className="h-full w-full text-white " />
                                                        </div>
                                                        <div className="space-y-0.5">
                                                            <h3 className="text-sm font-medium">All updates, support, and AI features:</h3>
                                                            <p className="text-muted-foreground line-clamp-1 text-sm">Handled by us—no extra work for your team</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <WorldMap
                                        dots={[
                                            {
                                                start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
                                                end: { lat: 34.0522, lng: -118.2437 }, // Los Angeles
                                            },
                                            {
                                                start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
                                                end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                                            },
                                            {
                                                start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                                                end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
                                            },
                                            {
                                                start: { lat: 51.5074, lng: -0.1278 }, // London
                                                end: { lat: 28.6139, lng: 77.209 }, // New Delhi
                                            },
                                            {
                                                start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                                                end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
                                            },
                                            {
                                                start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                                                end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
                                            },
                                        ]}
                                    />
                                    <div className="col-span-2">
                                        <h3 className="text-balance font-semibold">How it helps:</h3>
                                        <p className="text-muted-foreground text-sm">
                                            Get online (or upgraded) in days, not weeks. Enjoy peace of mind while we keep your site running, update your features, and handle all maintenance and support—so you can focus on what you do best.
                                        </p>
                                    </div>
                                </div>
                                {/* AI-Powered Chat Support */}
                                <ChatSupportSection />

                                {/* Mobile-First Optimization */}
                                <div className="lg:col-span-2 col-span-4 bg-white border-r flex flex-col gap-4 p-8">
                                    <div className="mx-auto max-w-sm text-center">
                                        <h3 className="text-balance font-semibold">Mobile-First Optimization</h3>
                                        <p className="text-muted-foreground mt-1">
                                            Your website is designed from the ground up for smartphones, ensuring lightning-fast load times and flawless navigation on any device.
                                        </p>
                                    </div>
                                    <div className="max-w-84 mt-2 h-40 flex justify-center items-center overflow-hidden mx-auto w-full self-center">
                                        <img src="/original-f92a26c17c3435dc7d23cc0585a1bfcb.gif" className="h-full w-full object-cover" alt="mobile optimization illustration" />
                                    </div>
                                    <div>
                                        <h3 className="text-balance font-semibold">How it helps:</h3>
                                        <p className="text-muted-foreground text-sm mt-1">
                                            Capture the growing wave of mobile shoppers. With 70%+ of customers browsing and buying on phones, you’ll see more inquiries, longer visits, and higher conversion rates from every ad or search result.
                                        </p>
                                    </div>
                                </div>

                                {/* Instant Booking & Reservations */}
                                <div className="lg:col-span-2 col-span-4 bg-white border-r flex flex-col gap-4 p-8">
                                    <div className="mx-auto max-w-sm text-center">
                                        <h3 className="text-balance font-semibold">Instant Booking & Reservations</h3>
                                        <p className="text-muted-foreground mt-1">
                                            Seamless, real-time scheduling built right into your website. Customers can book consultations, appointments, classes, or tables with just a few clicks—no phone calls needed.
                                        </p>
                                    </div>
                                    <div className="max-w-84 mt-2 h-40 flex justify-center items-center overflow-hidden mx-auto w-full self-center">
                                        <img src="/benefit-1-per-dribble.gif" className="h-full w-full object-cover" alt="booking illustration" />
                                    </div>
                                    <div>
                                        <h3 className="text-balance font-semibold">How it helps:</h3>
                                        <p className="text-muted-foreground text-sm mt-1">
                                            Boost leads by up to 3x. Eliminate friction, fill your calendar, and make it easy for customers to convert while their interest is highest.
                                        </p>
                                    </div>
                                </div>


                                {/* Lead & ROI Dashboard */}
                                <div className="col-span-4">
                                    <div className="w-full grid grid-cols-5">
                                        <div className="flex flex-col order-last lg:order-1 gap-5 justify-center col-span-5 lg:col-span-3">
                                            <div>
                                                <h3 className="text-balance font-semibold">Lead & ROI Dashboard</h3>
                                                <p className="text-muted-foreground text-sm mt-1">
                                                    A single dashboard showing every website lead, appointment, and inquiry—with real-time insight into where your business is coming from and how campaigns are performing.
                                                </p>
                                            </div>
                                            <div>
                                                <h3 className="text-balance font-semibold">How it helps:</h3>
                                                <p className="text-muted-foreground text-sm mt-1">
                                                    See exactly which features and marketing channels deliver the best results. Simple graphs and alerts let you focus efforts where returns are highest—helping you grow, smarter.
                                                </p>
                                            </div>
                                            <div>
                                                <h3 className="text-balance font-semibold">Result:</h3>
                                                <p className="text-muted-foreground text-sm mt-1">
                                                    Your business will stand out, capture more leads, and grow faster—with zero tech headaches, and stronger results from every marketing dollar.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mask-b-from-75% order-1 lg:order-last col-span-5 lg:col-span-2 mask-b-to-95% mask-r-from-85% relative h-fit perspective-distant p-6">
                                            <div className="bg-black/5 shadow-md overflow-hidden rounded-t-lg rotate-x-20 skew-x-12 border-t px-2 pt-2 dark:bg-zinc-950">
                                                <Image
                                                    src="/Dashboard Design(1).jpg"
                                                    className="shadow"
                                                    alt="dashboard illustration"
                                                    width={1207}
                                                    height={929}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FeaturesSection;

const ChatSupportSection = () => {
    return (
        <div className="col-span-4 grid-cols-2 border-b grid gap-5">
            <div className=' col-span-2 lg:col-span-1'>
                <h3 className="text-balance font-semibold">24/7 AI Sales Assistant</h3>
                <p className="text-muted-foreground mt-3">
                    An always-on, intelligent chatbot that instantly answers questions, qualifies leads, recommends products/services, and can even help schedule appointments—anytime, day or night.
                </p>
                <div className="mt-4">
                    <h3 className="text-balance font-semibold">How it helps:</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                        Never miss a lead—even after hours. Provide instant, accurate responses and book appointments while you sleep. Free up your team for high-value work and create a better customer experience every single time.
                    </p>
                </div>
            </div>
            <div aria-hidden="true" className="flex flex-col gap-6 col-span-2 lg:col-span-1">
                <div>
                    <div className="flex items-center gap-2">
                        <span className="text-muted-foreground text-xs">Sat 22 Feb</span>
                    </div>
                    <div className="rounded-(--radius) bg-background ring-foreground/5 mt-1.5 w-3/5 rounded-tl p-3 text-xs shadow ring-1">
                        Hey, I'm having trouble with my account.
                    </div>
                </div>
                <div>
                    <div className="rounded-(--radius) bg-gradient-to-r from-[#0dc6ff] to-[#9e58ff] inset-ring-foreground/10 inset-ring-1 mb-1 ml-auto w-3/5 rounded-br p-3 text-xs text-white shadow shadow-black/15">
                        Let's get that sorted out! Can you specify the issue you're facing with your account?
                    </div>
                    <span className="text-muted-foreground block text-right text-xs">Now</span>
                </div>
            </div>
            <div className="@4xl:px-8 col-span-2 self-center">
                <div aria-hidden="true" className="group rounded-2xl">
                    <div className="relative">
                        <div className="absolute inset-0 scale-100 opacity-100 blur-lg transition-all duration-300">
                            <div className="bg-linear-to-r/increasing animate-hue-rotate absolute inset-x-6 bottom-0 top-12 -translate-y-3 from-pink-400 to-purple-400"></div>
                        </div>
                        <div className="bg-card ring-foreground/10 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-4 relative overflow-hidden rounded-2xl border border-transparent px-6 py-3 shadow-md shadow-black/5 ring-1">
                            <div className="grid  items-center gap-3 border-b md:border-b-0 md:border-r border-dashed last:border-b-0">
                                <div className="space-y-0.5">
                                    <h3 className="text-sm font-medium text-center">AI Visual Search</h3>
                                    <p className="text-muted-foreground text-center text-xs">
                                        Let customers upload a photo (of a house, car, product, etc.) and instantly find similar items or services in your inventory.
                                    </p>
                                </div>
                            </div>
                            <div className="grid  items-center gap-3 border-b md:border-b-0 border-dashed md:border-r-0 lg:border-r last:border-b-0">
                                <div className="space-y-0.5">
                                    <h3 className="text-sm font-medium text-center">AI Smart Recommendations</h3>
                                    <p className="text-muted-foreground text-center text-xs">
                                        Show the right product or service to each visitor, increasing upsell opportunities and average order value.
                                    </p>
                                </div>
                            </div>
                            <div className="grid  items-center gap-3 border-b md:border-b-0 md:border-r border-dashed  last:border-b-0">
                                <div className="space-y-0.5">
                                    <h3 className="text-sm font-medium text-center">Automated Follow-Ups</h3>
                                    <p className="text-muted-foreground text-center text-xs">
                                        AI detects when a customer interacts (like a half-filled appointment form) and sends personalized reminders via email, SMS, or WhatsApp.
                                    </p>
                                </div>
                            </div>
                            <div className="grid  items-center gap-3 border-b md:border-b-0 md:border-dashed last:border-b-0">
                                <div className="space-y-0.5">
                                    <h3 className="text-sm font-medium text-center">Real-Time Customer Insights</h3>
                                    <p className="text-muted-foreground text-center text-xs">
                                        AI tracks what your visitors search for most, so you can update your offerings and promotions instantly.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};