import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Globe, Truck } from "lucide-react";
import heroImage from "@/assets/hero-textile-factory.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern textile manufacturing facility"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="mb-8 animate-fade-in">
            <span className="inline-flex items-center bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-medium border border-primary/20 backdrop-blur-sm">
              ✨ OEM Manufacturing Excellence Since 1995
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-primary-foreground mb-8 leading-tight animate-fade-up">
            Leading OEM Manufacturer for
            <br />
            <span className="bg-gradient-to-r from-primary-glow to-accent bg-clip-text text-transparent animate-pulse-slow"> Global & Domestic Markets</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 mb-10 leading-relaxed max-w-3xl animate-slide-left">
            Serving exporters, buying houses, hotel chains, hospitals, online retailers, wholesalers, 
            and corporate clients worldwide and across India. Your trusted OEM partner for premium home textiles.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mb-16 animate-scale-in">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4 shadow-[var(--shadow-float)] hover:shadow-[var(--shadow-glow)] transition-all duration-300">
              Explore OEM Solutions
              <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
            <Button variant="professional" size="lg" className="text-lg px-8 py-4 backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300">
              Get B2B Quote
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-6 sm:gap-8 text-primary-foreground/80 animate-fade-up">
            <div className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10 hover:scale-105">
              <Award className="h-8 w-8 sm:h-10 sm:w-10 mx-auto mb-3 text-accent animate-float" />
              <div className="text-xl sm:text-3xl font-bold">ISO 9001</div>
              <div className="text-sm sm:text-base opacity-90">Certified</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10 hover:scale-105">
              <Globe className="h-8 w-8 sm:h-10 sm:w-10 mx-auto mb-3 text-accent animate-float" style={{ animationDelay: '0.5s' }} />
              <div className="text-xl sm:text-3xl font-bold">45+</div>
              <div className="text-sm sm:text-base opacity-90">Countries</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10 hover:scale-105">
              <Truck className="h-8 w-8 sm:h-10 sm:w-10 mx-auto mb-3 text-accent animate-float" style={{ animationDelay: '1s' }} />
              <div className="text-xl sm:text-3xl font-bold">25+</div>
              <div className="text-sm sm:text-base opacity-90">Years Export</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 hidden lg:block animate-float">
        <div className="bg-primary/20 backdrop-blur-sm rounded-full p-4 border border-primary/30">
          <Award className="h-6 w-6 text-primary" />
        </div>
      </div>
      <div className="absolute bottom-20 left-10 hidden lg:block animate-float" style={{ animationDelay: '1.5s' }}>
        <div className="bg-accent/20 backdrop-blur-sm rounded-full p-4 border border-accent/30">
          <Globe className="h-6 w-6 text-accent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;