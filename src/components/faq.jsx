import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';

const faqData = [
  {
    section: "General",
    items: [
      {
        id: "item-1",
        question: "How fast can I go live?",
        answer: "Your custom site launches in just 48–72 hours, fully configured with AI features ready to use."
      },
      {
        id: "item-2",
        question: "Am I locked into a long contract?",
        answer: "Never. Our month-to-month plans give you total freedom—cancel anytime without penalties."
      },
      {
        id: "item-3",
        question: "What support do you offer?",
        answer: "Every plan includes 24/7 chat support and a dedicated success manager to ensure your site thrives."
      }
    ]
  },
  {
    section: "Billing & Refunds",
    items: [
      {
        id: "item-4",
        question: "What payment methods are accepted?",
        answer: "We accept all major credit cards, PayPal, and bank transfers for seamless billing."
      },
      {
        id: "item-5",
        question: "Is there a money-back guarantee?",
        answer: "Yes—a 30-day satisfaction guarantee ensures you love your new website or receive a full refund."
      }
    ]
  },
  {
    section: "Features & Add-Ons",
    items: [
      {
        id: "item-6",
        question: "Can I add more storage or users?",
        answer: "Absolutely. Scale up storage, team seats, or AI capacity at any time with a single click."
      },
      {
        id: "item-7",
        question: "Do you integrate with my existing tools?",
        answer: "Yes—SuperWorld seamlessly connects with CRM, marketing, and analytics platforms you already use."
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