import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/enhanced-card";
import { Button } from "@/components/ui/enhanced-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Hello! I'd like to request a quote for HVAC services.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}

Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/250783943152?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Message Sent!",
      description: "You'll be redirected to WhatsApp to complete your request.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-frost">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get Your Free Quote
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to improve your comfort with professional HVAC services? 
            Contact us today for a free estimate and expert consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card variant="elevated" className="p-8">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-2xl text-center mb-6">Request a Quote</CardTitle>
            </CardHeader>
            <CardContent className="px-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+250 xxx xxx xxx"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Needed *</Label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ac-installation">AC Installation</SelectItem>
                      <SelectItem value="ac-repair">AC Repair</SelectItem>
                      <SelectItem value="maintenance">Maintenance Service</SelectItem>
                      <SelectItem value="ventilation">Ventilation System</SelectItem>
                      <SelectItem value="heating">Heating Solutions</SelectItem>
                      <SelectItem value="refrigeration">Refrigeration</SelectItem>
                      <SelectItem value="emergency">Emergency Service</SelectItem>
                      <SelectItem value="consultation">Free Consultation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Please describe your HVAC needs, property type, and any specific requirements..."
                    rows={4}
                    required
                  />
                </div>

                <Button type="submit" variant="cta" size="lg" className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Send Quote Request
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card variant="elevated" className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl mb-6">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="px-0 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-cool rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground">+250 783 943 152</p>
                    <p className="text-sm text-muted-foreground">24/7 Emergency Service</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-cool rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground">Kimironko Sector</p>
                    <p className="text-muted-foreground">KG 44 St, Kigali, Rwanda</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-cool rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground">Saturday: 9:00 AM - 4:00 PM</p>
                    <p className="text-muted-foreground">Sunday: Emergency Service Only</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-cool rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                    <p className="text-muted-foreground">Quick responses via WhatsApp</p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="mt-2"
                      onClick={() => window.open('https://wa.me/250783943152', '_blank')}
                    >
                      Chat with Us
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <Card variant="elevated" className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl mb-6">Find Us</CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <div className="aspect-video w-full bg-frost-grey rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">Kimironko Sector</h3>
                    <p className="text-muted-foreground">KG 44 St, Kigali, Rwanda</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  Serving all areas of Kigali and surrounding regions
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Contact */}
        <Card variant="elevated" className="mt-16 p-8 text-center bg-gradient-cool text-white">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Emergency HVAC Service</h3>
            <p className="text-lg mb-6 text-white/90">
              HVAC emergency? Don't wait! Call us now for immediate assistance. 
              We provide 24/7 emergency service for urgent repairs and system failures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="glass" 
                size="lg"
                onClick={() => window.location.href = 'tel:+250783943152'}
                className="text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +250 783 943 152
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('https://wa.me/250783943152?text=Emergency HVAC Service Needed', '_blank')}
                className="text-lg bg-white/10 border-white/30 text-white hover:bg-white/20"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Emergency
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;