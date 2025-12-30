import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import introspect1 from "@/assets/introspect-1.jpg";
import introspect2 from "@/assets/introspect-2.jpg";
import introspect3 from "@/assets/introspect-3.jpg";
import introspect4 from "@/assets/introspect-4.jpg";
import introspect5 from "@/assets/introspect-5.jpg";

const galleryCategories = ["All", "Hackathons", "Workshops", "Seminars", "Team"];

const galleryImages = [
  { id: 1, category: "Hackathons", title: "TechVista 2024", description: "Participants during the 24-hour hackathon", image: null },
  { id: 2, category: "Workshops", title: "Introspect 6 - Session", description: "Cyber security workshop in progress", image: introspect1 },
  { id: 3, category: "Workshops", title: "Introspect 6 - Presentation", description: "Expert session at Amity Innovation Incubator", image: introspect2 },
  { id: 4, category: "Workshops", title: "Introspect 6 - Learning", description: "Participants engaged in the workshop", image: introspect3 },
  { id: 5, category: "Workshops", title: "Introspect 6 - Interactive", description: "Interactive Q&A session with attendees", image: introspect4 },
  { id: 6, category: "Workshops", title: "Introspect 6 - Felicitation", description: "Speaker felicitation ceremony", image: introspect5 },
  { id: 7, category: "Seminars", title: "Industry Connect", description: "Expert session with tech leaders", image: null },
  { id: 8, category: "Team", title: "Team Building", description: "IEEE SB core team bonding event", image: null },
  { id: 9, category: "Hackathons", title: "Code Sprint", description: "Teams brainstorming solutions", image: null },
  { id: 10, category: "Seminars", title: "IEEE Day", description: "Annual IEEE Day celebration", image: null },
  { id: 11, category: "Team", title: "Award Ceremony", description: "Recognizing outstanding members", image: null },
  { id: 12, category: "Hackathons", title: "Winner Announcement", description: "TechVista winners celebration", image: null },
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
            <div className="max-w-3xl">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                Gallery
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Capturing <span className="text-primary">Moments</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
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
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {galleryCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
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
              {filteredImages.map((image) => (
                <div
                  key={image.id}
                  onClick={() => setSelectedImage(image.id)}
                  className="group cursor-pointer rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-accent/10 relative">
                    {image.image ? (
                      <img 
                        src={image.image} 
                        alt={image.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center">
                          <span className="font-heading text-2xl font-bold text-primary">
                            {image.category.charAt(0)}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="text-center text-primary-foreground p-4">
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
            className="fixed inset-0 bg-foreground/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-primary-foreground hover:text-accent transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>

            <button
              className="absolute left-4 text-primary-foreground hover:text-accent transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
            >
              <ChevronLeft size={48} />
            </button>

            <div
              className="max-w-4xl w-full bg-card rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
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
              className="absolute right-4 text-primary-foreground hover:text-accent transition-colors"
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
