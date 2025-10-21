import ComparatorSection from "@/components/ComparatorSection";
import CTA from "@/components/cta";
import Desgines from "@/components/Desgines";
import FAQSection from "@/components/faq";
import FeaturesSection from "@/components/Feature";
import HeroSection from "@/components/Herosection";
import PricingSection from "@/components/PricingSection";
import Testimonials from "@/components/testimonials";



const TemplateDesigns = [
  {
    img: "/health/dentoi-8kQtEYGVw3ZmXcmZRyxWr0cBU9J6wp.webp",
    href: 'https://dentoi.framer.website/',
  },
  {
    img: "/health/deentiva-RZSuWBwDoWaQ53r4G15adZP4gLTu3A.webp",
    href: 'https://dentiva.framer.ai/',
  },
  {
    img: "/health/dentina-qZoV06qGENYaWlgBs4iFFLf8XVOTdW.webp",
    href: 'https://dentina.framer.website/',
  },
  {
    img: "/health/dental-cHvqe23pZ8CzAwvtB6kRaEsG88SsdK.webp",
    href: 'https://dental-template.framer.website/'
  },
  {
    img: "/health/UYwNYc1zHwL6UW97gcx1pNK27w-rICOs6NXhpFSxD4BJ5CtPoyRG1rXEt.jpg",
    href: 'https://dentica.framer.website/'
  },
  {
    img: "/health/dentify-n0zdb3hYoT8TimvD4jvQHqkXDPlLTa.webp",
    href: 'https://dentify.framer.website/'
  },
  {
    img: "/health/s2-ut4wlorwIa9ZldrgvK6EDgX42YgiQM.webp",
    href: 'https://dental-care.framer.website/'
  },
  {
    img: '/health/smilebrite-wiXoz1jokrZHNOrUl6VEE2NUz77Kdk.webp',
    href: 'https://smilebright.framer.website/'
  },
  {
    img: "/health/R6UbIKFwmwp1wMuGPeL1u1iTM-XE69aFfYyE4PtmYuD3p01reUD2TJ7i.jpg",
    href: 'https://irisa.framer.website/',
  },
  {
    img: "/health/curely-gKyF5V7A284g2zu6aVr2WaRHBirH2j.webp",
    href: 'https://curely.framer.website/?via=diversekit',
  },
  {
    img: "/health/vitalflow-fe8kNpedCdhkbFeOI0KUO7eOlxnfRZ.webp",
    href: 'https://vitalflow.framer.website/',
  },
  {
    img: "/health/healiix-WL0w8CD3rRxudSpr44u44BZLqDj8sC.webp",
    href: 'https://healixx.framer.website/',
  },
  {
    img: "/health/heaalthjoy-xtPCtEH1mcgPuTQBnLM0IKPgfUwtpB.webp",
    href: 'https://healthjoy.framer.website/',
  },
  {
    img: "/health/holicare-8GStY5QnMaWnJJrZzKG0XWFIwc0Cq6.webp",
    href: 'https://holicare.framer.website/',
  },


  {
    img: "/health/nqDI5DFmQsoC0f1NXbjmnojEE-QXDxnCIwKLitmxZvAgLUUSHIIeKFVF.jpg",
    href: 'https://mediaid.framer.website/?via=framerdevs',
  },
  {
    img: "/health/calvio-RJRGcr2hSNCyj07MaM8MetAyAfZrwX.webp",
    href: 'https://calvio-template.framer.website/',
  },

  {
    img: "/health/peacehub-crEYUCrpnUSGIZjIWn53P20cJ5nqf4.webp",
    href: 'https://peacehub.framer.website/',
  },
  {
    img: "/health/clarity-care-26Li1IFrLNdVzjZgQPwNAVxZxg3DZ2.webp",
    href: 'https://claritycare.framer.website/',
  },
  {
    img: "/health/mentaaheal-jSGqc9bwyW3OnRp6hMymVLdFMcGp2S.webp",
    href: 'https://mentaheal.framer.website/service',
  },


  {
    img: "/health/cureva-2pRpS6NnzbYFDpJ1E05pDiOnPqQL6Y.webp",
    href: 'https://cureva.framer.website/',
  },
  {
    img: "/health/medipro-OFc72xYprFzcuhRXPDGutfOb3cN1Eu.webp",
    href: 'https://medipro.framer.website/',
  },
  {
    img: "/health/al-medi-0Nqh37bBfnZ0gGM8Nh1nn9yViF63Xz.webp",
    href: 'https://almedi.framer.website/?via=framerdevs',
  },
  {
    img: "/health/monkscare-HMFjmElaIngnPpen7l2EIfvzxJKpaJ.webp",
    href: 'https://monkscare.framer.website/',
  },
  {
    img: "/health/framer-thumb-AAh0Q1MlmEy2EZdqb4KsUToejmNhzs.webp",
    href: 'https://mediso.framer.website/',
  },
  {
    img: "/health/agape-IAa0ylOIkb6htJMMgpp6sukhLzMZGQ.webp",
    href: 'https://agape.framer.website/',
  },
  {
    img: "/health/Q0g-2tEdlRsmwZpiBJrx87ztso0m9OLHgHWhjz0JPsYL1c0BuVvx9YO56rNVoeo1M1_3jDDqKOLqYWogsV7_L6X8pYqPJqgV8kUA-vfY4-aRNOYi-05ldDifYvZCkVqzlIigoeIMk2XxV1KTwKq1KgWZUYfVSVv5pfO1.webp",
    href: 'https://bettermedical.framer.website/',
  },

  {
    img: "/health/xClgH7lfTcvrtu7Nc1j5t6vIk4-T7rWE2LzPjzG6N8gxRsldmO9BhTR3t.jpg",
    href: 'https://sensei.framer.website/?via=framership',
  },
  {
    img: "/health/seniorcare-MBayT3zMBZ1W9h32mveZNSSoHJ5aJb.webp",
    href: 'https://senior-care-wbs.framer.website/',
  },

  {
    img: "/health/medical-EPDlKPSMTtRpswP1lkHwQarcDecjxg.webp",
    href: 'https://medical.framer.media/',
  },
  {
    img: "/health/doctr-Aixbqnk07TeKPaE9j7yLANLhReRpO4.webp",
    href: 'https://doctortemplate.framer.website/',
  },
  {
    img: "/health/healer-5MqPtoDda5gfFNMfOh4mVPsSP37bKi.webp",
    href: 'https://spritualhealer.framer.website/',
  },
  {
    img: "/health/medexpert-5XNDwePtZQP3IKpOlebSm69r4JS2jz.webp",
    href: 'https://medexpert-template.framer.website/',
  },
  {
    img: "/health/hospitalia-Wf9Fn1VG7AJ85VmLKWSOeBKahNGr1z.webp",
    href: 'https://hospitalia.framer.website/',
  }
]

export default function Home() {
 
  return (
    <>
      <HeroSection></HeroSection>
      <FeaturesSection></FeaturesSection>
      <Desgines TemplateDesigns={TemplateDesigns}></Desgines>
      <ComparatorSection ></ComparatorSection>
      <PricingSection></PricingSection>
      <Testimonials></Testimonials>
      <FAQSection></FAQSection>
      <CTA></CTA>
    </>
  );
}
