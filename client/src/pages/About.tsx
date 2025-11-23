import { Card, CardContent } from "@/components/ui/card";
import { Heart, Leaf, Users, Sprout } from "lucide-react";
import farmerImage from "@assets/generated_images/farmer_in_field_photo.png";

export default function About() {
  const values = [
    {
      icon: Leaf,
      title: "Traditional Heritage",
      description: "We preserve indigenous vegetable varieties and traditional farming wisdom passed down through generations."
    },
    {
      icon: Heart,
      title: "Health & Nutrition",
      description: "Our vegetables are packed with essential nutrients often lacking in modern commercial greens."
    },
    {
      icon: Sprout,
      title: "Sustainable Farming",
      description: "We practice organic, chemical-free farming that respects the land and supports biodiversity."
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Supporting local food systems and connecting people with authentic, culturally significant foods."
    }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold mb-4" data-testid="text-about-heading">
            Our Story
          </h1>
          <p className="text-lg text-muted-foreground">
            Growing indigenous vegetables with tradition, passion, and care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-semibold mb-4" data-testid="text-mission-heading">
                Our Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We are a small-scale farm dedicated to reviving and promoting indigenous African leafy vegetables.
                These traditional greens—amaranth, black nightshade, cowpea leaves, and swiss chard—have nourished
                communities for generations but are often overlooked in favor of imported varieties.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-2xl font-semibold mb-4">
                Why Indigenous Vegetables?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Indigenous vegetables are perfectly adapted to our local climate, require fewer resources to grow,
                and offer superior nutrition compared to many commercial greens. They're resilient, flavorful,
                and carry deep cultural significance in our communities.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src={farmerImage}
              alt="Our farmer tending to indigenous vegetables in the field"
              className="w-full h-full object-cover rounded-md"
              data-testid="img-about-farmer"
            />
          </div>
        </div>

        <div className="mb-12">
          <h2 className="font-serif text-2xl font-semibold mb-6 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="hover-elevate" data-testid={`card-value-${index}`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-primary/10 text-primary flex-shrink-0">
                      <value.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="bg-muted/30">
          <CardContent className="p-8">
            <h2 className="font-serif text-2xl font-semibold mb-4 text-center">
              Our Farming Practice
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Every morning, we harvest fresh greens at their peak nutrition and flavor. We use traditional
                farming methods combined with modern organic practices—no synthetic pesticides or chemical fertilizers.
                Our vegetables grow in healthy, living soil enriched with natural compost.
              </p>
              <p>
                We save seeds from our best plants each season, maintaining genetic diversity and adapting
                our varieties to local conditions. This practice ensures our vegetables become stronger and
                more flavorful with each generation.
              </p>
              <p>
                When you purchase from us, you're not just getting fresh vegetables—you're supporting
                sustainable agriculture, preserving cultural food heritage, and investing in your health
                and wellbeing.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
