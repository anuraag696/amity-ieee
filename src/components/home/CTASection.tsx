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
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 rounded-full px-4 py-2 text-sm mb-6">
            <Users size={16} />
            <span>Join 500+ Members</span>
          </div>

          {/* Heading */}
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Shape the{" "}
            <span className="text-accent">Future of Technology?</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-primary-foreground/80 mb-10 max-w-xl mx-auto">
            Become a part of IEEE Student Branch, Amity University Rajasthan and
            unlock opportunities for growth, learning, and innovation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="gold"
              size="xl"
              className="group"
            >
              Join IEEE Now
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Button>
            <Link to="/contact">
              <Button
                variant="outline"
                size="xl"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Mail size={18} className="mr-2" />
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-primary-foreground/70">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>Free Membership Benefits</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>Global IEEE Network</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>Exclusive Resources</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
