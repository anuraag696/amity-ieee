import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Target, Eye, Heart, Award, Calendar, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                  linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
                backgroundSize: "50px 50px",
              }}
            />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                About Us
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
                IEEE Student Branch{" "}
                <span className="text-primary">Amity University Rajasthan</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A student-driven platform dedicated to advancing technology for humanity
                through innovation, collaboration, and excellence in technical education.
              </p>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Our Mission",
                  description:
                    "To foster technological innovation and excellence by providing students with opportunities for learning, professional growth, and real-world application of technical knowledge.",
                },
                {
                  icon: Eye,
                  title: "Our Vision",
                  description:
                    "To be the leading student technical organization that bridges academia and industry, empowering future engineers to make meaningful contributions to society.",
                },
                {
                  icon: Heart,
                  title: "Our Values",
                  description:
                    "Innovation, Integrity, Collaboration, Excellence, and Inclusivity form the core principles that guide every initiative and event we undertake.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-background rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About IEEE */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider">
                  What is IEEE?
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
                  The World&apos;s Largest Technical{" "}
                  <span className="text-primary">Professional Organization</span>
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    IEEE (Institute of Electrical and Electronics Engineers) is the
                    world&apos;s largest technical professional organization dedicated to
                    advancing technology for the benefit of humanity.
                  </p>
                  <p>
                    With over 400,000 members in more than 160 countries, IEEE is a
                    leading authority on a wide variety of areas ranging from
                    aerospace systems, computers, and telecommunications to
                    biomedical engineering, electric power, and consumer electronics.
                  </p>
                  <p>
                    IEEE Student Branches provide students with opportunities for
                    networking, professional development, and access to resources
                    that help them succeed in their academic and professional careers.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-primary rounded-3xl p-8 text-primary-foreground">
                <h3 className="font-heading font-semibold text-2xl mb-8">
                  IEEE at a Glance
                </h3>
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { value: "400K+", label: "Global Members" },
                    { value: "160+", label: "Countries" },
                    { value: "39", label: "Technical Societies" },
                    { value: "200+", label: "Annual Conferences" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p className="font-heading text-3xl font-bold text-accent">
                        {stat.value}
                      </p>
                      <p className="text-sm text-primary-foreground/70">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Journey */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                Our Journey
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
                Milestones & <span className="text-primary">Achievements</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Calendar,
                  title: "Chapter Establishment",
                  description: "Founded with a vision to create a hub for technical excellence at Amity University Rajasthan.",
                },
                {
                  icon: Users,
                  title: "Growing Community",
                  description: "Built a thriving community of 500+ active members passionate about technology.",
                },
                {
                  icon: Award,
                  title: "Recognition",
                  description: "Received multiple awards for outstanding chapter activities and student engagement.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-background rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
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

export default About;
