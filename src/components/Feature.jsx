import React from 'react';
import { WorldMap } from './ui/dotted-map';
import Image from 'next/image';
import { IconWorldWww, IconTemplateFilled, IconAi } from '@tabler/icons-react';

const featuresText = {
  header: {
    title: "Seamless Patient Journeys That Build Unshakeable Trust",
    description: "Clean design. Instant responses. Effortless booking. Every detail engineered to make patients feel safe, understood, and cared for from the very first second.",
    label: "Features",
  },
  
  modernWebsite: {
    title: "Premium Design That Makes Patients Feel They're In Expert Hands",
    subtitle: "Your patients decide if you're trustworthy in 0.5 seconds—here's how we win them:",
    items: [
      {
        title: "Trust signals everywhere:",
        description: "HIPAA badges, SSL certificates, security seals—visible proof they're protected"
      },
      {
        title: "Flawless technical execution:",
        description: "Lightning-fast load times, perfect mobile experience, zero broken elements—excellence they feel"
      },
      {
        title: "Clean, calming aesthetics:",
        description: "Soft colors and generous white space that instantly reduce anxiety and signal professionalism"
      },
    ],
    howItHelps: "Within seconds of landing, patients exhale. The clean layout creates mental clarity. Premium design signals 'this doctor is top-tier.' Visible security proves 'my information is safe.' Before reading anything, they already feel: 'This is where I belong.' That instant trust becomes the foundation of your patient relationships—and it starts with a website that honors their need for safety, clarity, and professionalism."
  },
  
  aiSalesAssistant: {
    title: "24/7 Intelligent Care That Feels Genuinely Human",
    description: "Your AI assistant responds with warmth and intelligence—never robotic, always helpful. When patients call at 2 AM in pain or chat during their lunch break, they experience immediate, compassionate support. The AI understands not just their words, but their emotions—responding with empathy that makes every patient feel heard, valued, and cared for.",
    howItHelps: "This is how you capture patients at their moment of courage. When someone finally decides 'I need help'—whether midnight or noon—your AI is there instantly with genuine warmth. No voicemail. No waiting. Just immediate care that makes them feel safe enough to book. Result? Your calendar fills with patients who chose you because you were there when they needed you most—with an experience so caring, they knew you'd treat them the same way in person.",
    chatExample: [
      {
        date: "Today 2:47 AM",
        message: "I've been avoiding the dentist for years because of anxiety. Do you handle nervous patients?"
      },
      {
        date: "Today 2:47 AM",
        message: "Thank you for sharing that—it takes real courage. Dr. Chen specializes in anxiety-free dentistry and many patients say their first visit was surprisingly peaceful. She takes all the time you need and works at your pace. Would you feel comfortable with a relaxed consultation where you can just talk first? No treatment, no pressure—just getting to know each other."
      },
    ],
    aiFeatures: [
      {
        title: "Emotional Intelligence That Reads Between the Lines",
        description: "When someone asks 'Do you take my insurance?' the AI understands they're really asking 'Can I afford this?' It provides clear answers plus reassurance: 'We work with most plans and offer flexible payment options—cost should never be a barrier to care.' That combination of practical help and emotional understanding builds profound trust."
      },
      {
        title: "Proactive Support That Never Feels Pushy",
        description: "Patient explores your therapy services five times but doesn't book? They receive: 'Taking the first step toward therapy requires courage. If you have questions or just want to talk, we're here—absolutely no pressure.' That respectful approach honors their pace while showing you genuinely care about their wellbeing, not just bookings."
      },
      {
        title: "Perfect Follow-Ups at Exactly the Right Moment",
        description: "Two days after someone views emergency dental services, they get: 'We know dental pain can be scary. If you're still experiencing discomfort or have questions, we have same-day appointments available. We're here to help.' Timely, relevant, caring—never annoying. This builds trust through consistent, thoughtful communication."
      },
      {
        title: "Patient Insights That Reveal What They Need Most",
        description: "Your dashboard shows everything: what services patients explore most, where they hesitate, when they're ready to book. This visibility lets you optimize continuously—removing friction, adding reassurance, creating experiences so personalized patients feel: 'This site was built specifically for someone like me.' That feeling creates unshakeable loyalty."
      },
    ]
  },
  
  mobileOptimization: {
    title: "Flawless Mobile Experience—Because Patients Search When Life Happens",
    description: "Your patient pulls out her phone at a red light, searching for a therapist. Your site loads in 0.8 seconds. Text is perfectly readable. Buttons are exactly where her thumb naturally rests. In 45 seconds—three easy taps—she's booked for Thursday at 5 PM. Confirmation arrives instantly with warmth. The entire experience feels so smooth, so respectful of her time, she screenshots it to show her sister. That's mobile-first design that understands human behavior.",
    howItHelps: "77% of healthcare searches happen on mobile during real-life moments. When your experience is this effortless, patients feel respected—not frustrated. They think: 'If they care this much about making booking easy, imagine how they'll treat me in person.' That seamless journey becomes trust. Trust becomes appointments. Your premium mobile experience captures patients your competitors lose to clunky, frustrating sites."
  },
  
  instantBooking: {
    title: "Booking So Effortless, Nothing Blocks Their Path to Care",
    description: "Traditional booking kills momentum: call during business hours, navigate phone menus, explain problems, check calendars, play phone tag, maybe book in three days. Your seamless system: see live availability, click Thursday 3 PM, enter name and concern, done. Confirmation in inbox. Calendar invite sent. Booked in 45 seconds while motivation is high. The difference? One respects their courage and time. The other tests their patience and commitment.",
    howItHelps: "When booking is this frictionless, you remove every excuse not to schedule. Patients book immediately—not 'tomorrow' (they never do). That effortless experience signals excellence: 'A practice this organized and thoughtful must deliver exceptional care.' You've demonstrated competence and respect in under one minute. That's how seamless experiences build trust and fill your calendar with patients who already believe in you."
  },
  
  leadDashboard: {
    title: "Complete Visibility Into Every Patient's Journey",
    description: "See exactly how patients experience your practice. Track which services they explore, where they hesitate, when they're ready to book. Real-time insights reveal: 'Michael viewed root canal information 8 times—he's interested but scared.' Now you respond with perfect empathy: 'We noticed you've been researching root canals. They can feel intimidating. Would a quick call to discuss your concerns help? No commitment needed—just answers and reassurance.'",
    howItHelps: "This visibility transforms your practice from guessing to knowing. You discover what patients need emotionally, not just medically. You adjust messaging, remove barriers, add support exactly where needed. The result? Experiences so personalized and intuitive, patients feel genuinely understood. That feeling—being truly seen and cared for—creates the kind of trust that turns patients into lifelong advocates who refer everyone they know.",
    result: "Your practice becomes legendary for one thing: exceptional patient experiences. The website is clean and intuitive. Booking is instant and effortless. Communication is warm and helpful. Every single touchpoint radiates competence, empathy, and premium quality. That's not just good design—that's a patient experience machine that builds trust automatically, 24/7, turning every website visitor into a loyal patient who trusts you completely."
  }
};


const FeaturesSection = () => {
  return (
    <>
      <div id='features' className='bg-white w-full px-3'>
        <div className="relative mx-auto max-w-6xl border-x px-4 sm:px-6 md:px-12">
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
          <div className="relative border-x flex flex-col gap-6 justify-center py-10">
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
                  <span className="text-title text-sm">{featuresText.header.label}</span>
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-foreground text-balance text-3xl font-medium sm:text-5xl">
                {featuresText.header.title}
              </h1>
              <p className="text-muted-foreground mx-auto mt-3 max-w-xl text-balance md:text-lg">
                {featuresText.header.description}
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
              <div className="*:nth-3:border-r @max-3xl:*:nth-[1n+1]:nth-[-n+6]:border-b @3xl:*:nth-6:border-r @3xl:*:nth-[1n+3]:nth-[-n+4]:border-r @3xl:*:nth-[1n+1]:nth-[-n+5]:border-b border-foreground/10 divide-foreground/10 grid-cols-4 @3xl:*:first:border-r relative grid overflow-hidden border border-b-0 *:p-3 md:*:p-8">
                {/* Get a Modern Website—Free & Fully Managed */}
                <div className="col-span-4 grid-cols-2 bg-white gap-8 border-b grid">
                  <div className="col-span-2 text-center mb-4">
                    <h3 className="text-balance font-semibold text-2xl">{featuresText.modernWebsite.title}</h3>
                  </div>
                  <div className="flex flex-col items-center lg:items-start gap-2 col-span-2 lg:col-span-1">
                    <div aria-hidden="true" className="group">
                      <div className="flex items-center gap-1.5 px-6 py-2.5 text-sm rounded-xl font-medium">
                        {featuresText.modernWebsite.subtitle}
                      </div>
                      <div className="relative">
                        <div className="bg-card relative overflow-hidden sm:px-6 py-3">
                          {featuresText.modernWebsite.items.map((item, index) => (
                            <div key={index} className="flex items-center gap-3 border-b border-dashed py-3 last:border-b-0">
                              <div className="cursor-pointer inline-flex rounded-md items-center bg-green-500 overflow-hidden justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 p-1 shadow-black/15 border border-transparent  ring-1 ring-foreground/10 duration-200 hover:bg-muted/50 dark:ring-foreground/15 dark:hover:bg-muted/50 h-9 w-9 shrink-0">
                                {index === 2 && <IconTemplateFilled stroke={1} className="h-full w-full fill-white" />}
                                {index === 1 && <IconWorldWww stroke={0.9} className="h-full w-full text-white fill-white/60" />}
                                {index === 0 && <IconAi stroke={1.6} className="h-full w-full text-white" />}
                              </div>
                              <div className="space-y-0.5">
                                <h3 className="text-sm font-medium">{item.title}</h3>
                                <p className="text-muted-foreground  text-sm">{item.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <WorldMap
                    dots={[
                      { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: 34.0522, lng: -118.2437 } },
                      { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: -15.7975, lng: -47.8919 } },
                      { start: { lat: -15.7975, lng: -47.8919 }, end: { lat: 38.7223, lng: -9.1393 } },
                      { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 28.6139, lng: 77.209 } },
                      { start: { lat: 28.6139, lng: 77.209 }, end: { lat: 43.1332, lng: 131.9113 } },
                      { start: { lat: 28.6139, lng: 77.209 }, end: { lat: -1.2921, lng: 36.8219 } },
                    ]}
                  />
                  <div className="col-span-2">
                    <h3 className="text-balance font-semibold">How it helps:</h3>
                    <p className="text-muted-foreground text-sm">{featuresText.modernWebsite.howItHelps}</p>
                  </div>
                </div>
                {/* AI-Powered Chat Support */}
                <div className="col-span-4 grid-cols-2 border-b grid gap-5">
                  <div className="col-span-2 lg:col-span-1">
                    <h3 className="text-balance font-semibold">{featuresText.aiSalesAssistant.title}</h3>
                    <p className="text-muted-foreground mt-3">{featuresText.aiSalesAssistant.description}</p>
                    <div className="mt-4">
                      <h3 className="text-balance font-semibold">How it helps:</h3>
                      <p className="text-muted-foreground text-sm mt-1">{featuresText.aiSalesAssistant.howItHelps}</p>
                    </div>
                  </div>
                  <div aria-hidden="true" className="flex flex-col gap-6 col-span-2 lg:col-span-1">
                    {featuresText.aiSalesAssistant.chatExample.map((chat, index) => (
                      <div key={index}>
                        <div className="flex items-center gap-2">
                          <span className="text-muted-foreground text-xs">{chat.date}</span>
                        </div>
                        <div
                          className={`rounded-(--radius) ${index === 0 ? 'bg-black/5 border  shadow ring-foreground/5' : 'bg-green-500 shadow inset-ring-foreground/10 inset-ring-1'
                            } mt-1.5 w-[80%] md:w-3/5 rounded-${index === 0 ? 'tl' : 'br'} p-3 text-xs ${index === 1 ? 'ml-auto text-white shadow shadow-black/15' : ''
                            }`}
                        >
                          {chat.message}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="@4xl:px-8 col-span-2 self-center">
                    <div aria-hidden="true" className="group rounded-2xl">
                      <div className="relative">
                        <div className="absolute inset-0 scale-100 opacity-100 blur-lg transition-all duration-300">
                          <div className="bg-linear-to-r/increasing animate-hue-rotate absolute inset-x-6 bottom-0 top-12 -translate-y-3 from-pink-400 to-purple-400"></div>
                        </div>
                        <div className="bg-card ring-foreground/10 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-4 relative overflow-hidden rounded-2xl border border-transparent px-6 py-3 shadow-md shadow-black/5 ring-1">
                          {featuresText.aiSalesAssistant.aiFeatures.map((feature, index) => (
                            <div
                              key={index}
                              className={`grid items-center gap-3 ${index < 3 ? 'border-b md:border-b-0' : ''
                                } ${index === 1 ? 'md:border-r-0 lg:border-r' : index === 2 ? 'md:border-r' : ''} border-dashed last:border-b-0`}
                            >
                              <div className="space-y-0.5">
                                <h3 className="text-sm font-medium text-center">{feature.title}</h3>
                                <p className="text-muted-foreground text-center text-xs">{feature.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Mobile-First Optimization */}
                <div className="lg:col-span-2 col-span-4 bg-white border-r flex flex-col gap-4 p-8">
                  <div className="mx-auto max-w-sm text-center">
                    <h3 className="text-balance font-semibold">{featuresText.mobileOptimization.title}</h3>
                    <p className="text-muted-foreground mt-1">{featuresText.mobileOptimization.description}</p>
                  </div>
                  <div className="max-w-84 mt-2 h-40 flex justify-center items-center overflow-hidden mx-auto w-full self-center">
                    <img
                      src="/original-f92a26c17c3435dc7d23cc0585a1bfcb.gif"
                      className="h-full w-full object-cover"
                      alt="mobile optimization illustration"
                    />
                  </div>
                  <div>
                    <h3 className="text-balance font-semibold">How it helps:</h3>
                    <p className="text-muted-foreground text-sm mt-1">{featuresText.mobileOptimization.howItHelps}</p>
                  </div>
                </div>
                {/* Instant Booking & Reservations */}
                <div className="lg:col-span-2 col-span-4 bg-white border-r flex flex-col gap-4 p-8">
                  <div className="mx-auto max-w-sm text-center">
                    <h3 className="text-balance font-semibold">{featuresText.instantBooking.title}</h3>
                    <p className="text-muted-foreground mt-1">{featuresText.instantBooking.description}</p>
                  </div>
                  <div className="max-w-84 mt-2 h-40 flex justify-center items-center overflow-hidden mx-auto w-full self-center">
                    <img
                      src="/benefit-1-per-dribble.gif"
                      className="h-full w-full object-cover"
                      alt="booking illustration"
                    />
                  </div>
                  <div>
                    <h3 className="text-balance font-semibold">How it helps:</h3>
                    <p className="text-muted-foreground text-sm mt-1">{featuresText.instantBooking.howItHelps}</p>
                  </div>
                </div>
                {/* Lead & ROI Dashboard */}
                <div className="col-span-4">
                  <div className="w-full grid grid-cols-5">
                    <div className="flex flex-col order-last lg:order-1 gap-5 justify-center col-span-5 lg:col-span-3">
                      <div>
                        <h3 className="text-balance font-semibold">{featuresText.leadDashboard.title}</h3>
                        <p className="text-muted-foreground text-sm mt-1">{featuresText.leadDashboard.description}</p>
                      </div>
                      <div>
                        <h3 className="text-balance font-semibold">How it helps:</h3>
                        <p className="text-muted-foreground text-sm mt-1">{featuresText.leadDashboard.howItHelps}</p>
                      </div>
                      <div>
                        <h3 className="text-balance font-semibold">Result:</h3>
                        <p className="text-muted-foreground text-sm mt-1">{featuresText.leadDashboard.result}</p>
                      </div>
                    </div>
                    <div className="mask-b-from-75% order-1 lg:order-last col-span-5 lg:col-span-2 mask-b-to-95% mask-r-from-85% relative h-fit perspective-distant p-6">
                      <div className="bg-green-100 shadow-md overflow-hidden rounded-t-lg rotate-x-20 skew-x-12 border-t px-2 pt-2 dark:bg-zinc-950">
                        <Image
                          src="/Dashboard Design (1).png"
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