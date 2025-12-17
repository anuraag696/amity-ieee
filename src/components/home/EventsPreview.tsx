import { ArrowRight, Calendar, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const upcomingEvents = [
  {
    id: 1,
    title: "Whack-Hackathon 4.0",
    type: "Hackathon",
    date: "Feb 17-18, 2026",
    time: "9:00 AM",
    location: "Main Auditorium/Amphitheatre",
    description:
      "A 24-hour coding marathon to build innovative solutions for real-world problems.",
    featured: true,
  },
  {
    id: 3,
    title: "Spark 2025 @IEEE-Day",
    type: "Panel Discussion",
    date: "Oct 07, 2025",
    time: "10:00 AM",
    location: "Main Auditorium",
    description:
      "Expert session with industry leaders discussing career opportunities in tech.",
    featured: false,
  },
  {
    id: 2,
    title: "Introspect 6",
    type: "Workshop",
    date: "September 26, 2025",
    time: "3:00 PM",
    location: "Amity Innovation Incubator, AUR",
    description:
      "Hands-on workshop covering cyber security and practical applications.",
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
