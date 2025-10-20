import React from 'react'
import { HeroVideoDialog } from './ui/hero-video-dialog'

export default function Demovideo() {
    return (
        <>
        <div id='demo' className='bg-white w-full px-3'>
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
                                    <span className="text-title text-sm">Demo</span>

                                </div>
                            </div>
                        </div>
                        <div className="mx-auto max-w-2xl text-center ">
                            <h1 className="text-foreground text-balance text-3xl font-medium sm:text-5xl ">
                                Don’t See a Feature You Need? Let’s Build It.
                            </h1>
                            <p className="text-muted-foreground mx-auto mt-3   max-w-xl text-balance md:text-lg ">
Our standard platform solves 99% of industry challenges. For that last 1%, we build custom solutions. Schedule a demo to explore our current features and talk to our team about developing a personalized tool just for you.

                            </p>

                        </div>
                    </div>
                </div>
            </div>
            <div className=" border-y  mx-auto relative  max-w-6xl px-3 border-x py-24 md:py-32">
                <HeroVideoDialog
                    className="block dark:hidden"
                    animationStyle="from-center"
                    videoSrc="https://www.youtube.com/embed/rBV-V0rqVto?si=rWlr3VXLidnMUH7M"
                    thumbnailSrc="/hc.jpg"
                    thumbnailAlt="Hero Video"
                />
                <HeroVideoDialog
                    className="hidden dark:block"
                    animationStyle="from-center"
                    videoSrc="https://www.youtube.com/embed/rBV-V0rqVto?si=rWlr3VXLidnMUH7M"
                    thumbnailSrc="/hc.jpg"
                    thumbnailAlt="Hero Video"
                />
            </div>
        </>
    )
}
