import { ArrowRight, Target, Users, Lightbulb, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To foster technological innovation and excellence among students by providing a platform for learning and collaboration.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "A vibrant community of tech enthusiasts, innovators, and future leaders working together to make a difference.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Encouraging creative thinking and practical application of technology to solve real-world problems.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Striving for excellence in everything we do, from events to workshops to technical competitions.",
  },
];

const AboutSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="space-y-8 animate-slide-in-left stagger-1">
            <div className="space-y-4">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider animate-fade-in stagger-2">
                About Us
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground animate-slide-up stagger-3">
                Advancing Technology for{" "}
                <span className="text-primary">Humanity</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed animate-fade-in stagger-4">
                IEEE Student Branch at Amity University Rajasthan is a dynamic
                student-driven platform that connects ambitious individuals with
                industry experts, mentors, and like-minded peers. We strive to
                bridge the gap between ideas and execution by nurturing skills,
                providing resources, and creating opportunities for budding
                technologists.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`group p-5 rounded-xl bg-background hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 border border-border hover:border-primary/20 transition-all duration-300 hover-lift animate-scale-in stagger-${index + 2}`}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-4 transition-colors group-hover:scale-110 duration-300">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <Link to="/about" className="inline-block animate-fade-in stagger-6">
              <Button variant="default" className="group hover-scale">
                Learn More About Us
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Button>
            </Link>
          </div>

          {/* Visual Side */}
          <div className="relative animate-slide-in-right stagger-2">
            <div className="relative hover-lift">
              {/* Main Card */}
              <div className="bg-gradient-primary rounded-3xl p-8 text-primary-foreground animate-scale-in stagger-3">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary-foreground/20 rounded-2xl flex items-center justify-center animate-bounce-in stagger-4">
                      <span className="font-heading font-bold text-2xl">
                        IEEE
                      </span>
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-lg">
                        Student Branch
                      </p>
                      <p className="text-primary-foreground/80 text-sm">
                        Est. Since Inception
                      </p>
                    </div>
                  </div>

                  <div className="h-px bg-primary-foreground/20" />

                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { value: "50+", label: "Active Members" },
                      { value: "10+", label: "Events Organized" },
                      { value: "15+", label: "Workshops" },
                    ].map((stat, index) => (
                      <div key={stat.label} className={`animate-slide-up stagger-${index + 4}`}>
                        <p className="font-heading text-3xl font-bold">
                          {stat.value}
                        </p>
                        <p className="text-sm text-primary-foreground/70">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold text-sm shadow-lg shadow-glow animate-float hover-glow">
                ✨ Growing Community
                
              </div>

              {/* Background Decoration */}
              <div className="absolute -z-10 -bottom-8 -left-8 w-full h-full bg-accent/10 rounded-3xl animate-pulse-slow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
