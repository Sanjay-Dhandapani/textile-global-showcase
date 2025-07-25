import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Factory, Users, Award, TrendingUp } from "lucide-react";
import exportImage from "@/assets/export-shipping.jpg";

const AboutSection = () => {
  const achievements = [
    {
      icon: Factory,
      title: "₹4 Crores",
      subtitle: "Annual Turnover",
      description: "Consistent growth with strong financial performance",
    },
    {
      icon: Users,
      title: "208 Staff",
      subtitle: "8 Full-time + 200 Contract",
      description: "Skilled workforce ensuring quality production",
    },
    {
      icon: Award,
      title: "40 Machines",
      subtitle: "Modern Equipment",
      description: "Latest technology for precision manufacturing",
    },
    {
      icon: TrendingUp,
      title: "22 Companies",
      subtitle: "Trusted Supplier",
      description: "Long-term partnerships with major brands",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="mb-6">
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20">
                🏭 About Our Company
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Leading Home Textile Manufacturing with 
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> 25+ Years Excellence</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Founded in 1995, Siva Garments has grown from a small family business 
                to a trusted name in premium home textile manufacturing. We specialize in 
                high-quality garments and home textiles with precision craftsmanship.
              </p>
              <p>
                Our comprehensive services include Picoting, Marrowing, Computer Embroidery, 
                Pintech, Partack, and Kaja Button work, followed by our complete manufacturing 
                process of Cutting, Stitching, Trimming, Checking, Ironing, and Packing.
              </p>
              <p>
                With 40 modern machines, ₹4 crores annual turnover, and partnerships with 22 
                companies, we maintain the highest standards while serving clients across multiple regions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                Our Factory Tour
              </Button>
              <Button variant="professional" size="lg">
                Certifications
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={exportImage}
              alt="Global textile export operations"
              className="rounded-2xl shadow-[var(--shadow-elegant)] w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 bg-background/90 backdrop-blur-sm rounded-lg p-4 border border-border">
              <h4 className="font-display font-semibold text-foreground mb-1">Global Reach</h4>
              <p className="text-sm text-muted-foreground">Exporting to 45+ countries worldwide</p>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card key={index} className="text-center p-6 hover:shadow-[var(--shadow-card)] transition-all duration-300 border-2 hover:border-primary/30 group">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-primary mx-auto" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-1">
                    {achievement.title}
                  </h3>
                  <h4 className="text-sm font-medium text-primary mb-2">
                    {achievement.subtitle}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;