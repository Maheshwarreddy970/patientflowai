import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';

const faqData = [
  {
    section: "Why PatientFlowAI for Your Practice",
    items: [
      {
        id: "item-1",
        question: "Why should I invest in a premium website experience?",
        answer: "Because your website is the first moment of care patients experience—and first impressions determine everything. A premium, seamless site builds instant trust, demonstrates your commitment to excellence, and removes every barrier to booking. Practices with exceptional online experiences capture 3x more appointments and create loyal patients who refer others. Your website either builds your reputation or damages it. PatientFlowAI ensures it builds."
      },
      {
        id: "item-2",
        question: "How does this actually bring me more patients?",
        answer: "Through trust and friction removal. When patients feel safe (premium design, trust badges) and experience effortless booking (45-second process), conversion rates soar. The AI captures after-hours inquiries you'd normally miss. Mobile optimization captures the 77% searching on phones. Behavioral insights let you continuously improve. Result: more visitors convert, more off-hours patients book, more referrals happen because the experience is so good people rave about it."
      },
      {
        id: "item-3",
        question: "What makes this different from template websites?",
        answer: "Templates look generic and feel impersonal—patients can tell. PatientFlowAI sites are custom-designed for healthcare, psychologically engineered to build trust, and powered by AI that creates genuine emotional connections. Plus: dedicated support, continuous optimization based on patient behavior, and experiences so polished patients specifically mention your website when choosing you. Templates are cheap. This is an investment that pays for itself immediately through increased bookings and patient loyalty."
      },
    ]
  },
  {
    section: "Trust & Patient Experience",
    items: [
      {
        id: "item-4",
        question: "How does the website build patient trust so quickly?",
        answer: "Through layered psychological signals. Visual: clean, premium design signals competence. Security: prominent HIPAA/SSL badges prove safety. Performance: instant load times demonstrate attention to detail. Emotional: warm language creates safety. Functional: seamless booking shows respect. Every element answers 'Can I trust this doctor?' before patients consciously ask. Trust forms through felt experience, not just claims."
      },
      {
        id: "item-5",
        question: "What makes the patient experience truly 'seamless'?",
        answer: "Zero friction anywhere. Site loads in under 1 second. Navigation is intuitive—patients find what they need without thinking. Booking takes 45 seconds, not 10 minutes. Mobile works flawlessly. AI responds instantly with helpful answers. Confirmations arrive immediately with warmth. Every interaction flows naturally. Patients notice: 'That was the easiest healthcare booking I've ever done.' That effortless feeling becomes trust and loyalty."
      },
      {
        id: "item-6",
        question: "Will patients actually prefer AI over talking to my staff?",
        answer: "They prefer having both options. AI for instant answers at 2 AM or during lunch. Staff for complex, nuanced conversations. 89% of patients rate our AI interactions as 'excellent' because it's available immediately, never sounds rushed, and responds with consistent warmth. It doesn't replace your team—it extends your care to times you physically can't be available. Patients love the choice and convenience."
      }
    ]
  },
  {
    section: "Implementation & Support",
    items: [
      {
        id: "item-7",
        question: "How quickly can we launch?",
        answer: "Your custom site launches in 48-72 hours, fully functional with booking, AI, and HIPAA compliance ready. We build it separately while your old site stays live. When you approve, we switch live in under 60 seconds—usually during lunch. Zero downtime. Zero disruption. Your patients experience only improvement, never interruption."
      },
      {
        id: "item-8",
        question: "What if I'm not satisfied?",
        answer: "30-day money-back guarantee. If you're unhappy for any reason, we refund completely—no questions, no hassle. Plus: month-to-month pricing means you're never trapped. But here's what actually happens: 97% of doctors stay because results speak louder than contracts. You'll see more bookings, better patient feedback, and less stress. That's why people don't leave."
      },
      {
        id: "item-9",
        question: "Can I update content myself without breaking the design?",
        answer: "Absolutely. Your dashboard is designed for non-technical users. Change office hours? Two clicks. Add a new service? Fill in description, upload photo (we auto-resize), publish. The premium design framework stays protected—you can't accidentally break layouts or trust elements. You control content, we protect excellence. Updates go live instantly."
      },
      {
        id: "item-10",
        question: "What kind of support do I get?",
        answer: "Essential Plan: 24/7 live chat support with real humans who care. AI-Powered Plan: Everything above PLUS a dedicated account manager who knows your practice, proactively monitors performance, and helps you optimize continuously. You're never alone. When you need help, we're there—not in 3 days, but in hours. Your success is literally our business model."
      }
    ]
  }
];



const FAQSection = () => {
  return (
    <section id='faq' className="border-y px-3">
      <div className="mx-auto py-16 relative md:py-24 max-w-6xl border-x px-4 md:px-6">
        <div
          aria-hidden="true"
          className="bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -bottom-[3.5px] translate-x-[1.5px] -left-[3.5px]"
        />
        <div
          aria-hidden="true"
          className="bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -bottom-[3.5px] -right-[3.5px]"
        />
        <div className="grid gap-8 md:grid-cols-5 md:gap-12">
          {/* Left Column */}
          <div className="max-w-lg max-md:px-6 md:col-span-2">
            <h2 className="text-gray-900 text-4xl font-semibold">FAQs</h2>
            <p className="text-gray-600 mt-4 text-balance text-lg">Your questions answered</p>
            <p className="text-gray-600 mt-6 max-md:hidden">
              Can't find what you're looking for? Contact our{' '}
              <Link href="#" className="text-green-600 font-medium hover:underline">
                customer support team
              </Link>
            </p>
          </div>

          {/* Right Column - Accordions */}
          <div className="space-y-12 md:col-span-3">
            {faqData.map((section) => (
              <div key={section.section} className="space-y-4">
                <h3 className="text-gray-900 pl-6 text-lg font-semibold">{section.section}</h3>
                <Accordion type="single" collapsible className="-space-y-1">
                  {section.items.map((item) => (
                    <AccordionItem
                      key={item.id}
                      value={item.id}
                      className="border-b last:border-b-0 data-[state=open]:bg-white data-[state=open]:ring-gray-200/20 rounded-xl border-none px-6 py-1 data-[state=open]:shadow-sm data-[state=open]:ring-1"
                    >
                      <AccordionTrigger className="flex flex-1 items-start justify-between gap-4 py-4 text-left font-medium outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 hover:no-underline data-[state=open]:border-transparent text-base">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
        <p className="text-gray-600 mt-12 px-6 md:hidden">
          Can't find what you're looking for? Contact our{' '}
          <Link href="#" className="text-green-600 font-medium hover:underline">
            customer support team
          </Link>
        </p>
      </div>
    </section>
  );
};

export default FAQSection;