import React from "react";
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, ArrowRight, User } from 'lucide-react';
import productsImage from '@/assets/textile-products.jpg';
import exportImage from '@/assets/export-shipping.jpg';
import bedroomImage from '@/assets/bedroom-showcase.jpg';

function BlogSection() {
  // Blog posts data
  const blogPosts = [
    {
      title: 'OEM Manufacturing for Hotel Chains: Best Practices',
      excerpt: 'Learn how we serve major hotel chains with custom linens, consistent quality, and reliable delivery schedules.',
      image: exportImage,
      date: 'March 15, 2024',
      author: 'OEM Team',
      category: 'OEM Solutions',
    },
    {
      title: 'White Label vs Private Label: Choosing Your Strategy',
      excerpt: 'Understanding the differences and benefits of white label manufacturing for retailers and distributors.',
      image: productsImage,
      date: 'March 10, 2024',
      author: 'Business Team',
      category: 'Business Strategy',
    },
    {
      title: 'Serving Domestic B2B Markets: Success Stories',
      excerpt: "How we've helped Indian businesses scale with our OEM solutions across various market segments.",
      image: bedroomImage,
      date: 'March 5, 2024',
      author: 'Domestic Sales',
      category: 'Case Studies',
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
            OEM Insights &
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Business Updates</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how we help businesses succeed with our OEM solutions, 
            industry insights, and success stories from various market segments.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map(function(post, idx) {
            return (
              <Card key={idx} className="group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 border-2 hover:border-primary/30 overflow-hidden">
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
            );
          })}
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
}

export default BlogSection;