import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/enhanced-card";
import { Button } from "@/components/ui/enhanced-button";
import { 
  Snowflake, 
  Wind, 
  Thermometer, 
  Wrench, 
  ShieldCheck, 
  Zap,
  RefreshCw,
  Settings
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Snowflake,
      title: "Air Conditioning Installation",
      description: "Professional installation of modern AC systems for homes and businesses. Energy-efficient units with proper sizing and optimal placement.",
      features: ["Residential & Commercial", "Energy Efficient Units", "Proper Sizing", "Expert Installation"]
    },
    {
      icon: Wrench,
      title: "AC Repair & Maintenance",
      description: "Fast, reliable repair services and preventive maintenance to keep your AC running smoothly year-round.",
      features: ["24/7 Emergency Service", "Preventive Maintenance", "Parts Replacement", "Performance Optimization"]
    },
    {
      icon: Wind,
      title: "Ventilation Systems",
      description: "Complete ventilation solutions including exhaust fans, ductwork design, and air quality improvement systems.",
      features: ["Exhaust Fan Installation", "Ductwork Design", "Air Quality Control", "Industrial Ventilation"]
    },
    {
      icon: Thermometer,
      title: "Heating Solutions",
      description: "Heating system installation and repair for comfortable indoor temperatures during cooler seasons.",
      features: ["Water Heaters", "Space Heaters", "Heat Pumps", "Heating Maintenance"]
    },
    {
      icon: RefreshCw,
      title: "Refrigeration Services",
      description: "Commercial and residential refrigeration system installation, repair, and maintenance services.",
      features: ["Walk-in Coolers", "Display Cases", "Ice Machines", "Freezer Repair"]
    },
    {
      icon: ShieldCheck,
      title: "Emergency Services",
      description: "24/7 emergency HVAC services for urgent repairs and system failures. Quick response guaranteed.",
      features: ["24/7 Availability", "Rapid Response", "Emergency Repairs", "System Diagnostics"]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-frost">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our HVAC Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete heating, ventilation, and air conditioning solutions for 
            residential and commercial properties in Kigali and surrounding areas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} variant="service" className="h-full">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-cool rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Service Areas */}
        <Card variant="elevated" className="p-8 text-center bg-gradient-cool text-white">
          <div className="max-w-4xl mx-auto">
            <Settings className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Service Areas in Kigali</h3>
            <p className="text-lg mb-6 text-white/90">
              We provide professional HVAC services throughout Kigali and surrounding areas. 
              From Kimironko to the city center, we've got you covered.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-8 text-sm">
              <div>• Kimironko Sector</div>
              <div>• Gasabo District</div>
              <div>• Kigali City Center</div>
              <div>• Nyarugenge District</div>
              <div>• Kicukiro District</div>
              <div>• Surrounding Areas</div>
            </div>
            <Button 
              variant="glass" 
              size="lg"
              onClick={scrollToContact}
              className="text-lg"
            >
              Schedule Service Today
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Services;