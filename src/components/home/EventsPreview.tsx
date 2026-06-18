import { ArrowRight, Calendar, MapPin, Clock, Trophy, CheckCircle, Sparkles } from "lucide-react";
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
      "A two-day technical conference with workshops, keynotes, and networking with industry leaders.",
    featured: true,
  },
  {
    id: 2,
    title: "AI/ML Deep Dive Workshop",
    type: "Workshop",
    date: "Oct 18, 2026",
    time: "2:00 PM",
    location: "CS Lab 301",
    description:
      "Advanced hands-on workshop on large language models and real-world AI deployment.",
    featured: false,
  },
  {
    id: 3,
    title: "Winter Code Challenge",
    type: "Hackathon",
    date: "Nov 22-23, 2026",
    time: "9:00 AM",
    location: "Innovation Hub",
    description:
      "48-hour coding challenge focused on open-source contributions and social good.",
    featured: false,
  },
];

const EventsPreview = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-2">
              Upcoming Events
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
              Join Our <span className="text-primary">Next Events</span>
            </h2>
          </div>
          <Link to="/events">
            <Button variant="outline" className="group">
              View All Events
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Button>
          </Link>
        </div>

        {/* Recently Completed Highlight */}
        <div className="mb-10 p-6 rounded-2xl bg-gradient-to-r from-ieee-gold/10 via-primary/5 to-accent/5 border border-ieee-gold/20">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-ieee-gold/20 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-ieee-gold" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-heading font-bold text-lg text-foreground">
                    Whack Hackathon 4.0
                  </h3>
                  <span className="text-xs bg-green-500/20 text-green-600 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" /> Completed
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Feb 17-18, 2026 · 500+ participants · 120+ teams · 24 hours of innovation
                </p>
              </div>
            </div>
            <div className="md:ml-auto">
              <Link to="/whack-hackathon">
                <Button className="group/btn bg-gradient-to-r from-primary to-accent hover:opacity-90">
                  <Sparkles className="w-4 h-4 mr-2" />
                  View Recap
                  <ArrowRight
                    size={16}
                    className="ml-2 group-hover/btn:translate-x-1 transition-transform"
                  />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className={`group relative bg-background rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 ${
                event.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Event Type Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    event.type === "Hackathon"
                      ? "bg-primary text-primary-foreground"
                      : event.type === "Workshop"
                      ? "bg-accent text-accent-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {event.type}
                </span>
              </div>

              {/* Event Image Placeholder */}
              <div className="h-40 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <div className="text-center">
                  <Calendar className="w-12 h-12 text-primary/40 mx-auto mb-2" />
                  <p className="text-sm font-medium text-muted-foreground">
                    {event.date}
                  </p>
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6 space-y-4">
                <h3 className="font-heading font-semibold text-xl text-foreground group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {event.description}
                </p>

                {/* Event Meta */}
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock size={14} className="text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} className="text-accent" />
                    <span>{event.location}</span>
                  </div>
                </div>

                {/* CTA */}
                <Button
                  variant="ghost"
                  className="w-full justify-center group/btn text-primary hover:bg-primary/10"
                >
                  Learn More
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
  );
};

export default EventsPreview;
