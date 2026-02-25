const projects = [
  "Same Day Settlement (SDS)",
  "Geofencing controls across partner locations",
  "Store locator revamp",
  "SMS workflow optimisation",
  "Partner API integrations",
  "Pricing models and partner configurations",
  "Retailer training module implementation",
  "Platform validation and fraud controls",
  "B2B portal workflow automation",
  "Settlement observability dashboards",
];

const ProjectsGrid = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-4xl space-y-10">
        <div className="text-center space-y-3">
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-medium">More Work</p>
          <h2 className="text-3xl md:text-4xl font-bold">Additional Product Projects</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div
              key={project}
              className="card-gradient border border-border rounded-lg px-5 py-4 text-sm text-secondary-foreground font-medium hover:border-primary/30 transition-colors duration-300 card-shadow"
            >
              {project}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
