const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto max-w-3xl text-center space-y-6">
        <p className="text-sm tracking-[0.3em] uppercase text-primary font-medium">About</p>
        <h2 className="text-3xl md:text-4xl font-bold">Building products that scale</h2>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          Dikshant is a Product Manager experienced in building large-scale B2B platforms and payment systems.
          He combines product strategy, technical understanding, and execution excellence to deliver scalable systems,
          improve reliability, and automate operational workflows. Strong focus on data-driven decision making,
          platform thinking, and cross-functional collaboration.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
