import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Linkedin, Instagram, Mail } from "lucide-react";
import anuraagPhoto from "@/assets/anuraag-gupta.jpg";
import manjuKaushikPhoto from "@/assets/manju-kaushik.jpg";

const facultyAdvisors = [
  {
    id: 1,
    name: "Prof. (Dr.) Manju Kaushik",
    role: "Branch counsellor",
    department: "Amity University Rajasthan",
    linkedin: "https://www.linkedin.com/in/prof-dr-manju-kaushik-675a7070/",
    email: "mkaushik@amity.edu",
    image: manjuKaushikPhoto,
  },
];

const executiveTeam = [
  { id: 1, name: "Mr. Anuraag Gupta", role: "Chairperson", linkedin: "https://www.linkedin.com/in/anuraag-gupta-a4877527a/", instagram: "https://www.instagram.com/anuraag_037/", image: anuraagPhoto },
  { id: 2, name: "Ms. Madhusmita", role: "General Secretary", linkedin: "https://www.linkedin.com/in/madhusmita-p1114/", instagram: "https://www.instagram.com/palak__1114/" },
  { id: 3, name: "Mr. Ishan Verma", role: "Treasurer", linkedin: "https://www.linkedin.com/in/ishanvermaa/", instagram: "https://www.instagram.com/eeshan_verma/" },
];

const coreTeam = [
  { id: 1, name: "Mr. Dushyant", role: "Tech Team", linkedin: "https://www.linkedin.com/in/b-dushyant-rajawat-69872a36b/", instagram: "#" },
  { id: 2, name: "Ms. Divyanka Agarwal", role: "Media Team", linkedin: "https://www.linkedin.com/in/divyanka-agarwal-5b7a8b316/", instagram: "https://www.instagram.com/simply.divyanka/" },
  { id: 3, name: "Mr. Devyansh Sharma", role: "Public Relations", linkedin: "https://www.linkedin.com/in/devyansh-sharma-a677b730b/", instagram: "https://www.instagram.com/devyansh1004/" },
  { id: 4, name: "Mr. Nitin Mishra", role: "Operations Team", linkedin: "https://www.linkedin.com/in/nitin-mishra-104124178/", instagram: "https://www.instagram.com/nitin_mishra188/" },
  { id: 5, name: "Mr. Ishan Verma", role: "Finance Team", linkedin: "https://www.linkedin.com/in/ishanvermaa/", instagram: "https://www.instagram.com/eeshan_verma/" },
  { id: 6, name: "Mr. Veer Rohra", role: "Marketing Team", linkedin: "https://www.linkedin.com/in/veer-rohra/", instagram: "https://www.instagram.com/vvveeerrrrrrrr/" },
];

const TeamMemberCard = ({
  member,
  showEmail = false,
}: {
  member: {
    id: number;
    name: string;
    role: string;
    department?: string;
    linkedin?: string;
    instagram?: string;
    email?: string;
    image?: string;
  };
  showEmail?: boolean;
}) => (
  <div className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
    <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        {member.image ? (
          <img 
            src={member.image} 
            alt={member.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
            <span className="font-heading text-2xl font-bold text-primary">
              {member.name.charAt(0)}
            </span>
          </div>
        )}
      </div>
      
      <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
        {member.linkedin && (
          <a
            href={member.linkedin}
            className="w-10 h-10 bg-primary-foreground/20 hover:bg-primary-foreground/30 rounded-lg flex items-center justify-center text-primary-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        )}
        {member.instagram && (
          <a
            href={member.instagram}
            className="w-10 h-10 bg-primary-foreground/20 hover:bg-primary-foreground/30 rounded-lg flex items-center justify-center text-primary-foreground transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
        )}
        {showEmail && member.email && (
          <a
            href={`mailto:${member.email}`}
            className="w-10 h-10 bg-primary-foreground/20 hover:bg-primary-foreground/30 rounded-lg flex items-center justify-center text-primary-foreground transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        )}
      </div>
    </div>

    <div className="p-5 text-center">
      <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
        {member.name}
      </h3>
      <p className="text-sm text-primary font-medium">{member.role}</p>
      {member.department && (
        <p className="text-xs text-muted-foreground mt-1">{member.department}</p>
      )}
    </div>
  </div>
);

const Team = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                Our Team
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Meet the <span className="text-primary">Leaders</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Dedicated individuals working together to make IEEE SB Amity Rajasthan
                a hub for innovation and excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Faculty Advisors */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">
              Faculty <span className="text-primary">Advisors</span>
            </h2>
            <div className="flex justify-center">
              <div className="w-full max-w-xs">
                {facultyAdvisors.map((member) => (
                  <TeamMemberCard key={member.id} member={member} showEmail />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Executive Team */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">
              Executive <span className="text-primary">Committee</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {executiveTeam.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </section>

        {/* Core Team */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">
              Core <span className="text-primary">Team</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {coreTeam.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
