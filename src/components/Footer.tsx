import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Linkedin, Instagram, Facebook } from "lucide-react";


// Footer component for Siva Garments website
function Footer() {
  // Navigation links for quick access
  const navigationLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Products", href: "#products" },
    { label: "Quality", href: "#quality" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  // Company certifications
  const companyCertifications = [
    "ISO 9001:2015",
    "Oeko-Tex Standard 100",
    "GOTS Certified",
    "Export Excellence Award",
  ];

  // Main render
  return (
    <footer className="bg-background text-foreground border-t border-border">
      {/* Main Footer Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info Block */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-primary to-primary-glow p-2 rounded-lg">
                <div className="text-primary-foreground font-bold text-lg">SG</div>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg">Siva Garments</h3>
                <p className="text-xs text-muted-foreground">Premium Home Textile Manufacturer</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Leading the home textile industry with premium quality products and trusted expertise.
            </p>
            <div className="flex space-x-3">
              {/* Social Media Buttons */}
              <Button variant="ghost" size="sm" className="p-2 h-auto text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 h-auto text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 h-auto text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {navigationLinks.map((nav, idx) => (
                <li key={idx}>
                  <a
                    href={nav.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {nav.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info & Certifications */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Contact Info</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground break-words">
                  Siva Garments, Industrial Area<br />
                  No 12, Poochakkadu 3rd Street,Pazhagodown,Mangalam road,Tirupur - 641604.
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">exports@sivagarments.com</span>
              </div>
            </div>

            <h5 className="font-display font-medium mb-3">Certifications</h5>
            <div className="space-y-1">
              {companyCertifications.map((cert, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span className="text-xs text-muted-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar Section */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>© 2025 Siva Garments. All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;