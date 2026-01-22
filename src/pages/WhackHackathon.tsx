import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Calendar, MapPin, Clock, Users, Trophy, Code, Presentation, Lightbulb, ArrowRight, Instagram, QrCode, Sparkles, ScanLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCountdown } from "@/hooks/use-countdown";
import whackLogo from "@/assets/whack-hackathon-logo.jpeg";
import whackQR from "@/assets/whack-4-qr.png";

// Target date: February 17, 2026
const HACKATHON_DATE = new Date("2026-02-17T00:00:00");
const timeline = [
  {
    round: "Round 1",
    title: "Idea Submission",
    mode: "Online",
    date: "Feb 10, 2026",
    icon: Lightbulb,
    description: "Submit your innovative idea and project proposal.",
    details: [
      "Submit your idea in a Word document",
      "Explain the idea, theme and proposed prototype",
      "Submit through Google Form (released on submission day)",
    ],
  },
  {
    round: "Round 2",
    title: "Presentation Round",
    mode: "Online",
    date: "Feb 13, 2026",
    icon: Presentation,
    description: "Present your idea to the judges online.",
    details: [
      "Submit prototype presentation in PPT format",
      "PPT format will be shared soon",
      "Submit via Google Form (released on submission day)",
      "Online presentation of prototype and idea",
    ],
  },
  {
    round: "Round 3",
    title: "24-Hour Offline Hackathon",
    mode: "Offline - Amity University Rajasthan",
    date: "Feb 17-18, 2026",
    icon: Code,
    description: "The final showdown at Amity University Rajasthan!",
    details: [
      "24 Hours Continuous Coding",
      "Problem statement will be given on-spot",
      "Build, code and deploy your solution on campus",
    ],
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
  const countdown = useCountdown(HACKATHON_DATE);

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
                February 17-18, 2026
              </div>
              
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-slide-up stagger-2">
                Whack-Hackathon <span className="text-primary">4.0</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto animate-fade-in stagger-3">
                A 3-round hackathon culminating in a 24-hour coding marathon. Bring your ideas to life, 
                compete with the best, and win exciting prizes!
              </p>

              {/* Countdown Timer */}
              <div className="mb-10 animate-scale-in stagger-3">
                <p className="text-sm text-muted-foreground mb-4 flex items-center justify-center gap-2">
                  <Clock size={16} className="text-primary" />
                  {countdown.isExpired ? "Event has started!" : "Countdown to Hackathon"}
                </p>
                <div className="flex justify-center gap-3 sm:gap-4">
                  {[
                    { value: countdown.days, label: "Days" },
                    { value: countdown.hours, label: "Hours" },
                    { value: countdown.minutes, label: "Mins" },
                    { value: countdown.seconds, label: "Secs" },
                  ].map((item, index) => (
                    <div
                      key={item.label}
                      className="relative group"
                    >
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
                      <div className="relative bg-card/90 backdrop-blur-sm border border-primary/20 rounded-xl px-4 py-3 sm:px-6 sm:py-4 min-w-[70px] sm:min-w-[85px]">
                        <div className="text-2xl sm:text-4xl font-bold text-foreground font-mono">
                          {String(item.value).padStart(2, "0")}
                        </div>
                        <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider mt-1">
                          {item.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mb-10 animate-fade-in stagger-4">
                <div className="flex items-center justify-center gap-2 text-muted-foreground hover-lift">
                  <Users className="text-primary flex-shrink-0" size={20} />
                  <span>Teams of 2-4</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-muted-foreground hover-lift">
                  <MapPin className="text-accent flex-shrink-0" size={20} />
                  <span>Amity University Rajasthan (Final Round)</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-muted-foreground hover-lift">
                  <Trophy className="text-primary flex-shrink-0" size={20} />
                  <span>Exciting Prizes</span>
                </div>
              </div>

              {/* Registration CTA with QR */}
              <div className="bg-card/80 backdrop-blur-sm border border-primary/20 rounded-3xl p-8 animate-scale-in stagger-5 hover-lift max-w-xl mx-auto">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  {/* QR Code */}
                  <div className="relative group flex-shrink-0">
                    <div className="absolute -inset-2 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
                    <div className="relative bg-white p-3 rounded-xl border-2 border-primary/30">
                      <img
                        src={whackQR}
                        alt="Scan to Register"
                        className="w-28 h-28 object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  {/* CTA Content */}
                  <div className="flex-1 text-center sm:text-left">
                    <p className="text-sm font-medium text-muted-foreground mb-3 flex items-center justify-center sm:justify-start gap-2">
                      <ScanLine size={16} className="text-primary" />
                      Scan QR or click button to apply
                    </p>
                    <a
                      href="https://forms.gle/95yXC9nfsxqrcaPy9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button variant="default" size="lg" className="w-full group bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 hover-glow">
                        Register Now
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                      </Button>
                    </a>
                  </div>
                </div>
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
                          <span className="text-sm font-medium text-primary flex items-center gap-1 bg-primary/5 px-3 py-1 rounded-full">
                            <Calendar size={14} />
                            {item.date}
                          </span>
                        </div>
                        <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">{item.description}</p>
                        
                        {/* Details List */}
                        <ul className="space-y-2">
                          {item.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="text-primary mt-0.5">•</span>
                              {detail}
                            </li>
                          ))}
                        </ul>
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


        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-accent relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse" />
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm font-bold mb-6 animate-bounce-in">
              <Sparkles size={18} className="animate-pulse" />
              REGISTRATIONS OPEN NOW!
              <Sparkles size={18} className="animate-pulse" />
            </div>
            
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-up">
              Don't Miss Your <span className="text-accent-foreground drop-shadow-lg">Chance!</span>
            </h2>
            
            <p className="text-white/90 text-lg sm:text-xl mb-10 max-w-2xl mx-auto animate-fade-in stagger-1">
              Join 100+ innovators competing for glory. Form your team of 2-4 and showcase your skills at the biggest hackathon of 2026!
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-scale-in stagger-2">
              <a
                href="https://forms.gle/95yXC9nfsxqrcaPy9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-8 py-6 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 group">
                  <Sparkles size={20} className="mr-2" />
                  Register Your Team Now
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </a>
              
              <a
                href="https://www.instagram.com/whack_hack4.0/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 hover:scale-105"
              >
                <Instagram size={20} />
                Stay Updated
              </a>
            </div>
            
            {/* <p className="text-white/70 text-sm mt-8 animate-fade-in stagger-3">
              Limited spots available • First come, first served
            </p> */}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WhackHackathon;
