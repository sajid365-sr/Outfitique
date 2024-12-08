import { CTASection } from "@/components/sections/CTASection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import OutfitiqueWelcomeEmail from "@/utils/emailTemplate";

export default function Home() {
  return (
    <main className=" mx-auto">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CTASection />
      {/* <OutfitiqueWelcomeEmail email="test@gmail.com" /> */}
    </main>
  );
}
