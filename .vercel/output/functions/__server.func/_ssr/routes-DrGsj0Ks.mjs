import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as AnimatePresence, n as useSpring, r as useScroll, t as useInView } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { A as ArrowUpRight, C as Github, D as Database, E as Download, O as CodeXml, S as Globe, T as ExternalLink, _ as Menu, a as Sparkles, b as Linkedin, c as Server, d as Rocket, f as Quote, g as MessageCircle, h as Monitor, i as Sun, j as ArrowRight, k as ChevronUp, l as Send, m as Moon, n as X, o as Smartphone, p as Palette, r as Wrench, s as ShieldCheck, t as Zap, u as Search, v as MapPin, w as FileCode, x as Layers, y as Mail } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DrGsj0Ks.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var eeshaal_preview_default = "/assets/eeshaal-preview-f93NVUFo.png";
var gulberg_office_preview_default = "/assets/gulberg-office-preview-Byp_E6K2.png";
var hamza_portrait_default = "/assets/hamza-portrait-BK_te8FN.jpg";
var infusions_preview_default = "/assets/infusions-preview-BwFDjmdy.webp";
var law_portal_default = "/assets/law-portal-BcrmikET.png";
var leaside_driving_preview_default = "/assets/leaside-driving-preview-xJpgOptY.png";
var motoraid_warranty_preview_default = "/assets/motoraid-warranty-preview-BReqEVfq.png";
var narrative_preview_default = "/assets/narrative-preview-BxqqmbGK.png";
var pavilion_financials_preview_default = "/assets/pavilion-financials-preview-C5D1Kdqj.png";
var pearl_plastic_preview_default = "/assets/pearl-plastic-preview-BpPqqhXZ.png";
var pegasus_medical_billing_preview_default = "/assets/pegasus-medical-billing-preview-DwEHtt2-.png";
var pindi_brand_preview_default = "/assets/pindi-brand-preview-C4sTwLM7.png";
var pts_pakistan_preview_default = "/assets/pts-pakistan-preview-DN3YLnRA.png";
var skylinelimo_preview_default = "/assets/skylinelimo-preview-6ZpqIX_p.png";
var site_effects_preview_default = "/assets/site-effects-preview-f4dBsLcc.png";
var wadi_al_ghaf_preview_default = "/assets/wadi-al-ghaf-preview-BYT7Uu_z.png";
var webenergies_preview_default = "/assets/webenergies-preview-DyvRca43.png";
var xplor_japan_preview_default = "/assets/xplor-japan-preview-CMwmCPPj.png";
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var fadeUp = {
	hidden: {
		opacity: 0,
		y: 24
	},
	show: (i = 0) => ({
		opacity: 1,
		y: 0,
		transition: {
			duration: .6,
			delay: i * .06,
			ease: [
				.2,
				.7,
				.2,
				1
			]
		}
	})
};
function Section({ id, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: cn("relative scroll-mt-24 py-24 md:py-32", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6",
			children
		})
	});
}
function SectionHeader({ eyebrow, title, description }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto mb-16 max-w-2xl text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: "hidden",
				whileInView: "show",
				viewport: {
					once: true,
					margin: "-80px"
				},
				variants: fadeUp,
				className: "inline-flex items-center gap-2 rounded-full border border-border glass px-3 py-1 text-xs font-medium text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-accent" }), eyebrow]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
				initial: "hidden",
				whileInView: "show",
				viewport: {
					once: true,
					margin: "-80px"
				},
				variants: fadeUp,
				custom: 1,
				className: "mt-4 text-3xl font-semibold tracking-tight md:text-5xl",
				children: title.split("|").map((chunk, i) => i % 2 === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-brand-gradient",
					children: chunk
				}, i) : chunk)
			}),
			description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
				initial: "hidden",
				whileInView: "show",
				viewport: {
					once: true,
					margin: "-80px"
				},
				variants: fadeUp,
				custom: 2,
				className: "mt-4 text-base leading-relaxed text-muted-foreground",
				children: description
			})
		]
	});
}
var NAV = [
	{
		id: "home",
		label: "Home"
	},
	{
		id: "about",
		label: "About"
	},
	{
		id: "skills",
		label: "Skills"
	},
	{
		id: "experience",
		label: "Experience"
	},
	{
		id: "projects",
		label: "Projects"
	},
	{
		id: "services",
		label: "Services"
	},
	{
		id: "contact",
		label: "Contact"
	}
];
var WHATSAPP_URL = "https://wa.me/923055514786";
function WhatsAppIcon({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "#25D366",
			d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.296-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.051 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.886 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.465 3.488"
		})
	});
}
function LinkedInIcon({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "#0A66C2",
			d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.943v5.663H9.351V9h3.414v1.561h.047c.476-.9 1.637-1.85 3.37-1.85 3.602 0 4.267 2.371 4.267 5.455v6.286h-.002ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.552V9h3.567v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z"
		})
	});
}
function GmailIcon({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		className,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#EA4335",
				d: "M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L24 5.457Z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#34A853",
				d: "M5.455 11.73v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457l5.455 6.273Z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#FBBC04",
				d: "M18.545 11.73v9.273H5.455V11.73L12 16.64l6.545-4.91Z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#4285F4",
				d: "M24 5.457 18.545 11.73 12 16.64 5.455 11.73 0 5.457V4.636C0 3.16 1.785 2.421 2.827 3.464L12 12.637l9.173-9.173C22.215 2.421 24 3.16 24 4.636v.821Z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#C5221F",
				d: "M5.455 11.73 0 5.457V4.636c0-1.476 1.785-2.215 2.827-1.172L5.455 6.09v5.64Z"
			})
		]
	});
}
var SKILL_GROUPS = [
	{
		icon: CodeXml,
		title: "Frontend",
		items: [
			{
				name: "React.js",
				level: 95
			},
			{
				name: "Next.js",
				level: 92
			},
			{
				name: "TypeScript",
				level: 88
			},
			{
				name: "JavaScript",
				level: 95
			},
			{
				name: "Redux Toolkit",
				level: 85
			},
			{
				name: "HTML5",
				level: 98
			},
			{
				name: "CSS3",
				level: 95
			}
		]
	},
	{
		icon: Palette,
		title: "Styling",
		items: [
			{
				name: "Tailwind CSS",
				level: 96
			},
			{
				name: "SCSS",
				level: 88
			},
			{
				name: "Bootstrap",
				level: 90
			}
		]
	},
	{
		icon: Server,
		title: "Backend",
		items: [{
			name: "Node.js",
			level: 80
		}, {
			name: "Express.js",
			level: 78
		}]
	},
	{
		icon: Layers,
		title: "CMS",
		items: [{
			name: "WordPress",
			level: 92
		}, {
			name: "WooCommerce",
			level: 85
		}]
	},
	{
		icon: Database,
		title: "Database",
		items: [
			{
				name: "MySQL",
				level: 82
			},
			{
				name: "PostgreSQL",
				level: 78
			},
			{
				name: "MongoDB",
				level: 70
			}
		]
	},
	{
		icon: Wrench,
		title: "Tools",
		items: [
			{
				name: "Git & GitHub",
				level: 92
			},
			{
				name: "Vite",
				level: 90
			},
			{
				name: "VS Code",
				level: 98
			},
			{
				name: "Postman",
				level: 85
			}
		]
	}
];
var EXPERIENCE = [{
	role: "Frontend Developer",
	company: "Freelance & Contract",
	period: "2024 — Present",
	points: [
		"Build responsive, accessible websites with React & Next.js",
		"Convert Figma designs to pixel-perfect production code",
		"Optimize performance to 90+ Lighthouse scores",
		"Improve SEO, semantics and Core Web Vitals",
		"Collaborate with international clients across time zones"
	]
}, {
	role: "WordPress Developer",
	company: "Agency Projects",
	period: "2023 — 2024",
	points: [
		"Developed custom WordPress themes and landing pages",
		"Customized WooCommerce stores for local businesses",
		"Improved loading speed & mobile performance",
		"Integrated payment gateways and third-party APIs"
	]
}];
var PROJECTS = [
	{
		title: "Law Portal",
		tag: "SAAS",
		tags: ["SAAS", "Web Apps"],
		desc: "Case management law portal with client intake, document workflows, and secure dashboard access.",
		tech: [
			"React.js",
			"PostgreSQL",
			"Node.js",
			"Express.Js",
			"RestAPIs",
			"Vite",
			"TailwindCSS",
			"React-Router"
		],
		gradient: "from-amber-500/30 to-slate-500/20",
		image: law_portal_default,
		url: "https://legaldiaries.pk"
	},
	{
		title: "Narrative CMS",
		tag: "CMS",
		tags: ["CMS"],
		desc: "Editorial CMS with rich text authoring and multi-tenant publishing.",
		tech: [
			"React.js",
			"PostgreSQL",
			"Node.js",
			"Express.Js",
			"RestAPIs",
			"Vite",
			"TailwindCSS",
			"React-Router"
		],
		gradient: "from-stone-500/30 to-emerald-500/20",
		image: narrative_preview_default,
		url: "http://narrative.pk/"
	},
	{
		title: "Infusion Pakistan",
		tag: "E-commerce",
		tags: ["E-commerce", "CMS"],
		desc: "Admin portal for managing the complete ecommerce operation, including invoices, inventory, orders, products, and store records.",
		tech: [
			"React.js",
			"PostgreSQL",
			"Node.js",
			"Express.Js",
			"RestAPIs",
			"Vite",
			"TailwindCSS",
			"React-Router"
		],
		gradient: "from-emerald-500/30 to-lime-500/20",
		image: infusions_preview_default,
		url: "https://infusions.pk"
	},
	{
		title: "Pindi Brand",
		tag: "E-commerce",
		tags: ["E-commerce"],
		desc: "Ecommerce store for cultural apparel and accessories with product browsing, shop categories, cart flow, and online ordering.",
		tech: [
			"React.js",
			"PostgreSQL",
			"Node.js",
			"Express.Js",
			"RestAPIs",
			"Vite",
			"TailwindCSS",
			"React-Router"
		],
		gradient: "from-pink-500/30 to-orange-500/20",
		image: pindi_brand_preview_default,
		url: "https://pindibrand.com/"
	},
	{
		title: "Skylinelimo",
		tag: "Web Apps",
		tags: ["Web Apps"],
		desc: "Luxury limousine booking platform with vehicle selection, route planning, and reservation management.",
		tech: [
			"React.js",
			"PostgreSQL",
			"Node.js",
			"Express.Js",
			"Vite",
			"TailwindCSS",
			"React-Router"
		],
		gradient: "from-amber-500/30 to-yellow-500/20",
		image: skylinelimo_preview_default,
		url: "https://skylinelimo.ca"
	},
	{
		title: "Pavilion Financials",
		tag: "Frontend",
		tags: ["Frontend"],
		desc: "Loan services website with application flow, approval details, repayment options, and secure financial support.",
		tech: [
			"React.js",
			"Vite",
			"TailwindCSS",
			"React-Router",
			"Framer Motion"
		],
		gradient: "from-emerald-500/30 to-slate-500/20",
		image: pavilion_financials_preview_default,
		url: "https://pavilionfinancials.com/"
	},
	{
		title: "Gulberg Office",
		tag: "Frontend",
		tags: ["Frontend"],
		desc: "Real estate website for showcasing office spaces, property details, location highlights, and inquiry flow.",
		tech: [
			"React.js",
			"Vite",
			"TailwindCSS",
			"React-Router"
		],
		gradient: "from-cyan-500/30 to-emerald-500/20",
		image: gulberg_office_preview_default,
		url: "https://gulbergoffice.com/"
	},
	{
		title: "Eeshaal",
		tag: "Frontend",
		tags: ["Frontend"],
		desc: "Travel and tourism website for presenting destinations, tour packages, service details, and booking inquiries.",
		tech: [
			"React.js",
			"Vite",
			"TailwindCSS",
			"React-Router"
		],
		gradient: "from-sky-500/30 to-indigo-500/20",
		image: eeshaal_preview_default,
		url: "https://eeshaal.com/"
	},
	{
		title: "Webenergies",
		tag: "Frontend",
		tags: ["Frontend"],
		desc: "IT services website covering digital solutions, service pages, business support, and lead capture flow.",
		tech: [
			"React.js",
			"Vite",
			"TailwindCSS",
			"React-Router"
		],
		gradient: "from-blue-500/30 to-violet-500/20",
		image: webenergies_preview_default,
		url: "https://webenergies.com/"
	},
	{
		title: "PTS Pakistan",
		tag: "Frontend",
		tags: ["Frontend"],
		desc: "Logistics services website for presenting transport solutions, service coverage, tracking support, and inquiries.",
		tech: [
			"React.js",
			"Vite",
			"TailwindCSS",
			"React-Router"
		],
		gradient: "from-orange-500/30 to-blue-500/20",
		image: pts_pakistan_preview_default,
		url: "https://ptspakistan.com/"
	},
	{
		title: "Pearl Plastic",
		tag: "Frontend",
		tags: ["Frontend"],
		desc: "Frontend website for a plastic packaging manufacturer showcasing products, process, quality highlights, and quote inquiries.",
		tech: [
			"HTML",
			"CSS",
			"JS",
			"Bootstrap"
		],
		gradient: "from-yellow-500/30 to-blue-500/20",
		image: pearl_plastic_preview_default,
		url: "#"
	},
	{
		title: "MotorAid Portal",
		tag: "Web Apps",
		tags: ["Web Apps"],
		desc: "UK vehicle insurance and warranty claims portal for managing customer coverage, claim requests, and policy support.",
		tech: [
			"Javascript",
			"PHP",
			"TailwindCSS"
		],
		gradient: "from-blue-500/30 to-cyan-500/20",
		image: motoraid_warranty_preview_default,
		url: "http://portal.motoraidwarranty.co.uk/"
	},
	{
		title: "Xplor Japan",
		tag: "WordPress",
		desc: "Japan private tours and travel booking website with destination pages, custom tour packages, and inquiry flow.",
		tech: [
			"WordPress",
			"Elementor",
			"Responsive Design",
			"Rant Math SEO",
			"Accelerator",
			"Up-draft Plus",
			"Site-kit"
		],
		gradient: "from-red-500/30 to-rose-500/20",
		image: xplor_japan_preview_default,
		url: "https://xplorjapan.com/"
	},
	{
		title: "Wadi Al Ghaf",
		tag: "WordPress",
		desc: "Travel and transportation services website covering tourism, hospitality, limousine, and transfer solutions.",
		tech: [
			"WordPress",
			"Elementor",
			"Travel Website",
			"Rant Math SEO",
			"Accelerator",
			"Up-draft Plus",
			"Site-kit"
		],
		gradient: "from-emerald-500/30 to-amber-500/20",
		image: wadi_al_ghaf_preview_default,
		url: "http://wadialghaf.com/"
	},
	{
		title: "Leaside Driving Academy",
		tag: "WordPress",
		desc: "Driving school website with course dates, packages, contact flow, and local training service pages.",
		tech: [
			"WordPress",
			"Elementor",
			"Booking Flow",
			"Rant Math SEO",
			"Accelerator",
			"Up-draft Plus",
			"Site-kit"
		],
		gradient: "from-sky-500/30 to-blue-500/20",
		image: leaside_driving_preview_default,
		url: "http://leasidedriving.com/"
	},
	{
		title: "Pegasus Medical Billing",
		tag: "WordPress",
		desc: "Medical billing services website with healthcare billing content, service pages, and lead capture flow.",
		tech: [
			"WordPress",
			"Elementor",
			"Business Website",
			"Rant Math SEO",
			"Accelerator",
			"Up-draft Plus",
			"Site-kit"
		],
		gradient: "from-violet-500/30 to-cyan-500/20",
		image: pegasus_medical_billing_preview_default,
		url: "http://pegasusmb.com/"
	},
	{
		title: "MotorAid Warranty",
		tag: "WordPress",
		desc: "Vehicle warranty website with coverage details, service information, claims guidance, and lead capture pages.",
		tech: [
			"WordPress",
			"Elementor",
			"Business Website",
			"Rant Math SEO",
			"Accelerator",
			"Up-draft Plus",
			"Site-kit"
		],
		gradient: "from-blue-500/30 to-slate-500/20",
		image: motoraid_warranty_preview_default,
		url: "https://motoraidwarranty.co.uk/"
	},
	{
		title: "Site Effects",
		tag: "WordPress",
		desc: "Technical services website for IT, CCTV, maintenance, networking, and support service requests.",
		tech: [
			"WordPress",
			"Elementor",
			"Responsive Design",
			"Rant Math SEO",
			"Accelerator",
			"Up-draft Plus",
			"Site-kit"
		],
		gradient: "from-lime-500/30 to-emerald-500/20",
		image: site_effects_preview_default,
		url: "https://siteeffects.org/"
	}
];
var PROJECT_FILTERS = [
	"All",
	"Frontend",
	"Web Apps",
	"CMS",
	"SAAS",
	"E-commerce",
	"WordPress"
];
var SERVICES = [
	{
		icon: CodeXml,
		title: "Frontend Development",
		desc: "Modern, component-driven UIs with clean, maintainable code."
	},
	{
		icon: Rocket,
		title: "React Development",
		desc: "Complex SPAs and dashboards with state management."
	},
	{
		icon: Zap,
		title: "Next.js Development",
		desc: "SSR, SSG & full-stack apps with edge performance."
	},
	{
		icon: Monitor,
		title: "Landing Pages",
		desc: "High-converting marketing sites that ship in days."
	},
	{
		icon: Search,
		title: "Website Optimization",
		desc: "Core Web Vitals, SEO and accessibility upgrades."
	},
	{
		icon: Globe,
		title: "WordPress Development",
		desc: "Custom themes, WooCommerce and headless setups."
	},
	{
		icon: Palette,
		title: "UI Implementation",
		desc: "Figma to pixel-perfect production code, delivered fast."
	},
	{
		icon: Smartphone,
		title: "Responsive Design",
		desc: "Beautiful on every device, from mobile to 4K."
	}
];
var WHY = [
	{
		icon: Sparkles,
		title: "Fast Learner",
		desc: "Ramp up on new stacks quickly and ship value early."
	},
	{
		icon: FileCode,
		title: "Clean Code",
		desc: "Readable, typed, and reviewable — built to scale."
	},
	{
		icon: Zap,
		title: "Performance Focused",
		desc: "Lighthouse 90+, sub-second interactions."
	},
	{
		icon: Smartphone,
		title: "Responsive Design",
		desc: "Mobile-first, works flawlessly on any screen."
	},
	{
		icon: Search,
		title: "SEO Friendly",
		desc: "Semantic HTML, structured data, great vitals."
	},
	{
		icon: Palette,
		title: "Modern UI",
		desc: "Elegant, accessible interfaces users love."
	},
	{
		icon: MessageCircle,
		title: "Reliable Communication",
		desc: "Clear updates, honest timelines, no surprises."
	},
	{
		icon: ShieldCheck,
		title: "Problem Solver",
		desc: "Pragmatic solutions to real-world problems."
	}
];
var TESTIMONIALS = [
	{
		name: "Sarah Ahmed",
		role: "Product Manager, Nova Labs",
		quote: "Hamza delivered our dashboard ahead of schedule. The polish, animations and performance were on another level.",
		avatar: "SA"
	},
	{
		name: "Daniel Kim",
		role: "Founder, Trailhead",
		quote: "Rare combination of great taste in UI and rock-solid engineering. Our marketing site converts 2× better now.",
		avatar: "DK"
	},
	{
		name: "Aisha Rahman",
		role: "Design Lead, Foundry",
		quote: "Every Figma detail was respected. The final build looked more refined than the design itself.",
		avatar: "AR"
	}
];
function Portfolio() {
	const [loaded, setLoaded] = (0, import_react.useState)(false);
	const [theme, setTheme] = (0, import_react.useState)("dark");
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)("home");
	const [showTop, setShowTop] = (0, import_react.useState)(false);
	const { scrollYProgress } = useScroll();
	const progressX = useSpring(scrollYProgress, {
		stiffness: 150,
		damping: 30,
		mass: .2
	});
	(0, import_react.useEffect)(() => {
		const t = setTimeout(() => setLoaded(true), 700);
		return () => clearTimeout(t);
	}, []);
	(0, import_react.useEffect)(() => {
		document.documentElement.classList.toggle("light", theme === "light");
		document.documentElement.classList.toggle("dark", theme === "dark");
	}, [theme]);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setShowTop(window.scrollY > 500);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		const io = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) setActive(e.target.id);
			});
		}, {
			rootMargin: "-45% 0px -50% 0px",
			threshold: 0
		});
		NAV.forEach((n) => {
			const el = document.getElementById(n.id);
			if (el) io.observe(el);
		});
		return () => io.disconnect();
	}, []);
	const scrollTo = (id) => {
		setMenuOpen(false);
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: !loaded && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			exit: { opacity: 0 },
			transition: { duration: .5 },
			className: "fixed inset-0 z-[100] flex items-center justify-center bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative h-14 w-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 rounded-full border-2 border-primary/20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 rounded-full border-2 border-t-primary border-r-accent border-b-transparent border-l-transparent animate-spin" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm text-muted-foreground tracking-widest",
					children: "LOADING"
				})]
			})
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			style: { scaleX: progressX },
			className: "fixed top-0 left-0 right-0 z-[80] h-[2px] origin-left bg-gradient-to-r from-primary via-accent to-primary"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "fixed top-4 left-1/2 z-50 w-[calc(100%-1.5rem)] max-w-6xl -translate-x-1/2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "glass flex items-center justify-between rounded-2xl px-4 py-3 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.5)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => scrollTo("home"),
						className: "flex items-center gap-2 text-sm font-semibold tracking-tight",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent font-bold text-white shadow-[0_0_20px_rgba(59,130,246,0.4)]",
							children: "H"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline",
							children: "Hamza Malik"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "hidden items-center gap-1 md:flex",
						children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => scrollTo(n.id),
							className: cn("relative rounded-lg px-3 py-1.5 text-sm transition-colors", active === n.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"),
							children: [active === n.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								layoutId: "nav-pill",
								className: "absolute inset-0 rounded-lg bg-white/5 border border-border",
								transition: {
									type: "spring",
									stiffness: 400,
									damping: 30
								}
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "relative",
								children: n.label
							})]
						}) }, n.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								"aria-label": "Toggle theme",
								onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
								className: "grid h-9 w-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground",
								children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: WHATSAPP_URL,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm font-medium text-white shadow-[0_8px_25px_-8px_rgba(59,130,246,0.6)] transition-transform hover:scale-[1.03]",
								children: ["Hire Me ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								"aria-label": "Menu",
								className: "md:hidden grid h-9 w-9 place-items-center rounded-lg border border-border",
								onClick: () => setMenuOpen(!menuOpen),
								children: menuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-4 w-4" })
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: menuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					y: -8
				},
				animate: {
					opacity: 1,
					y: 0
				},
				exit: {
					opacity: 0,
					y: -8
				},
				className: "mobile-menu-panel mt-2 rounded-2xl p-2 shadow-[0_18px_50px_-20px_rgba(0,0,0,0.75)] md:hidden",
				children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => scrollTo(n.id),
					className: cn("block w-full rounded-lg px-3 py-2 text-left text-sm", active === n.id ? "bg-white/5 text-foreground" : "text-muted-foreground"),
					children: n.label
				}, n.id))
			}) })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, { scrollTo }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyHire, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, { scrollTo }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: showTop && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
			initial: {
				opacity: 0,
				y: 20
			},
			animate: {
				opacity: 1,
				y: 0
			},
			exit: {
				opacity: 0,
				y: 20
			},
			onClick: () => window.scrollTo({
				top: 0,
				behavior: "smooth"
			}),
			"aria-label": "Back to top",
			className: "fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-white shadow-[0_10px_30px_-8px_rgba(59,130,246,0.6)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-5 w-5" })
		}) })
	] });
}
function Typewriter({ words }) {
	const [i, setI] = (0, import_react.useState)(0);
	const [text, setText] = (0, import_react.useState)("");
	const [del, setDel] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const current = words[i % words.length];
		const timeout = setTimeout(() => {
			if (!del) {
				setText(current.slice(0, text.length + 1));
				if (text.length + 1 === current.length) setTimeout(() => setDel(true), 1400);
			} else {
				setText(current.slice(0, text.length - 1));
				if (text.length - 1 === 0) {
					setDel(false);
					setI(i + 1);
				}
			}
		}, del ? 40 : 90);
		return () => clearTimeout(timeout);
	}, [
		text,
		del,
		i,
		words
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "caret text-brand-gradient",
		children: text
	});
}
function Hero({ scrollTo }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "relative min-h-screen overflow-hidden pt-32 pb-16 md:pt-40",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-0 grid-bg"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/30 blur-[120px] animate-blob"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent/25 blur-[120px] animate-blob",
				style: { animationDelay: "-7s" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 12
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .6 },
						className: "inline-flex items-center gap-2 rounded-full border border-border glass px-3 py-1 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative flex h-2 w-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-emerald-400" })]
						}), "Available for new projects"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
						initial: {
							opacity: 0,
							y: 16
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							delay: .1
						},
						className: "mt-6 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl",
						children: [
							"Hi, I'm ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-brand-gradient",
								children: "Hamza Malik"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Typewriter, { words: [
									"Frontend Developer",
									"Software Engineer",
									"React.js and Next.js Developer",
									"WordPress and CMS Developer"
								] })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
						initial: {
							opacity: 0,
							y: 12
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							delay: .25
						},
						className: "mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg",
						children: [
							"I build modern, scalable and high-performance web applications with",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground",
								children: "React.js"
							}),
							",",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground",
								children: "Next.js"
							}),
							" and",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground",
								children: "Tailwind CSS"
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 12
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							delay: .35
						},
						className: "mt-8 flex flex-wrap items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "/Hamza-Malik-Resume.pdf",
							download: "Hamza-Malik-Resume.pdf",
							className: "group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-medium text-white shadow-[0_10px_30px_-10px_rgba(59,130,246,0.6)] transition-transform hover:scale-[1.03]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), " Download Resume"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => scrollTo("projects"),
							className: "glass group inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-colors hover:border-primary/40",
							children: ["View Projects ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						transition: {
							duration: .7,
							delay: .5
						},
						className: "mt-8 flex items-center gap-3",
						children: [
							{
								icon: WhatsAppIcon,
								href: WHATSAPP_URL,
								label: "WhatsApp"
							},
							{
								icon: LinkedInIcon,
								href: "https://linkedin.com",
								label: "LinkedIn"
							},
							{
								icon: GmailIcon,
								href: "mailto:hamzamalik12345567@gmail.com",
								label: "Email"
							}
						].map(({ icon: Icon, href, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href,
							"aria-label": label,
							target: "_blank",
							rel: "noreferrer",
							className: "grid h-10 w-10 place-items-center rounded-lg border border-border glass text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-foreground hover:border-primary/40",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
						}, label))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 20,
						scale: .98
					},
					animate: {
						opacity: 1,
						y: 0,
						scale: 1
					},
					transition: {
						duration: .8,
						delay: .2
					},
					className: "relative",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative animate-float",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "glass overflow-hidden rounded-2xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between border-b border-border/70 px-4 py-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-1.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3 w-3 rounded-full bg-red-400/80" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3 w-3 rounded-full bg-yellow-400/80" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3 w-3 rounded-full bg-emerald-400/80" })
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-muted-foreground",
											children: "portfolio.tsx"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-muted-foreground",
											children: "TS"
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
									className: "overflow-x-auto p-5 text-[13px] leading-relaxed font-mono",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("code", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-fuchsia-400",
											children: "const"
										}),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-cyan-300",
											children: "developer"
										}),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "="
										}),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "{"
										}),
										"\n  ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-blue-300",
											children: "name"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: ":"
										}),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-emerald-300",
											children: "\"Hamza Malik\""
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: ","
										}),
										"\n  ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-blue-300",
											children: "role"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: ":"
										}),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-emerald-300",
											children: "\"Frontend Engineer\""
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: ","
										}),
										"\n  ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-blue-300",
											children: "stack"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: ":"
										}),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "["
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-emerald-300",
											children: "\"React\""
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: ","
										}),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-emerald-300",
											children: "\"Next.js\""
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: ","
										}),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-emerald-300",
											children: "\"TS\""
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "],"
										}),
										"\n  ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-blue-300",
											children: "location"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: ":"
										}),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-emerald-300",
											children: "\"Islamabad, PK\""
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: ","
										}),
										"\n  ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-blue-300",
											children: "available"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: ":"
										}),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-orange-300",
											children: "true"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: ","
										}),
										"\n  ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-blue-300",
											children: "crafts"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: ":"
										}),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-fuchsia-400",
											children: "async"
										}),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "() => "
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-fuchsia-400",
											children: "await"
										}),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-cyan-300",
											children: "build"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "("
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-emerald-300",
											children: "\"delightful UI\""
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: ")"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: ","
										}),
										"\n",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "};"
										})
									] })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								animate: { y: [
									0,
									-10,
									0
								] },
								transition: {
									duration: 5,
									repeat: Infinity
								},
								className: "glass absolute -left-6 -bottom-6 rounded-xl p-3 shadow-xl hidden sm:block",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-8 w-8 place-items-center rounded-lg bg-primary/20 text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-4 w-4" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-muted-foreground",
										children: "Lighthouse"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm font-semibold",
										children: "98 / 100"
									})] })]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								animate: { y: [
									0,
									10,
									0
								] },
								transition: {
									duration: 6,
									repeat: Infinity
								},
								className: "glass absolute -right-4 -top-6 rounded-xl p-3 shadow-xl hidden sm:block",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-8 w-8 place-items-center rounded-lg bg-accent/20 text-accent",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-muted-foreground",
										children: "Projects"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm font-semibold",
										children: "50+ shipped"
									})] })]
								})
							})
						]
					})
				})]
			})
		]
	});
}
function Counter({ to, suffix = "" }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, { once: true });
	const [n, setN] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		const start = performance.now();
		const dur = 1400;
		let raf = 0;
		const tick = (t) => {
			const p = Math.min(1, (t - start) / dur);
			setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
			if (p < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [inView, to]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		children: [n, suffix]
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "about",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			eyebrow: "About Me",
			title: "Crafting web with |care & precision|"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 items-center gap-12 lg:grid-cols-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					x: -30
				},
				whileInView: {
					opacity: 1,
					x: 0
				},
				viewport: { once: true },
				transition: { duration: .7 },
				className: "lg:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary/30 to-accent/30 blur-2xl" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "glass relative overflow-hidden rounded-3xl p-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: hamza_portrait_default,
								alt: "Hamza Malik portrait",
								width: 800,
								height: 1e3,
								loading: "lazy",
								className: "h-full w-full rounded-2xl object-cover"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "glass absolute -bottom-4 -right-4 rounded-2xl px-4 py-3 shadow-xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm",
									children: "Islamabad, Pakistan"
								})]
							})
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					x: 30
				},
				whileInView: {
					opacity: 1,
					x: 0
				},
				viewport: { once: true },
				transition: { duration: .7 },
				className: "lg:col-span-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-lg leading-relaxed text-muted-foreground",
					children: [
						"I'm a Frontend Web Developer based in Islamabad, Pakistan — passionate about building beautiful, responsive and high-performance web applications. I specialize in creating scalable user interfaces with",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground",
							children: "React.js, Next.js, Tailwind CSS"
						}),
						" and modern frontend technologies. I love solving real-world problems and continuously learning new tools that push the craft forward."
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4",
					children: [
						{
							label: "Projects Completed",
							value: 50,
							suffix: "+"
						},
						{
							label: "Years Experience",
							value: 4,
							suffix: "+"
						},
						{
							label: "Happy Clients",
							value: 30,
							suffix: "+"
						},
						{
							label: "Technologies",
							value: 20,
							suffix: "+"
						}
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass card-hover rounded-2xl p-5 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-3xl font-semibold text-brand-gradient",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
								to: s.value,
								suffix: s.suffix
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-xs text-muted-foreground",
							children: s.label
						})]
					}, s.label))
				})]
			})]
		})]
	});
}
function SkillBar({ name, level }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-40px"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-1.5 flex items-center justify-between text-xs",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-foreground/90",
				children: name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-muted-foreground",
				children: [level, "%"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-1.5 w-full overflow-hidden rounded-full bg-white/5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: { width: 0 },
				animate: { width: inView ? `${level}%` : 0 },
				transition: {
					duration: 1,
					ease: [
						.2,
						.7,
						.2,
						1
					]
				},
				className: "h-full rounded-full bg-gradient-to-r from-primary to-accent"
			})
		})]
	});
}
function Skills() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "skills",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			eyebrow: "Skills",
			title: "Tools I use to |ship great software|",
			description: "A pragmatic stack for building fast, accessible and maintainable products."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3",
			children: SKILL_GROUPS.map((g, gi) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 24
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-60px"
				},
				transition: {
					duration: .5,
					delay: gi * .06
				},
				className: "glass card-hover rounded-2xl p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-5 flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(g.icon, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-base font-semibold",
						children: g.title
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-3",
					children: g.items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillBar, { ...it }, it.name))
				})]
			}, g.title))
		})]
	});
}
function Experience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "experience",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			eyebrow: "Experience",
			title: "A track record of |shipping|"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-3xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/40 to-transparent md:left-1/2" }), EXPERIENCE.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 24
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-60px"
				},
				transition: {
					duration: .6,
					delay: i * .1
				},
				className: cn("relative mb-10 pl-12 md:w-1/2 md:pl-0", i % 2 === 0 ? "md:pr-12 md:text-right md:ml-0" : "md:pl-12 md:ml-auto"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("absolute top-4 grid h-3 w-3 place-items-center rounded-full bg-gradient-to-br from-primary to-accent shadow-[0_0_20px_rgba(59,130,246,0.6)]", "left-[10px] md:left-auto", i % 2 === 0 ? "md:-right-[6px]" : "md:-left-[6px]") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass card-hover rounded-2xl p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-accent",
							children: e.period
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-lg font-semibold",
							children: e.role
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm text-muted-foreground",
							children: e.company
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: cn("mt-4 space-y-1.5 text-sm text-muted-foreground", i % 2 === 0 ? "md:text-right" : ""),
							children: e.points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "leading-relaxed",
								children: ["— ", p]
							}, p))
						})
					]
				})]
			}, e.role))]
		})]
	});
}
function Projects() {
	const [filter, setFilter] = (0, import_react.useState)("All");
	const [openIdx, setOpenIdx] = (0, import_react.useState)(null);
	const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.tags?.includes(filter) || p.tag === filter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "projects",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Projects",
				title: "Selected |work|",
				description: "A few products I've designed, engineered and shipped."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-8 flex flex-wrap justify-center gap-2",
				children: PROJECT_FILTERS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setFilter(f),
					className: cn("rounded-full border px-4 py-1.5 text-xs transition-all", filter === f ? "border-primary/60 bg-primary/10 text-foreground" : "border-border text-muted-foreground hover:text-foreground"),
					children: f
				}, f))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
					mode: "popLayout",
					children: filtered.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.article, {
						layout: true,
						initial: {
							opacity: 0,
							y: 24
						},
						animate: {
							opacity: 1,
							y: 0
						},
						exit: {
							opacity: 0,
							y: -10
						},
						transition: {
							duration: .4,
							delay: i % 3 * .06
						},
						className: "glass card-hover group relative overflow-hidden rounded-2xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setOpenIdx(PROJECTS.indexOf(p)),
							className: "block w-full text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: cn("relative flex aspect-video items-center justify-center overflow-hidden", "image" in p ? "bg-black" : ["bg-gradient-to-br", p.gradient]),
								children: "image" in p ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.image,
									alt: `${p.title} preview`,
									className: "h-full w-full object-contain transition-transform duration-500 group-hover:scale-105",
									loading: "lazy"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									"aria-hidden": true,
									className: "absolute inset-0 grid-bg opacity-40"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative glass rounded-xl px-4 py-2 text-xs uppercase tracking-widest text-foreground/80",
									children: p.title
								})] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-lg font-semibold",
											children: p.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1.5 text-sm text-muted-foreground",
										children: p.desc
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-4 flex flex-wrap gap-1.5",
										children: p.tech.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full border border-primary/60 bg-primary/5 px-2 py-0.5 text-[11px] text-muted-foreground",
											children: t
										}, t))
									})
								]
							})]
						})
					}, p.title))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: openIdx !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0 },
				className: "fixed inset-0 z-[90] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4",
				onClick: () => setOpenIdx(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						scale: .95,
						y: 20
					},
					animate: {
						scale: 1,
						y: 0
					},
					exit: {
						scale: .95,
						y: 20
					},
					className: "glass relative w-full max-w-2xl overflow-hidden rounded-2xl",
					onClick: (e) => e.stopPropagation(),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setOpenIdx(null),
							className: "absolute right-3 top-3 z-10 grid h-8 w-8 place-items-center rounded-full border border-border bg-background/60",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: cn("flex aspect-video items-center justify-center overflow-hidden", "image" in PROJECTS[openIdx] ? "bg-black" : ["bg-gradient-to-br", PROJECTS[openIdx].gradient]),
							children: "image" in PROJECTS[openIdx] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: PROJECTS[openIdx].image,
								alt: `${PROJECTS[openIdx].title} preview`,
								className: "h-full w-full object-contain"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-2xl font-semibold text-foreground/80",
								children: PROJECTS[openIdx].title
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl font-semibold",
									children: PROJECTS[openIdx].title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: PROJECTS[openIdx].desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 flex flex-wrap gap-1.5",
									children: PROJECTS[openIdx].tech.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full border border-primary/60 bg-primary/5 px-2 py-0.5 text-[11px] text-muted-foreground",
										children: t
									}, t))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex flex-wrap gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "url" in PROJECTS[openIdx] ? PROJECTS[openIdx].url : "#",
										target: "_blank",
										rel: "noopener noreferrer",
										className: "inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm font-medium text-white",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-4 w-4" }), " Live Demo"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#",
										className: "glass inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "h-4 w-4" }), " GitHub"]
									})]
								})
							]
						})
					]
				})
			}) })
		]
	});
}
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "services",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			eyebrow: "Services",
			title: "How I can |help you ship|"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4",
			children: SERVICES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-60px"
				},
				transition: {
					duration: .5,
					delay: i * .05
				},
				className: "glass card-hover group relative overflow-hidden rounded-2xl p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-8 -top-8 h-28 w-28 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:bg-primary/20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 text-base font-semibold",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 text-sm text-muted-foreground leading-relaxed",
							children: s.desc
						})
					]
				})]
			}, s.title))
		})]
	});
}
function WhyHire() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "why",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			eyebrow: "Why Hire Me",
			title: "Reasons to |work with me|"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 gap-4 md:grid-cols-4",
			children: WHY.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					scale: .95
				},
				whileInView: {
					opacity: 1,
					scale: 1
				},
				viewport: {
					once: true,
					margin: "-60px"
				},
				transition: {
					duration: .4,
					delay: i * .04
				},
				className: "glass card-hover rounded-2xl p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 text-accent",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(w.icon, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 text-sm font-semibold",
						children: w.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 text-xs leading-relaxed text-muted-foreground",
						children: w.desc
					})
				]
			}, w.title))
		})]
	});
}
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "testimonials",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			eyebrow: "Testimonials",
			title: "What clients |say|"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 gap-6 md:grid-cols-3",
			children: TESTIMONIALS.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.figure, {
				initial: {
					opacity: 0,
					y: 24
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-60px"
				},
				transition: {
					duration: .5,
					delay: i * .08
				},
				className: "glass card-hover relative rounded-2xl p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "absolute right-5 top-5 h-6 w-6 text-primary/30" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
						className: "text-sm leading-relaxed text-foreground/90",
						children: [
							"\"",
							t.quote,
							"\""
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
						className: "mt-6 flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-xs font-semibold text-white",
							children: t.avatar
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-semibold",
							children: t.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: t.role
						})] })]
					})
				]
			}, t.name))
		})]
	});
}
function Contact() {
	const [sent, setSent] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "contact",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			eyebrow: "Contact",
			title: "Let's build something |remarkable|",
			description: "Have a project in mind? Drop me a message and I'll get back within 24 hours."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 gap-8 lg:grid-cols-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					x: -20
				},
				whileInView: {
					opacity: 1,
					x: 0
				},
				viewport: { once: true },
				transition: { duration: .6 },
				className: "glass rounded-2xl p-6 lg:col-span-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-semibold",
						children: "Get in touch"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "Prefer async? Use one of these channels."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 space-y-4",
						children: [
							{
								icon: MapPin,
								label: "Location",
								value: "Islamabad, Pakistan"
							},
							{
								icon: Mail,
								label: "Email",
								value: "hamzamalik12345567@gmail.com",
								href: "mailto:hamzamalik12345567@gmail.com"
							},
							{
								icon: Github,
								label: "GitHub",
								value: "github.com/hamzamalik",
								href: "https://github.com"
							},
							{
								icon: Linkedin,
								label: "LinkedIn",
								value: "linkedin.com/in/hamzamalik",
								href: "https://linkedin.com"
							},
							{
								icon: WhatsAppIcon,
								label: "WhatsApp",
								value: "03055514786",
								href: WHATSAPP_URL
							}
						].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: c.href || "#",
							className: "flex items-center gap-3 rounded-xl border border-transparent p-2 -m-2 transition-colors hover:border-border",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-muted-foreground",
								children: c.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm",
								children: c.value
							})] })]
						}, c.label))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.form, {
				initial: {
					opacity: 0,
					x: 20
				},
				whileInView: {
					opacity: 1,
					x: 0
				},
				viewport: { once: true },
				transition: { duration: .6 },
				onSubmit: (e) => {
					e.preventDefault();
					setSent(true);
					setTimeout(() => setSent(false), 3500);
					e.target.reset();
				},
				className: "glass rounded-2xl p-6 lg:col-span-3 space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Name",
							name: "name",
							placeholder: "Your name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Email",
							name: "email",
							type: "email",
							placeholder: "you@example.com"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Subject",
						name: "subject",
						placeholder: "Project inquiry"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "mb-1.5 block text-xs text-muted-foreground",
						children: "Message"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						required: true,
						rows: 5,
						name: "message",
						placeholder: "Tell me about your project…",
						className: "w-full resize-none rounded-xl border border-border bg-background/40 px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary/60 focus:bg-background/60"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						className: "group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-medium text-white shadow-[0_10px_30px_-10px_rgba(59,130,246,0.6)] transition-transform hover:scale-[1.02]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" }), " Send Message"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: sent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 6
						},
						animate: {
							opacity: 1,
							y: 0
						},
						exit: { opacity: 0 },
						className: "text-sm text-emerald-400",
						children: "Thanks — message sent. I'll get back to you shortly."
					}) })
				]
			})]
		})]
	});
}
function Field({ label, name, type = "text", placeholder }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "mb-1.5 block text-xs text-muted-foreground",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		required: true,
		name,
		type,
		placeholder,
		className: "w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary/60 focus:bg-background/60"
	})] });
}
function Footer({ scrollTo }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative border-t border-border/60 py-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent font-bold text-white",
						children: "H"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold",
						children: "Hamza Malik"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xs text-sm text-muted-foreground",
					children: "Frontend Web Developer building modern, scalable, and high-performance web applications with React.js, Next.js, and WordPress. Experienced in CMS development, API integrations, and creating custom web portals tailored to business needs. Focused on delivering responsive, SEO-friendly, and user-centric digital experiences."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground",
					children: "Quick Links"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 grid grid-cols-2 gap-y-2 text-sm",
					children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => scrollTo(n.id),
						className: "text-muted-foreground transition-colors hover:text-foreground",
						children: n.label
					}) }, n.id))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground",
					children: "Connect"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex gap-2",
					children: [
						{
							icon: WhatsAppIcon,
							href: WHATSAPP_URL,
							label: "WhatsApp"
						},
						{
							icon: LinkedInIcon,
							href: "https://linkedin.com",
							label: "LinkedIn"
						},
						{
							icon: GmailIcon,
							href: "mailto:hamzamalik12345567@gmail.com",
							label: "Email"
						}
					].map(({ icon: Icon, href, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href,
						"aria-label": label,
						target: "_blank",
						rel: "noreferrer",
						className: "grid h-10 w-10 place-items-center rounded-lg border border-border glass text-muted-foreground transition-colors hover:text-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
					}, label))
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto mt-10 max-w-7xl border-t border-border/60 px-6 pt-6 text-center text-xs text-muted-foreground",
			children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Hamza Malik. All rights reserved."
			]
		})]
	});
}
//#endregion
export { Portfolio as component };
