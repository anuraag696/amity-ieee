import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Linkedin, Instagram, Mail } from "lucide-react";
import anuraagPhoto from "@/assets/anuraag-gupta.jpg";
import manjuKaushikPhoto from "@/assets/manju-kaushik.jpg";
import dhruvPhoto from "@/assets/dhruv-mittal.jpg";
import saurabhPhoto from "@/assets/saurabh-bagaria.jpg";
import ambarPhoto from "@/assets/ambar-bansal.jpg";
import nitinPhoto from "@/assets/nitin-mishra.jpeg";
const supportingPillars = [{
  id: 1,
  name: "Dr. Ashok K Chauhan",
  role: "Founder President",
  department: "Amity Education Group"
}, {
  id: 2,
  name: "Dr. Aseem Chauhan",
  role: "Chancellor",
  department: "Amity University Rajasthan, Jaipur"
}, {
  id: 3,
  name: "Prof. (Dr.) Amit Jain",
  role: "Vice-Chancellor",
  department: "Amity University Rajasthan, Jaipur"
}, {
  id: 4,
  name: "Prof. (Dr.) G. K. Aseri",
  role: "Pro-Vice Chancellor",
  department: "Amity University Rajasthan, Jaipur"
}];

const facultyAdvisors = [{
  id: 1,
  name: "Prof. (Dr.) Manju Kaushik",
  role: "Branch counsellor",
  department: "Amity University Rajasthan",
  linkedin: "https://www.linkedin.com/in/prof-dr-manju-kaushik-675a7070/",
  email: "mkaushik@amity.edu",
  image: manjuKaushikPhoto
}];
const studentAdvisors = [{
  id: 1,
  name: "Mr. Dhruv Mittal",
  role: "Student Advisor",
  linkedin: "https://www.linkedin.com/in/dhruv-mittal-64945328b/",
  instagram: "https://www.instagram.com/anuraag_037/",
  image: dhruvPhoto
}, {
  id: 2,
  name: "Mr. Ambar Bansal",
  role: "Student Advisor",
  linkedin: "https://www.linkedin.com/in/ambar-bansal/",
  instagram: "https://www.instagram.com/ambarbansal1/",
  image: ambarPhoto
}, {
  id: 3,
  name: "Mr. Saurabh Bagaria",
  role: "Student Advisor",
  linkedin: "https://www.linkedin.com/in/saurab-bagaria-a20587296/",
  instagram: "https://www.instagram.com/saurab2407/",
  image: saurabhPhoto
}];
const executiveTeam = [{
  id: 1,
  name: "Mr. Anuraag Gupta",
  role: "Chairperson",
  linkedin: "https://www.linkedin.com/in/anuraag-gupta-a4877527a/",
  instagram: "https://www.instagram.com/anuraag_037/",
  image: anuraagPhoto
}, {
  id: 2,
  name: "Ms. Madhusmita",
  role: "General Secretary",
  linkedin: "https://www.linkedin.com/in/madhusmita-p1114/",
  instagram: "https://www.instagram.com/palak__1114/"
}, {
  id: 3,
  name: "Mr. Ishan Verma",
  role: "Treasurer",
  linkedin: "https://www.linkedin.com/in/ishanvermaa/",
  instagram: "https://www.instagram.com/eeshan_verma/"
}];
const coreTeam = [{
  id: 1,
  name: "Mr. Dushyant",
  role: "Tech Team",
  linkedin: "https://www.linkedin.com/in/b-dushyant-rajawat-69872a36b/",
  instagram: "#"
}, {
  id: 2,
  name: "Ms. Divyanka Agarwal",
  role: "Media Team",
  linkedin: "https://www.linkedin.com/in/divyanka-agarwal-5b7a8b316/",
  instagram: "https://www.instagram.com/simply.divyanka/"
}, {
  id: 3,
  name: "Mr. Devyansh Sharma",
  role: "Public Relations",
  linkedin: "https://www.linkedin.com/in/devyansh-sharma-a677b730b/",
  instagram: "https://www.instagram.com/devyansh1004/"
}, {
  id: 4,
  name: "Mr. Nitin Mishra",
  role: "Operations Team",
  linkedin: "https://www.linkedin.com/in/nitin-mishra-104124178/",
  instagram: "https://www.instagram.com/nitin_mishra188/",
  image: nitinPhoto
}, {
  id: 5,
  name: "Mr. Ishan Verma",
  role: "Finance Team",
  linkedin: "https://www.linkedin.com/in/ishanvermaa/",
  instagram: "https://www.instagram.com/eeshan_verma/"
}, {
  id: 6,
  name: "Mr. Veer Rohra",
  role: "Marketing Team",
  linkedin: "https://www.linkedin.com/in/veer-rohra/",
  instagram: "https://www.instagram.com/vvveeerrrrrrrr/"
}];
const TeamMemberCard = ({
  member,
  showEmail = false,
  index = 0
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
  index?: number;
}) => <div className={`group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover-lift animate-scale-in stagger-${index % 6 + 1}`}>
    <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        {member.image ? <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" /> : <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <span className="font-heading text-2xl font-bold text-primary">
              {member.name.charAt(0)}
            </span>
          </div>}
      </div>
      
      <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
        {member.linkedin && <a href={member.linkedin} className="w-10 h-10 bg-primary-foreground/20 hover:bg-primary-foreground/30 rounded-lg flex items-center justify-center text-primary-foreground transition-all duration-300 hover:scale-110" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>}
        {member.instagram && <a href={member.instagram} className="w-10 h-10 bg-primary-foreground/20 hover:bg-primary-foreground/30 rounded-lg flex items-center justify-center text-primary-foreground transition-all duration-300 hover:scale-110" aria-label="Instagram">
            <Instagram size={18} />
          </a>}
        {showEmail && member.email && <a href={`mailto:${member.email}`} className="w-10 h-10 bg-primary-foreground/20 hover:bg-primary-foreground/30 rounded-lg flex items-center justify-center text-primary-foreground transition-all duration-300 hover:scale-110" aria-label="Email">
            <Mail size={18} />
          </a>}
      </div>
    </div>

    <div className="p-5 text-center">
      <h3 className="font-heading font-semibold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
        {member.name}
      </h3>
      <p className="text-sm text-primary font-medium">{member.role}</p>
      {member.department && <p className="text-xs text-muted-foreground mt-1">{member.department}</p>}
    </div>
  </div>;
const Team = () => {
  return <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl animate-slide-up">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4 animate-fade-in stagger-1">
                Our Team
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6 animate-slide-up stagger-2">
                Meet the <span className="text-primary">Leaders</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in stagger-3">
                Dedicated individuals working together to make IEEE SB Amity Rajasthan
                a hub for innovation and excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Supporting Pillars */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center animate-slide-up">
              Supporting <span className="text-primary">Pillars</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {supportingPillars.map((member, index) => (
                <TeamMemberCard key={member.id} member={member} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Faculty Advisors */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center animate-slide-up">
              Faculty <span className="text-primary">Advisors</span>
            </h2>
            <div className="flex justify-center">
              <div className="w-full max-w-xs">
                {facultyAdvisors.map((member, index) => <TeamMemberCard key={member.id} member={member} showEmail index={index} />)}
              </div>
            </div>
          </div>
        </section>

        {/* Student Advisors */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center animate-slide-up">
              Student <span className="text-primary">Advisors</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {studentAdvisors.map((member, index) => <TeamMemberCard key={member.id} member={member} index={index} />)}
            </div>
          </div>
        </section>

        {/* Executive Team */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center animate-slide-up">
              Executive <span className="text-primary">Committee</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {executiveTeam.map((member, index) => <TeamMemberCard key={member.id} member={member} index={index} />)}
            </div>
          </div>
        </section>

        {/* Core Team */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center animate-slide-up">
              Core <span className="text-primary">Team Heads</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {coreTeam.map((member, index) => <TeamMemberCard key={member.id} member={member} index={index} />)}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default Team;