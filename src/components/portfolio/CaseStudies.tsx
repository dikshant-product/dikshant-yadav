const caseStudies = [
  {
    title: "Settlement Automation & In-house Migration",
    problem: "External settlement dependencies caused risk and manual effort.",
    approach: "Led migration of 350+ enterprise accounts to in-house settlement system, defined cutover strategy, aligned cross-functional teams, and implemented monitoring.",
    outcome: "Reduced systemic risk, improved reliability, unlocked ~₹10 Cr annual float income.",
  },
  {
    title: "Denomination Capture & Data Accuracy",
    problem: "Lack of denomination-level data reduced traceability.",
    approach: "Designed and rolled out denomination capture with validations and phased deployment.",
    outcome: "Improved data traceability, audit readiness, and transaction-level cash accuracy.",
  },
  {
    title: "Platform Observability & Failure Reduction",
    problem: "High transaction failures and slower incident response.",
    approach: "Redesigned key user journeys, built dashboards, alerts and monitoring workflows.",
    outcome: "Reduced monthly failures from ~18k to <2k and improved MTTD/MTTR via faster triage.",
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

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((cs, i) => (
            <div
              key={i}
              className="card-gradient border border-border rounded-xl p-6 card-shadow hover:border-primary/30 transition-colors duration-300 flex flex-col"
            >
              <h3 className="text-base font-bold mb-4 leading-snug">{cs.title}</h3>
              <div className="space-y-3 flex-1">
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Problem</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cs.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Approach</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cs.approach}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Outcome</p>
                  <p className="text-sm text-secondary-foreground leading-relaxed font-medium">{cs.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
