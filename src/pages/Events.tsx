import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Link } from "react-router-dom";

const upcomingEvents = [
  {
    id: 1,
    title: "Whack-Hackathon 4.0",
    type: "Hackathon",
    date: "Feb 17-18, 2025",
    time: "9:00 AM",
    location: "Amity Campus",
    description:
      "A 24-hour coding marathon with 3 rounds - idea submission, presentation, and final coding round. Form teams of 4-6 and build innovative solutions!",
    hasPage: true,
    link: "/whack-hackathon",
  },
  {
    id: 2,
    title: "AI/ML Workshop Series",
    type: "Workshop",
    date: "Jan 20, 2025",
    time: "2:00 PM",
    location: "CS Lab 301",
    description:
      "Hands-on workshop covering machine learning fundamentals, neural networks, and practical applications with Python.",
    hasPage: false,
  },
  {
    id: 3,
    title: "Industry Connect",
    type: "Seminar",
    date: "Jan 25, 2025",
    time: "10:00 AM",
    location: "Conference Hall",
    description:
      "Expert session with industry leaders discussing career opportunities, emerging technologies, and professional growth.",
    hasPage: false,
  },
];

const pastEvents = [
  {
    id: 4,
    title: "Whack-Hackathon 3.0",
    type: "Hackathon",
    date: "Sep 14-15, 2024",
    description: "Our biggest hackathon yet! 200+ participants competed in a 36-hour coding marathon with ₹80,000 prize pool.",
    hasPage: true,
    link: "/whack-hackathon-3",
  },
  {
    id: 5,
    title: "Whack-Hackathon 2.0",
    type: "Hackathon",
    date: "Feb 10-11, 2024",
    description: "120+ participants joined for a 24-hour hackathon focusing on healthcare, sustainability, and EdTech innovations.",
    hasPage: true,
    link: "/whack-hackathon-2",
  },
  {
    id: 6,
    title: "Spark 2025 @IEEE Day",
    type: "Event",
    date: "Oct 7, 2025",
    description: "Annual IEEE Day celebration featuring panel discussions, technical quizzes, debates, and networking sessions.",
    hasPage: false,
  },
  {
    id: 7,
    title: "Introspect 6",
    type: "Workshop",
    date: "Sep 26, 2024",
    description: "Cybersecurity Awareness workshop featuring expert talk on cybersecurity threats, best practices, and career opportunities in security.",
    hasPage: false,
  },
  {
    id: 8,
    title: "Web Development Bootcamp",
    type: "Workshop",
    date: "Dec 10, 2024",
    description: "Intensive workshop on modern web development with React, Node.js, and cloud deployment.",
    hasPage: false,
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
            <div className="max-w-3xl animate-slide-up">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4 animate-fade-in stagger-1">
                Events
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6 animate-slide-up stagger-2">
                Workshops, Hackathons &{" "}
                <span className="text-primary">Technical Events</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in stagger-3">
                Join us for exciting events that foster learning, innovation, and networking
                among tech enthusiasts.
              </p>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-8 animate-slide-up">
              Upcoming <span className="text-primary">Events</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <div
                  key={event.id}
                  className={`group bg-background rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover-lift animate-scale-in stagger-${index + 1}`}
                >
                  <div className="h-40 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center relative overflow-hidden">
                    <span
                      className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold transition-transform duration-300 group-hover:scale-110 ${
                        event.type === "Hackathon"
                          ? "bg-primary text-primary-foreground"
                          : event.type === "Workshop"
                          ? "bg-accent text-accent-foreground"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {event.type}
                    </span>
                    <Calendar className="w-12 h-12 text-primary/40 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
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

                    {event.hasPage ? (
                      <Link to={event.link}>
                        <Button variant="default" className="w-full group/btn hover-scale">
                          View Details
                          <ArrowRight
                            size={16}
                            className="ml-2 group-hover/btn:translate-x-1 transition-transform"
                          />
                        </Button>
                      </Link>
                    ) : (
                      <Button variant="default" className="w-full group/btn hover-scale">
                        Register Now
                        <ArrowRight
                          size={16}
                          className="ml-2 group-hover/btn:translate-x-1 transition-transform"
                        />
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-8 animate-slide-up">
              Past <span className="text-primary">Events</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event, index) => (
                <div
                  key={event.id}
                  className={`group bg-card rounded-2xl p-6 border border-border hover:border-primary/20 transition-all duration-300 hover-lift animate-scale-in stagger-${index + 1}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold transition-transform duration-300 hover:scale-110 ${
                        event.type === "Workshop"
                          ? "bg-accent/20 text-accent-foreground"
                          : event.type === "Event"
                          ? "bg-primary/20 text-primary"
                          : event.type === "Hackathon"
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary/20 text-secondary-foreground"
                      }`}
                    >
                      {event.type}
                    </span>
                    <span className="text-sm text-muted-foreground">{event.date}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{event.description}</p>
                  {event.hasPage && (
                    <Link to={event.link}>
                      <Button variant="outline" size="sm" className="w-full group/btn">
                        View Details
                        <ArrowRight size={14} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  )}
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
