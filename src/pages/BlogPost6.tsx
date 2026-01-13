import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Calendar, User, Clock, ArrowLeft, Briefcase, MessageSquare, Code, Brain, ChevronRight, Target, CheckCircle, AlertCircle, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BlogPost6 = () => {
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
                Interview Tips for Tech Placements
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User size={18} className="text-primary" />
                  <span>Career Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-accent" />
                  <span>November 15, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-primary" />
                  <span>7 min read</span>
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
                <Briefcase size={80} className="text-primary/50" />
              </div>

              {/* Introduction */}
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Landing your dream tech job requires more than just technical skills—it demands strategic preparation, effective communication, and the right mindset. Whether you're targeting top product companies, startups, or service-based firms, these battle-tested tips will help you ace your tech interviews.
                </p>

                {/* Section 1 */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Target size={20} className="text-primary" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-foreground m-0">Understanding the Interview Process</h2>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Most tech interviews follow a structured process. Understanding each stage helps you prepare effectively:
                  </p>
                  
                  <div className="relative">
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border"></div>
                    <div className="space-y-4">
                      <div className="relative pl-12">
                        <div className="absolute left-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">1</div>
                        <div className="bg-card border border-border rounded-xl p-4">
                          <h4 className="font-semibold text-foreground">Resume Screening</h4>
                          <p className="text-sm text-muted-foreground">ATS systems and recruiters scan for relevant keywords, projects, and experience.</p>
                        </div>
                      </div>
                      <div className="relative pl-12">
                        <div className="absolute left-0 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">2</div>
                        <div className="bg-card border border-border rounded-xl p-4">
                          <h4 className="font-semibold text-foreground">Online Assessment (OA)</h4>
                          <p className="text-sm text-muted-foreground">Coding tests on platforms like HackerRank, CodeSignal, or company-specific portals.</p>
                        </div>
                      </div>
                      <div className="relative pl-12">
                        <div className="absolute left-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">3</div>
                        <div className="bg-card border border-border rounded-xl p-4">
                          <h4 className="font-semibold text-foreground">Technical Interviews</h4>
                          <p className="text-sm text-muted-foreground">1-3 rounds of DSA, system design, and core CS fundamentals.</p>
                        </div>
                      </div>
                      <div className="relative pl-12">
                        <div className="absolute left-0 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">4</div>
                        <div className="bg-card border border-border rounded-xl p-4">
                          <h4 className="font-semibold text-foreground">HR/Behavioral Round</h4>
                          <p className="text-sm text-muted-foreground">Culture fit, salary discussions, and behavioral questions.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 2 */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Code size={20} className="text-accent" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-foreground m-0">Mastering Data Structures & Algorithms</h2>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    DSA is the backbone of technical interviews. Here's a strategic approach to preparation:
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    <div className="bg-card border border-border rounded-xl p-5">
                      <h4 className="font-semibold text-primary mb-3">Must-Know Topics</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Arrays & Strings</li>
                        <li>• Linked Lists</li>
                        <li>• Trees & Graphs</li>
                        <li>• Dynamic Programming</li>
                        <li>• Sorting & Searching</li>
                        <li>• Stacks & Queues</li>
                        <li>• Hash Tables</li>
                        <li>• Recursion & Backtracking</li>
                      </ul>
                    </div>
                    <div className="bg-card border border-border rounded-xl p-5">
                      <h4 className="font-semibold text-accent mb-3">Practice Platforms</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• LeetCode (Top 150 problems)</li>
                        <li>• GeeksforGeeks</li>
                        <li>• InterviewBit</li>
                        <li>• Codeforces (Competitive)</li>
                        <li>• HackerRank</li>
                        <li>• CodeChef</li>
                        <li>• Striver's SDE Sheet</li>
                        <li>• NeetCode 150</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-5">
                    <div className="flex items-start gap-3">
                      <Lightbulb size={20} className="text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Pro Tip</h4>
                        <p className="text-sm text-muted-foreground">
                          Quality over quantity! Aim to solve 3-5 problems daily with full understanding rather than rushing through 10 problems without grasping the concepts.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 3 */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Brain size={20} className="text-primary" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-foreground m-0">The STAR Method for Behavioral Questions</h2>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Behavioral questions assess how you handle real situations. Use the STAR method for structured, impactful answers:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex gap-4 p-4 bg-card border border-border rounded-xl">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-primary text-lg">S</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Situation</h4>
                        <p className="text-sm text-muted-foreground">Set the context. Describe the situation or challenge you faced.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-card border border-border rounded-xl">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-accent text-lg">T</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Task</h4>
                        <p className="text-sm text-muted-foreground">Explain your specific responsibility or role in that situation.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-card border border-border rounded-xl">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-primary text-lg">A</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Action</h4>
                        <p className="text-sm text-muted-foreground">Detail the specific actions you took to address the situation.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-card border border-border rounded-xl">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-accent text-lg">R</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Result</h4>
                        <p className="text-sm text-muted-foreground">Share the outcomes. Quantify results when possible.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-card border border-border rounded-xl p-5 mt-6">
                    <h4 className="font-semibold text-foreground mb-3">Common Behavioral Questions:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Tell me about a time you faced a difficult technical problem.</li>
                      <li>• Describe a situation where you had a conflict with a teammate.</li>
                      <li>• Give an example of when you had to learn something quickly.</li>
                      <li>• Tell me about your most challenging project.</li>
                      <li>• How do you prioritize when you have multiple deadlines?</li>
                    </ul>
                  </div>
                </div>

                {/* Section 4 */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <MessageSquare size={20} className="text-accent" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-foreground m-0">Communication During Coding Interviews</h2>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    How you communicate is as important as solving the problem. Follow this framework:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex gap-4 p-4 bg-card border border-border rounded-xl">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Clarify the Problem</h4>
                        <p className="text-sm text-muted-foreground">Ask questions about edge cases, constraints, and expected input/output. Never assume!</p>
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-card border border-border rounded-xl">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Think Aloud</h4>
                        <p className="text-sm text-muted-foreground">Share your thought process. Let the interviewer see how you approach problems.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-card border border-border rounded-xl">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Start with Brute Force</h4>
                        <p className="text-sm text-muted-foreground">Explain a working solution first, then discuss optimizations. A working solution beats no solution.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-card border border-border rounded-xl">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Analyze Complexity</h4>
                        <p className="text-sm text-muted-foreground">Discuss time and space complexity of your solution. Show you understand trade-offs.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-card border border-border rounded-xl">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold">5</div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Test Your Code</h4>
                        <p className="text-sm text-muted-foreground">Walk through your solution with examples. Catch bugs before the interviewer does.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Do's and Don'ts */}
                <div className="mb-12">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-6">Quick Do's and Don'ts</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle size={20} className="text-green-500" />
                        <h4 className="font-semibold text-foreground">Do's</h4>
                      </div>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>✓ Research the company thoroughly</li>
                        <li>✓ Practice on a whiteboard or shared document</li>
                        <li>✓ Prepare questions to ask the interviewer</li>
                        <li>✓ Be honest about what you don't know</li>
                        <li>✓ Follow up with a thank you email</li>
                        <li>✓ Get a good night's sleep before</li>
                      </ul>
                    </div>
                    <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <AlertCircle size={20} className="text-red-500" />
                        <h4 className="font-semibold text-foreground">Don'ts</h4>
                      </div>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>✗ Memorize solutions without understanding</li>
                        <li>✗ Give up when stuck—ask for hints</li>
                        <li>✗ Speak negatively about past employers</li>
                        <li>✗ Lie about your experience or skills</li>
                        <li>✗ Forget to test edge cases</li>
                        <li>✗ Rush into coding without planning</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Resources */}
                <div className="mb-12">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-6">Recommended Preparation Timeline</h3>
                  <div className="bg-card border border-border rounded-xl p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-20 text-sm font-semibold text-primary">3 months</div>
                        <div className="flex-1 bg-primary/20 rounded-full h-3"></div>
                        <div className="text-sm text-muted-foreground">DSA fundamentals, 2-3 problems/day</div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-20 text-sm font-semibold text-accent">2 months</div>
                        <div className="flex-1 bg-accent/20 rounded-full h-3"></div>
                        <div className="text-sm text-muted-foreground">Medium difficulty problems, mock interviews</div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-20 text-sm font-semibold text-primary">1 month</div>
                        <div className="flex-1 bg-primary/20 rounded-full h-3"></div>
                        <div className="text-sm text-muted-foreground">Company-specific prep, system design basics</div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-20 text-sm font-semibold text-accent">1 week</div>
                        <div className="flex-1 bg-accent/20 rounded-full h-3"></div>
                        <div className="text-sm text-muted-foreground">Revise notes, behavioral prep, rest</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Conclusion */}
                <div className="bg-card border border-primary/20 rounded-xl p-6 mb-8">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">You've Got This!</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Interviews are a learnable skill. Every rejection is a learning opportunity, and every interview makes you better. Stay consistent with your preparation, believe in yourself, and remember—companies want you to succeed. Join our IEEE placement preparation workshops where we conduct mock interviews, resume reviews, and DSA sessions to help you land your dream job!
                  </p>
                </div>

                {/* Author Bio */}
                <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-xl">
                  <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center">
                    <span className="font-heading text-xl font-bold text-accent">C</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Career Team</h4>
                    <p className="text-sm text-muted-foreground">
                      The Career Team at IEEE ABESIT helps students prepare for tech placements through workshops, mock interviews, and career guidance sessions. We've helped hundreds of students land roles at top companies.
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between mt-12 pt-8 border-t border-border">
                <Link to="/blog/5">
                  <Button variant="outline">
                    <ArrowLeft size={16} className="mr-2" />
                    Previous Article
                  </Button>
                </Link>
                <Link to="/blog">
                  <Button variant="default">
                    All Articles
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

export default BlogPost6;
