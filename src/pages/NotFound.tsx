import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-hero">
      <div className="text-center">
        <h1 className="mb-4 text-8xl font-bold text-primary animate-bounce-in">404</h1>
        <p className="mb-6 text-2xl text-muted-foreground animate-fade-in stagger-1">Oops! Page not found</p>
        <p className="mb-8 text-muted-foreground animate-fade-in stagger-2">The page you're looking for doesn't exist or has been moved.</p>
        <a 
          href="/" 
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform animate-scale-in stagger-3"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
