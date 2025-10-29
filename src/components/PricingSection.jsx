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
                                    <span className="text-title text-sm">Pricing Plans</span>

                                </div>
                            </div>
                        </div>
                        <div className="mx-auto max-w-2xl text-center ">
                            <h1 className="text-foreground text-balance text-3xl font-medium sm:text-5xl ">
                                Premium Patient Experiences at Transparent Pricing
                            </h1>
                            <p className="text-muted-foreground mx-auto mt-3   max-w-xl text-balance md:text-lg ">
                                Both plans deliver the trust-building, seamless experiences that modern patients expect. Choose what fits your practice goals.

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
                                    AI-Powered Plan
                                </h2>
                                <span className="my-3 block text-4xl relative bg-green-500  text-transparent bg-clip-text">
                                    $299/month
                                </span>
                                <p className="text-muted-foreground text-sm">
                                    For doctors ready to deliver exceptional experiences

                                </p>
                            </div>

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

                            <div className="bg-border my-6 h-px w-full" />

                            <ul className="text-muted-foreground space-y-3 text-sm">
                                {[
                                    'Everything in Essential Plan, plus:',
                                    'AI Voice Assistant—answers calls with genuine warmth 24/7',
                                    'AI Chat—proactive, intelligent, emotionally attuned',
                                    'Custom AI training—speaks your specialty fluently',
                                    'The advantage of making every patient feel truly understood',
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <CheckCircleIcon className="h-4 w-4 text-green-600" />
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
                                <h2 className="text-xl font-semibold">Essential Plan</h2>
                                <span className="my-3 block text-4xl relative bg-green-500  text-transparent bg-clip-text">
                                    $199/month
                                </span>
                                <p className="text-muted-foreground text-sm">
                                    Everything needed for trust and effortless booking
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
                                            Smart companies are making the switch to AI-powered websites—see why more businesses choose patientflowai every day.

                                        </CardDescription>
                                    </CardBody>
                                </AnimatedCard>

                            </div>
                        </div>
                        {/* Features */}
                        <div className="relative w-full">

                            <ul className="text-muted-foreground mt-4 space-y-3 text-sm">
                                {[
                                    'Clean, premium design that earns instant confidence',
                                    'HIPAA-compliant hosting with visible trust badges',
                                    'Lightning-fast performance (0.9-second mobile load)',
                                    'Seamless appointment booking (45-second process)',
                                    'Warm, instant confirmations—professional and caring',
                                    'Automated gentle reminders—helpful, never annoying',
                                    'Intuitive admin dashboard—beautifully simple',
                                    'Patient testimonials—authentic trust-building',
                                    'All technical maintenance—completely handled',
                                    '24/7 support—real humans who care',
                                    'Peace of mind knowing your site builds trust automatically',
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <CheckCircleIcon className="h-4 w-4 text-green-600" />
                                        {item}
                                    </li>
                                ))}
                            </ul>


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

