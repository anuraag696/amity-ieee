import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Mail, MapPin, Phone, Send, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { name, email, subject, message } = formData;
    const emailBody = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(message)}`;
    const mailtoLink = `mailto:ieee.aur@gmail.com?subject=${encodeURIComponent(subject)}&body=${emailBody}`;
    
    window.open(mailtoLink, '_blank');
    
    toast({
      title: "Opening Email Client",
      description: "Your default email application will open with the message ready to send.",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl animate-slide-up">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4 animate-fade-in stagger-1">
                Contact Us
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6 animate-slide-up stagger-2">
                Get in <span className="text-primary">Touch</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in stagger-3">
                Have questions or want to collaborate? We would love to hear from you.
                Reach out to us through any of the channels below.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8 animate-slide-in-left stagger-1">
                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-6 animate-fade-in stagger-2">
                    Contact Information
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-background rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover-lift animate-scale-in stagger-1">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Address</h3>
                        <p className="text-sm text-muted-foreground">
                          Amity University Rajasthan, SP-1, Kant Kalwar,
                          <br />
                          RIICO Industrial Area, Jaipur - 303002
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-background rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover-lift animate-scale-in stagger-2">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Email</h3>
                        <p className="text-sm text-muted-foreground">ieee.aur@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-background rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover-lift animate-scale-in stagger-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                        <p className="text-sm text-muted-foreground">+91 85294 85483</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="animate-fade-in stagger-4">
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
                    Follow Us
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href="https://www.instagram.com/ieee.aurjpr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-background border border-border hover:border-primary/30 hover:bg-primary/10 flex items-center justify-center transition-all duration-300 hover:scale-110"
                      aria-label="Instagram"
                    >
                      <Instagram size={20} className="text-foreground" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/ieeeaurjpr/posts/?feedView=all"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-background border border-border hover:border-primary/30 hover:bg-primary/10 flex items-center justify-center transition-all duration-300 hover:scale-110"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} className="text-foreground" />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-background border border-border hover:border-primary/30 hover:bg-primary/10 flex items-center justify-center transition-all duration-300 hover:scale-110"
                      aria-label="Twitter"
                    >
                      <Twitter size={20} className="text-foreground" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-background rounded-2xl p-8 border border-border animate-slide-in-right stagger-2 hover-lift">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="animate-fade-in stagger-1">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="bg-card transition-all duration-300 focus:scale-[1.02]"
                      />
                    </div>
                    <div className="animate-fade-in stagger-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="bg-card transition-all duration-300 focus:scale-[1.02]"
                      />
                    </div>
                  </div>

                  <div className="animate-fade-in stagger-3">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      required
                      className="bg-card transition-all duration-300 focus:scale-[1.02]"
                    />
                  </div>

                  <div className="animate-fade-in stagger-4">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      rows={5}
                      required
                      className="bg-card resize-none transition-all duration-300 focus:scale-[1.01]"
                    />
                  </div>

                  <Button type="submit" variant="default" size="lg" className="w-full group hover-scale animate-fade-in stagger-5">
                    Send Message
                    <Send
                      size={16}
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                    />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
