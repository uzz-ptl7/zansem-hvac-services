import { Button } from "@/components/ui/enhanced-button";
import { Card } from "@/components/ui/enhanced-card";
import { Snowflake, Shield, Clock, Users } from "lucide-react";
import heroImage from "@/assets/hvac-hero-image.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-16 min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Professional HVAC installation in Kigali"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-blue/90 via-cool-blue/80 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Professional HVAC Solutions in 
              <span className="text-primary-glow"> Kigali</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Expert air conditioning, ventilation, and heating services. 
              Keeping your spaces comfortable year-round with reliable, 
              professional solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                variant="hero" 
                size="xl"
                onClick={scrollToContact}
                className="text-lg"
              >
                Request Free Quote
              </Button>
              <Button 
                variant="glass" 
                size="xl"
                onClick={() => {
                  window.open('https://wa.me/250783943152', '_blank');
                }}
                className="text-lg"
              >
                WhatsApp Us
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card variant="glass" className="p-4 text-center">
                <Snowflake className="w-8 h-8 text-primary-glow mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">100+</div>
                <div className="text-sm text-white/80">Installations</div>
              </Card>
              <Card variant="glass" className="p-4 text-center">
                <Shield className="w-8 h-8 text-primary-glow mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">5+</div>
                <div className="text-sm text-white/80">Years Experience</div>
              </Card>
              <Card variant="glass" className="p-4 text-center">
                <Clock className="w-8 h-8 text-primary-glow mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm text-white/80">Emergency Service</div>
              </Card>
              <Card variant="glass" className="p-4 text-center">
                <Users className="w-8 h-8 text-primary-glow mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-white/80">Happy Clients</div>
              </Card>
            </div>
          </div>

          {/* Service Highlights */}
          <div className="lg:pl-8">
            <Card variant="glass" className="p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Why Choose Zansem Services?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-glow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-deep-blue text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Licensed & Insured</h4>
                    <p className="text-white/80 text-sm">Fully certified HVAC professionals</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-glow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-deep-blue text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Energy Efficient Solutions</h4>
                    <p className="text-white/80 text-sm">Save money with modern, efficient systems</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-glow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-deep-blue text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Same-Day Service</h4>
                    <p className="text-white/80 text-sm">Fast response for urgent repairs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-glow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-deep-blue text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Warranty Guaranteed</h4>
                    <p className="text-white/80 text-sm">All work backed by comprehensive warranty</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;