import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Machine Learning: A Beginner's Guide",
    excerpt:
      "Explore the fundamentals of machine learning, from basic concepts to practical applications in real-world scenarios.",
    author: "Tech Team",
    date: "Dec 15, 2024",
    category: "Tutorial",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "Highlights from TechVista 2024 Hackathon",
    excerpt:
      "A recap of our annual hackathon featuring innovative projects, winning teams, and memorable moments.",
    author: "Events Team",
    date: "Dec 10, 2024",
    category: "Event Recap",
    readTime: "5 min read",
  },
  {
    id: 3,
    title: "Why Every Engineering Student Should Join IEEE",
    excerpt:
      "Discover the benefits of IEEE membership and how it can accelerate your professional growth and career.",
    author: "Editorial Team",
    date: "Dec 5, 2024",
    category: "Career",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Introduction to Cloud Computing with AWS",
    excerpt:
      "Learn the basics of cloud computing and get started with Amazon Web Services for your projects.",
    author: "Tech Team",
    date: "Nov 28, 2024",
    category: "Tutorial",
    readTime: "10 min read",
  },
  {
    id: 5,
    title: "Building Your First Web Application with React",
    excerpt:
      "A step-by-step guide to creating your first React application from scratch with modern best practices.",
    author: "Tech Team",
    date: "Nov 20, 2024",
    category: "Tutorial",
    readTime: "12 min read",
  },
  {
    id: 6,
    title: "Interview Tips for Tech Placements",
    excerpt:
      "Expert advice and strategies to ace your technical interviews and land your dream job.",
    author: "Career Team",
    date: "Nov 15, 2024",
    category: "Career",
    readTime: "7 min read",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4 animate-fade-in stagger-1">
                Blog
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6 animate-slide-up stagger-2">
                Insights, Tutorials &{" "}
                <span className="text-primary">Tech Updates</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in stagger-3">
                Stay updated with the latest in technology, event recaps, tutorials,
                and career advice from our team.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post, index) => (
                <article
                  key={post.id}
                  className={`group bg-background rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 animate-scale-in stagger-${(index % 6) + 1} hover-lift`}
                >
                  {/* Post Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center relative">
                    <span
                      className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${
                        post.category === "Tutorial"
                          ? "bg-primary text-primary-foreground"
                          : post.category === "Event Recap"
                          ? "bg-accent text-accent-foreground"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {post.category}
                    </span>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto">
                        <span className="font-heading text-2xl font-bold text-primary">
                          {post.title.charAt(0)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="p-6 space-y-4">
                    <h2 className="font-heading font-semibold text-xl text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Post Meta */}
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User size={14} className="text-primary" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} className="text-accent" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <span className="text-xs">{post.readTime}</span>
                    </div>

                    <Button
                      variant="ghost"
                      className="w-full justify-center group/btn text-primary hover:bg-primary/10"
                    >
                      Read More
                      <ArrowRight
                        size={16}
                        className="ml-2 group-hover/btn:translate-x-1 transition-transform"
                      />
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
