import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Calendar,
  MapPin,
  Users,
  Trophy,
  Code,
  Lightbulb,
  ArrowRight,
  Instagram,
  Sparkles,
  Mic,
  Gamepad2,
  Store,
  Moon,
  GraduationCap,
  Music,
  Utensils,
  Coffee,
  Award,
  Target,
  Flag,
  Building2,
  UserCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import whackLogo from "@/assets/whack-hackathon-logo.jpeg";
import whackPoster from "@/assets/whack-4-poster.png";

const stats = [
  { icon: Users, value: "150+", label: "Participants" },
  { icon: Sparkles, value: "300+", label: "Attendees Reached" },
  { icon: Code, value: "24", label: "Hours of Coding" },
  { icon: Calendar, value: "2", label: "Event Days" },
];

const highlights = [
  {
    icon: Gamepad2,
    title: "Game-It-On",
    description:
      "A gaming tournament running beyond the hackathon at the Amity Innovation Incubator — unwind, compete and win exciting prizes.",
    tag: "Tournament",
  },
  {
    icon: Store,
    title: "The Black Market",
    description:
      "Student stalls and a buzzing marketplace open all day on campus — food, merch and creativity on full display.",
    tag: "All Day",
  },
  {
    icon: Moon,
    title: "The After Hours",
    description:
      "Sundowner cultural evenings with a DJ Night at the Amphitheatre — the perfect wind-down after intense coding sprints.",
    tag: "DJ Night",
  },
  {
    icon: Mic,
    title: "Sessions | Whack-Hack",
    description:
      "Expert talks, a hands-on workshop and the IEEE Talent Stage — learning straight from founders, mentors and industry leaders.",
    tag: "Workshop",
  },
];

const guests = [
  {
    name: "Mr. Shankar Morwal",
    role: "Guest of Honour — Inaugural Address",
    title: "Founder & Chief Technology Officer, HabileLabs",
    detail: "Digital Transformation Consultant",
  },
  {
    name: "Mr. Siddharth Sharma",
    role: "Guest of Honour",
    title: "Mentor, iStart Rajasthan",
    detail: "Dept. of Information Technology & Communication, Govt. of Rajasthan",
  },
  {
    name: "Mr. Shubham Gupta",
    role: "Guest of Honour",
    title: "Team Lead, Nagarro Jaipur",
    detail: "Organiser, React Rajasthan",
  },
  {
    name: "Mr. Tanmay Goyal",
    role: "Workshop Host — Day 2",
    title: "Co-Founder, Hackingly",
    detail: "\u201CAI, SaaS, Startups: The Innovation Engine\u201D",
  },
];

type ScheduleItem = {
  time: string;
  title: string;
  detail?: string;
  icon?: typeof Code;
};

const day1: ScheduleItem[] = [
  { time: "09:15 AM", title: "Registration & Queries", detail: "Open all day", icon: UserCheck },
  { time: "10:00 AM", title: "The Black Market", detail: "Stalls open till 6:00 PM", icon: Store },
  { time: "10:30 AM", title: "High Tea", icon: Coffee },
  {
    time: "11:00 AM",
    title: "Inaugural Ceremony",
    detail: "Auditorium — lamp lighting, felicitation of guests, welcome address by Prof. (Dr.) G.K. Aseri, Pro Vice Chancellor, inaugural address by Prof. (Dr.) Amit Jain, Hon'ble Vice Chancellor & Patron, and addresses by the Guests of Honour",
    icon: Flag,
  },
  {
    time: "12:30 PM",
    title: "Problem Statement Announcement",
    detail: "Incubation Centre, 3rd Floor, E-Block",
    icon: Lightbulb,
  },
  {
    time: "12:30 PM",
    title: "24-Hour Coding Marathon Begins",
    detail: "Amity Innovation Incubator Centre — runs from 17th 12:30 PM to 18th 12:30 PM",
    icon: Code,
  },
  { time: "12:45 PM", title: "Lunch Break", icon: Utensils },
  { time: "02:30 PM", title: "Game-It-On", detail: "Amity Innovation Incubator, 3rd Floor, E-Block", icon: Gamepad2 },
  { time: "04:30 PM", title: "Evening Tea", icon: Coffee },
  { time: "07:30 PM", title: "Sundowner — Cultural Evening & DJ Night", detail: "Amphitheatre", icon: Music },
];

const day2: ScheduleItem[] = [
  {
    time: "10:15 AM",
    title: "Workshop by Mr. Tanmay Goyal",
    detail: "Co-Founder, Hackingly — \u201CAI, SaaS, Startups: The Innovation Engine\u201D (Auditorium)",
    icon: GraduationCap,
  },
  { time: "11:15 AM", title: "Talent Stage", detail: "Organized by IEEE Student Branch, AUR", icon: Mic },
  {
    time: "12:00 PM",
    title: "Valedictory & Prize Distribution",
    detail: "Auditorium — winning teams crowned",
    icon: Trophy,
  },
  { time: "01:00 PM", title: "Networking Lunch", icon: Utensils },
  { time: "07:30 PM", title: "Sundowner — Cultural Evening & DJ Night", detail: "Amphitheatre", icon: Music },
];

const takeaways = [
  "A problem-solving approach is the key to an advanced society and nation.",
  "Hackathons drive and inspire participants to go beyond their comfort zones.",
  "The Government of India provides numerous funding avenues for encouraging startups.",
  "Success environments reveal your technical, analytical, coding, design and teamwork abilities.",
  "One pragmatic step towards real-world problem solving is worth more than a thousand theoretical ones.",
];

const organizers = [
  {
    name: "Prof. (Dr.) Manju Kaushik",
    role: "Convenor & Organising Chair",
    detail: "Director, E-Cell & Centre of IoT · IEEE SB Counsellor, AUR",
  },
  {
    name: "Anuraag Gupta",
    role: "Overall Student Head",
    detail: "Chairperson, IEEE Student Branch AUR",
  },
  {
    name: "Madhusmita",
    role: "Overall Student Head",
    detail: "General Secretary, IEEE Student Branch AUR",
  },
  {
    name: "Ishan Verma",
    role: "Overall Student Head",
    detail: "Treasurer, IEEE Student Branch AUR",
  },
];

const prizes = [
  {
    position: "1st",
    title: "Winner",
    benefits: ["Cash Prize", "Certificates", "Exclusive Goodies"],
  },
  {
    position: "2nd",
    title: "First Runner-up",
    benefits: ["Cash Prize", "Certificates", "Goodies"],
  },
  {
    position: "3rd",
    title: "Second Runner-up",
    benefits: ["Cash Prize", "Certificates", "Goodies"],
  },
];

const ScheduleColumn = ({
  day,
  date,
  items,
}: {
  day: string;
  date: string;
  items: ScheduleItem[];
}) => (
  <div className="bg-background rounded-3xl border border-border p-6 sm:p-8 hover-lift">
    <div className="flex items-center gap-3 mb-6">
      <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground rounded-xl px-4 py-2 text-center shadow-md">
        <p className="text-xs font-semibold uppercase tracking-wider opacity-90">{day}</p>
        <p className="text-sm font-bold">{date}</p>
      </div>
    </div>
    <div className="relative space-y-5">
      <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary/60 via-accent/60 to-primary/40" />
      {items.map((item, index) => (
        <div key={index} className="relative pl-8">
          <span className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background" />
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-mono font-semibold text-primary">{item.time}</span>
            {item.icon && <item.icon size={14} className="text-accent" />}
          </div>
          <p className="font-semibold text-foreground mt-1">{item.title}</p>
          {item.detail && <p className="text-sm text-muted-foreground mt-0.5">{item.detail}</p>}
        </div>
      ))}
    </div>
  </div>
);

const WhackHackathon = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-700" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Hackathon Logo */}
              <div className="mb-8 animate-bounce-in">
                <div className="relative inline-block">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-xl opacity-40 animate-pulse" />
                  <img
                    src={whackLogo}
                    alt="Whack-Hackathon 4.0 Logo"
                    className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full shadow-2xl border-4 border-primary/30 hover:scale-110 transition-transform duration-300"
                    data-no-filter
                  />
                </div>
              </div>

              <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-in stagger-1">
                <Award size={16} />
                Successfully Conducted · February 17-18, 2026
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 animate-slide-up stagger-2">
                Whack-Hackathon <span className="text-primary">4.0</span>
              </h1>

              <p className="font-heading text-lg sm:text-xl tracking-[0.3em] text-muted-foreground uppercase mb-4 animate-fade-in stagger-2">
                Code · Create · Compete
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto animate-fade-in stagger-3">
                An inter-university hackathon organized by IEEE Student Branch AUR in collaboration with
                E-Cell, AUR — a 24-hour offline coding marathon at Amity University Rajasthan built around
                real-world problem statements in the track of Open Innovation.
              </p>

              {/* Key facts */}
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-10 animate-fade-in stagger-4">
                <div className="flex items-center justify-center gap-2 text-muted-foreground hover-lift">
                  <Calendar className="text-primary flex-shrink-0" size={20} />
                  <span>17-18 February 2026</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-muted-foreground hover-lift">
                  <MapPin className="text-accent flex-shrink-0" size={20} />
                  <span>Amity University Rajasthan</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-muted-foreground hover-lift">
                  <Building2 className="text-primary flex-shrink-0" size={20} />
                  <span>Organized by IEEE SB AUR & E-Cell, AUR</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto animate-scale-in stagger-5">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl p-4 hover-lift"
                  >
                    <stat.icon size={20} className="text-primary mx-auto mb-2" />
                    <div className="text-2xl sm:text-3xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Poster Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4 animate-fade-in">
                Official Event Poster
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground animate-slide-up stagger-1">
                How We Invited <span className="text-primary">The Whack</span>
              </h2>
            </div>
            <div className="max-w-2xl mx-auto animate-scale-in">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity animate-pulse" />
                <div className="relative bg-background border-2 border-primary/20 rounded-3xl p-3 shadow-2xl hover-lift">
                  <img
                    src={whackPoster}
                    alt="Whack-Hackathon 4.0 official event poster — 17-18 February 2026, Amity University Rajasthan, featuring The After Hours, Sessions | Whack Hack, Game-It-On and The Black Market"
                    className="w-full rounded-2xl"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Event Highlights Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4 animate-fade-in">
                Beyond the Code
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground animate-slide-up stagger-1">
                Event <span className="text-primary">Highlights</span>
              </h2>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto animate-fade-in stagger-2">
                Two days of hacking, gaming, music and a marketplace — Whack was much more than a hackathon.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="relative bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover-lift animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "backwards" }}
                >
                  <div className="absolute top-4 right-4 bg-accent/15 text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {item.tag}
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 shadow-md hover-lift">
                    <item.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Guests & Experts Section */}
        <section className="py-20 bg-card relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4 animate-fade-in">
                Voices of Whack 4.0
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground animate-slide-up stagger-1">
                Guests & <span className="text-primary">Experts</span>
              </h2>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto animate-fade-in stagger-2">
                Founders, mentors and industry leaders who inspired 300+ attendees across two days.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {guests.map((guest, index) => (
                <div
                  key={guest.name}
                  className="bg-background rounded-2xl p-6 border border-border hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover-lift animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "backwards" }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-md">
                      <Mic className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <span className="inline-block bg-primary/10 text-primary px-3 py-0.5 rounded-full text-xs font-semibold mb-2">
                        {guest.role}
                      </span>
                      <h3 className="font-heading text-lg font-semibold text-foreground">{guest.name}</h3>
                      <p className="text-sm text-foreground/80 font-medium mt-1">{guest.title}</p>
                      <p className="text-sm text-muted-foreground mt-0.5">{guest.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4 animate-fade-in">
                How It Unfolded
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground animate-slide-up stagger-1">
                Two-Day <span className="text-primary">Schedule</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <ScheduleColumn day="Day 01" date="17 Feb 2026" items={day1} />
              <ScheduleColumn day="Day 02" date="18 Feb 2026" items={day2} />
            </div>

            {/* 24hr marathon callout */}
            <div className="max-w-4xl mx-auto mt-10 animate-scale-in">
              <div className="relative bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] rounded-3xl p-8 sm:p-10 text-center overflow-hidden shadow-2xl">
                <div className="absolute top-6 left-6 text-cyan-400/30 text-4xl font-mono animate-pulse">&lt;/&gt;</div>
                <div className="absolute bottom-6 right-6 text-purple-400/30 text-4xl font-mono animate-pulse delay-500">{`{ }`}</div>
                <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/3 left-1/4 w-24 h-32 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />
                <div className="relative z-10">
                  <Code size={32} className="text-cyan-400 mx-auto mb-4" />
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3">
                    The 24-Hour Coding Marathon
                  </h3>
                  <p className="text-white/80 max-w-2xl mx-auto leading-relaxed">
                    From 12:30 PM on 17th February to 12:30 PM on 18th February, teams coded non-stop at the
                    Amity Innovation Incubator Centre — building real solutions to on-spot problem statements,
                    powered by mentor guidance, endless chai and Game-It-On breaks in between.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prizes Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4 animate-fade-in">
                Rewards
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground animate-slide-up stagger-1">
                What the <span className="text-primary">Winners</span> Took Home
              </h2>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto animate-fade-in stagger-2">
                Cash prizes, certificates, and exclusive goodies for the top performers — plus participation
                certificates for everyone.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {prizes.map((prize, index) => (
                <div
                  key={prize.position}
                  className={`relative bg-background rounded-2xl p-6 border transition-all duration-300 hover:shadow-lg hover-lift animate-scale-in ${
                    index === 0 ? "border-accent md:-mt-4 md:mb-4" : "border-border hover:border-primary/30"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "backwards" }}
                >
                  {index === 0 && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold animate-pulse-slow">
                      🏆 Grand Prize
                    </div>
                  )}
                  <div className="text-center pt-4">
                    <div className={`text-4xl font-bold mb-2 ${index === 0 ? "text-accent" : "text-primary"}`}>
                      {prize.position}
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-4">{prize.title}</h3>
                    <ul className="space-y-2">
                      {prize.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="text-muted-foreground flex items-center justify-center gap-2"
                        >
                          <Trophy size={14} className="text-primary" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Outcomes Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4 animate-fade-in">
                Impact
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground animate-slide-up stagger-1">
                Key <span className="text-primary">Takeaways</span>
              </h2>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto animate-fade-in stagger-2">
                Insights our participants carried home from the expert sessions.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {takeaways.map((takeaway, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-card rounded-2xl p-5 border border-border hover:border-primary/30 transition-all duration-300 hover-lift animate-slide-in-right"
                  style={{ animationDelay: `${index * 0.08}s`, animationFillMode: "backwards" }}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Target size={18} className="text-primary" />
                  </div>
                  <p className="text-foreground/90 leading-relaxed">{takeaway}</p>
                </div>
              ))}
            </div>

            {/* Organizers */}
            <div className="text-center mt-20 mb-12">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4 animate-fade-in">
                Behind the Event
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground animate-slide-up stagger-1">
                Organizing <span className="text-primary">Team</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {organizers.map((person, index) => (
                <div
                  key={person.name}
                  className="bg-card rounded-2xl p-6 border border-border text-center hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover-lift animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "backwards" }}
                >
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 shadow-md">
                    <UserCheck className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">{person.name}</h3>
                  <p className="text-sm text-primary font-medium mt-1">{person.role}</p>
                  <p className="text-sm text-muted-foreground mt-1">{person.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-accent relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse" />
            <div
              className="absolute bottom-10 right-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm font-bold mb-6 animate-bounce-in">
              <Sparkles size={18} className="animate-pulse" />
              SEE YOU AT WHACK-HACKATHON 5.0
              <Sparkles size={18} className="animate-pulse" />
            </div>

            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-up">
              The Next <span className="text-accent-foreground drop-shadow-lg">Whack</span> Awaits
            </h2>

            <p className="text-white/90 text-lg sm:text-xl mb-10 max-w-2xl mx-auto animate-fade-in stagger-1">
              Whack-Hackathon 4.0 brought together 150+ participants and 300+ attendees for 24 hours of
              innovation. The next edition is already in the making — follow us so you don't miss it.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-scale-in stagger-2">
              <Link to="/events">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-8 py-6 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 group"
                >
                  <Flag size={20} className="mr-2" />
                  Explore Upcoming Events
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>

              <a
                href="https://www.instagram.com/whack_hack4.0/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 hover:scale-105"
              >
                <Instagram size={20} />
                Relive on Instagram
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WhackHackathon;
