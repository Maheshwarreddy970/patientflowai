import { Link } from 'lucide-react'
import React from 'react'

export default function Desgines({ TemplateDesigns }) {
    return (
        <>
            <div className='bg-white border-t w-full px-3'>
                <div className="relative   mx-auto max-w-6xl border-x px-4 sm:px-6 md:px-12">
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
                                    <span className="text-title text-sm">Design Inspiration</span>

                                </div>
                            </div>
                        </div>
                        <div className="mx-auto max-w-2xl text-center ">
                            <h1 className="text-foreground text-balance text-3xl font-medium sm:text-5xl ">
                                Your Website Makes or Breaks That First Impression

                            </h1>
                            <p className="text-muted-foreground mx-auto mt-3   max-w-4xl text-balance md:text-lg ">
                                Within 3 seconds, visitors decide if they trust your business. Don't let an outdated, confusing website cost you customers—explore our design gallery for inspiration or submit your custom vision. We'll create a website that makes visitors think "This company has their act together" instead of clicking away in frustration.



                            </p>

                        </div>
                    </div>
                </div>
            </div>
            <section className=' relative   md:mx-auto max-w-6xl border-x mx-3 px-3 border-t  py-24 md:py-32 '>
                {
                    TemplateDesigns && TemplateDesigns.length > 0 && (
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {TemplateDesigns.map((design, index) => (
                                <a href={design.href} target="_blank" rel="noopener noreferrer" className="relative group mx-auto w-full  bg-green-100 p-2.5">
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
                                    <div className="relative flex h-full w-full items-center gap-2  bg-white p-1  shadow-md">
                                        <img src={design.img} alt={`Design ${index + 1}`} className="h-60 w-full  object-cover" />
                                        <div className=' absolute top-0 left-0 w-full  items-center text-xl hidden group-hover:flex hover:flex transition-all duration-200 ease-in-out   justify-center font-semibold text-white  h-full bg-black/50 z-20  '>
                                            View Live <Link size={24} strokeWidth={2} className=' ml-2 ' />
                                        </div>
                                    </div>
                                </a>
                            ))}

                        </div>
                    )
                }
            </section>
        </>
    )
}
