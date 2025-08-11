import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/enhanced-card";
import { Button } from "@/components/ui/enhanced-button";
import { ExternalLink, Calendar, MapPin } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Commercial Office Building AC Installation",
      description: "Complete HVAC system installation for a modern office complex in Kigali city center. Multiple units with centralized control system.",
      image: project1,
      location: "Kigali City Center",
      date: "2024",
      type: "Commercial Installation",
      details: [
        "15 AC units installed",
        "Centralized control system",
        "Energy-efficient design",
        "3-year warranty included"
      ]
    },
    {
      title: "Residential AC Repair & Maintenance",
      description: "Emergency repair service for residential property in Kimironko. Complete system overhaul and preventive maintenance setup.",
      image: project2,
      location: "Kimironko Sector",
      date: "2024",
      type: "Residential Repair",
      details: [
        "Emergency same-day service",
        "Complete system diagnostic",
        "Parts replacement",
        "Maintenance plan setup"
      ]
    },
    {
      title: "Industrial Ventilation System",
      description: "Custom ventilation system design and installation for manufacturing facility. Includes air quality monitoring and exhaust systems.",
      image: project3,
      location: "Gasabo District",
      date: "2024",
      type: "Industrial Ventilation",
      details: [
        "Custom ductwork design",
        "Air quality monitoring",
        "Industrial-grade fans",
        "Safety compliance"
      ]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-frost">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Recent Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See our latest HVAC installations and repairs across Kigali. 
            From residential homes to commercial buildings, we deliver quality work.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card key={index} variant="elevated" className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                    {project.type}
                  </span>
                  <span className="text-sm text-muted-foreground flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.date}
                  </span>
                </div>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  {project.location}
                </div>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {project.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <Card variant="elevated" className="p-8 text-center bg-gradient-cool text-white">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-lg mb-8 text-white/90">
              Whether you need a new installation, repair, or maintenance service, 
              our experienced team is ready to deliver exceptional results for your property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="glass" 
                size="lg"
                onClick={scrollToContact}
                className="text-lg"
              >
                Get Free Estimate
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => {
                  window.open('https://wa.me/250783943152', '_blank');
                }}
                className="text-lg bg-white/10 border-white/30 text-white hover:bg-white/20"
              >
                WhatsApp Us
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Projects;