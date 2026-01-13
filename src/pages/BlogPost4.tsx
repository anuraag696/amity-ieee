import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Calendar, User, Clock, ArrowLeft, Cloud, Server, Database, Shield, ChevronRight, Globe, Zap, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BlogPost4 = () => {
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
              <span className="inline-block px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-semibold mb-4">
                Tutorial
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-slide-up">
                Introduction to Cloud Computing with AWS
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User size={18} className="text-primary" />
                  <span>Tech Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-accent" />
                  <span>November 28, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-primary" />
                  <span>10 min read</span>
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
                <Cloud size={80} className="text-primary/50" />
              </div>

              {/* Introduction */}
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Cloud computing has revolutionized how businesses and developers build, deploy, and scale applications. Amazon Web Services (AWS) leads the cloud market with a comprehensive suite of services. This guide will introduce you to cloud fundamentals and help you get started with AWS.
                </p>

                {/* Section 1 */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Cloud size={20} className="text-primary" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-foreground m-0">What is Cloud Computing?</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Cloud computing is the delivery of computing services—including servers, storage, databases, networking, software, and analytics—over the internet ("the cloud"). Instead of owning and maintaining physical data centers, you rent access to computing resources from a cloud provider.
                  </p>
                  
                  <div className="bg-card border border-border rounded-xl p-6 my-6">
                    <h4 className="font-semibold text-foreground mb-4">Key Benefits of Cloud Computing:</h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <Zap size={18} className="text-primary mt-1" />
                        <div>
                          <p className="font-medium text-foreground">Scalability</p>
                          <p className="text-sm text-muted-foreground">Scale resources up or down based on demand</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Globe size={18} className="text-accent mt-1" />
                        <div>
                          <p className="font-medium text-foreground">Global Reach</p>
                          <p className="text-sm text-muted-foreground">Deploy applications worldwide in minutes</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Lock size={18} className="text-primary mt-1" />
                        <div>
                          <p className="font-medium text-foreground">Security</p>
                          <p className="text-sm text-muted-foreground">Enterprise-grade security and compliance</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Server size={18} className="text-accent mt-1" />
                        <div>
                          <p className="font-medium text-foreground">Cost Efficiency</p>
                          <p className="text-sm text-muted-foreground">Pay only for what you use</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 2 */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Server size={20} className="text-accent" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-foreground m-0">Cloud Service Models</h2>
                  </div>
                  
                  <div className="space-y-4 my-6">
                    <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-5">
                      <h4 className="font-semibold text-foreground mb-2">IaaS (Infrastructure as a Service)</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Provides virtualized computing resources over the internet. You manage the OS, applications, and data while the provider handles hardware.
                      </p>
                      <p className="text-xs text-muted-foreground">
                        <strong>AWS Examples:</strong> EC2, VPC, EBS
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 rounded-xl p-5">
                      <h4 className="font-semibold text-foreground mb-2">PaaS (Platform as a Service)</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Provides a platform for developing, running, and managing applications without dealing with infrastructure complexity.
                      </p>
                      <p className="text-xs text-muted-foreground">
                        <strong>AWS Examples:</strong> Elastic Beanstalk, Lambda, RDS
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-5">
                      <h4 className="font-semibold text-foreground mb-2">SaaS (Software as a Service)</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Delivers software applications over the internet, on-demand, typically through a subscription model.
                      </p>
                      <p className="text-xs text-muted-foreground">
                        <strong>Examples:</strong> Gmail, Slack, Salesforce
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 3 */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Database size={20} className="text-primary" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-foreground m-0">Essential AWS Services to Learn</h2>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    <div className="bg-card border border-border rounded-xl p-5">
                      <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center mb-3">
                        <Server size={20} className="text-orange-500" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">Amazon EC2</h4>
                      <p className="text-sm text-muted-foreground">
                        Elastic Compute Cloud provides resizable compute capacity. Launch virtual servers in minutes with various instance types optimized for different workloads.
                      </p>
                    </div>
                    
                    <div className="bg-card border border-border rounded-xl p-5">
                      <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center mb-3">
                        <Database size={20} className="text-green-500" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">Amazon S3</h4>
                      <p className="text-sm text-muted-foreground">
                        Simple Storage Service offers scalable object storage for data backup, archival, and analytics. 99.999999999% (11 9's) durability.
                      </p>
                    </div>
                    
                    <div className="bg-card border border-border rounded-xl p-5">
                      <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center mb-3">
                        <Database size={20} className="text-blue-500" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">Amazon RDS</h4>
                      <p className="text-sm text-muted-foreground">
                        Relational Database Service makes it easy to set up, operate, and scale databases like MySQL, PostgreSQL, and Oracle in the cloud.
                      </p>
                    </div>
                    
                    <div className="bg-card border border-border rounded-xl p-5">
                      <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center mb-3">
                        <Zap size={20} className="text-purple-500" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">AWS Lambda</h4>
                      <p className="text-sm text-muted-foreground">
                        Run code without provisioning servers. Lambda automatically scales and you pay only for the compute time consumed.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 4 */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <ChevronRight size={20} className="text-accent" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-foreground m-0">Getting Started with AWS</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex gap-4 p-4 bg-card border border-border rounded-xl">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Create a Free Tier Account</h4>
                        <p className="text-sm text-muted-foreground">Visit aws.amazon.com and sign up for a free tier account. You'll get 12 months of free usage for many services including EC2, S3, and RDS.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-card border border-border rounded-xl">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Explore the AWS Console</h4>
                        <p className="text-sm text-muted-foreground">Familiarize yourself with the AWS Management Console. It's your central hub for managing all AWS services.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-card border border-border rounded-xl">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Complete AWS Skill Builder Courses</h4>
                        <p className="text-sm text-muted-foreground">AWS offers free training through Skill Builder. Start with Cloud Practitioner Essentials to build a strong foundation.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-card border border-border rounded-xl">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Build a Simple Project</h4>
                        <p className="text-sm text-muted-foreground">Deploy a static website on S3, or launch an EC2 instance. Hands-on experience is the best way to learn.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 5 */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Shield size={20} className="text-primary" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-foreground m-0">AWS Certifications</h2>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    AWS certifications validate your cloud expertise and are highly valued by employers. Here's the recommended path for students:
                  </p>
                  
                  <div className="relative">
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border"></div>
                    <div className="space-y-6">
                      <div className="relative pl-12">
                        <div className="absolute left-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">1</div>
                        <div className="bg-card border border-border rounded-xl p-4">
                          <h4 className="font-semibold text-foreground">Cloud Practitioner (Foundational)</h4>
                          <p className="text-sm text-muted-foreground">Best starting point. Covers cloud concepts, AWS services, security, and pricing.</p>
                        </div>
                      </div>
                      <div className="relative pl-12">
                        <div className="absolute left-0 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">2</div>
                        <div className="bg-card border border-border rounded-xl p-4">
                          <h4 className="font-semibold text-foreground">Solutions Architect Associate</h4>
                          <p className="text-sm text-muted-foreground">Deep dive into designing distributed systems and applications on AWS.</p>
                        </div>
                      </div>
                      <div className="relative pl-12">
                        <div className="absolute left-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">3</div>
                        <div className="bg-card border border-border rounded-xl p-4">
                          <h4 className="font-semibold text-foreground">Developer Associate / SysOps Associate</h4>
                          <p className="text-sm text-muted-foreground">Specialize based on your career path—development or operations.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Conclusion */}
                <div className="bg-card border border-primary/20 rounded-xl p-6 mb-8">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">Start Your Cloud Journey Today</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Cloud computing skills are among the most in-demand in the tech industry. AWS provides extensive free resources and a generous free tier to help you learn. Join our IEEE workshops where we regularly conduct hands-on AWS sessions and help students prepare for certifications!
                  </p>
                </div>

                {/* Author Bio */}
                <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-xl">
                  <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="font-heading text-xl font-bold text-primary">T</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Tech Team</h4>
                    <p className="text-sm text-muted-foreground">
                      The Tech Team at IEEE ABESIT comprises passionate developers and cloud enthusiasts who love sharing knowledge about emerging technologies and cloud platforms.
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between mt-12 pt-8 border-t border-border">
                <Link to="/blog/3">
                  <Button variant="outline">
                    <ArrowLeft size={16} className="mr-2" />
                    Previous Article
                  </Button>
                </Link>
                <Link to="/blog/5">
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

export default BlogPost4;
