import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Calendar, User, Clock, ArrowLeft, Trophy, Users, Star, Camera, ChevronRight, Award, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BlogPost2 = () => {
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
              <span className="inline-block px-4 py-1 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-4">
                Event Recap
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-slide-up">
                Highlights from TechVista 2024 Hackathon
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User size={18} className="text-primary" />
                  <span>Events Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-accent" />
                  <span>December 10, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-primary" />
                  <span>5 min read</span>
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
              <div className="h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl mb-12 flex items-center justify-center">
                <Trophy size={80} className="text-accent/50" />
              </div>

              {/* Introduction */}
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  TechVista 2024 was nothing short of spectacular! Over 500 participants from 50+ colleges gathered for 36 hours of non-stop innovation, coding, and creativity. Here's a comprehensive recap of everything that made this hackathon unforgettable.
                </p>

                {/* Event Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-8">
                  <div className="bg-card border border-border rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-primary mb-1">500+</div>
                    <div className="text-sm text-muted-foreground">Participants</div>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-accent mb-1">120</div>
                    <div className="text-sm text-muted-foreground">Teams</div>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-primary mb-1">36</div>
                    <div className="text-sm text-muted-foreground">Hours</div>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-accent mb-1">₹2L+</div>
                    <div className="text-sm text-muted-foreground">Prize Pool</div>
                  </div>
                </div>

                {/* Section 1 */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Sparkles size={20} className="text-primary" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-foreground m-0">The Kickoff</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The event kicked off on December 8th at 9 AM with an inspiring opening ceremony. Our chief guest, Dr. Rajesh Kumar, CTO of TechCorp India, shared valuable insights about innovation in the tech industry and the importance of hackathons in nurturing young talent.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Teams were given three exciting problem statements spanning FinTech, HealthTech, and Sustainability. The energy in the auditorium was palpable as teams huddled together to brainstorm their approaches.
                  </p>
                </div>

                {/* Section 2 */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Trophy size={20} className="text-accent" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-foreground m-0">Winners & Standout Projects</h2>
                  </div>
                  
                  <div className="space-y-4 my-6">
                    <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/5 border border-yellow-500/20 rounded-xl p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <Award className="text-yellow-500" size={24} />
                        <div>
                          <h4 className="font-semibold text-foreground">1st Place - Team CodeCrafters</h4>
                          <p className="text-sm text-muted-foreground">Prize: ₹75,000</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        <strong>Project: MediChain</strong> - A blockchain-based medical records system that ensures data privacy while enabling seamless sharing between healthcare providers. The judges were impressed by the technical complexity and real-world applicability.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-gray-400/10 to-gray-500/5 border border-gray-400/20 rounded-xl p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <Award className="text-gray-400" size={24} />
                        <div>
                          <h4 className="font-semibold text-foreground">2nd Place - Team InnovateTech</h4>
                          <p className="text-sm text-muted-foreground">Prize: ₹50,000</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        <strong>Project: GreenCommute</strong> - An AI-powered carpooling app that optimizes routes for minimum carbon footprint. Features real-time matching and carbon savings tracking.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-amber-600/10 to-amber-700/5 border border-amber-600/20 rounded-xl p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <Award className="text-amber-600" size={24} />
                        <div>
                          <h4 className="font-semibold text-foreground">3rd Place - Team ByteBuilders</h4>
                          <p className="text-sm text-muted-foreground">Prize: ₹25,000</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        <strong>Project: FinLit</strong> - A gamified financial literacy platform for rural India, featuring local language support and offline capabilities.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 3 */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Star size={20} className="text-primary" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-foreground m-0">Special Awards</h2>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-card border border-border rounded-xl p-5">
                      <h4 className="font-semibold text-primary mb-2">Best UI/UX Design</h4>
                      <p className="text-sm text-muted-foreground mb-2">Team PixelPerfect</p>
                      <p className="text-xs text-muted-foreground">For their exceptional attention to user experience in their EdTech platform design.</p>
                    </div>
                    <div className="bg-card border border-border rounded-xl p-5">
                      <h4 className="font-semibold text-accent mb-2">Most Innovative Idea</h4>
                      <p className="text-sm text-muted-foreground mb-2">Team NeuralNinjas</p>
                      <p className="text-xs text-muted-foreground">For their creative approach to using ML for detecting crop diseases via smartphone cameras.</p>
                    </div>
                    <div className="bg-card border border-border rounded-xl p-5">
                      <h4 className="font-semibold text-primary mb-2">Best First-Time Hackers</h4>
                      <p className="text-sm text-muted-foreground mb-2">Team FreshCode</p>
                      <p className="text-xs text-muted-foreground">All four members were participating in their first hackathon and showed remarkable teamwork.</p>
                    </div>
                    <div className="bg-card border border-border rounded-xl p-5">
                      <h4 className="font-semibold text-accent mb-2">People's Choice Award</h4>
                      <p className="text-sm text-muted-foreground mb-2">Team GreenBytes</p>
                      <p className="text-xs text-muted-foreground">Won the most votes during the demo session for their waste management solution.</p>
                    </div>
                  </div>
                </div>

                {/* Section 4 */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Camera size={20} className="text-accent" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-foreground m-0">Memorable Moments</h2>
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-6">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center">
                        <Camera size={24} className="text-muted-foreground/50" />
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground text-center italic">
                    Photo gallery coming soon! Check our Instagram for live updates.
                  </p>
                </div>

                {/* Mentors Section */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Users size={20} className="text-primary" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-foreground m-0">Thank You, Mentors!</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    A huge shoutout to our 25+ mentors from companies like Google, Microsoft, Amazon, and various startups who volunteered their time to guide teams throughout the hackathon. Their insights on technical implementation, pitch preparation, and product thinking were invaluable.
                  </p>
                </div>

                {/* Conclusion */}
                <div className="bg-card border border-primary/20 rounded-xl p-6 mb-8">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">What's Next?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    TechVista 2024 set a new benchmark for collegiate hackathons. But this is just the beginning! We're already planning TechVista 2025 with even bigger prizes, more tracks, and exciting surprises. Follow us on social media and stay tuned for early bird registrations opening in August 2025!
                  </p>
                </div>

                {/* Author Bio */}
                <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-xl">
                  <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center">
                    <span className="font-heading text-xl font-bold text-accent">E</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Events Team</h4>
                    <p className="text-sm text-muted-foreground">
                      The Events Team at IEEE ABESIT organizes workshops, hackathons, and technical events throughout the year. We're passionate about creating memorable experiences for the tech community.
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between mt-12 pt-8 border-t border-border">
                <Link to="/blog/1">
                  <Button variant="outline">
                    <ArrowLeft size={16} className="mr-2" />
                    Previous Article
                  </Button>
                </Link>
                <Link to="/blog/3">
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

export default BlogPost2;
