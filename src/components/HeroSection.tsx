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
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20 animate-fade-in">
              ✨ OEM Manufacturing Excellence Since 1995
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-primary-foreground mb-6 leading-tight animate-fade-in">
            Leading OEM Manufacturer for
            <span className="bg-gradient-to-r from-primary-glow to-accent bg-clip-text text-transparent"> Global & Domestic Markets</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed animate-fade-in">
            Serving exporters, buying houses, hotel chains, hospitals, online retailers, wholesalers, 
            and corporate clients worldwide and across India. Your trusted OEM partner for premium home textiles.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in">
            <Button variant="hero" size="lg" className="text-base hover-scale transition-all duration-300">
              Explore OEM Solutions
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
            <Button variant="professional" size="lg" className="text-base hover-scale transition-all duration-300">
              Get B2B Quote
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 text-primary-foreground/80 animate-fade-in">
            <div className="text-center transition-transform duration-300 hover:scale-105">
              <Award className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 text-accent" />
              <div className="text-lg sm:text-2xl font-bold">ISO 9001</div>
              <div className="text-xs sm:text-sm">Certified</div>
            </div>
            <div className="text-center transition-transform duration-300 hover:scale-105">
              <Globe className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 text-accent" />
              <div className="text-lg sm:text-2xl font-bold">45+</div>
              <div className="text-xs sm:text-sm">Countries</div>
            </div>
            <div className="text-center transition-transform duration-300 hover:scale-105">
              <Truck className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 text-accent" />
              <div className="text-lg sm:text-2xl font-bold">25+</div>
              <div className="text-xs sm:text-sm">Years Export</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 bg-primary/20 rounded-full p-4 animate-pulse hidden lg:block">
        <Award className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;