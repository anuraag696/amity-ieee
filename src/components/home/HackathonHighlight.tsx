import { Trophy, ArrowRight, Users, Code, Clock, Sparkles, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HackathonHighlight = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/3" />
      <div className="absolute top-10 right-10 w-64 h-64 bg-ieee-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Card */}
          <div className="bg-gradient-to-br from-card/80 to-card rounded-3xl border border-ieee-gold/20 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            {/* Top Banner */}
            <div className="bg-gradient-to-r from-ieee-gold/20 via-primary/10 to-accent/10 px-6 py-3 flex items-center justify-between border-b border-ieee-gold/10">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-ieee-gold" />
                <span className="text-sm font-semibold text-ieee-gold">Flagship Event Recap</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-green-600 bg-green-500/10 px-2 py-1 rounded-full">
                <CheckCircle className="w-3 h-3" />
                Successfully Completed
              </div>
            </div>

            <div className="p-8 sm:p-10">
              <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                {/* Left Content */}
                <div className="flex-1">
                  <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-2">
                    Whack <span className="text-primary">Hackathon</span>{" "}
                    <span className="text-ieee-gold">4.0</span>
                  </h2>
                  <p className="text-muted-foreground mb-6 max-w-lg">
                    Our biggest hackathon yet — 500+ participants, 120+ teams, and 24 hours 
                    of groundbreaking innovation at Amity University Rajasthan.
                  </p>

                  {/* Quick Stats */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-background/60 px-3 py-2 rounded-full border border-border">
                      <Users className="w-4 h-4 text-primary" />
                      500+ Participants
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-background/60 px-3 py-2 rounded-full border border-border">
                      <Code className="w-4 h-4 text-accent" />
                      120+ Teams
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-background/60 px-3 py-2 rounded-full border border-border">
                      <Clock className="w-4 h-4 text-ieee-gold" />
                      24 Hours
                    </div>
                  </div>

                  <Link to="/whack-hackathon">
                    <Button className="group bg-gradient-to-r from-primary to-accent hover:opacity-90">
                      <Trophy className="w-4 h-4 mr-2" />
                      View Full Recap
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>

                {/* Right Visual */}
                <div className="lg:w-72 flex-shrink-0">
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 border border-border text-center">
                    <Trophy className="w-16 h-16 text-ieee-gold mx-auto mb-4" />
                    <p className="font-heading font-bold text-2xl text-foreground mb-1">
                      Feb 17-18, 2026
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      Amity University Rajasthan
                    </p>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="bg-background/80 rounded-lg p-2">
                        <p className="font-bold text-foreground">1st</p>
                        <p className="text-[10px] text-muted-foreground">Winner</p>
                      </div>
                      <div className="bg-background/80 rounded-lg p-2">
                        <p className="font-bold text-foreground">2nd</p>
                        <p className="text-[10px] text-muted-foreground">Runner Up</p>
                      </div>
                      <div className="bg-background/80 rounded-lg p-2">
                        <p className="font-bold text-foreground">3rd</p>
                        <p className="text-[10px] text-muted-foreground">Runner Up</p>
                      </div>
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
