import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero";
import { SocialProof } from "@/components/social-proof";
import { FeaturesSection } from "@/components/features-section";
import { ComplianceSection } from "@/components/compliance-section";
import { HowItWorks } from "@/components/how-it-works";
import { PainSection } from "@/components/pain-section";
import { TestimonialsSection } from "@/components/testimonials";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { PricingPreview } from "@/components/pricing-preview";
import { FAQSection } from "@/components/faq-section";
import { CTASection } from "@/components/cta-section";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <SocialProof />
        <FeaturesSection />
        <ComplianceSection />
        <HowItWorks />
        <PainSection />
        <TestimonialCarousel />
        <PricingPreview />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
