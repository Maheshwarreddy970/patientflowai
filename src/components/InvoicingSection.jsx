'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { ChevronRight, Loader2 } from 'lucide-react';
import { submitContactForm } from '@/actions/contactForm';
import { useFormState, useFormStatus } from 'react-dom';

const countries = [
    {
        continent: "America",
        items: [
            { value: "United States", flag: "🇺🇸" },
            { value: "Canada", flag: "🇨🇦" },
            { value: "Mexico", flag: "🇲🇽" },
        ],
    },
    {
        continent: "Africa",
        items: [
            { value: "South Africa", flag: "🇿🇦" },
            { value: "Nigeria", flag: "🇳🇬" },
            { value: "Morocco", flag: "🇲🇦" },
        ],
    },
    {
        continent: "Asia",
        items: [
            { value: "China", flag: "🇨🇳" },
            { value: "Japan", flag: "🇯🇵" },
            { value: "India", flag: "🇮🇳" },
        ],
    },
    {
        continent: "Europe",
        items: [
            { value: "United Kingdom", flag: "🇬🇧" },
            { value: "France", flag: "🇫🇷" },
            { value: "Germany", flag: "🇩🇪" },
        ],
    },
    {
        continent: "Oceania",
        items: [
            { value: "Australia", flag: "🇦🇺" },
            { value: "New Zealand", flag: "🇳🇿" },
        ],
    },
];

// Submit Button Component with Loading State
function SubmitButton() {
    const { pending } = useFormStatus();
    
    return (
        <Button 
            type="submit" 
            disabled={pending}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 px-4 py-2 border bg-gradient-to-t from-[#0dc6ff] to-[#C69CFF] text-white shadow-md shadow-zinc-950/20 ring-1 ring-inset ring-white/20 hover:-translate-y-0.5 hover:scale-105 transition-all ease-in-out duration-300 group hover:brightness-110 active:brightness-90 dark:border-white/20 dark:ring-transparent"
        >
            {pending ? (
                <>
                    <Loader2 className="ml-0 h-3.5 w-3.5 animate-spin !size-3.5" />
                    <span>Sending...</span>
                </>
            ) : (
                <>
                    <span>Request Free Demo</span>
                    <ChevronRight className="ml-0 group-hover:translate-x-1 transition-all ease-in-out duration-300 !size-3.5 opacity-50" />
                </>
            )}
        </Button>
    );
}

export default function FreeDemoRequestSection() {
    const [state, formAction] = useFormState(submitContactForm, null);

    return (
        <section className="bg-white">
            <div className="mx-auto max-w-6xl border-x py-24 relative lg:py-32">
                <div
                    aria-hidden="true"
                    className="bg-card ring-foreground/10 pointer-events-none absolute z-40 size-1.5 border border-transparent shadow-sm ring-1 -bottom-[3.5px] translate-x-[1.5px] -left-[3.5px]"
                />
                <div
                    aria-hidden="true"
                    className="bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -bottom-[3.5px] -right-[3.5px]"
                />
                <div className="relative">
                    <div className="grid grid-cols-2 divide-x border-y *:p-3 md:*:p-8 lg:grid-cols-4">
                        {/* Left Section */}
                        <div className="col-span-2 border-b max-lg:border-r-0 max-md:text-center">
                            <h1 className="text-balance text-2xl font-semibold md:text-4xl">
                                Experience Seamless AI-Driven Websites Built to Inspire Patient Trust
                            </h1>
                            <p className="text-muted-foreground mb-8 mt-6 max-w-sm text-balance text-lg max-md:mx-auto">
                                Discover how our tailored AI-enhanced healthcare websites create effortless patient journeys—fast launches, industry-specific features, real-time insights, and full support—empowering you to grow with trust and professionalism.
                            </p>

                            <ul className="mt-8 space-y-2 text-muted-foreground flex flex-col max-md:items-center">
                                <li>Launch your AI-powered website in just 48-72 hours</li>
                                <li>Integrated features tailored for healthcare providers</li>
                                <li>Live analytics dashboard to monitor patient engagement</li>
                                <li>Mobile-first, conversion-optimized design</li>
                                <li>All hosting, maintenance, and security included</li>
                                <li>Dedicated account manager for personalized support</li>
                            </ul>
                        </div>

                        {/* Form Section */}
                        <div className="bg-card/25 relative col-span-2 border-b border-r-0 lg:pt-10">
                            <div
                                aria-hidden="true"
                                className="bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -bottom-[3.5px] -left-[3.5px]"
                            />
                            <div
                                aria-hidden="true"
                                className="bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -top-[3.5px] -left-[3.5px]"
                            />
                            
                            <form className="space-y-6" action={formAction}>
                                {state?.message && (
                                    <div className={`p-3 rounded-md text-sm ${
                                        state.message.includes('successfully') 
                                            ? 'bg-green-50 border border-green-200 text-green-700' 
                                            : 'bg-red-50 border border-red-200 text-red-700'
                                    }`}>
                                        {state.message}
                                    </div>
                                )}
                                
                                <div className="grid gap-3 sm:grid-cols-2">
                                    <div className="space-y-3">
                                        <Label htmlFor="name">Full Name</Label>
                                        <Input id="name" name="name" type="text" required className="h-9 text-base md:text-sm" />
                                    </div>
                                    <div className="space-y-3">
                                        <Label htmlFor="email">Work Email</Label>
                                        <Input id="email" name="email" type="email" required className="h-9 text-base md:text-sm" />
                                    </div>
                                </div>
                                
                                <div className="space-y-3">
                                    <Label htmlFor="country">Country/Region</Label>
                                    <Select name="country" required>
                                        <SelectTrigger className="h-9 w-full text-base md:text-sm">
                                            <SelectValue placeholder="Select Country/Region" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {countries.map((continent, index) => (
                                                <SelectGroup key={index}>
                                                    <div className="px-4 py-2 text-sm font-semibold text-gray-500">
                                                        {continent.continent}
                                                    </div>
                                                    {continent.items.map((country, idx) => (
                                                        <SelectItem key={idx} value={country.value}>
                                                            {country.flag} {country.value}
                                                        </SelectItem>
                                                    ))}
                                                </SelectGroup>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                
                                <div className="space-y-3">
                                    <Label htmlFor="website">Company Website</Label>
                                    <div className="relative">
                                        <Input
                                            required
                                            id="website"
                                            name="website"
                                            type="url"
                                            placeholder="yourcompany.com"
                                            className="h-9 text-base md:text-sm pl-16"
                                        />
                                        <span className="text-muted-foreground pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm">
                                            http://
                                        </span>
                                    </div>
                                </div>
                                
                                <div className="space-y-3">
                                    <Label htmlFor="social-media">Social Media</Label>
                                    <div className="relative">
                                        <Input
                                            required
                                            id="social-media"
                                            name="social-media"
                                            type="url"
                                            placeholder="instagram.com/yourprofile"
                                            className="h-9 text-base md:text-sm pl-16"
                                        />
                                        <span className="text-muted-foreground pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm">
                                            http://
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <Label htmlFor="msg">Your Message</Label>
                                    <Textarea id="msg" name="msg" rows={6} className="min-h-16 text-base md:text-sm" placeholder="Tell us about your project or questions" />
                                </div>
                                
                                <div className="grid gap-6 sm:grid-cols-[1fr_auto]">
                                    <p className="text-muted-foreground text-sm">
                                        By submitting this form, you agree to our{' '}
                                        <a className="text-primary underline" href="#link">
                                            Privacy Policy
                                        </a>
                                    </p>
                                    <SubmitButton />
                                </div>
                            </form>
                        </div>

                        {/* Bottom Info Sections */}
                        <div className="row-span-2 grid grid-rows-subgrid gap-5 *:block max-lg:border-b">
                            <p className="text-muted-foreground text-balance">
                                <strong className="text-foreground font-medium">99.9% Uptime Guarantee</strong> to ensure your site is always available.
                            </p>
                        </div>
                        <div className="row-span-2 grid grid-rows-subgrid gap-5 *:block max-lg:relative max-lg:border-b max-lg:border-r-0">
                            <p className="text-muted-foreground text-balance">
                                <strong className="text-foreground font-medium">48-72 Hour Launch Speed</strong> with AI features ready from day one.
                            </p>
                        </div>
                        <div className="row-span-2 grid grid-rows-subgrid gap-5 *:block">
                            <p className="text-muted-foreground">
                                <strong className="text-foreground font-medium">24/7 Dedicated Support</strong> including your own account manager.
                            </p>
                        </div>
                        <div className="row-span-2 grid grid-rows-subgrid gap-5 *:block">
                            <p className="text-muted-foreground text-balance">
                                <strong className="text-foreground font-medium">Seamless Integration</strong> with your existing systems and tools.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
