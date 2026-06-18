import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Calendar, MapPin, Clock, ArrowRight, Trophy, Users, Code, Clock as ClockIcon, CheckCircle, Camera, Star, Sparkles, Medal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const upcomingEvents = [
  {
    id: 1,
    title: "IEEE Tech Summit 2026",
    type: "Conference",
    date: "Sep 12-13, 2026",
    time: "10:00 AM",
    location: "Main Auditorium",
    description:
      "A two-day technical conference featuring workshops, keynotes, and networking sessions with industry leaders.",
  },
  {
    id: 2,
    title: "AI/ML Deep Dive Workshop",
    type: "Workshop",
    date: "Oct 18, 2026",
    time: "2:00 PM",
    location: "CS Lab 301",
    description:
      "Advanced hands-on workshop on large language models, neural architectures, and real-world AI deployment.",
  },
  {
    id: 3,
    title: "Winter Code Challenge",
    type: "Hackathon",
    date: "Nov 22-23, 2026",
    time: "9:00 AM",
    location: "Innovation Hub",
    description:
      "48-hour coding challenge focused on open-source contributions and building tools for social good.",
  },
];

const pastEvents = [
  {
    id: 4,
    title: "Whack Hackathon 4.0",
    type: "Hackathon",
    date: "Feb 17-18, 2026",
    description: "Our flagship 24-hour hackathon bringing together 500+ participants, 120+ teams, and incredible innovation. A massive success!",
    featured: true,
    stats: { participants: "500+", teams: "120+", hours: "24" },
  },
  {
    id: 5,
    title: "Web Development Bootcamp",
    type: "Workshop",
    date: "Dec 10, 2024",
    description: "Intensive workshop on modern web development with React, Node.js, and cloud deployment.",
  },
  {
    id: 6,
    title: "IEEE Day Celebration",
    type: "Event",
    date: "Oct 1, 2024",
    description: "Annual IEEE Day celebration with technical competitions, quizzes, and networking sessions.",
  },
  {
    id: 7,
    title: "Cybersecurity Awareness",
    type: "Seminar",
    date: "Sep 15, 2024",
    description: "Expert talk on cybersecurity threats, best practices, and career opportunities in security.",
  },
];

const Events = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                Events
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Workshops, Hackathons &{" "}
                <span className="text-primary">Technical Events</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Join us for exciting events that foster learning, innovation, and networking
                among tech enthusiasts.
              </p>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-8">
              Upcoming <span className="text-primary">Events</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="group bg-background rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="h-40 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center relative">
                    <span
                      className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                        event.type === "Hackathon"
                          ? "bg-primary text-primary-foreground"
                          : event.type === "Workshop"
                          ? "bg-accent text-accent-foreground"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {event.type}
                    </span>
                    <Calendar className="w-12 h-12 text-primary/40" />
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="font-heading font-semibold text-xl text-foreground group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {event.description}
                    </p>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} className="text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} className="text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} className="text-accent" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <Button variant="default" className="w-full group/btn">
                      Register Now
                      <ArrowRight
                        size={16}
                        className="ml-2 group-hover/btn:translate-x-1 transition-transform"
                      />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-8">
              Past <span className="text-primary">Events</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event) => (
                <div
                  key={event.id}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    event.featured
                      ? "bg-gradient-to-br from-ieee-gold/10 via-primary/5 to-accent/5 border-ieee-gold/30 hover:border-ieee-gold/50 hover:shadow-xl md:col-span-2 lg:col-span-1"
                      : "bg-card border-border hover:border-primary/20"
                  }`}
                >
                  {event.featured && (
                    <div className="bg-gradient-to-r from-ieee-gold/20 to-primary/10 px-6 py-3 flex items-center gap-2 border-b border-ieee-gold/20">
                      <Trophy className="w-4 h-4 text-ieee-gold" />
                      <span className="text-sm font-semibold text-ieee-gold">Flagship Event</span>
                      <span className="ml-auto text-xs bg-green-500/20 text-green-600 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" /> Completed
                      </span>
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          event.type === "Hackathon"
                            ? "bg-primary/20 text-primary"
                            : event.type === "Workshop"
                            ? "bg-accent/20 text-accent-foreground"
                            : event.type === "Event"
                            ? "bg-ieee-gold/20 text-ieee-gold"
                            : "bg-secondary/20 text-secondary-foreground"
                        }`}
                      >
                        {event.type}
                      </span>
                      <span className="text-sm text-muted-foreground">{event.date}</span>
                    </div>

                    <h3 className={`font-heading font-semibold text-lg mb-2 ${event.featured ? "text-xl" : ""}`}>
                      {event.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{event.description}</p>

                    {event.featured && event.stats && (
                      <div className="grid grid-cols-3 gap-3 mb-5">
                        <div className="bg-background/80 rounded-xl p-3 text-center border border-border">
                          <Users className="w-5 h-5 text-primary mx-auto mb-1" />
                          <p className="text-lg font-bold text-foreground">{event.stats.participants}</p>
                          <p className="text-xs text-muted-foreground">Participants</p>
                        </div>
                        <div className="bg-background/80 rounded-xl p-3 text-center border border-border">
                          <Code className="w-5 h-5 text-accent mx-auto mb-1" />
                          <p className="text-lg font-bold text-foreground">{event.stats.teams}</p>
                          <p className="text-xs text-muted-foreground">Teams</p>
                        </div>
                        <div className="bg-background/80 rounded-xl p-3 text-center border border-border">
                          <ClockIcon className="w-5 h-5 text-ieee-gold mx-auto mb-1" />
                          <p className="text-lg font-bold text-foreground">{event.stats.hours}</p>
                          <p className="text-xs text-muted-foreground">Hours</p>
                        </div>
                      </div>
                    )}

                    {event.featured ? (
                      <Link to="/whack-hackathon">
                        <Button className="w-full group/btn bg-gradient-to-r from-primary to-accent hover:opacity-90">
                          <Sparkles className="w-4 h-4 mr-2" />
                          View Event Recap
                          <ArrowRight
                            size={16}
                            className="ml-2 group-hover/btn:translate-x-1 transition-transform"
                          />
                        </Button>
                      </Link>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
