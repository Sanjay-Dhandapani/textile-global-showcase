import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ArrowRight, User } from "lucide-react";
import productsImage from "@/assets/textile-products.jpg";
import exportImage from "@/assets/export-shipping.jpg";
import bedroomImage from "@/assets/bedroom-showcase.jpg";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "2024 Global Textile Export Trends: What Buyers Need to Know",
      excerpt: "Explore the latest trends in international textile trade, including sustainability requirements and emerging market demands.",
      image: exportImage,
      date: "March 15, 2024",
      author: "Export Team",
      category: "Industry Insights",
    },
    {
      title: "Understanding Oeko-Tex Standards for Home Textiles",
      excerpt: "A comprehensive guide to textile certifications and why they matter for international buyers and consumers.",
      image: productsImage,
      date: "March 10, 2024",
      author: "Quality Team",
      category: "Standards",
    },
    {
      title: "Sustainable Manufacturing: Our Green Initiatives",
      excerpt: "How we're reducing environmental impact while maintaining quality in our textile production processes.",
      image: bedroomImage,
      date: "March 5, 2024",
      author: "Sustainability Team",
      category: "Sustainability",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20">
              📚 Industry Insights
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Latest News & 
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Industry Updates</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed with our expert insights on textile industry trends, 
            quality standards, and global trade developments.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card key={index} className="group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 border-2 hover:border-primary/30 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="h-3 w-3" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <Button variant="ghost" size="sm" className="p-0 h-auto font-medium text-primary hover:text-primary/80">
                  Read More
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 text-center border border-primary/20">
          <h3 className="text-2xl font-display font-bold text-foreground mb-4">
            Stay Updated with Industry News
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Subscribe to our newsletter for the latest textile industry insights, 
            export trends, and company updates delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button variant="hero" size="lg">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;