import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Airtel Payments Bank",
    role: "Senior Product Manager",
    duration: "Current",
    points: [
      "Owned a high-scale B2B2C transaction platform.",
      "Scaled monthly throughput from ₹6,500 Cr to ₹8,000+ Cr.",
      "Managed 400+ partners and ~80k users.",
      "Led product lifecycle from discovery to delivery.",
      "Worked with engineering, GTM, operations, compliance, banking teams.",
      "Focus areas: settlements, automation, observability, fraud controls, platform reliability.",
    ],
  },
  {
    company: "Airtel Payments Bank",
    role: "Product Manager",
    duration: "Previous",
    points: [
      "Managed B2B workflow & settlement products.",
      "Built automation workflows replacing manual processes.",
      "Led integrations with Axis, SBI and BOB.",
      "Delivered MFA security controls and distributor-facing features.",
      "Improved operational efficiency and settlement reliability.",
    ],
  },
  {
    company: "ICICI Bank",
    role: "Product Manager — Structured Trade Finance",
    duration: "Previous",
    points: [
      "Managed enterprise banking products.",
      "Worked on digital transformation initiatives.",
      "Designed workflows and platform improvements for corporate banking use cases.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-4xl space-y-12">
        <div className="text-center space-y-3">
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-medium">Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold">Professional Journey</h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="card-gradient border border-border rounded-xl p-6 md:p-8 card-shadow hover:border-primary/30 transition-colors duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="gradient-bg p-2.5 rounded-lg shrink-0 mt-0.5">
                  <Briefcase className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{exp.role}</h3>
                  <p className="text-sm text-primary font-medium">{exp.company}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{exp.duration}</p>
                </div>
              </div>
              <ul className="space-y-2 pl-12">
                {exp.points.map((point, j) => (
                  <li key={j} className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
