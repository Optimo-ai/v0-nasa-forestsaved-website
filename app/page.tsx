import HeroSection from "@/components/hero-section"
import SARPowerSection from "@/components/sar-power-section"
import ProblemSection from "@/components/problem-section"
import InteractiveMap from "@/components/interactive-map"
import AlertSimulator from "@/components/alert-simulator"
import StatisticsSection from "@/components/statistics-section"
import ChatBot from "@/components/chatbot"
import ImpactSection from "@/components/impact-section"
import TeamSection from "@/components/team-section"
import CreditsSection from "@/components/credits-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <SARPowerSection />
      <ProblemSection />
      <InteractiveMap />
      <AlertSimulator />
      <StatisticsSection />
      <ImpactSection />
      <TeamSection />
      <CreditsSection />
      <ChatBot />
    </main>
  )
}
