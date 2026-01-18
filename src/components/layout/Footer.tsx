import { Link } from "react-router-dom";
import { Instagram, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src={logo} 
                alt="IEEE SB Amity University Rajasthan" 
                className="h-12 w-auto object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed">
              Where Ideas Meet Innovation. Empowering students to advance technology for humanity.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.instagram.com/ieee.aurjpr/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary-foreground/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/ieeeaurjpr/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary-foreground/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary-foreground/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all duration-300 hover:scale-110"
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
                    className="text-sm text-secondary-foreground/80 hover:text-accent transition-all duration-300 link-underline inline-block"
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
              <li className="hover:text-accent transition-colors duration-300">Technical Workshops</li>
              <li className="hover:text-accent transition-colors duration-300">Hackathons & Coding Events</li>
              <li className="hover:text-accent transition-colors duration-300">Industry Expert Sessions</li>
              <li className="hover:text-accent transition-colors duration-300">Paper Presentations</li>
              <li className="hover:text-accent transition-colors duration-300">Tech Talks</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-accent mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://maps.google.com/?q=Amity+University+Rajasthan,+SP-1,+Kant+Kalwar,+RIICO+Industrial+Area,+Jaipur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-secondary-foreground/80 group cursor-pointer"
                >
                  <MapPin size={18} className="text-accent mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="group-hover:text-accent transition-colors duration-300">Amity University Rajasthan, SP-1, Kant Kalwar, RIICO Industrial Area, Jaipur</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:ieee.aur@gmail.com"
                  className="flex items-center gap-3 text-sm text-secondary-foreground/80 group cursor-pointer"
                >
                  <Mail size={18} className="text-accent flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="group-hover:text-accent transition-colors duration-300">ieee.aur@gmail.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+918529485483"
                  className="flex items-center gap-3 text-sm text-secondary-foreground/80 group cursor-pointer"
                >
                  <Phone size={18} className="text-accent flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="group-hover:text-accent transition-colors duration-300">+91 85294 85483</span>
                </a>
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
              className="text-accent hover:underline transition-all duration-300"
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
