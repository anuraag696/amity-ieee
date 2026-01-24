import { Link } from "react-router-dom";
import { Calendar, MapPin, Users, ArrowRight, Instagram, ScanLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import whackLogo from "@/assets/whack-hackathon-logo.jpeg";
import whackQR from "@/assets/whack-4-qr.png";

const HackathonHighlight = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-card to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 animate-fade-in">
          <span className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4 animate-pulse-slow hover-lift">
            🔥 Featured Event
          </span>
        </div>

        <div className="max-w-5xl mx-auto animate-scale-in">
          <div className="bg-card/80 backdrop-blur-md rounded-3xl border border-primary/20 overflow-hidden shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover-lift">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left Side - Visual */}
              <div className="relative p-8 flex items-center justify-center min-h-[300px] overflow-hidden">
                {/* Tech-themed gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]" />
                
                {/* Animated circuit pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAyMCAwIEwgMCAwIDAgMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwZmZmZiIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]" />
                </div>
                
                {/* Glowing orbs */}
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-500/30 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-700" />
                <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-yellow-500/20 rounded-full blur-2xl animate-pulse delay-1000" />
                
                {/* Code brackets decoration */}
                <div className="absolute top-6 left-6 text-cyan-400/40 text-4xl font-mono animate-pulse">&lt;/&gt;</div>
                <div className="absolute bottom-6 right-6 text-purple-400/40 text-4xl font-mono animate-pulse delay-500">{ }</div>
                
                <div className="relative text-center animate-bounce-in z-10">
                  {/* Logo glow effect */}
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-yellow-500 rounded-full blur-xl opacity-50 animate-pulse" />
                    <img
                      src={whackLogo}
                      alt="Whack-Hackathon 4.0"
                      className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto rounded-full shadow-2xl border-4 border-cyan-400/50 mb-6 hover:scale-110 transition-transform duration-300 ring-4 ring-purple-500/30 ring-offset-4 ring-offset-[#16213e]"
                    />
                  </div>
                  <div className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold animate-fade-in stagger-2 border border-cyan-400/30">
                    <Calendar size={16} className="text-cyan-400" />
                    Feb 17-18, 2026
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4 animate-slide-up stagger-1">
                  Whack-Hackathon <span className="text-primary">4.0</span>
                </h2>
                
                <p className="text-muted-foreground mb-6 leading-relaxed animate-fade-in stagger-2">
                  A 3-round hackathon experience culminating in a 24-hour coding marathon at Amity University Rajasthan. 
                  Bring your innovative ideas to life!
                </p>

                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-6 animate-fade-in stagger-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground bg-background/50 px-3 py-2 rounded-lg hover-lift">
                    <Users className="text-primary flex-shrink-0" size={16} />
                    Teams of 2-4
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground bg-background/50 px-3 py-2 rounded-lg hover-lift">
                    <MapPin className="text-accent flex-shrink-0" size={16} />
                    Amity University Rajasthan
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row flex-wrap gap-3 animate-scale-in stagger-4">
                  <a
                    href="https://forms.gle/95yXC9nfsxqrcaPy9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button variant="default" size="lg" className="group hover-glow w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                      Register Now
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                    </Button>
                  </a>
                  <Link to="/whack-hackathon" className="w-full sm:w-auto">
                    <Button variant="outline" size="lg" className="group hover-lift w-full sm:w-auto">
                      Learn More
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                    </Button>
                  </Link>
                </div>

                {/* QR Code Section */}
                <div className="mt-6 pt-6 border-t border-border/50 animate-fade-in stagger-5">
                  <div className="flex items-center gap-4">
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
                      <img
                        src={whackQR}
                        alt="Scan to Register"
                        className="relative w-20 h-20 rounded-lg border-2 border-primary/30 bg-white p-1 hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground flex items-center gap-2">
                        <ScanLine size={16} className="text-primary" />
                        Quick Register
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Click the button above or scan QR to apply
                      </p>
                    </div>
                  </div>
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
