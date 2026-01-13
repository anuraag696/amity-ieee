import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Calendar, User, Clock, ArrowLeft, BookOpen, Code, Brain, Lightbulb, Target, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BlogPost1 = () => {
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
                Getting Started with Machine Learning: A Beginner's Guide
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User size={18} className="text-primary" />
                  <span>Tech Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-accent" />
                  <span>December 15, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-primary" />
                  <span>8 min read</span>
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
                <Brain size={80} className="text-primary/50" />
              </div>

              {/* Introduction */}
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Machine Learning (ML) has revolutionized the way we interact with technology, from personalized recommendations on streaming platforms to voice assistants that understand natural language. As an engineering student, understanding ML fundamentals is no longer optional—it's essential for staying competitive in today's tech landscape.
                </p>

                {/* Section 1 */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <BookOpen size={20} className="text-primary" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-foreground m-0">What is Machine Learning?</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Machine Learning is a subset of Artificial Intelligence (AI) that enables computers to learn from data and improve their performance without being explicitly programmed. Instead of writing specific rules for every scenario, ML algorithms identify patterns in data and make predictions or decisions based on those patterns.
                  </p>
                  <div className="bg-card border border-border rounded-xl p-6 my-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Concepts to Understand:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <ChevronRight size={16} className="text-primary mt-1 flex-shrink-0" />
                        <span><strong>Training Data:</strong> The dataset used to teach the model patterns and relationships</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight size={16} className="text-primary mt-1 flex-shrink-0" />
                        <span><strong>Features:</strong> Input variables that the model uses to make predictions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight size={16} className="text-primary mt-1 flex-shrink-0" />
                        <span><strong>Labels:</strong> The output or target variable the model learns to predict</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight size={16} className="text-primary mt-1 flex-shrink-0" />
                        <span><strong>Model:</strong> The mathematical representation learned from data</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Section 2 */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Target size={20} className="text-accent" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-foreground m-0">Types of Machine Learning</h2>
                  </div>
                  
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    <div className="bg-card border border-border rounded-xl p-5">
                      <h4 className="font-semibold text-primary mb-2">Supervised Learning</h4>
                      <p className="text-sm text-muted-foreground">
                        The algorithm learns from labeled data. Examples include spam detection, image classification, and price prediction.
                      </p>
                    </div>
                    <div className="bg-card border border-border rounded-xl p-5">
                      <h4 className="font-semibold text-accent mb-2">Unsupervised Learning</h4>
                      <p className="text-sm text-muted-foreground">
                        The algorithm finds patterns in unlabeled data. Examples include customer segmentation and anomaly detection.
                      </p>
                    </div>
                    <div className="bg-card border border-border rounded-xl p-5">
                      <h4 className="font-semibold text-foreground mb-2">Reinforcement Learning</h4>
                      <p className="text-sm text-muted-foreground">
                        The algorithm learns through trial and error with rewards. Examples include game AI and robotics.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 3 */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Code size={20} className="text-primary" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-foreground m-0">Getting Started: Your First Steps</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex gap-4 p-4 bg-card border border-border rounded-xl">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Learn Python Fundamentals</h4>
                        <p className="text-sm text-muted-foreground">Python is the most popular language for ML. Master basics like data structures, functions, and libraries like NumPy and Pandas.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-card border border-border rounded-xl">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Understand Mathematics</h4>
                        <p className="text-sm text-muted-foreground">Focus on linear algebra, calculus, probability, and statistics. These form the foundation of ML algorithms.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-card border border-border rounded-xl">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Explore ML Libraries</h4>
                        <p className="text-sm text-muted-foreground">Start with Scikit-learn for classical ML, then progress to TensorFlow or PyTorch for deep learning.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-card border border-border rounded-xl">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Build Projects</h4>
                        <p className="text-sm text-muted-foreground">Apply your knowledge by building real projects. Start with datasets from Kaggle and work on problems that interest you.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 4 */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Lightbulb size={20} className="text-accent" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-foreground m-0">Recommended Resources</h2>
                  </div>
                  
                  <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-border rounded-xl p-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Online Courses</h4>
                        <ul className="space-y-2 text-muted-foreground text-sm">
                          <li>• Andrew Ng's Machine Learning (Coursera)</li>
                          <li>• Fast.ai Practical Deep Learning</li>
                          <li>• Google's Machine Learning Crash Course</li>
                          <li>• MIT OpenCourseWare - Intro to ML</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Books to Read</h4>
                        <ul className="space-y-2 text-muted-foreground text-sm">
                          <li>• "Hands-On ML with Scikit-Learn" by Géron</li>
                          <li>• "Pattern Recognition" by Bishop</li>
                          <li>• "Deep Learning" by Goodfellow</li>
                          <li>• "The Hundred-Page ML Book" by Burkov</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Conclusion */}
                <div className="bg-card border border-primary/20 rounded-xl p-6 mb-8">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">Key Takeaways</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Machine Learning is an exciting field with endless possibilities. Start with the fundamentals, practice consistently, and don't be afraid to experiment. Join our IEEE student chapter workshops where we regularly conduct hands-on ML sessions and hackathons focused on AI/ML projects. Remember, every expert was once a beginner!
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
                      The Tech Team at IEEE ABESIT comprises passionate developers and researchers who love sharing knowledge about emerging technologies. Follow us for more tutorials and tech insights.
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between mt-12 pt-8 border-t border-border">
                <Link to="/blog">
                  <Button variant="outline">
                    <ArrowLeft size={16} className="mr-2" />
                    All Articles
                  </Button>
                </Link>
                <Link to="/blog/2">
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

export default BlogPost1;
