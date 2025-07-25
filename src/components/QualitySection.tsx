import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, CheckCircle, Globe, Leaf } from "lucide-react";

const QualitySection = () => {
  const certifications = [
    {
      icon: Shield,
      title: "ISO 9001:2015",
      description: "Quality Management System certification ensuring consistent product quality",
      badge: "Certified",
    },
    {
      icon: Leaf,
      title: "Oeko-Tex Standard 100",
      description: "Textile products tested for harmful substances and environmentally friendly",
      badge: "Approved",
    },
    {
      icon: Globe,
      title: "Export Excellence",
      description: "Government of India recognition for outstanding export performance",
      badge: "Awarded",
    },
    {
      icon: CheckCircle,
      title: "GOTS Certification",
      description: "Global Organic Textile Standard for organic fiber processing",
      badge: "Certified",
    },
  ];

  const qualityProcesses = [
    "Raw Material Inspection",
    "In-Process Quality Checks",
    "Pre-Shipment Testing",
    "Third-Party Audits",
    "Customer Feedback Integration",
    "Continuous Improvement",
  ];

  return (
    <section id="quality" className="py-20 bg-gradient-to-br from-muted to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/20">
              🏆 Quality & Certifications
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Uncompromising 
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Quality Standards</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our commitment to excellence is backed by international certifications and 
            rigorous quality control processes at every stage of production.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <Card key={index} className="group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 border-2 hover:border-accent/30">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-accent mx-auto" />
                  </div>
                  <div className="mb-2">
                    <span className="bg-accent/20 text-accent px-2 py-1 rounded-full text-xs font-medium">
                      {cert.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quality Process */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                Our Quality Process
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We follow a comprehensive 6-step quality assurance process to ensure 
                every product meets international standards and customer expectations.
              </p>
              <Button variant="export" size="lg">
                Download Quality Manual
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {qualityProcesses.map((process, index) => (
                <div key={index} className="flex items-center space-x-3 bg-background/50 rounded-lg p-3 border border-border/50">
                  <div className="bg-accent rounded-full p-1">
                    <CheckCircle className="h-4 w-4 text-accent-foreground" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{process}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-display font-semibold text-foreground mb-6">
            Trusted by Leading Brands Worldwide
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-muted rounded-lg px-6 py-3 text-muted-foreground font-medium">
                Brand Partner {index + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;