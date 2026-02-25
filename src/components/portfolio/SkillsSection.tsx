const pmSkills = [
  "Product discovery", "Personas & user journeys", "UI/UX collaboration",
  "Roadmapping", "PRDs", "Agile delivery", "Backlog grooming",
  "Sprint planning", "Data-driven decisions", "Experimentation",
  "Platform thinking", "Risk-based trade-offs", "Stakeholder alignment",
  "Cross-functional leadership",
];

const techSkills = [
  "System workflows", "APIs & integrations", "Settlement systems",
  "Dashboards & analytics", "SQL basics", "Observability & monitoring",
  "Security-first design", "Automation workflows", "Kibana", "Data analysis",
];

const tools = [
  "Jira", "Confluence", "Figma", "Excel", "SQL",
  "Kibana", "GenAI tools", "Internal platform tools", "Workflow automation systems",
];

const interests = [
  "Consumer technology", "AI & SaaS products", "Racket sports",
  "Travel & adventure", "Fitness & nutrition", "Fine arts",
];

const TagGroup = ({ title, label, tags }: { title: string; label: string; tags: string[] }) => (
  <div className="space-y-4">
    <div className="space-y-1">
      <p className="text-sm tracking-[0.3em] uppercase text-primary font-medium">{label}</p>
      <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="bg-secondary border border-border rounded-md px-3 py-1.5 text-xs text-secondary-foreground font-medium"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto max-w-4xl space-y-14">
        <TagGroup label="Capabilities" title="Product Management" tags={pmSkills} />
        <TagGroup label="Technical" title="Technical & Data Skills" tags={techSkills} />
        <TagGroup label="Tools" title="Tools & Technologies" tags={tools} />
        <TagGroup label="Beyond Work" title="Interests" tags={interests} />
      </div>
    </section>
  );
};

export default SkillsSection;
