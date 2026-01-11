import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Calendar, MapPin, Clock, Users, Trophy, Code, Presentation, Lightbulb, ArrowRight, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import whackLogo from "@/assets/whack-hackathon-logo.jpeg";

const timeline = [
  {
    round: "Round 1",
    title: "Idea Submission",
    mode: "Online",
    icon: Lightbulb,
    description: "Submit your innovative idea and project proposal. Our panel will review and shortlist the best ideas.",
  },
  {
    round: "Round 2",
    title: "Presentation Round",
    mode: "Online",
    icon: Presentation,
    description: "Present your idea to the judges. Showcase your vision, approach, and potential impact.",
  },
  {
    round: "Round 3",
    title: "24-Hour Coding",
    mode: "Offline - Amity Campus",
    icon: Code,
    description: "The final showdown! 24 hours of continuous coding at our campus. Build, innovate, and compete!",
    date: "Feb 17-18, 2025",
  },
];

const prizes = [
  {
    position: "1st",
    title: "Winner",
    benefits: ["Cash Prize", "Certificates", "Exclusive Goodies"],
  },
  {
    position: "2nd",
    title: "First Runner-up",
    benefits: ["Cash Prize", "Certificates", "Goodies"],
  },
  {
    position: "3rd",
    title: "Second Runner-up",
    benefits: ["Cash Prize", "Certificates", "Goodies"],
  },
];

const WhackHackathon = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Hackathon Logo */}
              <div className="mb-8 animate-bounce-in">
                <img 
                  src={whackLogo} 
                  alt="Whack-Hackathon 4.0 Logo" 
                  className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full shadow-2xl border-4 border-primary/30 hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-in stagger-1 animate-pulse-slow">
                <Calendar size={16} />
                February 17-18, 2025
              </div>
              
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-slide-up stagger-2">
                Whack-Hackathon <span className="text-primary">4.0</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto animate-fade-in stagger-3">
                A 3-round hackathon culminating in a 24-hour coding marathon. Bring your ideas to life, 
                compete with the best, and win exciting prizes!
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mb-10 animate-fade-in stagger-4">
                <div className="flex items-center justify-center gap-2 text-muted-foreground hover-lift">
                  <Users className="text-primary flex-shrink-0" size={20} />
                  <span>Teams of 4-6</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-muted-foreground hover-lift">
                  <MapPin className="text-accent flex-shrink-0" size={20} />
                  <span>Amity Campus (Final Round)</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-muted-foreground hover-lift">
                  <Trophy className="text-primary flex-shrink-0" size={20} />
                  <span>Exciting Prizes</span>
                </div>
              </div>

              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 inline-block animate-scale-in stagger-5 hover-lift">
                <p className="text-muted-foreground mb-3">Registration Opening Soon</p>
                <Button variant="default" size="lg" disabled className="opacity-75">
                  Coming Soon
                </Button>
              </div>

              {/* Social Links */}
              <div className="mt-8 flex justify-center animate-fade-in stagger-6">
                <a
                  href="https://www.instagram.com/whack_hack4.0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105"
                >
                  <Instagram size={20} />
                  Follow on Instagram
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4 animate-fade-in">
                Event Structure
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground animate-slide-up stagger-1">
                Three Rounds to <span className="text-primary">Victory</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary hidden md:block" />

                <div className="space-y-8">
                  {timeline.map((item, index) => (
                    <div key={item.round} className={`relative flex gap-6 md:gap-10 animate-slide-in-left stagger-${index + 1}`}>
                      {/* Timeline Dot */}
                      <div className="hidden md:flex w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent items-center justify-center flex-shrink-0 z-10 hover-lift">
                        <item.icon className="w-7 h-7 text-primary-foreground" />
                      </div>

                      {/* Content Card */}
                      <div className="flex-1 bg-background rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover-lift">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                            {item.round}
                          </span>
                          <span className="bg-accent/20 text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                            {item.mode}
                          </span>
                          {item.date && (
                            <span className="text-sm text-muted-foreground flex items-center gap-1">
                              <Calendar size={14} />
                              {item.date}
                            </span>
                          )}
                        </div>
                        <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prizes Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4 animate-fade-in">
                Rewards
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground animate-slide-up stagger-1">
                Exciting <span className="text-primary">Prizes</span> Await
              </h2>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto animate-fade-in stagger-2">
                Cash prizes, certificates, and exclusive goodies for the top performers!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {prizes.map((prize, index) => (
                <div
                  key={prize.position}
                  className={`relative bg-card rounded-2xl p-6 border transition-all duration-300 hover:shadow-lg hover-lift animate-scale-in stagger-${index + 1} ${
                    index === 0
                      ? "border-accent md:-mt-4 md:mb-4"
                      : "border-border hover:border-primary/30"
                  }`}
                >
                  {index === 0 && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold animate-pulse-slow">
                      🏆 Grand Prize
                    </div>
                  )}
                  
                  <div className="text-center pt-4">
                    <div className={`text-4xl font-bold mb-2 ${
                      index === 0 ? "text-accent" : "text-primary"
                    }`}>
                      {prize.position}
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                      {prize.title}
                    </h3>
                    <ul className="space-y-2">
                      {prize.benefits.map((benefit) => (
                        <li key={benefit} className="text-muted-foreground flex items-center justify-center gap-2">
                          <Trophy size={14} className="text-primary" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sponsors Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4 animate-fade-in">
                Partners
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6 animate-slide-up stagger-1">
                Our <span className="text-primary">Sponsors</span>
              </h2>
              <div className="bg-background rounded-2xl border border-dashed border-border p-12 max-w-2xl mx-auto animate-scale-in stagger-2 hover-lift">
                <p className="text-muted-foreground text-lg">
                  Sponsor announcements coming soon!
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Interested in sponsoring? Contact us at the event email.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Section for Other Universities */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover-lift">
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
                From Another University?
              </h3>
              <p className="text-muted-foreground mb-6">
                Students from other universities can register for Whack-Hackathon 4.0! Fill out the registration form to participate.
              </p>
              <a 
                href="https://forms.google.com/your-registration-form" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="gold" size="lg" className="hover:scale-105 transition-transform hover-glow">
                  <Users className="mr-2" size={20} />
                  Register (Other Universities)
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground mb-6 animate-slide-up">
              Ready to Hack?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto animate-fade-in stagger-1">
              Form your team of 4-6 members and get ready for an incredible hackathon experience!
            </p>
            <Button variant="gold" size="lg" disabled className="opacity-75 animate-scale-in stagger-2 hover-glow">
              Registration Opening Soon
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WhackHackathon;
