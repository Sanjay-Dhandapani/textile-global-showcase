import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, Mail, Phone, Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Markets", href: "#markets" },
    { label: "Services", href: "#services" },
    { label: "Products", href: "#products" },
    { label: "Quality", href: "#quality" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/98 backdrop-blur-md border-b border-border/50 shadow-sm">
      {/* Top Bar */}
      <div className="border-b border-border/30 bg-gradient-to-r from-secondary/20 to-accent/10">
        <div className="container mx-auto px-4 py-1.5">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between text-sm text-muted-foreground">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <div className="flex items-center gap-1">
                <Mail className="h-3 w-3 flex-shrink-0" />
                <span className="break-all sm:break-normal">exports@sivagarments.com</span>
              </div>
              <div className="flex items-center gap-1">
                <Phone className="h-3 w-3 flex-shrink-0" />
                <span className="whitespace-nowrap">+91 98765 43210</span>
              </div>
            </div>

            <div className="flex items-center gap-1 sm:justify-end">
              <Globe className="h-3 w-3 flex-shrink-0" />
              <span className="text-xs sm:text-sm">OEM for Global & Domestic Markets</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="src/assets/siva-garments-logo-refined.png" 
              alt="Siva Garments Logo" 
              className="h-10 w-auto transition-transform duration-300 hover:scale-105"
            />
            <div className="hidden sm:block">
              <h1 className="font-display font-bold text-xl text-foreground">
                Siva Garments
              </h1>
              <p className="text-xs text-muted-foreground">Loomed for Your Home</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex items-center justify-center rounded-md border border-border/60 bg-background/70 px-3 py-2 text-foreground/80 shadow-sm transition-colors hover:text-foreground hover:bg-background"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              title={theme === "dark" ? "Light mode" : "Dark mode"}
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <Button
              variant="hero"
              size="sm"
              className="px-4 py-2 text-sm font-medium"
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 py-3 border-t border-border/50 bg-background/95 backdrop-blur-sm">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-1.5 px-2 rounded-md hover:bg-primary/5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button
                variant="hero"
                size="sm"
                className="mt-3 w-full"
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                  setIsMenuOpen(false);
                }}
              >
                Get Quote
              </Button>

              <button
                type="button"
                onClick={toggleTheme}
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md border border-border/60 bg-background/70 px-4 py-2 text-sm font-medium text-foreground/80 shadow-sm transition-colors hover:text-foreground hover:bg-background"
                aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              >
                {theme === "dark" ? (
                  <>
                    <Sun className="h-4 w-4" /> Light mode
                  </>
                ) : (
                  <>
                    <Moon className="h-4 w-4" /> Dark mode
                  </>
                )}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;