import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Calendar, MapPin, Clock, Users, Trophy, Code, Presentation, Lightbulb, Star, Music, Award, Target, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const timeline = [
  {
    round: "Round 1",
    title: "Idea Submission",
    mode: "Online",
    icon: Lightbulb,
    date: "January 15, 2024",
    description: "Teams submitted innovative project proposals addressing real-world challenges in healthcare, education, and sustainability.",
  },
  {
    round: "Round 2",
    title: "Presentation Round",
    mode: "Online",
    icon: Presentation,
    date: "January 25, 2024",
    description: "Shortlisted teams presented their ideas to a panel of industry experts and academic mentors.",
  },
  {
    round: "Round 3",
    title: "24-Hour Coding Marathon",
    mode: "Offline - Amity Campus",
    icon: Code,
    date: "February 10-11, 2024",
    description: "The grand finale! 20 teams competed in a 24-hour coding sprint to bring their ideas to life.",
  },
];

const problemStatements = [
  {
    title: "Smart Healthcare Solutions",
    description: "Develop AI-powered tools to improve patient care, diagnosis accuracy, or healthcare accessibility in rural areas.",
  },
  {
    title: "Sustainable Campus Initiative",
    description: "Create applications that help educational institutions reduce their carbon footprint and promote sustainable practices.",
  },
  {
    title: "EdTech Innovation",
    description: "Build platforms that enhance remote learning experiences and make education more accessible and engaging.",
  },
  {
    title: "Open Innovation",
    description: "Teams could also propose their own problem statements addressing any social or technological challenge.",
  },
];

const winners = [
  {
    position: "1st Place",
    teamName: "Team CodeCrafters",
    project: "MediAssist AI",
    description: "An AI-powered symptom checker and health monitoring system with real-time doctor consultation features.",
    prize: "₹25,000 + Internship Opportunities",
    members: ["Rahul Sharma", "Priya Patel", "Amit Kumar", "Sneha Gupta"],
  },
  {
    position: "2nd Place",
    teamName: "Team GreenBytes",
    project: "EcoTrack Campus",
    description: "A comprehensive sustainability tracking platform for educational institutions with gamification elements.",
    prize: "₹15,000 + Mentorship Program",
    members: ["Arjun Singh", "Kavya Reddy", "Rohit Jain", "Ananya Verma"],
  },
  {
    position: "3rd Place",
    teamName: "Team LearnSphere",
    project: "VirtuClass Pro",
    description: "An immersive virtual classroom platform with AR/VR integration for hands-on learning experiences.",
    prize: "₹10,000 + Tech Goodies",
    members: ["Vikram Malhotra", "Neha Sharma", "Karthik Nair", "Divya Iyer"],
  },
];

const eventHighlights = [
  {
    icon: Users,
    stat: "120+",
    label: "Participants",
  },
  {
    icon: Code,
    stat: "30+",
    label: "Teams",
  },
  {
    icon: Trophy,
    stat: "₹50,000",
    label: "Prize Pool",
  },
  {
    icon: Star,
    stat: "15+",
    label: "Mentors & Judges",
  },
];

const WhackHackathon2 = () => {
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
                February 10-11, 2024
              </div>
              
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-slide-up stagger-2">
                Whack-Hackathon <span className="text-primary">2.0</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto animate-fade-in stagger-3">
                Our second edition brought together 120+ participants in a 24-hour coding marathon, 
                pushing the boundaries of innovation and creativity.
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-10 animate-fade-in stagger-4">
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <MapPin className="text-accent" size={20} />
                  <span>Amity University, Rajasthan</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Clock className="text-primary" size={20} />
                  <span>24 Hours of Coding</span>
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
                How It <span className="text-primary">Unfolded</span>
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
                Participants tackled real-world challenges across multiple domains
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {problemStatements.map((problem, index) => (
                <div
                  key={problem.title}
                  className={`bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover-lift animate-scale-in stagger-${index + 1}`}
                >
                  <Target className="w-8 h-8 text-primary mb-4" />
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

        {/* Cultural Night Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4 animate-fade-in">
                  Celebration
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground animate-slide-up stagger-1">
                  Cultural <span className="text-primary">Night</span>
                </h2>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border hover-lift animate-scale-in stagger-2">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-full md:w-1/3 flex justify-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Music className="w-16 h-16 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="w-full md:w-2/3 text-center md:text-left">
                    <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
                      A Night to Remember
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      After 24 hours of intense coding, participants unwound at our cultural night featuring 
                      live music performances, dance acts, and a DJ night. The evening was filled with 
                      laughter, networking, and celebration of the incredible projects created during the hackathon.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                      <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                        🎵 Live Band Performance
                      </span>
                      <span className="bg-accent/20 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">
                        💃 Dance Performances
                      </span>
                      <span className="bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium">
                        🎧 DJ Night
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Teaser */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6 animate-slide-up">
              Relive the <span className="text-primary">Moments</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto animate-fade-in stagger-1">
              Check out photos and highlights from Whack-Hackathon 2.0 in our gallery.
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
              Join Our Next Hackathon!
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto animate-fade-in stagger-1">
              Don't miss out on Whack-Hackathon 4.0! Register now and be part of the innovation.
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

export default WhackHackathon2;
