import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Globe, Truck } from "lucide-react";
import heroImage from "@/assets/hero-textile-factory.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern textile manufacturing facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="mb-6">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20">
              ✨ Premium Textile Exports Since 1995
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mb-6 leading-tight">
            Your Global Partner for 
            <span className="bg-gradient-to-r from-primary-glow to-accent bg-clip-text text-transparent"> Premium Textiles</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            From premium bed linens to luxury curtains, we export high-quality home textiles to 45+ countries. 
            ISO certified, Oeko-Tex approved, and trusted by global brands.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="hero" size="lg" className="text-base">
              Explore Our Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="professional" size="lg" className="text-base">
              Download Catalogue
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-6 text-primary-foreground/80">
            <div className="text-center">
              <Award className="h-8 w-8 mx-auto mb-2 text-accent" />
              <div className="text-2xl font-bold">ISO 9001</div>
              <div className="text-sm">Certified</div>
            </div>
            <div className="text-center">
              <Globe className="h-8 w-8 mx-auto mb-2 text-accent" />
              <div className="text-2xl font-bold">45+</div>
              <div className="text-sm">Countries</div>
            </div>
            <div className="text-center">
              <Truck className="h-8 w-8 mx-auto mb-2 text-accent" />
              <div className="text-2xl font-bold">25+</div>
              <div className="text-sm">Years Export</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 bg-primary/20 rounded-full p-4 animate-pulse hidden lg:block">
        <Award className="h-6 w-6 text-primary" />
      </div>
      <div className="absolute bottom-20 right-20 bg-accent/20 rounded-full p-6 animate-bounce hidden lg:block">
        <Globe className="h-8 w-8 text-accent" />
      </div>
    </section>
  );
};

export default HeroSection;