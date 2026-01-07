import { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";

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
  {
    id: 7,
    quote: "As the Chairperson of the IEEE Student Branch at Amity University Rajasthan, I am proud to witness the passion, innovation, and dedication our members bring to every initiative. IEEE has given us a platform to explore ideas beyond the classroom and transform them into impactful projects and events. Leading this vibrant community has strengthened my belief in collaboration, leadership, and continuous learning. Every achievement of our branch reflects the collective effort of students who strive to push boundaries. I am grateful to be a part of this journey, and I look forward to building an even stronger culture of technology, creativity, and excellence.",
    name: "Mr. Anuraag Gupta",
    role: "Chairperson IEEE SB AUR",
    year: "2026"
  }
];

const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const animate = () => {
      if (!isPaused && scrollContainer) {
        scrollPosition += scrollSpeed;
        
        // Reset position when we've scrolled half the content (since content is duplicated)
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }
        
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-background overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Members Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from students who have been part of our IEEE community and experienced the transformation firsthand.
          </p>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{ scrollBehavior: 'auto' }}
      >
        {/* Duplicate testimonials for seamless infinite scroll */}
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={`${testimonial.id}-${index}`}
            className="flex-shrink-0 w-[400px] md:w-[480px] group"
          >
            <div className="bg-card border border-border rounded-2xl p-6 h-full shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:border-primary/30 group-hover:-translate-y-2 group-hover:bg-card/80">
              <Quote className="h-8 w-8 text-primary/30 mb-4 transition-colors duration-300 group-hover:text-primary/60" />
              
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {testimonial.name.charAt(0)}
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

      <div className="container mx-auto px-4 mt-8">
        {/* <p className="text-center text-sm text-muted-foreground">
          Hover to pause • Scroll automatically
        </p> */}
      </div>
    </section>
  );
};

export default TestimonialsSection;
