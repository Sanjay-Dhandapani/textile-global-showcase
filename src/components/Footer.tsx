import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Globe, Linkedin, Instagram, Facebook } from "lucide-react";


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

  // Supported languages (not currently displayed)
  const supportedLanguages = ["English", "Hindi", "Telugu", "Malayalam", "Urdu"];

  // Company certifications
  const companyCertifications = [
    "ISO 9001:2015",
    "Oeko-Tex Standard 100",
    "GOTS Certified",
    "Export Excellence Award",
  ];

  // Main render
  return (
    <footer className="bg-secondary text-secondary-foreground">
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
                <p className="text-xs text-secondary-foreground/70">Premium Home Textile Manufacturer</p>
              </div>
            </div>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed mb-6">
              Leading the home textile industry with premium quality products and trusted expertise.
            </p>
            <div className="flex space-x-3">
              {/* Social Media Buttons */}
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

          {/* Quick Navigation Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {navigationLinks.map((nav, idx) => (
                <li key={idx}>
                  <a
                    href={nav.href}
                    className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors duration-200"
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
                <span className="text-sm text-secondary-foreground/80">
                  Siva Garments, Industrial Area<br />
                  No 12, Poochakkadu 3rd Street,Pazhagodown,Mangalam road,Tirupur - 641604.
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm text-secondary-foreground/80">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm text-secondary-foreground/80">exports@sivagarments.com</span>
              </div>
            </div>

            <h5 className="font-display font-medium mb-3">Certifications</h5>
            <div className="space-y-1">
              {companyCertifications.map((cert, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span className="text-xs text-secondary-foreground/70">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar Section */}
      <div className="border-t border-secondary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-secondary-foreground/70">
              <span>© 2025 Siva Garments. All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#privacy" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-secondary-foreground/70 hover:text-primary transition-colors">
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