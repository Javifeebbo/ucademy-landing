import Header from '@/components/header'
import Hero from '@/components/hero'
import TrustBar from '@/components/trust-bar'
import ProblemSection from '@/components/problem-section'
import DivisionsSection from '@/components/divisions-section'
import BenefitsSection from '@/components/benefits-section'
import ProcessSection from '@/components/process-section'
import SocialProof from '@/components/social-proof'
import FAQSection from '@/components/faq-section'
import LeadForm from '@/components/lead-form'
import FinalCTA from '@/components/final-cta'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <ProblemSection />
        <DivisionsSection />
        <BenefitsSection />
        <ProcessSection />
        <SocialProof />
        <FAQSection />
        <LeadForm />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
