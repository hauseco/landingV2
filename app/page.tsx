import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import SocialProofSnippet from '@/components/social-proof-snippet'
import IntelligentControlSection from '@/components/intelligent-control-section'
import StorageSection from '@/components/storage-section'
import GridPowerSection from '@/components/grid-power-section'
import EconomicChartSection from '@/components/economic-chart-section'
import UseCases from '@/components/use-cases'
import TestimonialsSection from '@/components/testimonials-section'
import PremiumQuickBenefits from '@/components/premium-quick-benefits'
import PackageComparison from '@/components/package-comparison'
import FairDimensioning from '@/components/fair-dimensioning'
import PremiumFeatures from '@/components/premium-features'
import EconomicScenarios from '@/components/economic-scenarios'
import ProcessSteps from '@/components/process-steps'
import ServiceSLA from '@/components/service-sla'
import RegionalProof from '@/components/regional-proof'
import FAQCompact from '@/components/faq-compact'
import ClosingBanner from '@/components/closing-banner'
import Footer from '@/components/footer'
import SolarQuoteForm from '@/components/solar-quote-form'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* 1) Hero (trimmed + Trust-Badges) */}
      <HeroSection />
      
      {/* 2) Social Proof Snippet */}
      <SocialProofSnippet />
      
      {/* 3) Intelligent Control */}
      <IntelligentControlSection />
      
      {/* 4) Storage */}
      <StorageSection />
      
      {/* 5) Grid Power */}
      <GridPowerSection />
      
      {/* 6) Economic Chart */}
      <EconomicChartSection />
      
      {/* 7) Use Cases */}
      <UseCases />
      
      {/* 8) Testimonials - NEU */}
      <TestimonialsSection />
      
      {/* 9) Premium-Schnellnutzen */}
      <PremiumQuickBenefits />
      
      {/* 3) Angebotsvergleich A/B */}
      <PackageComparison />
      
      {/* 4) Fair dimensioniert – Erklärmodul */}
      <FairDimensioning />
      
      {/* 5) Premium-Features – Vertiefung */}
      <PremiumFeatures />
      
      {/* 6) Use-Cases */}
      <UseCases />
      
      {/* 7) Wirtschaftlichkeits-Szenarien */}
      <EconomicScenarios />
      
      {/* 8) Prozess & Verantwortlichkeiten */}
      <ProcessSteps />
      
      {/* 9) Service & SLA */}
      <ServiceSLA />
      
      {/* 10) Regionaler Proof */}
      <RegionalProof />
      
      {/* 11) FAQ (konsolidiert) */}
      <FAQCompact />
      
      {/* 12) Closing-CTA-Banner */}
      <ClosingBanner />
      
      {/* Anfrageformular (Utility, kein Content-Segment) */}
      <section id="angebot" className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SolarQuoteForm />
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
