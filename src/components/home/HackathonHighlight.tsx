import { Link } from "react-router-dom";
import { Calendar, MapPin, Users, ArrowRight, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import whackLogo from "@/assets/whack-hackathon-logo.jpeg";

const HackathonHighlight = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-card to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4 animate-pulse">
            🔥 Featured Event
          </span>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-card/80 backdrop-blur-md rounded-3xl border border-primary/20 overflow-hidden shadow-2xl hover:shadow-primary/10 transition-all duration-500">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left Side - Visual */}
              <div className="relative bg-gradient-hero p-8 flex items-center justify-center min-h-[300px]">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
                <div className="relative text-center">
                  <img
                    src={whackLogo}
                    alt="Whack-Hackathon 4.0"
                    className="w-40 h-40 sm:w-48 sm:h-48 mx-auto rounded-full shadow-2xl border-4 border-accent/50 mb-6 hover:scale-105 transition-transform duration-300"
                  />
                  <div className="inline-flex items-center gap-2 bg-background/20 backdrop-blur-sm text-foreground px-4 py-2 rounded-full text-sm font-semibold">
                    <Calendar size={16} />
                    Feb 17-18, 2025
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Whack-Hackathon <span className="text-primary">4.0</span>
                </h2>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  A 3-round hackathon experience culminating in a 24-hour coding marathon at Amity Campus. 
                  Bring your innovative ideas to life!
                </p>

                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground bg-background/50 px-3 py-2 rounded-lg">
                    <Users className="text-primary" size={16} />
                    Teams of 4-6
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground bg-background/50 px-3 py-2 rounded-lg">
                    <MapPin className="text-accent" size={16} />
                    Amity Campus
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link to="/whack-hackathon">
                    <Button variant="default" size="lg" className="group">
                      Learn More
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                    </Button>
                  </Link>
                  <a
                    href="https://www.instagram.com/whack_hack4.0/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="lg" className="gap-2">
                      <Instagram size={18} />
                      Follow
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HackathonHighlight;
