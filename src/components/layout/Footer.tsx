import { Link } from "react-router-dom";
import { Instagram, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src={logo} 
                alt="IEEE SB Amity University Rajasthan" 
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed">
              Where Ideas Meet Innovation. Empowering students to advance technology for humanity.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary-foreground/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary-foreground/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary-foreground/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-accent mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Events", "Team", "Blog", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-sm text-secondary-foreground/80 hover:text-accent transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Activities */}
          <div>
            <h4 className="font-heading font-semibold text-accent mb-4">Our Activities</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>Technical Workshops</li>
              <li>Hackathons & Coding Events</li>
              <li>Industry Expert Sessions</li>
              <li>Paper Presentations</li>
              <li>Tech Talks</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-accent mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-secondary-foreground/80">
                <MapPin size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <span>Amity University Rajasthan, SP-1, Kant Kalwar, RIICO Industrial Area, Jaipur</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-secondary-foreground/80">
                <Mail size={18} className="text-accent flex-shrink-0" />
                <span>ieee.sb@amity.edu</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-secondary-foreground/80">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <span>+91 XXXXX XXXXX</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-secondary-foreground/60">
          <p>© {currentYear} IEEE Student Branch, Amity University Rajasthan. All rights reserved.</p>
          <p>
            Part of{" "}
            <a
              href="https://www.ieee.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              IEEE
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
