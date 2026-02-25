import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import MetricsStrip from "@/components/portfolio/MetricsStrip";
import AboutSection from "@/components/portfolio/AboutSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import CaseStudies from "@/components/portfolio/CaseStudies";
import ProjectsGrid from "@/components/portfolio/ProjectsGrid";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MetricsStrip />
      <AboutSection />
      <ExperienceSection />
      <CaseStudies />
      <ProjectsGrid />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
