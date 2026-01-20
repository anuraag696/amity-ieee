import { useEffect, useRef, useState } from "react";
import { Quote, Play, ChevronLeft, ChevronRight, Pause, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    quote: "As the General Secretary of the IEEE Student Branch at Amity University Rajasthan, I feel honored to work alongside a team driven by purpose, innovation, and commitment. IEEE has given me the opportunity to contribute to initiatives that inspire learning, leadership, and technical growth among students. Coordinating with members, planning events, and ensuring smooth operations have helped me grow both personally and professionally. The energy and enthusiasm within our branch motivate me every day. I am grateful for the trust placed in me, and I look forward to continuing this journey of excellence and impact.",
    name: "Ms. Madhusmita",
    role: "General Secretary IEEE SB AUR",
    year: "2026"
  },
  {
    id: 2,
    quote: "IEEE has been instrumental in shaping my technical skills and professional network. The workshops and events are truly world-class. From hands-on coding sessions to leadership development programs, every experience has added immense value to my journey. The mentorship from seniors and the collaborative spirit among members made my time here unforgettable. I've grown not just as an engineer, but as a leader and communicator.",
    name: "Mr. Yashaswi Diwakar Sinha",
    role: "Ex-Chairperson IEEE SB AUR",
    year: "2023"
  },
  {
    id: 3,
    quote: "Being part of IEEE Amity Jaipur opened doors to incredible opportunities. The hackathons and technical sessions helped me grow immensely as a developer and problem solver. I got to work with some of the brightest minds on campus, and together we built projects that won recognition at national level competitions. The exposure to industry experts through guest lectures was invaluable for understanding real-world applications of our skills.",
    name: "Mr. Yuvraj Singh Nathawat",
    role: "Ex-VC IEEE SB AUR",
    year: "2023"
  },
  {
    id: 4,
    quote: "The community here is amazing. I've made lifelong connections and learned skills that no classroom could teach me. IEEE gave me the platform to explore my interests in emerging technologies like AI and IoT through dedicated workshops and project teams. The support system within the organization helped me overcome challenges and push my boundaries. Every event, whether technical or cultural, was a learning experience in itself.",
    name: "Ms. Manasvini Garg",
    role: "Ex-Chairperson IEEE SB AUR",
    year: "2024"
  },
  {
    id: 5,
    quote: "IEEE events gave me the confidence to present my ideas and collaborate with like-minded individuals. Truly a transformative experience that shaped my career path. The technical paper presentations and research symposiums helped me develop critical thinking and communication skills. Working on inter-college collaborations broadened my perspective and taught me the value of diverse viewpoints in solving complex problems.",
    name: "Mr. Kapil Dhama",
    role: "Ex-VC IEEE SB AUR",
    year: "2024"
  },
  {
    id: 6,
    quote: "From technical workshops to leadership opportunities, IEEE has been the cornerstone of my college journey. The organization provided a perfect blend of learning and fun, with events that challenged us intellectually while building lasting friendships. Leading a team of passionate individuals taught me project management, conflict resolution, and the art of motivating others. These experiences prepared me for the professional world like nothing else could.",
    name: "Mr. Dhruv Mittal",
    role: "Ex-Chairperson IEEE SB AUR",
    year: "2025"
  },
  
];

const videoTestimonials = [
  {
    id: 1,
    name: "IEEE SB AUR Journey",
    role: "Member Experiences",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Sample video - replace with actual testimonial
  },
  {
    id: 2,
    name: "Hackathon Highlights",
    role: "Whack-Hackathon Winners",
    thumbnail: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Sample video - replace with actual testimonial
  },
  {
    id: 3,
    name: "Workshop Experience",
    role: "Technical Training",
    thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Sample video - replace with actual testimonial
  },
];

const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"written" | "video">("written");

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || activeTab !== "written") return;

    let animationId: number;
    let scrollPosition = scrollContainer.scrollLeft;
    const scrollSpeed = 0.5;

    const animate = () => {
      if (!isPaused && scrollContainer) {
        scrollPosition += scrollSpeed;
        
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }
        
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused, activeTab]);

  const handleScroll = (direction: "left" | "right") => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    const scrollAmount = 400;
    const newPosition = direction === "left" 
      ? scrollContainer.scrollLeft - scrollAmount 
      : scrollContainer.scrollLeft + scrollAmount;
    
    scrollContainer.scrollTo({ left: newPosition, behavior: "smooth" });
  };

  const handleManualScroll = () => {
    // Keep paused while user is manually scrolling
    setIsPaused(true);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-primary/5 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Members Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Hear from students who have been part of our IEEE community and experienced the transformation firsthand.
          </p>

          {/* Tab Switcher */}
          <div className="inline-flex items-center gap-2 p-1.5 bg-muted/50 rounded-full backdrop-blur-sm border border-border/50">
            <button
              onClick={() => setActiveTab("written")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "written"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              <Quote size={16} />
              Written
            </button>
            <button
              onClick={() => setActiveTab("video")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "video"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              <Video size={16} />
              Video
            </button>
          </div>
        </div>
      </div>

      {/* Written Testimonials */}
      {activeTab === "written" && (
        <div className="relative">
          {/* Navigation Arrows */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden md:block">
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleScroll("left")}
              className="rounded-full bg-background/80 backdrop-blur-sm shadow-lg hover:bg-primary hover:text-primary-foreground border-primary/20"
            >
              <ChevronLeft size={20} />
            </Button>
          </div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden md:block">
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleScroll("right")}
              className="rounded-full bg-background/80 backdrop-blur-sm shadow-lg hover:bg-primary hover:text-primary-foreground border-primary/20"
            >
              <ChevronRight size={20} />
            </Button>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing px-4 md:px-12"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onScroll={handleManualScroll}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setTimeout(() => setIsPaused(false), 3000)}
            style={{ scrollBehavior: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-[350px] md:w-[450px] group"
              >
                <div className="bg-card border border-border rounded-2xl p-6 h-full shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:border-primary/30 group-hover:-translate-y-2 group-hover:bg-card/80">
                  <Quote className="h-8 w-8 text-primary/30 mb-4 transition-colors duration-300 group-hover:text-primary/60" />
                  
                  <p className="text-muted-foreground leading-relaxed mb-6 italic line-clamp-6">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
                      {testimonial.name.split(" ").slice(-1)[0].charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role} • {testimonial.year}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Controls Info */}
          <div className="container mx-auto px-4 mt-6">
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {isPaused ? <Play size={14} /> : <Pause size={14} />}
                {isPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
              </button>
              <span className="text-muted-foreground/50">•</span>
              <span className="text-sm text-muted-foreground">Drag to scroll manually</span>
            </div>
          </div>
        </div>
      )}

      {/* Video Testimonials */}
      {activeTab === "video" && (
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {videoTestimonials.map((video) => (
              <div
                key={video.id}
                className="group relative rounded-2xl overflow-hidden bg-card border border-border shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/30"
              >
                {activeVideo === video.id ? (
                  <div className="aspect-video">
                    <iframe
                      src={`${video.videoUrl}?autoplay=1`}
                      title={video.name}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div 
                    className="aspect-video relative cursor-pointer"
                    onClick={() => setActiveVideo(video.id)}
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-primary">
                        <Play size={28} className="text-primary-foreground ml-1" fill="currentColor" />
                      </div>
                    </div>

                    {/* Video Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h4 className="font-semibold text-white text-lg">{video.name}</h4>
                      <p className="text-white/80 text-sm">{video.role}</p>
                    </div>
                  </div>
                )}

                {/* Close button when video is playing */}
                {activeVideo === video.id && (
                  <button
                    onClick={() => setActiveVideo(null)}
                    className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors z-10"
                  >
                    ×
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Coming Soon Note */}
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm">
              <Video size={16} />
              More video testimonials coming soon!
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TestimonialsSection;
