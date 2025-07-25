import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Eye } from "lucide-react";
import productsImage from "@/assets/textile-products.jpg";
import bedroomImage from "@/assets/bedroom-showcase.jpg";

const ProductsSection = () => {
  const productCategories = [
    {
      title: "Bed Linens",
      description: "Premium cotton and linen bedding sets, sheets, pillowcases",
      image: bedroomImage,
      specs: ["100% Cotton", "Thread Count: 200-800", "Sizes: Single to King"],
    },
    {
      title: "Bath Textiles",
      description: "Luxury towels, bath mats, and bathroom accessories",
      image: productsImage,
      specs: ["Egyptian Cotton", "GSM: 450-650", "Multiple Sizes"],
    },
    {
      title: "Curtains & Drapes",
      description: "Elegant window treatments for residential and commercial use",
      image: productsImage,
      specs: ["Various Fabrics", "Custom Sizes", "Blackout Options"],
    },
    {
      title: "Table Linens",
      description: "Sophisticated tablecloths, placemats, and napkins",
      image: bedroomImage,
      specs: ["Premium Fabrics", "Stain Resistant", "Custom Designs"],
    },
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Our Product
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Collections</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive range of premium home textiles, crafted with precision 
            and designed for global markets.
          </p>
        </div>

        {/* Featured Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {productCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 border-2 hover:border-primary/30">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <Button variant="ghost" size="sm" className="m-4 text-primary-foreground bg-primary/80 hover:bg-primary">
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                  {category.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {category.description}
                </p>
                <div className="space-y-1 mb-4">
                  {category.specs.map((spec, specIndex) => (
                    <div key={specIndex} className="flex items-center text-xs text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {spec}
                    </div>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Request Sample
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/20">
          <h3 className="text-2xl font-display font-bold text-foreground mb-4">
            Need Custom Products?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            We offer bespoke manufacturing services with your specifications. 
            From design to delivery, we ensure quality at every step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Download Full Catalogue
            </Button>
            <Button variant="export" size="lg">
              Discuss Custom Orders
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;