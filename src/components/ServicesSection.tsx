import { Card, CardContent } from "@/components/ui/card";
import { 
  Scissors, 
  Shirt, 
  CheckCircle, 
  Package, 
  Zap, 
  Settings,
  Palette,
  Target,
  Layers,
  Circle
} from "lucide-react";

const ServicesSection = () => {
  const specializedServices = [
    {
      icon: Target,
      title: "Picoting",
      description: "Precision edge finishing for professional textile appearance",
    },
    {
      icon: Layers,
      title: "Marrowing",
      description: "Advanced fabric joining technique for seamless connections",
    },
    {
      icon: Palette,
      title: "Computer Embroidery",
      description: "Automated embroidery with intricate designs and patterns",
    },
    {
      icon: Zap,
      title: "Pintech",
      description: "Advanced pin technology for precise fabric handling",
    },
    {
      icon: Settings,
      title: "Partack",
      description: "Specialized textile processing for enhanced durability",
    },
    {
      icon: Circle,
      title: "Kaja Button",
      description: "Premium button attachment and finishing services",
    },
  ];

  const manufacturingProcess = [
    {
      icon: Scissors,
      title: "Cutting",
      description: "Precision cutting using advanced machinery and templates",
    },
    {
      icon: Shirt,
      title: "Stitching",
      description: "Expert stitching with quality threads and techniques",
    },
    {
      icon: CheckCircle,
      title: "Trimming",
      description: "Careful trimming for clean, professional finishing",
    },
    {
      icon: CheckCircle,
      title: "Checking",
      description: "Thorough quality inspection at every stage",
    },
    {
      icon: Zap,
      title: "Ironing",
      description: "Professional pressing for perfect presentation",
    },
    {
      icon: Package,
      title: "Packing",
      description: "Secure packaging for safe delivery to clients",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20 mb-4">
            🛠️ Our Services & Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Complete OEM Manufacturing 
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> & White Label Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            End-to-end textile manufacturing services for exporters, retailers, hotels, hospitals, and B2B clients. 
            From specialized techniques to private label production.
          </p>
        </div>

        {/* Specialized Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-display font-bold text-foreground mb-8 text-center">
            Specialized Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializedServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-[var(--shadow-card)] transition-all duration-300 border-2 hover:border-primary/30 group animate-fade-in">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-full p-3 w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-display font-semibold text-foreground mb-2">
                      {service.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Manufacturing Process */}
        <div>
          <h3 className="text-2xl font-display font-bold text-foreground mb-8 text-center">
            Manufacturing Process
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {manufacturingProcess.map((process, index) => {
              const Icon = process.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-[var(--shadow-card)] transition-all duration-300 border-2 hover:border-accent/30 group animate-fade-in">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-full p-3 w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <h4 className="text-lg font-display font-semibold text-foreground mb-2">
                      {process.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {process.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;