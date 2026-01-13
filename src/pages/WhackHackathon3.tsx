import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Calendar, MapPin, Clock, Users, Trophy, Code, Presentation, Lightbulb, Star, Music, Award, Target, CheckCircle, Cpu, Globe, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const timeline = [
  {
    round: "Round 1",
    title: "Idea Submission",
    mode: "Online",
    icon: Lightbulb,
    date: "August 1-15, 2024",
    description: "Teams submitted detailed project proposals with technical specifications and implementation roadmaps.",
  },
  {
    round: "Round 2",
    title: "Presentation & Demo",
    mode: "Online",
    icon: Presentation,
    date: "August 25, 2024",
    description: "Top 40 teams presented their prototypes and defended their technical approaches to expert judges.",
  },
  {
    round: "Round 3",
    title: "36-Hour Grand Finale",
    mode: "Offline - Amity Campus",
    icon: Code,
    date: "September 14-15, 2024",
    description: "An extended 36-hour coding marathon with mentorship sessions, tech talks, and intense competition.",
  },
];

const problemStatements = [
  {
    title: "AI-Powered Accessibility",
    icon: Cpu,
    description: "Create solutions that leverage artificial intelligence to make technology more accessible for differently-abled individuals.",
  },
  {
    title: "Smart City Solutions",
    icon: Globe,
    description: "Develop applications that address urban challenges including traffic management, waste disposal, and public safety.",
  },
  {
    title: "Cybersecurity Innovation",
    icon: Shield,
    description: "Build tools that enhance digital security, protect user privacy, or detect and prevent cyber threats.",
  },
  {
    title: "Future of Work",
    icon: Sparkles,
    description: "Create platforms that reimagine remote collaboration, productivity tools, or workforce management.",
  },
];

const winners = [
  {
    position: "1st Place",
    teamName: "Team NeuralNinjas",
    project: "SignSpeak AI",
    description: "A real-time sign language translation app using computer vision and deep learning to bridge communication gaps.",
    prize: "₹40,000 + Pre-placement Interviews",
    members: ["Aditya Verma", "Riya Kapoor", "Sanjay Mehta", "Pooja Sharma", "Nikhil Raj"],
  },
  {
    position: "2nd Place",
    teamName: "Team UrbanTech",
    project: "TrafficFlow AI",
    description: "An intelligent traffic management system using IoT sensors and ML to optimize city traffic flow in real-time.",
    prize: "₹25,000 + Internship Opportunities",
    members: ["Akash Gupta", "Meera Nair", "Vishnu Kumar", "Tanya Singh"],
  },
  {
    position: "3rd Place",
    teamName: "Team CyberShield",
    project: "PhishGuard Pro",
    description: "A browser extension and email filter that uses NLP to detect sophisticated phishing attempts with 98% accuracy.",
    prize: "₹15,000 + Tech Goodies",
    members: ["Rohan Desai", "Anjali Patel", "Karan Thakur", "Shreya Joshi"],
  },
];

const eventHighlights = [
  {
    icon: Users,
    stat: "200+",
    label: "Participants",
  },
  {
    icon: Code,
    stat: "50+",
    label: "Teams",
  },
  {
    icon: Trophy,
    stat: "₹80,000",
    label: "Prize Pool",
  },
  {
    icon: Star,
    stat: "25+",
    label: "Mentors & Judges",
  },
];

const sponsors = [
  { name: "TechCorp India", tier: "Title" },
  { name: "InnovateLabs", tier: "Gold" },
  { name: "CloudFirst Solutions", tier: "Gold" },
  { name: "DevHub", tier: "Silver" },
  { name: "CodeCraft Academy", tier: "Silver" },
];

const WhackHackathon3 = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-muted text-muted-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-in">
                <CheckCircle size={16} />
                Past Event - Completed
              </div>

              <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6 ml-2 animate-fade-in stagger-1">
                <Calendar size={16} />
                September 14-15, 2024
              </div>
              
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-slide-up stagger-2">
                Whack-Hackathon <span className="text-primary">3.0</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto animate-fade-in stagger-3">
                Our biggest edition yet! 200+ participants competed in a 36-hour marathon featuring 
                industry mentorship, tech talks, and groundbreaking innovations.
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-10 animate-fade-in stagger-4">
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <MapPin className="text-accent" size={20} />
                  <span>Amity University, Rajasthan</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Clock className="text-primary" size={20} />
                  <span>36 Hours of Coding</span>
                </div>
              </div>

              {/* Event Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto animate-scale-in stagger-5">
                {eventHighlights.map((highlight) => (
                  <div key={highlight.label} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4 hover-lift">
                    <highlight.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">{highlight.stat}</div>
                    <div className="text-sm text-muted-foreground">{highlight.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4 animate-fade-in">
                Event Timeline
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground animate-slide-up stagger-1">
                The Journey to <span className="text-primary">Victory</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary hidden md:block" />

                <div className="space-y-8">
                  {timeline.map((item, index) => (
                    <div key={item.round} className={`relative flex gap-6 md:gap-10 animate-slide-in-left stagger-${index + 1}`}>
                      <div className="hidden md:flex w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent items-center justify-center flex-shrink-0 z-10 hover-lift">
                        <item.icon className="w-7 h-7 text-primary-foreground" />
                      </div>

                      <div className="flex-1 bg-background rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover-lift">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                            {item.round}
                          </span>
                          <span className="bg-accent/20 text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                            {item.mode}
                          </span>
                          <span className="text-sm text-muted-foreground flex items-center gap-1">
                            <Calendar size={14} />
                            {item.date}
                          </span>
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

        {/* Problem Statements Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4 animate-fade-in">
                Challenges
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground animate-slide-up stagger-1">
                Problem <span className="text-primary">Statements</span>
              </h2>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto animate-fade-in stagger-2">
                Four cutting-edge domains that shaped the future of technology
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {problemStatements.map((problem, index) => (
                <div
                  key={problem.title}
                  className={`bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover-lift animate-scale-in stagger-${index + 1}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                    <problem.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground">{problem.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Winners Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4 animate-fade-in">
                Champions
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground animate-slide-up stagger-1">
                Meet the <span className="text-primary">Winners</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {winners.map((winner, index) => (
                <div
                  key={winner.position}
                  className={`relative bg-background rounded-2xl p-6 border transition-all duration-300 hover-lift animate-scale-in stagger-${index + 1} ${
                    index === 0
                      ? "border-accent md:-mt-4 md:mb-4"
                      : "border-border hover:border-primary/30"
                  }`}
                >
                  {index === 0 && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      🏆 Grand Winner
                    </div>
                  )}
                  
                  <div className="text-center pt-4">
                    <div className={`text-3xl font-bold mb-2 ${
                      index === 0 ? "text-accent" : "text-primary"
                    }`}>
                      {winner.position}
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                      {winner.teamName}
                    </h3>
                    <p className="text-primary font-medium text-sm mb-3">{winner.project}</p>
                    <p className="text-muted-foreground text-sm mb-4">{winner.description}</p>
                    
                    <div className="bg-primary/10 rounded-lg p-3 mb-4">
                      <Award className="w-5 h-5 text-primary mx-auto mb-1" />
                      <p className="text-sm font-medium text-foreground">{winner.prize}</p>
                    </div>

                    <div className="text-xs text-muted-foreground">
                      <p className="font-medium mb-1">Team Members:</p>
                      <p>{winner.members.join(", ")}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sponsors Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4 animate-fade-in">
                Partners
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground animate-slide-up stagger-1">
                Our <span className="text-primary">Sponsors</span>
              </h2>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto animate-fade-in stagger-2">
                Thanks to our amazing partners who made this event possible
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {sponsors.map((sponsor, index) => (
                  <div
                    key={sponsor.name}
                    className={`bg-card rounded-xl p-6 border text-center hover-lift animate-scale-in stagger-${index + 1} ${
                      sponsor.tier === "Title"
                        ? "border-accent col-span-2 md:col-span-3"
                        : sponsor.tier === "Gold"
                        ? "border-primary/50"
                        : "border-border"
                    }`}
                  >
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full mb-2 inline-block ${
                      sponsor.tier === "Title"
                        ? "bg-accent/20 text-accent"
                        : sponsor.tier === "Gold"
                        ? "bg-primary/20 text-primary"
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {sponsor.tier} Sponsor
                    </span>
                    <p className="font-heading text-lg font-semibold text-foreground mt-2">
                      {sponsor.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cultural Night Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4 animate-fade-in">
                  After Party
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground animate-slide-up stagger-1">
                  Cultural <span className="text-primary">Night</span>
                </h2>
              </div>

              <div className="bg-background rounded-2xl p-8 border border-border hover-lift animate-scale-in stagger-2">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-full md:w-1/3 flex justify-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Music className="w-16 h-16 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="w-full md:w-2/3 text-center md:text-left">
                    <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
                      An Unforgettable Celebration
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Whack 3.0's cultural night was the biggest celebration yet! After 36 hours of intense coding, 
                      participants enjoyed a spectacular evening featuring celebrity DJ performances, live band, 
                      stand-up comedy, and a grand awards ceremony. The night concluded with a networking dinner 
                      where participants connected with industry professionals and fellow hackers.
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                      <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                        🎵 Celebrity DJ
                      </span>
                      <span className="bg-accent/20 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">
                        🎤 Stand-up Comedy
                      </span>
                      <span className="bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium">
                        🏆 Awards Ceremony
                      </span>
                      <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                        🍽️ Gala Dinner
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Teaser */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6 animate-slide-up">
              Relive the <span className="text-primary">Magic</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto animate-fade-in stagger-1">
              Explore photos and highlights from Whack-Hackathon 3.0 in our gallery.
            </p>
            <Link to="/gallery">
              <Button variant="default" size="lg" className="hover-scale animate-scale-in stagger-2">
                View Gallery
              </Button>
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground mb-6 animate-slide-up">
              Ready for the Next Adventure?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto animate-fade-in stagger-1">
              Whack-Hackathon 4.0 is coming! Be part of our biggest hackathon yet.
            </p>
            <Link to="/whack-hackathon">
              <Button variant="gold" size="lg" className="animate-scale-in stagger-2 hover-glow">
                Whack 4.0 Details
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WhackHackathon3;
