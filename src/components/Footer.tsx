import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Globe, Linkedin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Quality", href: "#quality" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
    { label: "Careers", href: "#careers" },
  ];

  const productCategories = [
    "Bed Linens",
    "Bath Textiles",
    "Curtains & Drapes",
    "Table Linens",
    "Custom Manufacturing",
    "Bulk Orders",
  ];

  const certifications = [
    "ISO 9001:2015",
    "Oeko-Tex Standard 100",
    "GOTS Certified",
    "Export Excellence Award",
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-primary to-primary-glow p-2 rounded-lg">
                <div className="text-primary-foreground font-bold text-lg">TGS</div>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg">Textile Global Showcase</h3>
                <p className="text-xs text-secondary-foreground/70">Premium Export Solutions</p>
              </div>
            </div>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed mb-6">
              Leading the global textile export industry with premium quality products, 
              international certifications, and 25+ years of trusted expertise.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="p-2 h-auto text-secondary-foreground/60 hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 h-auto text-secondary-foreground/60 hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 h-auto text-secondary-foreground/60 hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Our Products</h4>
            <ul className="space-y-3">
              {productCategories.map((product, index) => (
                <li key={index}>
                  <span className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors duration-200 cursor-pointer">
                    {product}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Certifications */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Contact Info</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-secondary-foreground/80">
                  Industrial Area, Sector 25<br />
                  Gujarat 382025, India
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm text-secondary-foreground/80">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm text-secondary-foreground/80">exports@textileglobal.com</span>
              </div>
            </div>

            <h5 className="font-display font-medium mb-3">Certifications</h5>
            <div className="space-y-1">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span className="text-xs text-secondary-foreground/70">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-secondary-foreground/70">
              <span>© 2024 Textile Global Showcase. All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#privacy" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <div className="flex items-center space-x-1 text-secondary-foreground/70">
                <Globe className="h-3 w-3" />
                <span>Global Exports</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;