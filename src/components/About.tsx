import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/enhanced-card";
import { Button } from "@/components/ui/enhanced-button";
import { Award, Users, Clock, MapPin } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: Award,
      number: "5+",
      label: "Years Experience",
      description: "Serving Kigali with professional HVAC solutions"
    },
    {
      icon: Users,
      number: "500+",
      label: "Satisfied Clients",
      description: "Residential and commercial customers"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Emergency Service",
      description: "Always available when you need us most"
    },
    {
      icon: MapPin,
      number: "All",
      label: "Kigali Areas",
      description: "Complete coverage across the city"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Zansem Services
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Zansem Services is Kigali's trusted HVAC contractor, specializing in 
                heating, ventilation, and air conditioning solutions for both residential 
                and commercial properties. Located in Kimironko Sector, we've been 
                serving the greater Kigali area with professional, reliable service.
              </p>
              <p>
                Our mission is to provide exceptional HVAC services that keep your 
                spaces comfortable, energy-efficient, and properly ventilated. We 
                combine technical expertise with customer-focused service to deliver 
                solutions that exceed expectations.
              </p>
              <p>
                Whether you need a new AC installation, emergency repair, or 
                preventive maintenance, our certified technicians are equipped 
                with the latest tools and knowledge to get the job done right 
                the first time.
              </p>
            </div>

            <div className="mt-8 p-6 bg-frost-grey rounded-lg border-l-4 border-l-primary">
              <h3 className="text-xl font-semibold text-foreground mb-2">Our Commitment</h3>
              <p className="text-muted-foreground">
                We stand behind every installation and repair with comprehensive warranties 
                and ongoing support. Your comfort and satisfaction are our top priorities.
              </p>
            </div>

            <div className="mt-8">
              <Button 
                variant="cta" 
                size="lg"
                onClick={scrollToContact}
                className="text-lg"
              >
                Get Your Free Estimate
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} variant="elevated" className="text-center p-6">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-gradient-cool rounded-lg flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-1">
                      {stat.number}
                    </div>
                    <CardTitle className="text-lg">{stat.label}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground">
                      {stat.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Why Choose Zansem Services?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card variant="default" className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-cool rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Licensed & Certified</h4>
              <p className="text-muted-foreground">
                All our technicians are fully licensed and certified to ensure the highest 
                quality of service and safety standards.
              </p>
            </Card>

            <Card variant="default" className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-cool rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Fast Response</h4>
              <p className="text-muted-foreground">
                We understand HVAC emergencies can't wait. Our team provides rapid 
                response and same-day service when possible.
              </p>
            </Card>

            <Card variant="default" className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-cool rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Customer Focused</h4>
              <p className="text-muted-foreground">
                Your satisfaction is our priority. We provide transparent pricing, 
                clear communication, and exceptional customer service.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;