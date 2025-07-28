import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Store, 
  Factory, 
  Truck, 
  ShoppingBag, 
  Hotel, 
  Heart, 
  Gift, 
  Home,
  Globe,
  Users,
  Package
} from "lucide-react";

const MarketsSection = () => {
  const markets = [
    {
      icon: Globe,
      title: "Exporters & Buying Houses",
      description: "Bulk orders, quality compliance, export documentation, flexible MOQs",
      features: ["Global shipping", "Quality certificates", "Timely delivery"]
    },
    {
      icon: Hotel,
      title: "Hotel & Hospital Chains",
      description: "Custom-made linens, frequent restocking, color consistency",
      features: ["Institutional quality", "Fast turnaround", "Bulk pricing"]
    },
    {
      icon: ShoppingBag,
      title: "Online Retailers",
      description: "Dropship ready, packaging support, SKU customization",
      features: ["E-commerce ready", "Custom packaging", "Product variety"]
    },
    {
      icon: Store,
      title: "Wholesalers & Distributors",
      description: "High-capacity orders, diverse SKUs, competitive B2B pricing",
      features: ["Volume discounts", "Multi-SKU support", "Regular supply"]
    },
    {
      icon: Factory,
      title: "White Label Manufacturers",
      description: "Private label solutions, custom branding, tailored designs",
      features: ["Custom branding", "Quality assurance", "Design flexibility"]
    },
    {
      icon: Gift,
      title: "Corporate Gifting",
      description: "Custom embroidery, elegant packaging, seasonal offerings",
      features: ["Custom embroidery", "Gift packaging", "Bulk orders"]
    },
    {
      icon: Home,
      title: "Home Improvement Firms",
      description: "Trend-driven designs, coordinated collections, interior solutions",
      features: ["Design consultation", "Trend alignment", "Collection sets"]
    },
    {
      icon: Building2,
      title: "Indian B2B Manufacturers",
      description: "Domestic partnerships, local supply chain, competitive rates",
      features: ["Local expertise", "Quick delivery", "Flexible terms"]
    }
  ];

  return (
    <section id="markets" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="inline-flex items-center bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-medium border border-primary/20 mb-8 animate-fade-in backdrop-blur-sm">
            🌍 Our Markets
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8 animate-fade-up">
            Comprehensive OEM Solutions for 
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Every Business</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto animate-slide-left leading-relaxed">
            From global exporters to local businesses, we provide tailored textile manufacturing 
            solutions that meet the unique needs of diverse market segments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {markets.map((market, index) => {
            const Icon = market.icon;
            return (
              <Card 
                key={index} 
                className="group p-8 hover:shadow-[var(--shadow-float)] transition-all duration-500 border-2 hover:border-primary/30 bg-card/80 backdrop-blur-sm hover:bg-card animate-fade-up hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-4 w-16 h-16 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {market.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                    {market.description}
                  </p>
                  <div className="space-y-2">
                    {market.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-primary font-medium">
                        <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center animate-scale-in">
          <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-3xl p-12 border-2 border-primary/10 backdrop-blur-sm shadow-[var(--shadow-elegant)]">
            <h3 className="text-3xl font-display font-bold text-foreground mb-6">
              Ready to Partner with Us?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
              Whether you're an exporter, retailer, or institutional buyer, we have the expertise 
              and capacity to meet your textile manufacturing needs with precision and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="hero" size="lg" className="px-8 py-4 text-lg shadow-[var(--shadow-float)] hover:shadow-[var(--shadow-glow)] transition-all duration-300">
                <Users className="mr-3 h-6 w-6" />
                Become a Partner
              </Button>
              <Button variant="professional" size="lg" className="px-8 py-4 text-lg backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300">
                <Package className="mr-3 h-6 w-6" />
                Request Samples
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketsSection;