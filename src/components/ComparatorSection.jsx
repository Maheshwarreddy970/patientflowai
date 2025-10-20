import { Cpu, MoveRight, Sparkles } from 'lucide-react'
import {  HealthLogo} from './logo';



const tableData = [
    {
        feature: 'Total Investment',
        diy_in_house: '$5,000 - $20,000+ upfront',
        superworld: '$99 - $199/month',
        other_saas: '$299 - $999/month + hidden fees',
    },
    {
        feature: 'Contract Terms',
        diy_in_house: 'No Contract (High Sunk Cost)',
        superworld: 'Month-to-Month Freedom',
        other_saas: '12-36 Month Lock-In',
    },
    {
        feature: 'AI-Powered Features',
        diy_in_house: 'None (Extremely Expensive to Build)',
        superworld: '✅ AI Visual Search, 24/7 Sales Chat, Smart Booking',
        other_saas: '❌ None, or basic chatbot for extra cost',
    },
    {
        feature: 'Mobile Experience',
        diy_in_house: 'Poor / Often Broken',
        superworld: 'Mobile-First, Lightning Fast',
        other_saas: 'Slow, Clunky, Outdated',
    },
    {
        feature: 'Admin Dashboard Experience',
        diy_in_house: 'Technical & Complex',
        superworld: 'Simple, 2-Click Updates',
        other_saas: 'Overwhelming & Confusing',
    },
    {
        feature: 'Customer Experience (UX)',
        diy_in_house: 'Amateur & Confusing',
        superworld: 'Seamless & Conversion-Optimized',
        other_saas: 'Frustrating for Customers',
    },
    {
        feature: 'Time to Go Live',
        diy_in_house: '3-6 Months',
        superworld: '48-72 Hours',
        other_saas: '6-12 Weeks',
    },
    {
        feature: 'Maintenance & Updates',
        diy_in_house: 'Your Full-Time Job',
        superworld: '✅ Completely Managed For You',
        other_saas: 'Your Problem, or Extra Fees',
    },
    {
        feature: 'Customer Support',
        diy_in_house: 'You Are the Support',
        superworld: '✅ Dedicated Personal Manager',
        other_saas: 'Submit a Ticket, Wait for Days',
    },
    {
        feature: 'Business Growth Impact',
        diy_in_house: 'Minimal / Negative ROI',
        superworld: '✅ 3x Average Lead Increase',
        other_saas: '❌ Zero Measurable Value',
    },
];

export default function PricingComparator({ Logotext }) {
    return (
        <>
            <div id='competition' className='bg-white border-t w-full px-3 '>
                <div className="relative  mx-auto max-w-6xl border-x px-4 sm:px-6 md:px-12">

                    <div
                        aria-hidden="true"
                        className="bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -top-[3.5px] left-3 translate-x-[1.5px] sm:left-5 md:left-11"
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
                                    <span className="text-title text-sm">Competition</span>

                                </div>
                            </div>
                        </div>
                        <div className="mx-auto max-w-3xl text-center ">
                            <h1 className="text-foreground text-balance text-3xl font-medium sm:text-5xl ">
                                Are You Overpaying for a Website That Doesn't Work?
                            </h1>
                            <p className="text-muted-foreground mx-auto mt-3   max-w-xl text-balance md:text-lg ">
                                Most businesses are trapped in expensive contracts for outdated, underperforming websites. See the side-by-side comparison that proves there’s a smarter way to grow.

                            </p>

                        </div>
                    </div>
                </div>
            </div>

            <section className=" border-y px-3 ">

                <div className="  relative mx-auto max-w-6xl py-16 border-x  px-6">
                    <h2 className="text-foreground flex  items-center lg:hidden justify-center gap-2 mb-7 text-balance text-2xl font-semibold">Please Scroll Horizontally on Mobile Devices <MoveRight className=' animate-pulse'></MoveRight></h2>
                    <div className="w-full overflow-auto lg:overflow-visible">
                        <table className="w-[200vw] border-separate border-spacing-x-3 md:w-full dark:[--color-muted:var(--color-zinc-900)]">
                            <thead className="bg-background sticky top-0">
                                <tr className="*:py-4 *:text-left *:font-medium">
                                    <th className="lg:w-2/5"></th>
                                    <th className="space-y-3">
                                        <span className="block">DIY/In-House Development	</span>


                                    </th>
                                    <th className="bg-gradient-to-r text-center   from-[#0dc6ff]  to-[#9e58ff] text-white rounded-t-(--radius) space-y-1 px-4">
                                        <div aria-label="home" className="flex justify-center  items-center space-x-2" href="/">
                                                <HealthLogo className="h-11 w-11 p-1 border mb-2 shadow rounded-lg bg-white" />
                                        </div>

                                    </th>
                                    <th className="space-y-3">
                                        <span className="block">SaaS Platforms</span>

                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-caption text-sm">
                                <tr className="*:py-3">
                                    <td className="flex items-center gap-2 font-medium">
                                        <Cpu className="size-4" />
                                        <span>Factor</span>
                                    </td>
                                    <td></td>
                                    <td className="bg-muted border-none px-4 bg-gradient-to-r from-[#0dc6ff]  to-[#9e58ff] text-white "></td>
                                    <td></td>
                                </tr>
                                {tableData.map((row, index) => (
                                    <tr
                                        key={index}
                                        className="*:border-b *:py-3">
                                        <td className="text-muted-foreground">{row.feature}</td>
                                        <td>
                                            {row.diy_in_house === true ? (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="size-4">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            ) : (
                                                row.diy_in_house
                                            )}
                                        </td>
                                        <td className="bg-muted border-none px-4 bg-gradient-to-r from-[#0dc6ff]  to-[#9e58ff] text-white">
                                            <div className="-mb-3 border-b py-3">
                                                {row.superworld === true ? (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                        className="size-4">
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                ) : (
                                                    row.superworld
                                                )}
                                            </div>
                                        </td>
                                        <td>
                                            {row.other_saas === true ? (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="size-4">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            ) : (
                                                row.other_saas
                                            )}
                                        </td>
                                    </tr>
                                ))}

                                <tr className="*:py-6">
                                    <td></td>
                                    <td></td>
                                    <td className="bg-gradient-to-r from-[#0dc6ff]  to-[#9e58ff] text-white rounded-b-(--radius) border-none px-4"></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </section>
        </>
    )
}