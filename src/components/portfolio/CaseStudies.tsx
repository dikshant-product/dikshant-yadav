import imgSettlement from "@/assets/img-settlement.jpg";
import imgObservability from "@/assets/img-observability.jpg";
import imgDashboard from "@/assets/img-dashboard.jpg";

const caseStudies = [
  {
    title: "Settlement Automation & In-house Migration",
    problem: "External settlement dependencies caused risk and manual effort.",
    approach: "Led migration of 350+ enterprise accounts to in-house settlement system, defined cutover strategy, aligned cross-functional teams, and implemented monitoring.",
    outcome: "Reduced systemic risk, improved reliability, unlocked ~₹10 Cr annual float income.",
    image: imgSettlement,
    metric: "₹10 Cr",
    metricLabel: "Annual float impact",
  },
  {
    title: "Denomination Capture & Data Accuracy",
    problem: "Lack of denomination-level data reduced traceability.",
    approach: "Designed and rolled out denomination capture with validations and phased deployment.",
    outcome: "Improved data traceability, audit readiness, and transaction-level cash accuracy.",
    image: imgDashboard,
    metric: "100%",
    metricLabel: "Cash accuracy",
  },
  {
    title: "Platform Observability & Failure Reduction",
    problem: "High transaction failures and slower incident response.",
    approach: "Redesigned key user journeys, built dashboards, alerts and monitoring workflows.",
    outcome: "Reduced monthly failures from ~18k to <2k and improved MTTD/MTTR via faster triage.",
    image: imgObservability,
    metric: "~90%",
    metricLabel: "Failure reduction",
  },
];

const CaseStudies = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto max-w-5xl space-y-12">
        <div className="text-center space-y-3">
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-medium">Case Studies</p>
          <h2 className="text-3xl md:text-4xl font-bold">Key Product Initiatives</h2>
        </div>

        <div className="space-y-8">
          {caseStudies.map((cs, i) => (
            <div
              key={i}
              className="group card-gradient border border-border rounded-xl overflow-hidden card-shadow hover:border-primary/40 transition-all duration-500"
            >
              {/* Image banner */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={cs.image}
                  alt={cs.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                {/* Floating metric badge */}
                <div className="absolute bottom-4 right-4 gradient-bg rounded-lg px-4 py-2 text-center">
                  <p className="text-xl font-bold text-primary-foreground leading-none">{cs.metric}</p>
                  <p className="text-[10px] text-primary-foreground/80 uppercase tracking-wider mt-0.5">{cs.metricLabel}</p>
                </div>
                <h3 className="absolute bottom-4 left-6 text-lg md:text-xl font-bold max-w-md">{cs.title}</h3>
              </div>

              {/* Expandable dashlet content — revealed on hover */}
              <div className="max-h-0 group-hover:max-h-[500px] transition-all duration-500 ease-in-out overflow-hidden">
                <div className="p-6 grid md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Problem</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cs.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Approach</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cs.approach}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Outcome</p>
                    <p className="text-sm text-secondary-foreground leading-relaxed font-medium">{cs.outcome}</p>
                  </div>
                </div>
              </div>

              {/* Hover hint */}
              <div className="px-6 py-3 border-t border-border/50 group-hover:hidden transition-opacity">
                <p className="text-xs text-muted-foreground">Hover to expand details →</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
