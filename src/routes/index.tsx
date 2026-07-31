import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useRef, type ReactNode } from "react";
import { motion, useScroll, useSpring, AnimatePresence, useInView } from "motion/react";
import {
  Github, Linkedin, Mail, MapPin, Download, ArrowUpRight, ArrowRight,
  Code2, Palette, Server, Database, Wrench, Layers, Menu, X, Send,
  Rocket, Zap, ShieldCheck, Sparkles, MessageCircle, Search,
  Monitor, Smartphone, ShoppingBag, FileCode, Globe, Moon, Sun, ChevronUp,
  ExternalLink, Quote,
} from "lucide-react";
import eeshaalImage from "@/assets/eeshaal-preview.png";
import gulbergOfficeImage from "@/assets/gulberg-office-preview.png";
import portrait from "@/assets/hamza-portrait.jpg";
import infusionPakistanImage from "@/assets/infusions-preview.webp";
import lawPortalImage from "@/assets/law-portal.png";
import leasideDrivingImage from "@/assets/leaside-driving-preview.png";
import motoraidPortalImage from "@/assets/motoraid-portal-preview.png";
import motoraidWarrantyImage from "@/assets/motoraid-warranty-preview.png";
import narrativeCmsImage from "@/assets/narrative-preview.png";
import pavilionFinancialsImage from "@/assets/pavilion-financials-preview.png";
import pearlPlasticImage from "@/assets/pearl-plastic-preview.png";
import pegasusMedicalBillingImage from "@/assets/pegasus-medical-billing-preview.png";
import pindiBrandImage from "@/assets/pindi-brand-preview.png";
import ptsPakistanImage from "@/assets/pts-pakistan-preview.png";
import skylinelimoImage from "@/assets/skylinelimo-preview.png";
import siteEffectsImage from "@/assets/site-effects-preview.png";
import wadiAlGhafImage from "@/assets/wadi-al-ghaf-preview.png";
import webenergiesImage from "@/assets/webenergies-preview.png";
import xplorJapanImage from "@/assets/xplor-japan-preview.png";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hamza Malik — Frontend Web Developer & React Engineer" },
      { name: "description", content: "Portfolio of Hamza Malik, a frontend web developer in Islamabad building fast, modern, scalable web apps with React, Next.js and Tailwind CSS." },
      { property: "og:title", content: "Hamza Malik — Frontend Web Developer" },
      { property: "og:description", content: "Modern, elegant web experiences built with React, Next.js, and Tailwind CSS." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Portfolio,
});

/* ---------- utilities ---------- */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.06, ease: [0.2, 0.7, 0.2, 1] as any } }),
};

function Section({ id, children, className }: { id: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={cn("relative scroll-mt-24 py-24 md:py-32", className)}>
      <div className="mx-auto max-w-7xl px-6">{children}</div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mx-auto mb-16 max-w-2xl text-center">
      <motion.div
        initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}
        className="inline-flex items-center gap-2 rounded-full border border-border glass px-3 py-1 text-xs font-medium text-muted-foreground"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        {eyebrow}
      </motion.div>
      <motion.h2
        initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} custom={1}
        className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl"
      >
        {title.split("|").map((chunk, i) =>
          i % 2 === 1 ? <span key={i} className="text-brand-gradient">{chunk}</span> : chunk
        )}
      </motion.h2>
      {description && (
        <motion.p
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} custom={2}
          className="mt-4 text-base leading-relaxed text-muted-foreground"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

/* ---------- data ---------- */
const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

const WHATSAPP_URL = "https://wa.me/923055514786";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="#25D366"
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.296-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.051 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.886 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.465 3.488"
      />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="#0A66C2"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.943v5.663H9.351V9h3.414v1.561h.047c.476-.9 1.637-1.85 3.37-1.85 3.602 0 4.267 2.371 4.267 5.455v6.286h-.002ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.552V9h3.567v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z"
      />
    </svg>
  );
}

function GmailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path fill="#EA4335" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L24 5.457Z" />
      <path fill="#34A853" d="M5.455 11.73v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457l5.455 6.273Z" />
      <path fill="#FBBC04" d="M18.545 11.73v9.273H5.455V11.73L12 16.64l6.545-4.91Z" />
      <path fill="#4285F4" d="M24 5.457 18.545 11.73 12 16.64 5.455 11.73 0 5.457V4.636C0 3.16 1.785 2.421 2.827 3.464L12 12.637l9.173-9.173C22.215 2.421 24 3.16 24 4.636v.821Z" />
      <path fill="#C5221F" d="M5.455 11.73 0 5.457V4.636c0-1.476 1.785-2.215 2.827-1.172L5.455 6.09v5.64Z" />
    </svg>
  );
}

const SKILL_GROUPS = [
  { icon: Code2, title: "Frontend", items: [
    { name: "React.js", level: 95 }, { name: "Next.js", level: 92 }, { name: "TypeScript", level: 88 },
    { name: "JavaScript", level: 95 }, { name: "Redux Toolkit", level: 85 }, { name: "HTML5", level: 98 }, { name: "CSS3", level: 95 },
  ]},
  { icon: Palette, title: "Styling", items: [
    { name: "Tailwind CSS", level: 96 }, { name: "SCSS", level: 88 }, { name: "Bootstrap", level: 90 },
  ]},
  { icon: Server, title: "Backend", items: [
    { name: "Node.js", level: 80 }, { name: "Express.js", level: 78 },
  ]},
  { icon: Layers, title: "CMS", items: [
    { name: "WordPress", level: 92 }, { name: "WooCommerce", level: 85 },
  ]},
  { icon: Database, title: "Database", items: [
    { name: "MySQL", level: 82 }, { name: "PostgreSQL", level: 78 }, { name: "MongoDB", level: 70 },
  ]},
  { icon: Wrench, title: "Tools", items: [
    { name: "Git & GitHub", level: 92 }, { name: "Vite", level: 90 }, { name: "VS Code", level: 98 }, { name: "Postman", level: 85 },
  ]},
];

const EXPERIENCE = [
  {
    role: "Frontend Developer", company: "Freelance & Contract", period: "2024 — Present",
    points: [
      "Build responsive, accessible websites with React & Next.js",
      "Convert Figma designs to pixel-perfect production code",
      "Optimize performance to 90+ Lighthouse scores",
      "Improve SEO, semantics and Core Web Vitals",
      "Collaborate with international clients across time zones",
    ],
  },
  {
    role: "WordPress Developer", company: "Agency Projects", period: "2023 — 2024",
    points: [
      "Developed custom WordPress themes and landing pages",
      "Customized WooCommerce stores for local businesses",
      "Improved loading speed & mobile performance",
      "Integrated payment gateways and third-party APIs",
    ],
  },
];

const PROJECTS = [
  { title: "Law Portal", tag: "SAAS", tags: ["SAAS", "Web Apps"], desc: "Case management law portal with client intake, document workflows, and secure dashboard access.", tech: ["React.js", "PostgreSQL", "Node.js", "Express.Js", "RestAPIs", "Vite", "TailwindCSS", "React-Router"], gradient: "from-amber-500/30 to-slate-500/20", image: lawPortalImage, url: "https://legaldiaries.pk" },
  { title: "Narrative CMS", tag: "CMS", tags: ["CMS"], desc: "Editorial CMS with rich text authoring and multi-tenant publishing.", tech: ["React.js", "PostgreSQL", "Node.js", "Express.Js", "RestAPIs", "Vite", "TailwindCSS", "React-Router"], gradient: "from-stone-500/30 to-emerald-500/20", image: narrativeCmsImage, url: "http://narrative.pk/" },
  { title: "Infusion Pakistan", tag: "E-commerce", tags: ["E-commerce", "CMS"], desc: "Admin portal for managing the complete ecommerce operation, including invoices, inventory, orders, products, and store records.", tech: ["React.js", "PostgreSQL", "Node.js", "Express.Js", "RestAPIs", "Vite", "TailwindCSS", "React-Router"], gradient: "from-emerald-500/30 to-lime-500/20", image: infusionPakistanImage, url: "https://infusions.pk" },
  { title: "Pindi Brand", tag: "E-commerce", tags: ["E-commerce"], desc: "Ecommerce store for cultural apparel and accessories with product browsing, shop categories, cart flow, and online ordering.", tech: ["React.js", "PostgreSQL", "Node.js", "Express.Js", "RestAPIs", "Vite", "TailwindCSS", "React-Router"], gradient: "from-pink-500/30 to-orange-500/20", image: pindiBrandImage, url: "https://pindibrand.com/" },
  { title: "Skylinelimo", tag: "Web Apps", tags: ["Web Apps"], desc: "Luxury limousine booking platform with vehicle selection, route planning, and reservation management.", tech: ["React.js", "PostgreSQL", "Node.js", "Express.Js", "Vite", "TailwindCSS", "React-Router"], gradient: "from-amber-500/30 to-yellow-500/20", image: skylinelimoImage, url: "https://skylinelimo.ca" },
  { title: "Pavilion Financials", tag: "Frontend", tags: ["Frontend"], desc: "Loan services website with application flow, approval details, repayment options, and secure financial support.", tech: ["React.js", "Vite", "TailwindCSS", "React-Router", "Framer Motion"], gradient: "from-emerald-500/30 to-slate-500/20", image: pavilionFinancialsImage, url: "https://pavilionfinancials.com/" },
  { title: "Gulberg Office", tag: "Frontend", tags: ["Frontend"], desc: "Real estate website for showcasing office spaces, property details, location highlights, and inquiry flow.", tech: ["React.js", "Vite", "TailwindCSS", "React-Router"], gradient: "from-cyan-500/30 to-emerald-500/20", image: gulbergOfficeImage, url: "https://gulbergoffice.com/" },
  { title: "Eeshaal", tag: "Frontend", tags: ["Frontend"], desc: "Travel and tourism website for presenting destinations, tour packages, service details, and booking inquiries.", tech: ["React.js", "Vite", "TailwindCSS", "React-Router"], gradient: "from-sky-500/30 to-indigo-500/20", image: eeshaalImage, url: "https://eeshaal.com/" },
  { title: "Webenergies", tag: "Frontend", tags: ["Frontend"], desc: "IT services website covering digital solutions, service pages, business support, and lead capture flow.", tech: ["React.js", "Vite", "TailwindCSS", "React-Router"], gradient: "from-blue-500/30 to-violet-500/20", image: webenergiesImage, url: "https://webenergies.com/" },
  { title: "PTS Pakistan", tag: "Frontend", tags: ["Frontend"], desc: "Logistics services website for presenting transport solutions, service coverage, tracking support, and inquiries.", tech: ["React.js", "Vite", "TailwindCSS", "React-Router"], gradient: "from-orange-500/30 to-blue-500/20", image: ptsPakistanImage, url: "https://ptspakistan.com/" },
  { title: "Pearl Plastic", tag: "Frontend", tags: ["Frontend"], desc: "Frontend website for a plastic packaging manufacturer showcasing products, process, quality highlights, and quote inquiries.", tech: ["HTML", "CSS", "JS", "Bootstrap"], gradient: "from-yellow-500/30 to-blue-500/20", image: pearlPlasticImage, url: "#" },
  { title: "MotorAid Portal", tag: "Web Apps", tags: ["Web Apps"], desc: "UK vehicle insurance and warranty claims portal for managing customer coverage, claim requests, and policy support.", tech: ["Javascript", "PHP", "TailwindCSS"], gradient: "from-blue-500/30 to-cyan-500/20", image: motoraidWarrantyImage, url: "http://portal.motoraidwarranty.co.uk/" },
  { title: "Xplor Japan", tag: "WordPress", desc: "Japan private tours and travel booking website with destination pages, custom tour packages, and inquiry flow.", tech: ["WordPress", "Elementor", "Responsive Design", "Rant Math SEO", "Accelerator", "Up-draft Plus", "Site-kit"], gradient: "from-red-500/30 to-rose-500/20", image: xplorJapanImage, url: "https://xplorjapan.com/" },
  { title: "Wadi Al Ghaf", tag: "WordPress", desc: "Travel and transportation services website covering tourism, hospitality, limousine, and transfer solutions.", tech: ["WordPress", "Elementor", "Travel Website", "Rant Math SEO", "Accelerator", "Up-draft Plus", "Site-kit"], gradient: "from-emerald-500/30 to-amber-500/20", image: wadiAlGhafImage, url: "http://wadialghaf.com/" },
  { title: "Leaside Driving Academy", tag: "WordPress", desc: "Driving school website with course dates, packages, contact flow, and local training service pages.", tech: ["WordPress", "Elementor", "Booking Flow", "Rant Math SEO", "Accelerator", "Up-draft Plus", "Site-kit"], gradient: "from-sky-500/30 to-blue-500/20", image: leasideDrivingImage, url: "http://leasidedriving.com/" },
  { title: "Pegasus Medical Billing", tag: "WordPress", desc: "Medical billing services website with healthcare billing content, service pages, and lead capture flow.", tech: ["WordPress", "Elementor", "Business Website", "Rant Math SEO", "Accelerator", "Up-draft Plus", "Site-kit"], gradient: "from-violet-500/30 to-cyan-500/20", image: pegasusMedicalBillingImage, url: "http://pegasusmb.com/" },
  { title: "MotorAid Warranty", tag: "WordPress", desc: "Vehicle warranty website with coverage details, service information, claims guidance, and lead capture pages.", tech: ["WordPress", "Elementor", "Business Website", "Rant Math SEO", "Accelerator", "Up-draft Plus", "Site-kit"], gradient: "from-blue-500/30 to-slate-500/20", image: motoraidWarrantyImage, url: "https://motoraidwarranty.co.uk/" },
  { title: "Site Effects", tag: "WordPress", desc: "Technical services website for IT, CCTV, maintenance, networking, and support service requests.", tech: ["WordPress", "Elementor", "Responsive Design", "Rant Math SEO", "Accelerator", "Up-draft Plus", "Site-kit"], gradient: "from-lime-500/30 to-emerald-500/20", image: siteEffectsImage, url: "https://siteeffects.org/" },
];

const PROJECT_FILTERS = ["All", "Frontend", "Web Apps", "CMS", "SAAS", "E-commerce", "WordPress"];

const SERVICES = [
  { icon: Code2, title: "Frontend Development", desc: "Modern, component-driven UIs with clean, maintainable code." },
  { icon: Rocket, title: "React Development", desc: "Complex SPAs and dashboards with state management." },
  { icon: Zap, title: "Next.js Development", desc: "SSR, SSG & full-stack apps with edge performance." },
  { icon: Monitor, title: "Landing Pages", desc: "High-converting marketing sites that ship in days." },
  { icon: Search, title: "Website Optimization", desc: "Core Web Vitals, SEO and accessibility upgrades." },
  { icon: Globe, title: "WordPress Development", desc: "Custom themes, WooCommerce and headless setups." },
  { icon: Palette, title: "UI Implementation", desc: "Figma to pixel-perfect production code, delivered fast." },
  { icon: Smartphone, title: "Responsive Design", desc: "Beautiful on every device, from mobile to 4K." },
];

const WHY = [
  { icon: Sparkles, title: "Fast Learner", desc: "Ramp up on new stacks quickly and ship value early." },
  { icon: FileCode, title: "Clean Code", desc: "Readable, typed, and reviewable — built to scale." },
  { icon: Zap, title: "Performance Focused", desc: "Lighthouse 90+, sub-second interactions." },
  { icon: Smartphone, title: "Responsive Design", desc: "Mobile-first, works flawlessly on any screen." },
  { icon: Search, title: "SEO Friendly", desc: "Semantic HTML, structured data, great vitals." },
  { icon: Palette, title: "Modern UI", desc: "Elegant, accessible interfaces users love." },
  { icon: MessageCircle, title: "Reliable Communication", desc: "Clear updates, honest timelines, no surprises." },
  { icon: ShieldCheck, title: "Problem Solver", desc: "Pragmatic solutions to real-world problems." },
];

const TESTIMONIALS = [
  { name: "Sarah Ahmed", role: "Product Manager, Nova Labs", quote: "Hamza delivered our dashboard ahead of schedule. The polish, animations and performance were on another level.", avatar: "SA" },
  { name: "Daniel Kim", role: "Founder, Trailhead", quote: "Rare combination of great taste in UI and rock-solid engineering. Our marketing site converts 2× better now.", avatar: "DK" },
  { name: "Aisha Rahman", role: "Design Lead, Foundry", quote: "Every Figma detail was respected. The final build looked more refined than the design itself.", avatar: "AR" },
];

/* ---------- Component ---------- */
function Portfolio() {
  const [loaded, setLoaded] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [showTop, setShowTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const progressX = useSpring(scrollYProgress, { stiffness: 150, damping: 30, mass: 0.2 });

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 700);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Loading screen */}
      <AnimatePresence>
        {!loaded && (
          <motion.div
            exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="relative h-14 w-14">
                <span className="absolute inset-0 rounded-full border-2 border-primary/20" />
                <span className="absolute inset-0 rounded-full border-2 border-t-primary border-r-accent border-b-transparent border-l-transparent animate-spin" />
              </div>
              <span className="text-sm text-muted-foreground tracking-widest">LOADING</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll progress */}
      <motion.div style={{ scaleX: progressX }} className="fixed top-0 left-0 right-0 z-[80] h-[2px] origin-left bg-gradient-to-r from-primary via-accent to-primary" />

      {/* Nav */}
      <header className="fixed top-4 left-1/2 z-50 w-[calc(100%-1.5rem)] max-w-6xl -translate-x-1/2">
        <nav className="glass flex items-center justify-between rounded-2xl px-4 py-3 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.5)]">
          <button onClick={() => scrollTo("home")} className="flex items-center gap-2 text-sm font-semibold tracking-tight">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent font-bold text-white shadow-[0_0_20px_rgba(59,130,246,0.4)]">H</span>
            <span className="hidden sm:inline">Hamza Malik</span>
          </button>
          <ul className="hidden items-center gap-1 md:flex">
            {NAV.map((n) => (
              <li key={n.id}>
                <button
                  onClick={() => scrollTo(n.id)}
                  className={cn(
                    "relative rounded-lg px-3 py-1.5 text-sm transition-colors",
                    active === n.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {active === n.id && (
                    <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-lg bg-white/5 border border-border" transition={{ type: "spring", stiffness: 400, damping: 30 }} />
                  )}
                  <span className="relative">{n.label}</span>
                </button>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <button
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm font-medium text-white shadow-[0_8px_25px_-8px_rgba(59,130,246,0.6)] transition-transform hover:scale-[1.03]">
              Hire Me <ArrowUpRight className="h-4 w-4" />
            </a>
            <button aria-label="Menu" className="md:hidden grid h-9 w-9 place-items-center rounded-lg border border-border" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
              className="glass mt-2 rounded-2xl p-2 md:hidden"
            >
              {NAV.map((n) => (
                <button key={n.id} onClick={() => scrollTo(n.id)} className={cn("block w-full rounded-lg px-3 py-2 text-left text-sm", active === n.id ? "bg-white/5 text-foreground" : "text-muted-foreground")}>
                  {n.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        <Hero scrollTo={scrollTo} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <WhyHire />
        <Testimonials />
        <Contact />
      </main>

      <Footer scrollTo={scrollTo} />

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-white shadow-[0_10px_30px_-8px_rgba(59,130,246,0.6)]"
          >
            <ChevronUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

/* ---------- Hero ---------- */
function Typewriter({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    const timeout = setTimeout(() => {
      if (!del) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) setTimeout(() => setDel(true), 1400);
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) { setDel(false); setI(i + 1); }
      }
    }, del ? 40 : 90);
    return () => clearTimeout(timeout);
  }, [text, del, i, words]);

  return <span className="caret text-brand-gradient">{text}</span>;
}

function Hero({ scrollTo }: { scrollTo: (id: string) => void }) {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-32 pb-16 md:pt-40">
      {/* animated background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-bg" />
      <div aria-hidden className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/30 blur-[120px] animate-blob" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent/25 blur-[120px] animate-blob" style={{ animationDelay: "-7s" }} />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
        <div>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border glass px-3 py-1 text-xs text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for new projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Hi, I'm <span className="text-brand-gradient">Hamza Malik</span>
            <br />
            <span className="text-muted-foreground text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              <Typewriter words={["Frontend Developer", "Software Engineer", "React.js and Next.js Developer", "WordPress and CMS Developer"]} />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            I build modern, scalable and high-performance web applications with{" "}
            <span className="text-foreground">React.js</span>,{" "}
            <span className="text-foreground">Next.js</span> and{" "}
            <span className="text-foreground">Tailwind CSS</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="/Hamza-Malik-Resume.pdf" download="Hamza-Malik-Resume.pdf" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-medium text-white shadow-[0_10px_30px_-10px_rgba(59,130,246,0.6)] transition-transform hover:scale-[1.03]">
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <button onClick={() => scrollTo("projects")} className="glass group inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-colors hover:border-primary/40">
              View Projects <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 flex items-center gap-3"
          >
            {[
              { icon: WhatsAppIcon, href: WHATSAPP_URL, label: "WhatsApp" },
              { icon: LinkedInIcon, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: GmailIcon, href: "mailto:hamzamalik12345567@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer"
                 className="grid h-10 w-10 place-items-center rounded-lg border border-border glass text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-foreground hover:border-primary/40">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right side: code window */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative animate-float">
            <div className="glass overflow-hidden rounded-2xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)]">
              <div className="flex items-center justify-between border-b border-border/70 px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                </div>
                <span className="text-xs text-muted-foreground">portfolio.tsx</span>
                <span className="text-xs text-muted-foreground">TS</span>
              </div>
              <pre className="overflow-x-auto p-5 text-[13px] leading-relaxed font-mono">
                <code>
                  <span className="text-fuchsia-400">const</span>{" "}
                  <span className="text-cyan-300">developer</span>{" "}
                  <span className="text-muted-foreground">=</span>{" "}
                  <span className="text-muted-foreground">{"{"}</span>
                  {"\n  "}<span className="text-blue-300">name</span>
                  <span className="text-muted-foreground">:</span>{" "}
                  <span className="text-emerald-300">"Hamza Malik"</span>
                  <span className="text-muted-foreground">,</span>
                  {"\n  "}<span className="text-blue-300">role</span>
                  <span className="text-muted-foreground">:</span>{" "}
                  <span className="text-emerald-300">"Frontend Engineer"</span>
                  <span className="text-muted-foreground">,</span>
                  {"\n  "}<span className="text-blue-300">stack</span>
                  <span className="text-muted-foreground">:</span>{" "}
                  <span className="text-muted-foreground">[</span>
                  <span className="text-emerald-300">"React"</span>
                  <span className="text-muted-foreground">,</span>{" "}
                  <span className="text-emerald-300">"Next.js"</span>
                  <span className="text-muted-foreground">,</span>{" "}
                  <span className="text-emerald-300">"TS"</span>
                  <span className="text-muted-foreground">],</span>
                  {"\n  "}<span className="text-blue-300">location</span>
                  <span className="text-muted-foreground">:</span>{" "}
                  <span className="text-emerald-300">"Islamabad, PK"</span>
                  <span className="text-muted-foreground">,</span>
                  {"\n  "}<span className="text-blue-300">available</span>
                  <span className="text-muted-foreground">:</span>{" "}
                  <span className="text-orange-300">true</span>
                  <span className="text-muted-foreground">,</span>
                  {"\n  "}<span className="text-blue-300">crafts</span>
                  <span className="text-muted-foreground">:</span>{" "}
                  <span className="text-fuchsia-400">async</span>{" "}
                  <span className="text-muted-foreground">() =&gt; </span>
                  <span className="text-fuchsia-400">await</span>{" "}
                  <span className="text-cyan-300">build</span>
                  <span className="text-muted-foreground">(</span>
                  <span className="text-emerald-300">"delightful UI"</span>
                  <span className="text-muted-foreground">)</span>
                  <span className="text-muted-foreground">,</span>
                  {"\n"}<span className="text-muted-foreground">{"};"}</span>
                </code>
              </pre>
            </div>
            {/* floating badges */}
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity }}
              className="glass absolute -left-6 -bottom-6 rounded-xl p-3 shadow-xl hidden sm:block">
              <div className="flex items-center gap-2">
                <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary/20 text-primary"><Zap className="h-4 w-4" /></div>
                <div>
                  <div className="text-xs text-muted-foreground">Lighthouse</div>
                  <div className="text-sm font-semibold">98 / 100</div>
                </div>
              </div>
            </motion.div>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity }}
              className="glass absolute -right-4 -top-6 rounded-xl p-3 shadow-xl hidden sm:block">
              <div className="flex items-center gap-2">
                <div className="grid h-8 w-8 place-items-center rounded-lg bg-accent/20 text-accent"><Sparkles className="h-4 w-4" /></div>
                <div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                  <div className="text-sm font-semibold">50+ shipped</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- About ---------- */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

function About() {
  const stats = [
    { label: "Projects Completed", value: 50, suffix: "+" },
    { label: "Years Experience", value: 4, suffix: "+" },
    { label: "Happy Clients", value: 30, suffix: "+" },
    { label: "Technologies", value: 20, suffix: "+" },
  ];
  return (
    <Section id="about">
      <SectionHeader eyebrow="About Me" title="Crafting web with |care & precision|" />
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="lg:col-span-2"
        >
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary/30 to-accent/30 blur-2xl" />
            <div className="glass relative overflow-hidden rounded-3xl p-2">
              <img
                src={portrait} alt="Hamza Malik portrait" width={800} height={1000} loading="lazy"
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
            <div className="glass absolute -bottom-4 -right-4 rounded-2xl px-4 py-3 shadow-xl">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-sm">Islamabad, Pakistan</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="lg:col-span-3"
        >
          <p className="text-lg leading-relaxed text-muted-foreground">
            I'm a Frontend Web Developer based in Islamabad, Pakistan — passionate about building
            beautiful, responsive and high-performance web applications. I specialize in creating
            scalable user interfaces with{" "}
            <span className="text-foreground">React.js, Next.js, Tailwind CSS</span> and modern
            frontend technologies. I love solving real-world problems and continuously learning
            new tools that push the craft forward.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="glass card-hover rounded-2xl p-5 text-center">
                <div className="text-3xl font-semibold text-brand-gradient">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

/* ---------- Skills ---------- */
function SkillBar({ name, level }: { name: string; level: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <div ref={ref}>
      <div className="mb-1.5 flex items-center justify-between text-xs">
        <span className="text-foreground/90">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
        <motion.div
          initial={{ width: 0 }} animate={{ width: inView ? `${level}%` : 0 }} transition={{ duration: 1, ease: [0.2, 0.7, 0.2, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
        />
      </div>
    </div>
  );
}

function Skills() {
  return (
    <Section id="skills">
      <SectionHeader eyebrow="Skills" title="Tools I use to |ship great software|"
        description="A pragmatic stack for building fast, accessible and maintainable products." />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((g, gi) => (
          <motion.div key={g.title}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: gi * 0.06 }}
            className="glass card-hover rounded-2xl p-6"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                <g.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold">{g.title}</h3>
            </div>
            <div className="space-y-3">
              {g.items.map((it) => <SkillBar key={it.name} {...it} />)}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Experience ---------- */
function Experience() {
  return (
    <Section id="experience">
      <SectionHeader eyebrow="Experience" title="A track record of |shipping|" />
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/40 to-transparent md:left-1/2" />
        {EXPERIENCE.map((e, i) => (
          <motion.div key={e.role}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={cn("relative mb-10 pl-12 md:w-1/2 md:pl-0", i % 2 === 0 ? "md:pr-12 md:text-right md:ml-0" : "md:pl-12 md:ml-auto")}
          >
            <span className={cn("absolute top-4 grid h-3 w-3 place-items-center rounded-full bg-gradient-to-br from-primary to-accent shadow-[0_0_20px_rgba(59,130,246,0.6)]",
              "left-[10px] md:left-auto",
              i % 2 === 0 ? "md:-right-[6px]" : "md:-left-[6px]")} />
            <div className="glass card-hover rounded-2xl p-6">
              <div className="text-xs text-accent">{e.period}</div>
              <div className="mt-1 text-lg font-semibold">{e.role}</div>
              <div className="text-sm text-muted-foreground">{e.company}</div>
              <ul className={cn("mt-4 space-y-1.5 text-sm text-muted-foreground", i % 2 === 0 ? "md:text-right" : "")}>
                {e.points.map((p) => <li key={p} className="leading-relaxed">— {p}</li>)}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Projects ---------- */
function Projects() {
  const [filter, setFilter] = useState("All");
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.tags?.includes(filter) || p.tag === filter);

  return (
    <Section id="projects">
      <SectionHeader eyebrow="Projects" title="Selected |work|"
        description="A few products I've designed, engineered and shipped." />
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {PROJECT_FILTERS.map((f) => (
          <button key={f} onClick={() => setFilter(f)}
            className={cn("rounded-full border px-4 py-1.5 text-xs transition-all",
              filter === f ? "border-primary/60 bg-primary/10 text-foreground" : "border-border text-muted-foreground hover:text-foreground")}>
            {f}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.article key={p.title} layout
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
              className="glass card-hover group relative overflow-hidden rounded-2xl"
            >
              <button onClick={() => setOpenIdx(PROJECTS.indexOf(p))} className="block w-full text-left">
                <div className={cn("relative flex aspect-video items-center justify-center overflow-hidden", "image" in p ? "bg-black" : ["bg-gradient-to-br", p.gradient])}>
                  {"image" in p ? (
                    <img src={p.image} alt={`${p.title} preview`} className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  ) : (
                    <>
                      <div aria-hidden className="absolute inset-0 grid-bg opacity-40" />
                      <div className="relative glass rounded-xl px-4 py-2 text-xs uppercase tracking-widest text-foreground/80">
                        {p.title}
                      </div>
                    </>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                  <p className="mt-1.5 text-sm text-muted-foreground">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span key={t} className="rounded-full border border-primary/60 bg-primary/5 px-2 py-0.5 text-[11px] text-muted-foreground">{t}</span>
                    ))}
                  </div>
                </div>
              </button>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {openIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            onClick={() => setOpenIdx(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }}
              className="glass relative w-full max-w-2xl overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setOpenIdx(null)} className="absolute right-3 top-3 z-10 grid h-8 w-8 place-items-center rounded-full border border-border bg-background/60">
                <X className="h-4 w-4" />
              </button>
              <div className={cn("flex aspect-video items-center justify-center overflow-hidden", "image" in PROJECTS[openIdx] ? "bg-black" : ["bg-gradient-to-br", PROJECTS[openIdx].gradient])}>
                {"image" in PROJECTS[openIdx] ? (
                  <img src={PROJECTS[openIdx].image} alt={`${PROJECTS[openIdx].title} preview`} className="h-full w-full object-contain" />
                ) : (
                  <span className="text-2xl font-semibold text-foreground/80">{PROJECTS[openIdx].title}</span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{PROJECTS[openIdx].title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{PROJECTS[openIdx].desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {PROJECTS[openIdx].tech.map((t) => (
                    <span key={t} className="rounded-full border border-primary/60 bg-primary/5 px-2 py-0.5 text-[11px] text-muted-foreground">{t}</span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={"url" in PROJECTS[openIdx] ? PROJECTS[openIdx].url : "#"} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm font-medium text-white">
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                  <a href="#" className="glass inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm">
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}

/* ---------- Services ---------- */
function Services() {
  return (
    <Section id="services">
      <SectionHeader eyebrow="Services" title="How I can |help you ship|" />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((s, i) => (
          <motion.div key={s.title}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="glass card-hover group relative overflow-hidden rounded-2xl p-6"
          >
            <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:bg-primary/20" />
            <div className="relative">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Why hire ---------- */
function WhyHire() {
  return (
    <Section id="why">
      <SectionHeader eyebrow="Why Hire Me" title="Reasons to |work with me|" />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {WHY.map((w, i) => (
          <motion.div key={w.title}
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="glass card-hover rounded-2xl p-5"
          >
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 text-accent">
              <w.icon className="h-4 w-4" />
            </div>
            <div className="mt-3 text-sm font-semibold">{w.title}</div>
            <div className="mt-1 text-xs leading-relaxed text-muted-foreground">{w.desc}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Testimonials ---------- */
function Testimonials() {
  return (
    <Section id="testimonials">
      <SectionHeader eyebrow="Testimonials" title="What clients |say|" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <motion.figure key={t.name}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass card-hover relative rounded-2xl p-6"
          >
            <Quote className="absolute right-5 top-5 h-6 w-6 text-primary/30" />
            <blockquote className="text-sm leading-relaxed text-foreground/90">"{t.quote}"</blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-xs font-semibold text-white">{t.avatar}</div>
              <div>
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Section id="contact">
      <SectionHeader eyebrow="Contact" title="Let's build something |remarkable|"
        description="Have a project in mind? Drop me a message and I'll get back within 24 hours." />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-6 lg:col-span-2"
        >
          <h3 className="text-lg font-semibold">Get in touch</h3>
          <p className="mt-1 text-sm text-muted-foreground">Prefer async? Use one of these channels.</p>
          <div className="mt-6 space-y-4">
            {[
              { icon: MapPin, label: "Location", value: "Islamabad, Pakistan" },
              { icon: Mail, label: "Email", value: "hamzamalik12345567@gmail.com", href: "mailto:hamzamalik12345567@gmail.com" },
              { icon: Github, label: "GitHub", value: "github.com/hamzamalik", href: "https://github.com" },
              { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/hamzamalik", href: "https://linkedin.com" },
              { icon: WhatsAppIcon, label: "WhatsApp", value: "03055514786", href: WHATSAPP_URL },
            ].map((c) => (
              <a key={c.label} href={c.href || "#"} className="flex items-center gap-3 rounded-xl border border-transparent p-2 -m-2 transition-colors hover:border-border">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                  <c.icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">{c.label}</div>
                  <div className="text-sm">{c.value}</div>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 3500); (e.target as HTMLFormElement).reset(); }}
          className="glass rounded-2xl p-6 lg:col-span-3 space-y-4"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" placeholder="Your name" />
            <Field label="Email" name="email" type="email" placeholder="you@example.com" />
          </div>
          <Field label="Subject" name="subject" placeholder="Project inquiry" />
          <div>
            <label className="mb-1.5 block text-xs text-muted-foreground">Message</label>
            <textarea required rows={5} name="message" placeholder="Tell me about your project…"
              className="w-full resize-none rounded-xl border border-border bg-background/40 px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary/60 focus:bg-background/60" />
          </div>
          <button type="submit" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-medium text-white shadow-[0_10px_30px_-10px_rgba(59,130,246,0.6)] transition-transform hover:scale-[1.02]">
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /> Send Message
          </button>
          <AnimatePresence>
            {sent && (
              <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-sm text-emerald-400">
                Thanks — message sent. I'll get back to you shortly.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs text-muted-foreground">{label}</label>
      <input required name={name} type={type} placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary/60 focus:bg-background/60" />
    </div>
  );
}

/* ---------- Footer ---------- */
function Footer({ scrollTo }: { scrollTo: (id: string) => void }) {
  return (
    <footer className="relative border-t border-border/60 py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent font-bold text-white">H</span>
            <span className="font-semibold">Hamza Malik</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">Frontend Web Developer building modern, scalable, and high-performance web applications with React.js, Next.js, and WordPress.
Experienced in CMS development, API integrations, and creating custom web portals tailored to business needs.
Focused on delivering responsive, SEO-friendly, and user-centric digital experiences.</p>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Quick Links</div>
          <ul className="mt-3 grid grid-cols-2 gap-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.id}>
                <button onClick={() => scrollTo(n.id)} className="text-muted-foreground transition-colors hover:text-foreground">{n.label}</button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Connect</div>
          <div className="mt-3 flex gap-2">
            {[
              { icon: WhatsAppIcon, href: WHATSAPP_URL, label: "WhatsApp" },
              { icon: LinkedInIcon, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: GmailIcon, href: "mailto:hamzamalik12345567@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer"
                 className="grid h-10 w-10 place-items-center rounded-lg border border-border glass text-muted-foreground transition-colors hover:text-foreground">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-border/60 px-6 pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Hamza Malik. All rights reserved.
      </div>
    </footer>
  );
}
