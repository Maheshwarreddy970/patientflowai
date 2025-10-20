import ComparatorSection from "@/components/ComparatorSection";
import CTA from "@/components/cta";
import FAQSection from "@/components/faq";
import FeaturesSection from "@/components/Feature";
import Footer from "@/components/footer";
import HeroSection from "@/components/Herosection";
import Header from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";
import Testimonials from "@/components/testimonials";
import TrustedBySection from "@/components/TrustedBy";

export default function Home() {
 
  return (
    <>
      <HeroSection></HeroSection>
      <TrustedBySection></TrustedBySection>
      <FeaturesSection></FeaturesSection>
      <ComparatorSection Logotext={"main"}></ComparatorSection>
      <PricingSection></PricingSection>
      <Testimonials></Testimonials>
      <FAQSection></FAQSection>
      <CTA></CTA>
    </>
  );
}
