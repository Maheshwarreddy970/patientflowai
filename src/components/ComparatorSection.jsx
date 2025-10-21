import { Cpu, MoveRight, Sparkles } from 'lucide-react'
import { HealthLogo } from './logo';



const tableData = [
  {
    feature: 'Patient Trust (First 3 Seconds)',
    diy_in_house: 'Low—outdated design triggers skepticism',
    patientflowai: 'High—premium design creates instant confidence',
    other_saas: 'Medium—generic templates feel impersonal',
  },
  {
    feature: 'Mobile Booking Experience',
    diy_in_house: 'Broken, frustrating—patients give up',
    patientflowai: '✅ Flawless, 45 seconds—effortless flow',
    other_saas: 'Clunky, requires patience—creates friction',
  },
  {
    feature: 'Patient Emotional Experience',
    diy_in_house: 'Anxiety from confusion and poor UX',
    patientflowai: '✅ Relief from intuitive, caring design',
    other_saas: 'Neutral—functional but uninspiring',
  },
  {
    feature: 'Trust Badges & Security',
    diy_in_house: 'Missing or hidden—patients feel unsafe',
    patientflowai: '✅ Prominent HIPAA/SSL seals—feel protected',
    other_saas: 'Basic SSL only—minimal reassurance',
  },
  {
    feature: 'AI Response Quality',
    diy_in_house: 'None—voicemail feels abandoning',
    patientflowai: '✅ Warm, intelligent—feels genuinely caring',
    other_saas: 'Robotic chatbot—feels impersonal and frustrating',
  },
  {
    feature: 'After-Hours Availability',
    diy_in_house: 'Dead silence—patients feel ignored',
    patientflowai: '✅ Immediate compassionate response—valued 24/7',
    other_saas: 'Generic auto-reply—impersonal',
  },
  {
    feature: 'Visual Cleanliness',
    diy_in_house: 'Cluttered, overwhelming—hard to navigate',
    patientflowai: '✅ Clean, organized—effortless to use',
    other_saas: 'Busy templates—generic and forgettable',
  },
  {
    feature: 'Booking Confidence Level',
    diy_in_house: 'Low—friction creates abandonment',
    patientflowai: '✅ High—seamless process builds certainty',
    other_saas: 'Medium—functional but uninspiring',
  },
  {
    feature: 'Perceived Doctor Quality',
    diy_in_house: '"Website is bad, care must be too"—lost trust',
    patientflowai: '"This excellence means excellent care"—strong trust',
    other_saas: '"Probably average practice"—neutral',
  },
  {
    feature: 'Patient Loyalty & Referrals',
    diy_in_house: 'Low—no emotional connection',
    patientflowai: '✅ High—seamless experience creates advocates',
    other_saas: 'Low—interchangeable with others',
  },
  {
    feature: 'Load Speed',
    diy_in_house: '8+ seconds—patients leave immediately',
    patientflowai: '✅ 0.8 seconds—instant, impressive',
    other_saas: '3-5 seconds—acceptable, not premium',
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