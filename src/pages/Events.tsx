import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const upcomingEvents = [
  {
    id: 1,
    title: "TechVista 2024",
    type: "Hackathon",
    date: "Jan 15-16, 2025",
    time: "9:00 AM",
    location: "Main Auditorium",
    description:
      "A 24-hour coding marathon to build innovative solutions for real-world problems. Team up with fellow developers and showcase your skills.",
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
  },
];

const pastEvents = [
  {
    id: 4,
    title: "Web Development Bootcamp",
    type: "Workshop",
    date: "Dec 10, 2024",
    description: "Intensive workshop on modern web development with React, Node.js, and cloud deployment.",
  },
  {
    id: 5,
    title: "IEEE Day Celebration",
    type: "Event",
    date: "Oct 1, 2024",
    description: "Annual IEEE Day celebration with technical competitions, quizzes, and networking sessions.",
  },
  {
    id: 6,
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
                  className="bg-card rounded-2xl p-6 border border-border hover:border-primary/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        event.type === "Workshop"
                          ? "bg-accent/20 text-accent-foreground"
                          : event.type === "Event"
                          ? "bg-primary/20 text-primary"
                          : "bg-secondary/20 text-secondary-foreground"
                      }`}
                    >
                      {event.type}
                    </span>
                    <span className="text-sm text-muted-foreground">{event.date}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
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
