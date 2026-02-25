import imgGeofencing from "@/assets/img-geofencing.jpg";
import imgScaling from "@/assets/img-scaling.jpg";
import imgDashboard from "@/assets/img-dashboard.jpg";

const featuredProjects = [
  {
    title: "Platform Scaling — ₹6.5K Cr to ₹8K+ Cr",
    description: "Scaled the B2B2C transaction platform's monthly throughput by 23%, managing 400+ partners and ~80k users with zero-downtime deployments.",
    image: imgScaling,
    tags: ["Scale", "B2B2C", "High Throughput"],
  },
  {
    title: "Store Locator Revamp",
    description: "Redesigned the partner store locator with improved search, filtering, and map-based discovery to enhance customer-to-retailer connectivity.",
    image: imgGeofencing,
    tags: ["UX", "Discovery", "Retail"],
  },
  {
    title: "Geofencing Controls",
    description: "Implemented geofencing-based location controls across partner network to enforce operational compliance and reduce fraudulent transactions.",
    image: imgGeofencing,
    tags: ["Fraud", "Compliance", "Location"],
  },
];

const smallProjects = [
  "Same Day Settlement (SDS)",
  "SMS workflow optimisation",
  "Partner API integrations",
  "Pricing models & configurations",
  "Retailer training module",
  "Platform validation & fraud controls",
  "B2B portal workflow automation",
  "Settlement observability dashboards",
  "Denomination capture system",
];

const ProjectsGrid = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-5xl space-y-14">
        <div className="text-center space-y-3">
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-medium">More Work</p>
          <h2 className="text-3xl md:text-4xl font-bold">Additional Product Projects</h2>
        </div>

        {/* Featured project cards with images & hover dashlets */}
        <div className="grid md:grid-cols-3 gap-6">
          {featuredProjects.map((project, i) => (
            <div
              key={i}
              className="group card-gradient border border-border rounded-xl overflow-hidden card-shadow hover:border-primary/40 transition-all duration-300"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>
              <div className="p-5 space-y-3">
                <h3 className="text-sm font-bold leading-snug">{project.title}</h3>
                {/* Dashlet: expands on hover */}
                <div className="max-h-0 group-hover:max-h-40 transition-all duration-500 overflow-hidden">
                  <p className="text-xs text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-secondary border border-border rounded px-2 py-0.5 text-[10px] text-muted-foreground font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Smaller projects grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {smallProjects.map((project) => (
            <div
              key={project}
              className="card-gradient border border-border rounded-lg px-4 py-3 text-xs text-secondary-foreground font-medium hover:border-primary/30 transition-colors duration-300 card-shadow"
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
