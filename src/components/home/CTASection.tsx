import { ArrowRight, Mail, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-primary" />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border-2 border-primary-foreground/20 rounded-full" />
      <div className="absolute bottom-10 right-10 w-48 h-48 border-2 border-primary-foreground/10 rounded-full" />
      <div className="absolute top-1/2 right-20 w-24 h-24 bg-accent/20 rounded-2xl rotate-45" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-primary-foreground">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 rounded-full px-4 py-2 text-sm mb-6 animate-bounce-in stagger-1 hover-glow">
            <Users size={16} className="animate-pulse-slow" />
            <span>Join 500+ Members</span>
          </div>

          {/* Heading */}
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 animate-slide-up stagger-2">
            Ready to Shape the{" "}
            <span className="text-accent">Future of Technology?</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-primary-foreground/80 mb-10 max-w-xl mx-auto animate-fade-in stagger-3">
            Become a part of IEEE Student Branch, Amity University Rajasthan and
            unlock opportunities for growth, learning, and innovation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 animate-scale-in stagger-4">
            <a href="https://forms.google.com/your-ieee-form" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button
                variant="gold"
                size="xl"
                className="group hover-scale hover-glow w-full sm:w-auto"
              >
                Join IEEE Now
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Button>
            </a>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="xl"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground hover-scale w-full sm:w-auto"
              >
                <Mail size={18} className="mr-2" />
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-primary-foreground/70">
            {[
              "Free Membership Benefits",
              "Global IEEE Network",
              "Exclusive Resources"
            ].map((item, index) => (
              <div key={item} className={`flex items-center gap-2 animate-fade-in stagger-${index + 5}`}>
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse-slow" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
