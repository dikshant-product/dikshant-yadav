const metrics = [
  "Scaled high-volume B2B transaction platform",
  "350+ enterprise partner migrations",
  "40k+ retailer enablement via training",
  "Reduced monthly failures significantly",
  "100+ operational hours saved via automation",
  "~₹10 Cr annual float impact",
  "~₹50 Lakh annual cost savings",
];

const MetricsStrip = () => {
  return (
    <section className="border-y border-border bg-secondary/50 py-10 px-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {metrics.map((metric) => (
            <span
              key={metric}
              className="bg-card border border-border rounded-lg px-4 py-2.5 text-xs md:text-sm text-secondary-foreground font-medium card-shadow"
            >
              {metric}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsStrip;
