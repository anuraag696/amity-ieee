import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import introspect1 from "@/assets/introspect-1.jpg";
import introspect2 from "@/assets/introspect-2.jpg";
import introspect3 from "@/assets/introspect-3.jpg";
import introspect4 from "@/assets/introspect-4.jpg";
import introspect5 from "@/assets/introspect-5.jpg";
import spark1 from "@/assets/spark-1.jpg";
import spark2 from "@/assets/spark-2.jpg";
import spark3 from "@/assets/spark-3.jpg";
import spark4 from "@/assets/spark-4.jpg";
import spark5 from "@/assets/spark-5.jpg";
import spark6 from "@/assets/spark-6.jpg";
import spark7 from "@/assets/spark-7.jpg";
import spark8 from "@/assets/spark-8.jpg";
import spark9 from "@/assets/spark-9.jpg";
import spark10 from "@/assets/spark-10.jpg";

const galleryCategories = ["All", "Hackathons", "Workshops", "Seminars", "Events", "Team"];

const galleryImages = [
  { id: 1, category: "Events", title: "Spark 2025 - Faculty Group", description: "Faculty members at IEEE Day celebration", image: spark1 },
  { id: 2, category: "Events", title: "Spark 2025 - Inauguration", description: "Lamp lighting ceremony at IEEE Day", image: spark2 },
  { id: 3, category: "Events", title: "Spark 2025 - Felicitation", description: "Guest felicitation at IEEE Day", image: spark3 },
  { id: 4, category: "Events", title: "Spark 2025 - Award", description: "Award ceremony at IEEE Day celebration", image: spark4 },
  { id: 5, category: "Events", title: "Spark 2025 - Recognition", description: "Recognition ceremony at IEEE Day", image: spark5 },
  { id: 6, category: "Events", title: "Spark 2025 - Networking", description: "Networking at IEEE Day event", image: spark6 },
  { id: 7, category: "Events", title: "Spark 2025 - Keynote", description: "Keynote session at IEEE Day", image: spark7 },
  { id: 8, category: "Events", title: "Spark 2025 - Presentation", description: "Student presentation at IEEE Day", image: spark8 },
  { id: 9, category: "Events", title: "Spark 2025 - Speaker", description: "Speaker session at IEEE Day celebration", image: spark9 },
  { id: 10, category: "Events", title: "Spark 2025 - Group Photo", description: "Group photo at IEEE Day celebration", image: spark10 },
  { id: 11, category: "Workshops", title: "Introspect 6 - Session", description: "Cyber security workshop in progress", image: introspect1 },
  { id: 12, category: "Workshops", title: "Introspect 6 - Presentation", description: "Expert session at Amity Innovation Incubator", image: introspect2 },
  { id: 13, category: "Workshops", title: "Introspect 6 - Learning", description: "Participants engaged in the workshop", image: introspect3 },
  { id: 14, category: "Workshops", title: "Introspect 6 - Interactive", description: "Interactive Q&A session with attendees", image: introspect4 },
  { id: 15, category: "Workshops", title: "Introspect 6 - Felicitation", description: "Speaker felicitation ceremony", image: introspect5 },
  { id: 16, category: "Hackathons", title: "TechVista 2024", description: "Participants during the 24-hour hackathon", image: null },
  { id: 17, category: "Seminars", title: "Industry Connect", description: "Expert session with tech leaders", image: null },
  { id: 18, category: "Team", title: "Team Building", description: "IEEE SB core team bonding event", image: null },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const handlePrev = () => {
    if (selectedImage === null) return;
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex].id);
  };

  const handleNext = () => {
    if (selectedImage === null) return;
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex].id);
  };

  const selectedImageData = galleryImages.find((img) => img.id === selectedImage);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl animate-slide-up">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4 animate-fade-in stagger-1">
                Gallery
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6 animate-slide-up stagger-2">
                Capturing <span className="text-primary">Moments</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in stagger-3">
                A visual journey through our events, workshops, and memorable moments
                at IEEE SB Amity Rajasthan.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-in">
              {galleryCategories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 animate-scale-in stagger-${index + 1} ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-background text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  onClick={() => setSelectedImage(image.id)}
                  className={`group cursor-pointer rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover-lift animate-scale-in stagger-${(index % 6) + 1}`}
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                    {image.image ? (
                      <img 
                        src={image.image} 
                        alt={image.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                          <span className="font-heading text-2xl font-bold text-primary">
                            {image.category.charAt(0)}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <div className="text-center text-primary-foreground p-4 animate-scale-in">
                        <h3 className="font-heading font-semibold text-lg mb-1">
                          {image.title}
                        </h3>
                        <p className="text-sm text-primary-foreground/80">
                          {image.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {selectedImage !== null && selectedImageData && (
          <div
            className="fixed inset-0 bg-foreground/90 z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-primary-foreground hover:text-accent transition-all duration-300 hover:scale-110"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>

            <button
              className="absolute left-4 text-primary-foreground hover:text-accent transition-all duration-300 hover:scale-110"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
            >
              <ChevronLeft size={48} />
            </button>

            <div
              className="max-w-4xl w-full bg-card rounded-2xl overflow-hidden animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center overflow-hidden">
                {selectedImageData.image ? (
                  <img 
                    src={selectedImageData.image} 
                    alt={selectedImageData.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="font-heading text-3xl font-bold text-primary">
                        {selectedImageData.category.charAt(0)}
                      </span>
                    </div>
                    <p className="text-muted-foreground">Image Placeholder</p>
                  </div>
                )}
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                  {selectedImageData.category}
                </span>
                <h3 className="font-heading font-semibold text-xl text-foreground mt-1">
                  {selectedImageData.title}
                </h3>
                <p className="text-muted-foreground mt-2">
                  {selectedImageData.description}
                </p>
              </div>
            </div>

            <button
              className="absolute right-4 text-primary-foreground hover:text-accent transition-all duration-300 hover:scale-110"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
            >
              <ChevronRight size={48} />
            </button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
