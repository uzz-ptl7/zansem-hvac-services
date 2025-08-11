import { Card, CardContent, CardHeader } from "@/components/ui/enhanced-card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Uwimana",
      location: "Kimironko",
      rating: 5,
      text: "Excellent service! The team installed our new AC system quickly and professionally. The pricing was fair and the work quality exceeded our expectations. Highly recommended!",
      service: "AC Installation"
    },
    {
      name: "John Mugisha",
      location: "Gasabo District",
      rating: 5,
      text: "When our AC broke down during the hot season, Zansem Services came to our rescue with same-day emergency service. Professional, efficient, and reasonably priced.",
      service: "Emergency Repair"
    },
    {
      name: "Grace Nkusi",
      location: "Kigali City Center",
      rating: 5,
      text: "We needed a complete HVAC system for our new office building. The team provided excellent consultation, installation, and follow-up service. Very satisfied with their work.",
      service: "Commercial Installation"
    },
    {
      name: "Paul Niyonshuti",
      location: "Kicukiro",
      rating: 5,
      text: "Great maintenance service! They keep our AC running efficiently and always explain what they're doing. The annual maintenance plan has saved us money in the long run.",
      service: "Maintenance Service"
    },
    {
      name: "Marie Mukandoli",
      location: "Nyarugenge",
      rating: 5,
      text: "Professional and reliable! The ventilation system they installed in our restaurant works perfectly. The team was clean, punctual, and very knowledgeable.",
      service: "Ventilation Installation"
    },
    {
      name: "David Uwizeye",
      location: "Kimironko",
      rating: 5,
      text: "Fantastic customer service from start to finish. They diagnosed the problem quickly, provided a clear quote, and fixed our heating system efficiently. Will definitely use again.",
      service: "Heating Repair"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers 
            across Kigali have to say about our HVAC services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} variant="testimonial" className="h-full">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                  <Quote className="w-6 h-6 text-primary/30" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                    {testimonial.service}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 text-center">
          <Card variant="elevated" className="p-8 bg-gradient-cool text-white">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">4.9/5</div>
                <div className="text-white/90">Average Rating</div>
                <div className="flex justify-center mt-2">
                  {renderStars(5)}
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-white/90">Happy Customers</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-white/90">Customer Satisfaction</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;