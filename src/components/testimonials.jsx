import React from 'react';

const testimonialsData = [
  {
    id: 1,
    text: "Within one week of launching PatientFlowAI, three patients specifically mentioned how 'easy and professional' our website felt. One said: 'I almost went to another dentist, but your website made me trust you immediately.' That's the power of a seamless experience—it builds confidence before the first conversation. Our booking rate jumped 240%.",
    author: "Dr. Sarah Mitchell",
    title: "Family Dentist"
  },
  {
    id: 2,
    text: "A patient told me: 'Your website is the reason I chose you. It loaded instantly on my phone, everything was clear, and booking took literally 30 seconds. If you're that organized online, I knew you'd be excellent in person.' She was right. Seamless experiences don't just book appointments—they set expectations for the quality of care you deliver.",
    author: "Dr. Marcus Williams",
    title: "Orthodontist"
  },
  {
    id: 3,
    text: "Someone called at 2:30 AM in severe tooth pain. Our AI assistant responded with such warmth and immediately booked her for an emergency slot. She later said: 'I expected a robot. What I got was genuine compassion at my worst moment. That's when I knew I'd found my dentist for life.' The AI built trust I couldn't have built better myself.",
    author: "Dr. Priya Sharma",
    title: "Emergency Dentist"
  },
  {
    id: 4,
    text: "I track every metric. Before PatientFlowAI: 12% of website visitors booked appointments. After: 41% book. The difference? The experience is so clean, so intuitive, so friction-free that patients actually complete the journey. Every barrier removed means more people getting the care they need—and my practice thriving.",
    author: "Dr. Jessica Martinez",
    title: "Cosmetic Dentist"
  },
  {
    id: 5,
    text: "A mother wrote in a review: 'Booking my son's first therapy session was easier than ordering pizza. The website was so smooth I didn't have time to second-guess myself. Thank you for removing obstacles when we were already struggling.' That seamless experience got her son the help he needed. That's the real value—care happening because technology got out of the way.",
    author: "Dr. Alan Cooper",
    title: "Child Therapist"
  },
  {
    id: 6,
    text: "My old website embarrassed me. PatientFlowAI transformed it into something I'm proud to share. Existing patients texted me: 'Your new website looks incredible!' If people who already trust me were impressed, imagine first-time visitors. New patient bookings doubled in three weeks. Clean, premium design equals instant credibility.",
    author: "Dr. Linda Park",
    title: "Periodontist"
  },
  {
    id: 7,
    text: "The patient dashboard revealed that people were abandoning booking at the insurance question—they were confused and frustrated. I added a simple explainer video and live chat support. Abandonment dropped 67% overnight. When you see exactly where friction exists, you can eliminate it. That's how you optimize for trust and conversions simultaneously.",
    author: "Dr. Robert Hayes",
    title: "Implant Specialist"
  },
  {
    id: 8,
    text: "A patient called from her car, crying about anxiety. She'd visited four therapist websites and given up on each—too confusing, too overwhelming. Ours loaded instantly, spoke to her gently, and booked her in under a minute. She said: 'Your website was the first thing today that didn't make me feel more anxious. It gave me hope.' When design respects mental state, healing begins immediately.",
    author: "Dr. Michelle Chang",
    title: "Anxiety Specialist"
  },
  {
    id: 9,
    text: "Someone explored our root canal page nine times over two weeks—clearly terrified but needing help. The AI sent a gentle message: 'Dental procedures can feel scary. Would a quick call to discuss your concerns help? Zero pressure, just answers.' He called. Booked. Later told me that respectful nudge gave him courage. That's emotional intelligence creating trust that converts.",
    author: "Dr. Steven Rodriguez",
    title: "Endodontist"
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