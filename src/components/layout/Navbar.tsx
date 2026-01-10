import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Events", path: "/events" },
  { name: "Team", path: "/team" },
  { name: "Blog", path: "/blog" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <img 
            src={logo} 
            alt="IEEE SB Amity University Rajasthan" 
            className="h-12 w-auto object-contain group-hover:scale-105 transition-transform dark:brightness-110 dark:contrast-110"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link, index) => (
            <Link key={link.path} to={link.path} className={`animate-fade-in stagger-${index + 1}`}>
              <Button
                variant={location.pathname === link.path ? "navActive" : "nav"}
                size="sm"
                className="hover:scale-105 transition-transform"
              >
                {link.name}
              </Button>
            </Link>
          ))}
        </div>

        {/* Right side: Theme Toggle + CTA */}
        <div className="hidden lg:flex items-center gap-3 animate-scale-in">
          <ThemeToggle />
          <Button variant="gold" size="sm" className="hover:scale-105 transition-transform hover-glow">
            Join IEEE
          </Button>
        </div>

        {/* Mobile: Theme Toggle + Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-card/98 backdrop-blur-lg shadow-lg transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-[500px] border-b border-border" : "max-h-0"
        )}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Button
                variant={location.pathname === link.path ? "navActive" : "nav"}
                className="w-full justify-start"
              >
                {link.name}
              </Button>
            </Link>
          ))}
          <div className="pt-2 border-t border-border mt-2">
            <Button variant="gold" className="w-full">
              Join IEEE
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
