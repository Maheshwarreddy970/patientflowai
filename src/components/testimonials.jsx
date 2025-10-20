import React from 'react';

const testimonialsData = [
  {
    id: 1,
    text: "Switching to SuperWorld transformed our workflow overnight. Our real estate site now matches 50% more buyers with properties in less than a minute.",
    author: "Laura Chen",
    title: "Broker, Chen Realty Group"
  },
  {
    id: 2,
    text: "Our restaurant’s online orders have doubled since we added AI-driven menu recommendations and contactless ordering—all handled flawlessly by SuperWorld.",
    author: "Diego Martinez",
    title: "Owner, La Mercado Taqueria"
  },
  {
    id: 3,
    text: "As a clinic director, I needed HIPAA compliance plus telehealth scheduling. SuperWorld delivered both within days, and patient no-shows dropped by 30%.",
    author: "Dr. Priya Singh",
    title: "Medical Director, Oakwood Family Care"
  },
  {
    id: 4,
    text: "Integrating AI-led vehicle search on our dealership site boosted test drive requests by 220%. The setup was seamless, and support is exceptional.",
    author: "Carlos Rivera",
    title: "General Manager, Cityline Auto"
  },
  {
    id: 5,
    text: "For our home services business, the photo-based instant quotes feature cut our estimate cycle in half, leading to a 40% increase in booked jobs.",
    author: "Jessica O’Neal",
    title: "Owner, O’Neal Home Repairs"
  },
  {
    id: 6,
    text: "Our waste management routes are now optimized automatically based on AI image sorting of materials—efficiency gains of over 35% have been realized.",
    author: "Markus Schmidt",
    title: "Operations Manager, GreenCycle Recycling"
  },
  {
    id: 7,
    text: "Adding AI visual search to our medical supplies catalog reduced search times by 75% and increased order accuracy—our clients love it.",
    author: "Elena Petrova",
    title: "COO, MedSupply Direct"
  },
  {
    id: 8,
    text: "In fitness, personalized class recommendations from AI lifted our membership conversions by 28%. SuperWorld’s dashboard makes tracking simple.",
    author: "Brandon Lee",
    title: "Director, Momentum Gym"
  },
  {
    id: 9,
    text: "As a boutique retailer, the AI-driven style matcher elevated our online experience, tripling our average session duration and boosting sales by 45%.",
    author: "Sofia Alvarez",
    title: "Founder, Chic & Unique Boutique"
  }
];


export default function Testimonials() {
  return (
    <section className="px-3 ">
      <div className="grid grid-cols-1 relative md:grid-cols-3 max-w-6xl mx-auto border-x">
           <div
                    aria-hidden="true"
                    className="bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -top-[3.5px]  translate-x-[1.5px]   -left-[3.5px]"
                />
                <div
                    aria-hidden="true"
                    className="bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -top-[3.5px] -right-[3.5px]"
                />
        <div
          aria-hidden="true"
          className="bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -bottom-[3.5px] translate-x-[1.5px] -left-[3.5px]"
        />
        <div
          aria-hidden="true"
          className="bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -bottom-[3.5px] -right-[3.5px]"
        />
        {testimonialsData.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`${
              index % 2 === 0 ?  'bg-card/25' :'shadow-xl bg-white' 
            } ring-foreground/[0.07] flex flex-col justify-end gap-6 border border-transparent p-8 ring-1`}
          >
            <p className="text-foreground self-end text-balance before:mr-1 before:content-['\201C'] after:ml-1 after:content-['\201D']">
              {testimonial.text}
            </p>
            <div className="flex items-center gap-3">
              <div className="space-y-px">
                <p className="text-sm font-medium">{testimonial.author}</p>
                <p className="text-muted-foreground text-xs">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}