import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ActivitiesSection from "@/components/home/ActivitiesSection";
import EventsPreview from "@/components/home/EventsPreview";
import HackathonHighlight from "@/components/home/HackathonHighlight";
import TeamPreview from "@/components/home/TeamPreview";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <HackathonHighlight />
        <AboutSection />
        <ActivitiesSection />
        <EventsPreview />
        <TeamPreview />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
