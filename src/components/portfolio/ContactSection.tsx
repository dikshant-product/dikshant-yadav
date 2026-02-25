import { Linkedin, Mail, Calendar } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-2xl text-center space-y-8">
        <div className="space-y-3">
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-medium">Get in Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold">Let's build impactful products together.</h2>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://linkedin.com/in/dikshantyadav"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-bg text-primary-foreground px-8 py-3.5 rounded-lg font-semibold text-sm inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href="mailto:dikshant@example.com"
            className="border border-border bg-secondary text-secondary-foreground px-8 py-3.5 rounded-lg font-semibold text-sm inline-flex items-center justify-center gap-2 hover:bg-muted transition-colors"
          >
            <Mail className="w-4 h-4" />
            Email
          </a>
          <a
            href="#"
            className="border border-border bg-secondary text-secondary-foreground px-8 py-3.5 rounded-lg font-semibold text-sm inline-flex items-center justify-center gap-2 hover:bg-muted transition-colors"
          >
            <Calendar className="w-4 h-4" />
            Book a Conversation
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
