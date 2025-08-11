import { Button } from "@/components/ui/enhanced-button";
import { 
  Phone, 
  MapPin, 
  MessageCircle,
  Snowflake,
  Wind,
  Thermometer,
  Wrench
} from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-deep-blue text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-cool rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Zansem Services</h3>
                <p className="text-sm text-white/80">HVAC Solutions</p>
              </div>
            </div>
            <p className="text-white/80 mb-6">
              Professional HVAC services in Kigali, Rwanda. Specializing in air conditioning, 
              ventilation, heating, and refrigeration solutions for residential and commercial properties.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary-glow" />
                <span className="text-sm">Kimironko Sector, KG 44 St, Kigali</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary-glow" />
                <span className="text-sm">+250 783 943 152</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Snowflake className="w-4 h-4 text-primary-glow" />
                <span className="text-sm text-white/80">AC Installation</span>
              </li>
              <li className="flex items-center space-x-2">
                <Wrench className="w-4 h-4 text-primary-glow" />
                <span className="text-sm text-white/80">AC Repair & Maintenance</span>
              </li>
              <li className="flex items-center space-x-2">
                <Wind className="w-4 h-4 text-primary-glow" />
                <span className="text-sm text-white/80">Ventilation Systems</span>
              </li>
              <li className="flex items-center space-x-2">
                <Thermometer className="w-4 h-4 text-primary-glow" />
                <span className="text-sm text-white/80">Heating Solutions</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-sm text-white/80 hover:text-primary-glow transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-sm text-white/80 hover:text-primary-glow transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-sm text-white/80 hover:text-primary-glow transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="text-sm text-white/80 hover:text-primary-glow transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-sm text-white/80 hover:text-primary-glow transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Emergency */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>
            <div className="space-y-4 mb-6">
              <p className="text-sm text-white/80">
                <strong>Business Hours:</strong><br />
                Mon-Fri: 8:00 AM - 6:00 PM<br />
                Sat: 9:00 AM - 4:00 PM<br />
                Sun: Emergency Only
              </p>
              <p className="text-sm text-white/80">
                <strong>Emergency Service:</strong><br />
                Available 24/7 for urgent repairs
              </p>
            </div>
            <div className="space-y-3">
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20"
                onClick={() => window.location.href = 'tel:+250783943152'}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20"
                onClick={() => window.open('https://wa.me/250783943152', '_blank')}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-white/60">
              © 2024 Zansem Services. All rights reserved.
            </div>
            <div className="text-sm text-white/60">
              Professional HVAC services in Kigali, Rwanda
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;