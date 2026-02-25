import portrait from "@/assets/dikshant-photo.jpeg";
import { Calendar, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center section-padding">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left space-y-6 animate-fade-in-up">
            <p className="text-sm tracking-[0.3em] uppercase text-primary font-medium">
              Product Manager
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              Dikshant <span className="gradient-text">Yadav</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground font-medium">
              B2B Platforms · Payments · Platform Systems
            </p>
            <p className="text-lg md:text-xl text-secondary-foreground leading-relaxed max-w-2xl">
              Building scalable B2B platforms, automation systems, and reliable transaction infrastructure.
            </p>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl">
              Product Manager with deep experience in large-scale B2B transaction platforms and settlement systems. I build reliable, data-driven products focused on automation, platform scalability, operational efficiency, and measurable impact. Open to product roles in AI, SaaS, platform and consumer technology companies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="gradient-bg text-primary-foreground px-8 py-3.5 rounded-lg font-semibold text-sm inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                <Calendar className="w-4 h-4" />
                Book a Chat
              </a>
              <a
                href="#"
                className="border border-border bg-secondary text-secondary-foreground px-8 py-3.5 rounded-lg font-semibold text-sm inline-flex items-center justify-center gap-2 hover:bg-muted transition-colors"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </div>

          {/* Portrait - top right */}
          <div className="flex-shrink-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="w-60 h-60 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-border glow-shadow">
              <img
                src={portrait}
                alt="Dikshant Yadav — Product Manager"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
