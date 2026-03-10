import { HeroSection } from "@/components/hero-section"
import { WhatYouGetSection } from "@/components/what-you-get-section"
import { SuccessStoriesSection } from "@/components/success-stories-section"
import { ExclusiveBonusesSection } from "@/components/exclusive-bonuses-section"
import { GuaranteeSection } from "@/components/guarantee-section"
import { OfferSection } from "@/components/offer-section"
import { ProgramBreakdownSection } from "@/components/program-breakdown-section"
import { FaqSection } from "@/components/faq-section"
import { ForWhoSection } from "@/components/for-who-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { StickyCTABar } from "@/components/sticky-cta-bar"

export default function Page() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden max-w-full">
      <HeroSection />
      <WhatYouGetSection />
      <ExclusiveBonusesSection />
      <SuccessStoriesSection />
      <GuaranteeSection />
      <OfferSection />
      <ProgramBreakdownSection />
      <FaqSection />
      <ForWhoSection />
      <FinalCtaSection />
      <StickyCTABar />
    </main>
  )
}
