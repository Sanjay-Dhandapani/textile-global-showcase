import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageCircle, Languages } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Factory Address",
      details: "Industrial Area, Sector 25\nTextile Hub, Tamil Nadu 641001, India",
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: "+91 98765 43210\n+91 87654 32109",
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: "exports@sivagarments.com\ninfo@sivagarments.com",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Sat: 9:00 AM - 6:00 PM\nSunday: Closed (IST)",
    },
    {
      icon: Languages,
      title: "Languages Supported",
      details: "English • Hindi • Telugu\nMalayalam • Urdu",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-muted to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/20">
              📞 Get In Touch
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Ready to Start Your 
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Export Journey?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with our export team for quotes, samples, or any inquiries. 
            We're here to support your textile sourcing needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-2 border-primary/20 shadow-[var(--shadow-card)]">
              <CardContent className="p-8">
                <h3 className="text-xl font-display font-semibold text-foreground mb-6">
                  Send Us Your Inquiry
                </h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Company Name *
                      </label>
                      <Input placeholder="Your company name" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input type="email" placeholder="your@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input placeholder="+1 (555) 000-0000" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Country *
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="us">United States</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="ca">Canada</SelectItem>
                          <SelectItem value="de">Germany</SelectItem>
                          <SelectItem value="fr">France</SelectItem>
                          <SelectItem value="au">Australia</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Product Interest
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select product category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bed-linens">Bed Linens</SelectItem>
                          <SelectItem value="bath-textiles">Bath Textiles</SelectItem>
                          <SelectItem value="curtains">Curtains & Drapes</SelectItem>
                          <SelectItem value="table-linens">Table Linens</SelectItem>
                          <SelectItem value="custom">Custom Products</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea 
                      placeholder="Tell us about your requirements, quantities, target markets, and any specific questions..."
                      rows={5}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="hero" size="lg" className="flex-1">
                      Send Inquiry
                    </Button>
                    <Button variant="export" size="lg" className="flex-1">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp Us
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="border-2 hover:border-primary/30 transition-colors duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-3">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-display font-semibold text-foreground mb-2">
                          {info.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                          {info.details}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Map Placeholder */}
            <Card className="border-2 border-primary/20">
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-sm font-medium text-foreground">Factory Location</p>
                    <p className="text-xs text-muted-foreground">Interactive map</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;