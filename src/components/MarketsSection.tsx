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
    <section id="markets" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20 mb-6 animate-fade-in">
            🌍 Our Markets
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 animate-fade-in">
            Comprehensive OEM Solutions for 
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Every Business</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            From global exporters to local businesses, we provide tailored textile manufacturing 
            solutions that meet the unique needs of diverse market segments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {markets.map((market, index) => {
            const Icon = market.icon;
            return (
              <Card 
                key={index} 
                className="p-6 hover:shadow-[var(--shadow-card)] transition-all duration-300 border-2 hover:border-primary/30 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-full p-3 w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-foreground mb-3">
                    {market.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {market.description}
                  </p>
                  <ul className="space-y-1">
                    {market.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-primary flex items-center">
                        <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10">
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">
              Ready to Partner with Us?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you're an exporter, retailer, or institutional buyer, we have the expertise 
              and capacity to meet your textile manufacturing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                <Users className="mr-2 h-5 w-5" />
                Become a Partner
              </Button>
              <Button variant="professional" size="lg">
                <Package className="mr-2 h-5 w-5" />
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