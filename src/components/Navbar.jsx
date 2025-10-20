'use client';

import React, { useState } from 'react';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import {  HealthLogo } from './logo';
import { ChevronRight } from 'lucide-react';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 z-50 w-full bg-white/95 border-b backdrop-blur-xl transition-shadow duration-200">
            <div className="mx-auto max-w-6xl px-4 lg:px-12">
                <div className="flex items-center justify-between py-4">
                    <div className="flex items-center justify-between w-full lg:w-[30%] gap-4">
                        <Link aria-label="Home" href="/" className="flex items-center">
                            <HealthLogo className="h-11 w-11  " />
                        </Link>
                        <button
                            variant="ghost"
                            size="icon"
                            aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                            className="lg:hidden"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-6 w-6 transition-transform duration-200" />
                            ) : (
                                <Menu className="h-6 w-6 transition-transform duration-200" />
                            )}
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden w-[60%] justify-between lg:flex items-center gap-4">
                        <NavigationMenuDemo />



                        <div className="flex gap-3">
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



                {/* Mobile Menu */}
                <div
                    className={`lg:hidden fixed overflow-y-scroll inset-x-0 top-[4.7rem] bg-white/95 backdrop-blur-xl border-b transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                        }`}
                >
                    <div className="mx-auto max-w-6xl px-4 py-4">
                        <Accordion type="single" collapsible className="w-full space-y-1">
                            <AccordionItem value="home" className="border-b-0">
                                <Link href="/" className="block py-3 text-lg font-medium hover:underline">
                                    Home
                                </Link>
                            </AccordionItem>
                            <AccordionItem value="features" className="border-b-0">
                                <Link href="#features" className="block py-3 text-lg font-medium hover:underline">
                                    Features
                                </Link>
                            </AccordionItem>
                            <AccordionItem value="pricing" className="border-b-0">
                                <AccordionTrigger className="py-3 text-lg font-medium hover:no-underline">
                                    Pricing
                                </AccordionTrigger>
                                <AccordionContent className="px-4 flex flex-col gap-3 py-2 text-sm">
                                   <HealthLogo className="h-11 w-11  " />
                                    <a href="#competition" className=' flex px-3 border hover:border-[#6C00FF] hover:ring-[#6C00FF] hover:ring-1  rounded-lg bg-white py-2  max-w-lg  gap-1.5  flex-col ' >
                                        <span className=' font-bold'>
                                            Competition
                                        </span>
                                        <span className=' line-clamp-2 text-sm leading-snug text-muted-foreground'>
                                            Compare SuperWorld Technologies with DIY solutions and other SaaS platforms.
                                        </span>
                                    </a>
                                    <a href="#pricing" className=' flex px-3 border hover:border-[#6C00FF] hover:ring-[#6C00FF] hover:ring-1  rounded-lg bg-white py-2  max-w-lg  gap-1.5  flex-col ' >
                                        <span className=' font-bold'>
                                            Pricing
                                        </span>
                                        <span className=' line-clamp-2 text-sm leading-snug text-muted-foreground'>
                                            Simple, transparent plans that scale with your business growth.
                                        </span>
                                    </a>
                                    <a href="#faq" className=' flex px-3 border hover:border-[#6C00FF] hover:ring-[#6C00FF] hover:ring-1  rounded-lg bg-white py-2  max-w-lg  gap-1.5  flex-col ' >
                                        <span className=' font-bold'>
                                            FAQ
                                        </span>
                                        <span className=' line-clamp-2 text-sm leading-snug text-muted-foreground'>
                                            Common questions about setup, billing, features, and support.
                                        </span>
                                    </a>

                                </AccordionContent>
                            </AccordionItem>

                        </Accordion>
                        <div className="my-4 flex  gap-3">
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
            </div>
        </header>
    );
};



function NavigationMenuDemo() {
    return (
        <NavigationMenu>
            <NavigationMenuList className="flex gap-2">
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="/">Home</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="#features">Features</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Pricing</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink className="[&_svg:not([class*='size-'])]:size-full " asChild>
                                    <a
                                        className="flex h-full w-full border relative flex-col justify-end rounded-md bg-white "
                                        href="/"
                                    >
                                        <HealthLogo className="h-full w-full " />
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Beautifully designed websites crafted for your industry with conversion-focused layouts.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="#competition" title="Competition">
                                Compare SuperWorld Technologies with DIY solutions and other SaaS platforms.
                            </ListItem>
                            <ListItem href="#pricing" title="Pricing">
                                Simple, transparent plans that scale with your business growth.
                            </ListItem>
                            <ListItem href="#faq" title="FAQ">
                                Common questions about setup, billing, features, and support.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

function ListItem({ title, children, href }) {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    href={href}
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    {children && (
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {children}
                        </p>
                    )}
                </Link>
            </NavigationMenuLink>
        </li>
    );
}

export default Header;