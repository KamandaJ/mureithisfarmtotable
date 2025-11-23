import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Heart, Truck, Shield } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/fresh_vegetables_hero_image.png";

export default function Home() {
  const features = [
    {
      icon: Leaf,
      title: "Indigenous Varieties",
      description: "Authentic traditional leafy vegetables grown from heritage seeds"
    },
    {
      icon: Heart,
      title: "Nutrient Rich",
      description: "Packed with vitamins, minerals, and health benefits"
    },
    {
      icon: Truck,
      title: "Farm Fresh",
      description: "Harvested fresh and delivered within 24 hours"
    },
    {
      icon: Shield,
      title: "Sustainably Grown",
      description: "Traditional farming practices without harmful chemicals"
    }
  ];

  return (
    <div className="flex flex-col">
      <section
        className="relative h-[75vh] min-h-[500px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
        data-testid="section-hero"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Fresh Indigenous Greens<br />From Our Farm to Your Table
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover the authentic taste and nutrition of traditional African leafy vegetables,
            grown with care using time-honored farming practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button
                size="lg"
                className="text-base px-8 bg-primary/90 hover:bg-primary border border-primary-border backdrop-blur-md"
                data-testid="button-hero-shop"
              >
                Shop Fresh Greens
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 bg-background/10 hover:bg-background/20 backdrop-blur-md border-white/30 text-white hover:text-white"
                data-testid="button-hero-learn"
              >
                Learn Our Story
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold mb-4" data-testid="text-features-heading">
              Why Choose Our Indigenous Greens?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experience the difference of vegetables grown with tradition and care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover-elevate" data-testid={`card-feature-${index}`}>
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-primary/10 text-primary mb-4">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold mb-4">
              Our Indigenous Vegetables
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Rediscover traditional African greens packed with flavor and nutrition
            </p>
            <Link href="/products">
              <Button size="lg" data-testid="button-view-all-products">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
