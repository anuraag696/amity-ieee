import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ScrollAnimation } from "@/hooks/use-scroll-animation";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Geometric Shapes */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />
        
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Diagonal Accent Line */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-primary/5 to-transparent transform skew-x-12" />
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Badge */}
            <ScrollAnimation animation="fade-in" delay={100}>
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 text-sm font-medium text-accent-foreground hover-lift">
                <Sparkles size={16} className="text-accent animate-pulse" />
                <span>Where Ideas Meet Innovation</span>
              </div>
            </ScrollAnimation>

            {/* Heading */}
            <ScrollAnimation animation="slide-up" delay={200}>
              <div className="space-y-4">
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                  Welcome to{" "}
                  <span className="text-gradient">IEEE Student Branch</span>
                </h1>
                <p className="font-heading text-2xl sm:text-3xl font-semibold text-muted-foreground">
                  Amity University Rajasthan
                </p>
              </div>
            </ScrollAnimation>

            {/* Description */}
            <ScrollAnimation animation="fade-in" delay={300}>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                IEEE SB AUR is dedicated to advancing technology for humanity through workshops, seminars, and technical events. Join us in shaping the future of technology.
              </p>
            </ScrollAnimation>

            {/* CTA Buttons */}
            <ScrollAnimation animation="scale-in" delay={400}>
              <div className="flex flex-wrap gap-4">
                <Link to="/events">
                  <Button variant="hero" className="group hover-glow">
                    Explore Events
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="heroOutline" className="hover-lift">Learn More</Button>
                </Link>
              </div>
            </ScrollAnimation>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              {[
                { value: "500+", label: "Members" },
                { value: "50+", label: "Events" },
                { value: "20+", label: "Awards" },
              ].map((stat, index) => (
                <ScrollAnimation key={stat.label} animation="bounce-in" delay={500 + index * 100}>
                  <div className="text-center hover-lift">
                    <p className="font-heading text-3xl font-bold text-primary">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>

          {/* Hero Visual */}
          <ScrollAnimation animation="slide-in-right" delay={300} className="relative hidden lg:flex items-center justify-center">
            {/* Main Visual Container */}
            <div className="relative w-full max-w-lg">
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-card p-4 rounded-2xl shadow-lg z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                    <span className="text-accent text-lg">🎯</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">Hackathons</p>
                    <p className="text-xs text-muted-foreground">Code to Innovate</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-card p-4 rounded-2xl shadow-lg animate-float-delayed z-10 hover-lift">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <span className="text-primary text-lg">🏆</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">Achievements</p>
                    <p className="text-xs text-muted-foreground">Excellence in Tech</p>
                  </div>
                </div>
              </div>

              {/* Main Image Container */}
              <div className="relative bg-gradient-primary rounded-3xl p-1 shadow-lg">
                <div className="bg-card rounded-[22px] overflow-hidden">
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-24 h-24 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center shadow-lg mb-4">
                        <span className="text-primary-foreground font-heading text-3xl font-bold">
                          IEEE
                        </span>
                      </div>
                      <p className="font-heading font-semibold text-foreground">
                        Student Branch
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Amity University Rajasthan
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl" />
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--card))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
