import { Cpu, MoveRight, Sparkles } from 'lucide-react'
import { HealthLogo, Nexhealth } from './logo';



const tableData = [
    {
        feature: 'Patient Trust (First 3 Seconds)',
        nexhealth: 'Medium—generic practice management portal feel',
        patientflowai: '✅ High—premium website design creates instant confidence',
    },
    {
        feature: 'Primary Focus',
        nexhealth: 'Backend practice management & scheduling tool',
        patientflowai: '✅ Patient-facing experience & conversion optimization',
    },
    {
        feature: 'Website Design & Branding',
        nexhealth: 'Widget embeds only—relies on your existing website',
        patientflowai: '✅ Complete premium custom website built for you',
    },
    {
        feature: 'Mobile Booking Experience',
        nexhealth: 'Functional scheduling widget—requires navigation',
        patientflowai: '✅ Flawless full-site experience—45 seconds booking',
    },
    {
        feature: 'AI Assistant Quality',
        nexhealth: 'Automated texts/emails—transactional messaging',
        patientflowai: '✅ Conversational AI—warm, intelligent, empathetic responses',
    },
    {
        feature: 'After-Hours Patient Support',
        nexhealth: 'Automated reminders only—no interactive support',
        patientflowai: '✅ 24/7 AI chat—immediate compassionate responses',
    },
    {
        feature: 'Patient Emotional Experience',
        nexhealth: 'Efficient but clinical—practice-centric tools',
        patientflowai: '✅ Relief & confidence—patient-centric design',
    },
    {
        feature: 'Visual Patient Journey',
        nexhealth: 'Embedded widgets on existing site—disconnected',
        patientflowai: '✅ Seamless end-to-end branded experience',
    },
    {
        feature: 'Load Speed (Patient-Facing)',
        nexhealth: '3-5 seconds—widget loads after main site',
        patientflowai: '✅ 0.8 seconds—instant, impressive first impression',
    },
    {
        feature: 'Trust Signals & Security Display',
        nexhealth: 'HIPAA compliant (backend)—not prominently shown to patients',
        patientflowai: '✅ Prominent HIPAA/SSL badges—patients feel protected',
    },
    {
        feature: 'Booking Abandonment Rate',
        nexhealth: 'Higher—multi-step widget process creates friction',
        patientflowai: '✅ 80% lower—one-tap seamless flow',
    },
    {
        feature: 'Patient Conversion Focus',
        nexhealth: 'Not primary goal—built for practice efficiency',
        patientflowai: '✅ Core mission—68% average conversion rate',
    },
    {
        feature: 'Setup Complexity',
        nexhealth: 'Complex—requires IT setup, integrations, training',
        patientflowai: '✅ Turnkey—launched in 72 hours, fully managed',
    },
    {
        feature: 'Price for Small Practices',
        nexhealth: '$500-1500/month (multiple modules required)',
        patientflowai: '✅ $199/month all-inclusive—transparent pricing',
    },
    {
        feature: 'Contract Terms',
        nexhealth: 'Annual contracts—commitment required',
        patientflowai: '✅ Month-to-month—cancel anytime flexibility',
    },
    {
        feature: 'Website Included',
        nexhealth: '❌ No—only widgets for existing site',
        patientflowai: '✅ Yes—premium custom website built for you',
    },
    {
        feature: 'SEO & Patient Discovery',
        nexhealth: 'Not included—relies on your existing site',
        patientflowai: '✅ Built-in SEO optimization for patient acquisition',
    },
    {
        feature: 'Perceived Doctor Quality',
        nexhealth: '"Standard practice management"—neutral impression',
        patientflowai: '✅ "Premium care provider"—strong trust & credibility',
    },
    {
        feature: 'Patient Loyalty & Referrals',
        nexhealth: 'Low emotional connection—transactional tool',
        patientflowai: '✅ High—seamless experience creates advocates',
    },
    {
        feature: 'New Patient Acquisition',
        nexhealth: 'Not designed for—focuses on existing patients',
        patientflowai: '✅ Primary strength—converts 68% of visitors',
    },
    {
        feature: 'Ideal For',
        nexhealth: 'Large multi-location practices needing backend automation',
        patientflowai: '✅ Individual providers & small practices wanting growth',
    },
];



export default function PricingComparator() {
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
                                    <span className="text-title text-sm">Competition</span>

                                </div>
                            </div>
                        </div>
                        <div className="mx-auto max-w-3xl text-center ">
                            <h1 className="text-foreground text-balance text-3xl font-medium sm:text-5xl ">
                                Their Website Frustrates Patients. Yours Should Delight Them.
                            </h1>
                            <p className="text-muted-foreground mx-auto mt-3   max-w-xl text-balance md:text-lg ">
                                Every confusing click erodes trust. Every smooth interaction builds it. See why doctors who invest in seamless patient experiences capture 3x more appointments than those with outdated, frustrating websites.                            </p>

                        </div>
                    </div>
                </div>
            </div>

            <section className=" border-y px-3 ">

                <div className="  relative mx-auto max-w-6xl py-16 border-x   px-6">
                    <h2 className="text-foreground flex  items-center lg:hidden justify-center gap-2 mb-7 text-balance text-2xl font-semibold">Please Scroll Horizontally on Mobile Devices <MoveRight className=' animate-pulse'></MoveRight></h2>
                    <div className="w-full overflow-auto lg:overflow-visible">
                        <table className="w-[200vw] border-separate border-spacing-x-3 md:w-full ">
                            <thead className="bg-background sticky top-0">
                                <tr className="*:py-4 *:text-left *:font-medium">
                                    <th className="lg:w-2/5"></th>
                                    <th className="space-y-3">
                                        <span className="block">DIY/In-House Development	</span>


                                    </th>
                                    <th className="bg-green-500  text-center    text-white rounded-t-3xl space-y-1 px-4">
                                        <div aria-label="home" className="flex justify-center  items-center space-x-2" href="/">
                                            <HealthLogo className="h-11 w-11 p-1 border mb-2 shadow rounded-lg bg-white" />
                                        </div>

                                    </th>
                                    <th className="space-y-3">
                                        <Nexhealth className="h-full w-full flex justify-center  items-center  bg-white" />
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
                                    <td className=" border-none px-4 bg-green-500 text-white "></td>
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
                                        <td className=" border-none px-4 bg-green-500 text-white">
                                            <div className="-mb-3 border-b py-3">
                                                {row.patientflowai === true ? (
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
                                                    row.patientflowai
                                                )}
                                            </div>
                                        </td>
                                        <td>
                                            {row.nexhealth === true ? (
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
                                                row.nexhealth
                                            )}
                                        </td>
                                    </tr>
                                ))}

                                <tr className="*:py-6">
                                    <td></td>
                                    <td></td>
                                    <td className="bg-green-500 text-white rounded-b-3xl border-none px-4"></td>
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
