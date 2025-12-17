import { ArrowRight, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    id: 1,
    name: "Prof. (Dr.) Manju Kaushik",
    role: "Faculty Advisor",
    image: null,
    linkedin: "#",
    instagram: "#",
  },
  {
    id: 2,
    name: "Anuraag Gupta",
    role: "Chairperson",
    image: null,
    linkedin: "#",
    instagram: "#",
  },
  {
    id: 3,
    name: "Madhusmita",
    role: "General Secretary",
    image: null,
    linkedin: "#",
    instagram: "#",
  },
  {
    id: 4,
    name: "Ishan Verma",
    role: "Treasurer",
    image: null,
    linkedin: "#",
    instagram: "#",
  },
];

const TeamPreview = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Our Team
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Meet the <span className="text-primary">Leaders</span>
          </h2>
          <p className="text-muted-foreground">
            Dedicated students working together to make IEEE SB Amity Rajasthan
            a hub for innovation and excellence.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              {/* Member Image */}
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="font-heading text-2xl font-bold text-primary">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                </div>

                {/* Social Links Overlay */}
                <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <a
                    href={member.linkedin}
                    className="w-10 h-10 bg-primary-foreground/20 hover:bg-primary-foreground/30 rounded-lg flex items-center justify-center text-primary-foreground transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={member.instagram}
                    className="w-10 h-10 bg-primary-foreground/20 hover:bg-primary-foreground/30 rounded-lg flex items-center justify-center text-primary-foreground transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} />
                  </a>
                </div>
              </div>

              {/* Member Info */}
              <div className="p-5 text-center">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/team">
            <Button variant="default" className="group">
              View Full Team
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamPreview;
