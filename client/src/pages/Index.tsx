import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import CommunitySection from "@/components/CommunitySection"
import ComparisonSection from "@/components/ComparisonSection"
import BenefitsSection from "@/components/BenefitsSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import TeamSection from "@/components/TeamSection"
import FAQSection from "@/components/FAQSection"
import Footer from "@/components/Footer"

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 bg-gradient-to-br from-background via-background/95 to-background/90 -z-10" />
      <Header />
      <HeroSection />
      <CommunitySection />
      <ComparisonSection />
      <BenefitsSection />
      <TestimonialsSection />
      <TeamSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
