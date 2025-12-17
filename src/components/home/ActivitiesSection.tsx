import { Code2, Presentation, Users, FileText } from "lucide-react";

const activities = [
  {
    icon: Code2,
    title: "Hackathons & Coding Events",
    description:
      "Participate in exciting coding competitions and hackathons to test your skills and win amazing prizes.",
    color: "primary",
  },
  {
    icon: Presentation,
    title: "Technical Workshops & Seminars",
    description:
      "Learn from industry experts through hands-on workshops covering the latest technologies and trends.",
    color: "accent",
  },
  {
    icon: Users,
    title: "Industry Expert Sessions",
    description:
      "Connect with professionals and gain insights into real-world applications and career opportunities.",
    color: "primary",
  },
  {
    icon: FileText,
    title: "Technical Paper Presentations",
    description:
      "Present your research and innovative ideas at technical symposiums and conferences.",
    color: "accent",
  },
];

const ActivitiesSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            What We Do
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Key <span className="text-primary">Activities</span>
          </h2>
          <p className="text-muted-foreground">
            Empowering students through diverse technical activities and events
            that foster innovation and professional growth.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <div
              key={activity.title}
              className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl mb-5 flex items-center justify-center transition-colors ${
                  activity.color === "primary"
                    ? "bg-primary/10 group-hover:bg-primary/20"
                    : "bg-accent/10 group-hover:bg-accent/20"
                }`}
              >
                <activity.icon
                  className={`w-7 h-7 ${
                    activity.color === "primary" ? "text-primary" : "text-accent"
                  }`}
                />
              </div>

              {/* Content */}
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                {activity.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {activity.description}
              </p>

              {/* Hover Accent */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity ${
                  activity.color === "primary" ? "bg-primary" : "bg-accent"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
