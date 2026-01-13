import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Calendar, User, Clock, ArrowLeft, Award, Briefcase, Globe, Users, ChevronRight, BookOpen, Zap, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BlogPost3 = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-hero relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <Link to="/blog">
              <Button variant="ghost" className="mb-6 text-muted-foreground hover:text-primary">
                <ArrowLeft size={16} className="mr-2" />
                Back to Blog
              </Button>
            </Link>
            <div className="max-w-4xl">
              <span className="inline-block px-4 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-4">
                Career
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-slide-up">
                Why Every Engineering Student Should Join IEEE
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User size={18} className="text-primary" />
                  <span>Editorial Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-accent" />
                  <span>December 5, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-primary" />
                  <span>6 min read</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Featured Image */}
              <div className="h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl mb-12 flex items-center justify-center">
                <GraduationCap size={80} className="text-primary/50" />
              </div>

              {/* Introduction */}
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  As an engineering student, you're constantly looking for ways to stand out, build skills, and prepare for a successful career. IEEE (Institute of Electrical and Electronics Engineers) membership offers a unique combination of benefits that can transform your academic journey and accelerate your professional growth. Here's why joining IEEE should be a priority.
                </p>

                {/* Section 1 */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Globe size={20} className="text-primary" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-foreground m-0">What is IEEE?</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    IEEE is the world's largest technical professional organization dedicated to advancing technology for humanity. With over 400,000 members in 160+ countries, IEEE connects engineers, scientists, and technologists across the globe.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    <div className="bg-card border border-border rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-primary mb-1">400K+</div>
                      <div className="text-sm text-muted-foreground">Global Members</div>
                    </div>
                    <div className="bg-card border border-border rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-accent mb-1">160+</div>
                      <div className="text-sm text-muted-foreground">Countries</div>
                    </div>
                    <div className="bg-card border border-border rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-primary mb-1">39</div>
                      <div className="text-sm text-muted-foreground">Technical Societies</div>
                    </div>
                  </div>
                </div>

                {/* Section 2 */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Zap size={20} className="text-accent" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-foreground m-0">Top Benefits of IEEE Membership</h2>
                  </div>
                  
                  <div className="space-y-4 my-6">
                    <div className="flex gap-4 p-5 bg-card border border-border rounded-xl">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <BookOpen size={24} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Access to IEEE Xplore Digital Library</h4>
                        <p className="text-sm text-muted-foreground">Get free or discounted access to over 5 million technical documents, including journals, conference papers, and standards. This is invaluable for research projects and staying updated with the latest developments.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 p-5 bg-card border border-border rounded-xl">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Users size={24} className="text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Networking Opportunities</h4>
                        <p className="text-sm text-muted-foreground">Connect with like-minded students, experienced professionals, and industry leaders through local chapters, conferences, and online communities. Build relationships that can shape your career.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 p-5 bg-card border border-border rounded-xl">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Award size={24} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Scholarships & Competitions</h4>
                        <p className="text-sm text-muted-foreground">IEEE offers numerous scholarships, grants, and competition opportunities exclusively for student members. Win recognition and funding for your innovative projects.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 p-5 bg-card border border-border rounded-xl">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Briefcase size={24} className="text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Career Development Resources</h4>
                        <p className="text-sm text-muted-foreground">Access IEEE's career center for job listings, resume building tools, and career advice. Many companies actively recruit from IEEE events and communities.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 3 */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Award size={20} className="text-primary" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-foreground m-0">What Our Student Branch Offers</h2>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    At IEEE ABESIT Student Branch, we go beyond the standard IEEE benefits to create a vibrant community of learners and innovators. Here's what you get when you join us:
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-5">
                      <h4 className="font-semibold text-foreground mb-2">Technical Workshops</h4>
                      <p className="text-sm text-muted-foreground">Monthly hands-on sessions on trending technologies like AI/ML, Cloud Computing, IoT, and Cybersecurity.</p>
                    </div>
                    <div className="bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 rounded-xl p-5">
                      <h4 className="font-semibold text-foreground mb-2">Hackathons & Competitions</h4>
                      <p className="text-sm text-muted-foreground">Regular coding competitions, hackathons, and tech quizzes with exciting prizes and recognition.</p>
                    </div>
                    <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-5">
                      <h4 className="font-semibold text-foreground mb-2">Industry Connect</h4>
                      <p className="text-sm text-muted-foreground">Guest lectures and seminars by industry professionals, startup founders, and successful alumni.</p>
                    </div>
                    <div className="bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 rounded-xl p-5">
                      <h4 className="font-semibold text-foreground mb-2">Project Mentorship</h4>
                      <p className="text-sm text-muted-foreground">Guidance on innovative projects, research papers, and startup ideas from experienced seniors and faculty.</p>
                    </div>
                  </div>
                </div>

                {/* Testimonials */}
                <div className="mb-12">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-6">What Our Members Say</h3>
                  <div className="space-y-4">
                    <div className="bg-card border border-border rounded-xl p-5">
                      <p className="text-muted-foreground italic mb-3">
                        "Joining IEEE was the best decision of my college life. The workshops helped me learn skills that I couldn't get in classrooms, and the network I built led to my internship at a top tech company."
                      </p>
                      <p className="text-sm font-semibold text-foreground">- Priya Sharma, CSE 2025</p>
                    </div>
                    <div className="bg-card border border-border rounded-xl p-5">
                      <p className="text-muted-foreground italic mb-3">
                        "The hackathons organized by IEEE ABESIT pushed me to think creatively and work under pressure. These experiences have been invaluable in my interviews."
                      </p>
                      <p className="text-sm font-semibold text-foreground">- Rahul Verma, ECE 2023</p>
                    </div>
                  </div>
                </div>

                {/* How to Join */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <ChevronRight size={20} className="text-accent" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-foreground m-0">How to Join</h2>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">1</div>
                      <span className="text-muted-foreground">Visit ieee.org and create your IEEE account</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">2</div>
                      <span className="text-muted-foreground">Select Student Membership (special discounted rate for students)</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">3</div>
                      <span className="text-muted-foreground">Join IEEE ABESIT Student Branch to access local events and activities</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">4</div>
                      <span className="text-muted-foreground">Start attending workshops, connect with members, and grow!</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-8 text-center mb-8">
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-3">Ready to Join?</h3>
                  <p className="text-muted-foreground mb-6">
                    Don't wait! Start your IEEE journey today and unlock a world of opportunities.
                  </p>
                  <a href="https://forms.google.com/your-ieee-form" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="gap-2">
                      Join IEEE Now
                      <ChevronRight size={18} />
                    </Button>
                  </a>
                </div>

                {/* Author Bio */}
                <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-xl">
                  <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="font-heading text-xl font-bold text-primary">E</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Editorial Team</h4>
                    <p className="text-sm text-muted-foreground">
                      The Editorial Team at IEEE ABESIT creates content to inform and inspire the student community. We cover tech trends, career advice, and student success stories.
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between mt-12 pt-8 border-t border-border">
                <Link to="/blog/2">
                  <Button variant="outline">
                    <ArrowLeft size={16} className="mr-2" />
                    Previous Article
                  </Button>
                </Link>
                <Link to="/blog/4">
                  <Button variant="default">
                    Next Article
                    <ChevronRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost3;
