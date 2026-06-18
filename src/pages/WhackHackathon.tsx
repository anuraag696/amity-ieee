import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Trophy,
  Users,
  Code,
  Clock,
  Calendar,
  MapPin,
  CheckCircle,
  Star,
  Sparkles,
  Camera,
  ChevronRight,
  Mail,
  Zap,
  Award,
  Medal,
  Crown,
  Music,
  UtensilsCrossed,
  Wine,
  Newspaper,
  Building2,
  Gift,
  HeartHandshake,
  Monitor,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Users, value: "500+", label: "Participants", color: "text-primary" },
  { icon: Code, value: "120+", label: "Teams", color: "text-accent" },
  { icon: Clock, value: "24", label: "Hours", color: "text-ieee-gold" },
  { icon: Award, value: "15+", label: "Problem Statements", color: "text-primary" },
];

const schedule = [
  {
    round: "Round 1",
    title: "Idea Submission",
    date: "February 10, 2026",
    description: "Teams submitted their innovative ideas and project proposals online.",
  },
  {
    round: "Round 2",
    title: "Online Presentation",
    date: "February 13, 2026",
    description: "Shortlisted teams presented their concepts to the jury panel virtually.",
  },
  {
    round: "Round 3",
    title: "24-Hour Offline Hackathon",
    date: "February 17-18, 2026",
    description: "Final teams battled it out at Amity University Rajasthan for 24 hours of non-stop coding.",
  },
];

const winners = [
  {
    position: "1st",
    title: "Grand Winner",
    color: "from-yellow-400/20 to-yellow-500/5",
    borderColor: "border-yellow-400/30",
    iconColor: "text-yellow-500",
    icon: Crown,
    prize: "₹50,000 + Internship Opportunities",
    team: "Team Name",
    project: "Project Title",
  },
  {
    position: "2nd",
    title: "1st Runner Up",
    color: "from-slate-300/20 to-slate-400/5",
    borderColor: "border-slate-300/30",
    iconColor: "text-slate-400",
    icon: Medal,
    prize: "₹30,000 + Goodies",
    team: "Team Name",
    project: "Project Title",
  },
  {
    position: "3rd",
    title: "2nd Runner Up",
    color: "from-orange-400/20 to-orange-500/5",
    borderColor: "border-orange-400/30",
    iconColor: "text-orange-500",
    icon: Medal,
    prize: "₹20,000 + Goodies",
    team: "Team Name",
    project: "Project Title",
  },
];

const sponsorTiers = [
  {
    title: "Title Sponsor",
    tier: "title",
    slots: 1,
    icon: Trophy,
    color: "text-ieee-gold",
    bg: "from-ieee-gold/20 to-ieee-gold/5",
    border: "border-ieee-gold/30",
  },
  {
    title: "Gold Sponsors",
    tier: "gold",
    slots: 3,
    icon: Star,
    color: "text-yellow-500",
    bg: "from-yellow-500/15 to-yellow-500/5",
    border: "border-yellow-500/20",
  },
  {
    title: "Silver Sponsors",
    tier: "silver",
    slots: 4,
    icon: Star,
    color: "text-slate-400",
    bg: "from-slate-400/15 to-slate-400/5",
    border: "border-slate-400/20",
  },
];

const partners = [
  { title: "Food Partner", icon: UtensilsCrossed, color: "text-orange-500" },
  { title: "Drinks Partner", icon: Wine, color: "text-rose-500" },
  { title: "Radio Partner", icon: Music, color: "text-purple-500" },
  { title: "Media Partner", icon: Newspaper, color: "text-blue-500" },
  { title: "Community Partner", icon: HeartHandshake, color: "text-green-500" },
  { title: "Venue Partner", icon: Building2, color: "text-primary" },
  { title: "Gifting Partner", icon: Gift, color: "text-pink-500" },
  { title: "Tech Partner", icon: Monitor, color: "text-cyan-500" },
];

const WhackHackathon = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 mb-8">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm font-semibold">Successfully Completed</span>
              </div>

              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-4">
                Whack <span className="text-primary">Hackathon</span>
              </h1>
              <p className="text-2xl sm:text-3xl font-heading font-semibold text-ieee-gold mb-6">
                4.0 Edition
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                The biggest hackathon in the region concluded with incredible innovation, 
                fierce competition, and unforgettable moments. Thank you to all participants, 
                sponsors, and partners for making it a grand success!
              </p>

              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-12">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
                  <Calendar className="w-4 h-4 text-primary" />
                  Feb 17-18, 2026
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
                  <MapPin className="w-4 h-4 text-accent" />
                  Amity University Rajasthan
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
                  <Clock className="w-4 h-4 text-ieee-gold" />
                  24 Hours
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-background rounded-2xl p-6 text-center border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300"
                >
                  <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                  <p className="text-3xl font-heading font-bold text-foreground mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Winners Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                Victory Stand
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
                <Trophy className="w-8 h-8 text-ieee-gold inline-block mr-2" />
                Winners <span className="text-primary">Spotlight</span>
              </h2>
              <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
                Celebrating the brilliant minds who emerged victorious after 24 hours of intense innovation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {winners.map((winner, index) => (
                <div
                  key={index}
                  className={`relative bg-gradient-to-b ${winner.color} rounded-2xl border ${winner.borderColor} p-6 text-center hover:shadow-xl transition-all duration-300 ${
                    winner.position === "1st" ? "md:-mt-4 md:mb-4" : ""
                  }`}
                >
                  {winner.position === "1st" && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-yellow-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                      <Crown className="w-3 h-3" /> CHAMPION
                    </div>
                  )}

                  <winner.icon className={`w-12 h-12 ${winner.iconColor} mx-auto mb-4`} />
                  <h3 className="font-heading font-bold text-xl text-foreground mb-1">
                    {winner.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{winner.prize}</p>

                  <div className="bg-background/60 rounded-xl p-4 border border-border/50">
                    <p className="text-sm font-semibold text-foreground mb-1">{winner.team}</p>
                    <p className="text-xs text-muted-foreground">{winner.project}</p>
                  </div>

                  <div className="mt-4 text-xs text-muted-foreground italic">
                    Photos and details coming soon
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Schedule Recap */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                Journey
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
                Event <span className="text-primary">Timeline</span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className="relative bg-background rounded-2xl p-6 border border-border hover:border-primary/20 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <span className="font-heading font-bold text-primary">{item.round}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                      <div className="flex items-center gap-2 text-xs text-accent">
                        <Calendar className="w-3 h-3" />
                        {item.date}
                      </div>
                    </div>
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 hidden sm:block" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Photo Gallery - Placeholders */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                Memories
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
                <Camera className="w-8 h-8 text-primary inline-block mr-2" />
                Event <span className="text-primary">Gallery</span>
              </h2>
              <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
                Glimpses from the most exciting 24 hours of the year. Photos will be added soon!
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-dashed border-border flex flex-col items-center justify-center hover:border-primary/30 transition-colors group"
                >
                  <Camera className="w-8 h-8 text-muted-foreground/40 group-hover:text-primary/60 transition-colors mb-2" />
                  <span className="text-xs text-muted-foreground/60 text-center px-4">
                    Photo {index + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sponsors Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                Partners
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
                Our <span className="text-ieee-gold">Sponsors</span> &{" "}
                <span className="text-primary">Partners</span>
              </h2>
              <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
                Whack Hackathon 4.0 was made possible by the generous support of our sponsors.
              </p>
            </div>

            {/* Title Sponsor */}
            <div className="max-w-md mx-auto mb-12">
              <div className="bg-gradient-to-b from-ieee-gold/20 to-ieee-gold/5 rounded-2xl border-2 border-ieee-gold/30 p-8 text-center hover:shadow-xl transition-all duration-300">
                <Trophy className="w-10 h-10 text-ieee-gold mx-auto mb-3" />
                <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                  Title Sponsor
                </h3>
                <div className="w-24 h-24 mx-auto rounded-xl bg-background border-2 border-dashed border-ieee-gold/30 flex items-center justify-center mb-3">
                  <Sparkles className="w-8 h-8 text-ieee-gold/40" />
                </div>
                <p className="text-sm text-muted-foreground">Logo & Name</p>
              </div>
            </div>

            {/* Gold & Silver */}
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-12">
              {sponsorTiers.slice(1).map((tier, index) => (
                <div key={index}>
                  <h3 className="font-heading font-semibold text-lg text-foreground text-center mb-4">
                    <tier.icon className={`w-5 h-5 ${tier.color} inline-block mr-1`} />
                    {tier.title}
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {Array.from({ length: tier.slots }).map((_, slotIndex) => (
                      <div
                        key={slotIndex}
                        className={`bg-gradient-to-b ${tier.bg} rounded-xl border ${tier.border} p-4 text-center hover:shadow-md transition-all duration-300`}
                      >
                        <div className="w-16 h-16 mx-auto rounded-lg bg-background/80 border-2 border-dashed border-border flex items-center justify-center mb-2">
                          <Zap className={`w-6 h-6 ${tier.color} opacity-40`} />
                        </div>
                        <p className="text-xs text-muted-foreground">Logo & Name</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Partner Categories */}
            <div className="max-w-4xl mx-auto">
              <h3 className="font-heading font-semibold text-lg text-foreground text-center mb-6">
                Event Partners
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {partners.map((partner, index) => (
                  <div
                    key={index}
                    className="bg-background rounded-xl border border-border p-4 text-center hover:border-primary/20 hover:shadow-md transition-all duration-300"
                  >
                    <partner.icon className={`w-6 h-6 ${partner.color} mx-auto mb-2`} />
                    <p className="text-xs font-medium text-foreground">{partner.title}</p>
                    <div className="w-12 h-12 mx-auto mt-2 rounded-lg bg-muted border border-dashed border-border flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-muted-foreground/30" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cultural Night */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Music className="w-10 h-10 text-purple-500 mx-auto mb-4" />
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Cultural <span className="text-purple-500">Night</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                After 24 hours of intense coding, participants unwound with an unforgettable 
                cultural night featuring music, dance, and celebration. The perfect end to an 
                incredible journey of innovation and teamwork.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={index}
                    className="aspect-video rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-2 border-dashed border-purple-500/20 flex flex-col items-center justify-center"
                  >
                    <Camera className="w-6 h-6 text-purple-500/30 mb-1" />
                    <span className="text-xs text-muted-foreground/50">Cultural Night {index + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <Sparkles className="w-10 h-10 text-ieee-gold mx-auto mb-4" />
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
              See You at <span className="text-primary">Whack 5.0</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Missed this edition? Don't worry! Whack Hackathon 5.0 is already in the works. 
              Stay tuned for an even bigger and better experience next year.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="default" size="lg" className="group">
                Stay Updated
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <a href="mailto:ieee@aurlucknow.in">
                <Button variant="outline" size="lg" className="gap-2">
                  <Mail className="w-4 h-4" />
                  Sponsor Next Edition
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WhackHackathon;
