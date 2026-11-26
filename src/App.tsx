import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import {
  ArrowRight, Check, CheckCircle2, Facebook, Instagram, Mail, MapPin,
  Menu, MessageCircle, Phone, Sparkles, Wrench, X, Zap, Droplets,
  Paintbrush, Home, Building2, ExternalLink, Music2
} from "lucide-react";

const PHONE = "35679337286";
const EMAIL = "email@henryhandyman-mt.com";

const LINKS = {
  google: "https://maps.app.goo.gl/xhzp6agcTLcrszwq5",
  facebook: "https://www.facebook.com/share/1CcAZ3gjtb/?mibextid=wwXIfr",
  instagram: "https://www.instagram.com/henryhandymanmalta?bqrl=bGk3bWphdGt5dDFx",
  tiktok: "https://vm.tiktok.com/ZN9PVarg23YBK-ZtJRw/",
};

const waLink = (message: string) =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;

const services = [
  {
    icon: Wrench,
    title: "General Handyman",
    text: "Repairs, installations, furniture assembly and everyday property fixes.",
    items: ["General repairs", "Furniture assembly", "Doors, handles & fixtures"],
  },
  {
    icon: Droplets,
    title: "Plumbing & Bathrooms",
    text: "Practical plumbing repairs, bathroom upgrades and installation work.",
    items: ["Tap & fixture replacement", "Bathroom repairs", "Re-grouting & sealing"],
  },
  {
    icon: Paintbrush,
    title: "Painting & Decorating",
    text: "Careful preparation and clean finishes for interiors and exteriors.",
    items: ["Interior painting", "Surface preparation", "Decorative finishing"],
  },
  {
    icon: Home,
    title: "Roofing & Waterproofing",
    text: "Roof repairs and waterproofing solutions to help protect your property.",
    items: ["Roof inspections & repairs", "Waterproofing", "Leak investigation"],
  },
  {
    icon: Zap,
    title: "AC Cleaning & Checks",
    text: "Routine air-conditioning cleaning and basic condition checks.",
    items: ["AC cleaning", "Filter cleaning", "Basic diagnostics"],
  },
  {
    icon: Building2,
    title: "Property Maintenance",
    text: "Reliable ongoing maintenance for residential and commercial properties.",
    items: ["Scheduled maintenance", "Property inspections", "Repair coordination"],
  },
];

const socialLinks = [
  { label: "Google Maps", detail: "Customer reviews & business photos", href: LINKS.google, icon: MapPin },
  { label: "Instagram", detail: "Projects, updates & behind the scenes", href: LINKS.instagram, icon: Instagram },
  { label: "Facebook", detail: "Business updates & community", href: LINKS.facebook, icon: Facebook },
  { label: "TikTok", detail: "Short videos from jobs and projects", href: LINKS.tiktok, icon: Music2 },
];

function Header() {
  const [open, setOpen] = useState(false);
  const nav = [
    ["Renovations", "#renovations"],
    ["Services", "#services"],
    ["How it works", "#process"],
    ["Our profiles", "#profiles"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="site-header">
      <div className="top-strip">
        <div className="container top-strip-inner">
          <span>Property care & renovations across Malta</span>
          <a href={`tel:+${PHONE}`}><Phone size={13} /> +356 7933 7286</a>
        </div>
      </div>
      <div className="nav-wrap">
        <a className="brand" href="#top" aria-label="Henry Handyman home">
          <span className="brand-mark">H<span>H</span></span>
          <span className="brand-name">HENRY <b>HANDYMAN</b><small>PROPERTY CARE & RENOVATIONS</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <a className="button button-dark nav-cta" href="#renovation-enquiry">Discuss a renovation <ArrowRight size={16} /></a>
        <button className="mobile-menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="mobile-nav">
          {nav.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="button button-dark" href="#renovation-enquiry" onClick={() => setOpen(false)}>Discuss a renovation <ArrowRight size={16} /></a>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-image" role="img" aria-label="Contemporary renovated apartment interior" />
      <div className="hero-shade" />
      <div className="container hero-content">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="eyebrow eyebrow-light"><span /> HENRY HANDYMAN · MALTA</div>
          <h1>Full apartment renovations.<br /><em>Done with care.</em></h1>
          <p className="hero-lead">From the first stages of renovation to the final details, we help bring your property together with one reliable point of contact.</p>
          <div className="hero-actions">
            <a className="button button-gold" href="#renovation-enquiry">Request a renovation quote <ArrowRight size={18} /></a>
            <a className="button button-glass" href="#services">Explore our services</a>
          </div>
          <div className="hero-trust">
            <span><CheckCircle2 size={17} /> One point of contact</span>
            <span><CheckCircle2 size={17} /> Work across Malta</span>
            <span><CheckCircle2 size={17} /> Clear communication</span>
          </div>
        </motion.div>
      </div>
      <div className="hero-note"><span className="note-dot" /> Renovation & property care <b>·</b> Malta</div>
    </section>
  );
}

function RenovationFeature() {
  const stages = ["Planning & coordination", "Electrical & plumbing", "Plastering & preparation", "Tiling & flooring", "Painting & finishing", "Fixtures & final details"];
  return (
    <section className="renovation-section section-pad" id="renovations">
      <div className="container renovation-grid">
        <motion.div className="renovation-visual" initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="renovation-photo" />
          <div className="visual-caption"><span className="caption-icon"><Sparkles size={19} /></span><span><b>From start to finish</b><small>A coordinated renovation journey</small></span></div>
          <div className="visual-index">01 <span>/ FEATURED SERVICE</span></div>
        </motion.div>
        <motion.div className="renovation-copy" initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="eyebrow"><span /> OUR MAIN SERVICE</div>
          <h2>Full Apartment<br /><em>Renovations</em></h2>
          <p className="section-intro">A complete renovation needs good planning, dependable trades and attention to every detail. Henry Handyman coordinates renovation works to help turn your ideas into a finished, functional home.</p>
          <div className="stage-list">
            {stages.map((stage) => <div className="stage-item" key={stage}><Check size={16} /> {stage}</div>)}
          </div>
          <p className="small-note">The scope of each project is discussed and agreed before work begins. Specialist or regulated works are handled by appropriately qualified professionals where required.</p>
          <a className="button button-dark" href="#renovation-enquiry">Tell us about your project <ArrowRight size={17} /></a>
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="services-section section-pad" id="services">
      <div className="container">
        <div className="section-heading">
          <div className="eyebrow"><span /> PROPERTY CARE</div>
          <h2>More ways to care<br /><em>for your property.</em></h2>
          <p>Alongside full renovations, we provide practical repair and maintenance services for homes, apartments and businesses across Malta.</p>
        </div>
        <div className="services-grid">
          {services.map(({ icon: Icon, title, text, items }, index) => (
            <motion.article className="service-card" key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }}>
              <div className="service-icon"><Icon size={23} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
              <ul>{items.map(item => <li key={item}>{item}</li>)}</ul>
              <a href="#small-job-enquiry">Enquire about this service <ArrowRight size={15} /></a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    ["01", "Tell us what you need", "Share a short description, your location and any useful details about the property."],
    ["02", "Discuss the scope", "We review the request, clarify the work involved and discuss the next steps."],
    ["03", "Agree and get started", "Once the scope and quotation are agreed, we arrange the work and keep communication clear."],
  ];
  return (
    <section className="process-section section-pad" id="process">
      <div className="container">
        <div className="section-heading centered">
          <div className="eyebrow"><span /> A STRAIGHTFORWARD PROCESS</div>
          <h2>Good work starts with<br /><em>a clear plan.</em></h2>
        </div>
        <div className="process-grid">
          {steps.map(([num, title, text]) => <div className="process-card" key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p></div>)}
        </div>
      </div>
    </section>
  );
}

function Profiles() {
  return (
    <section className="profiles-section section-pad" id="profiles">
      <div className="container profiles-layout">
        <div>
          <div className="eyebrow eyebrow-light"><span /> FOLLOW OUR WORK</div>
          <h2>See more of<br /><em>what we do.</em></h2>
          <p>Explore our business profiles for photos, updates, videos and customer feedback. We keep project galleries on our social platforms rather than duplicating photos on this website.</p>
        </div>
        <div className="profile-links">
          {socialLinks.map(({ label, detail, href, icon: Icon }) => (
            <a className="profile-link" href={href} target="_blank" rel="noreferrer" key={label}>
              <span className="profile-icon"><Icon size={22} /></span>
              <span className="profile-text"><b>{label}</b><small>{detail}</small></span>
              <ExternalLink size={17} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function EnquiryForm({ type }: { type: "renovation" | "small" }) {
  const isRenovation = type === "renovation";
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [details, setDetails] = useState("");
  const [property, setProperty] = useState("Apartment");
  const [size, setSize] = useState("");
  const [timeframe, setTimeframe] = useState("Flexible");
  const [service, setService] = useState("General repairs");

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const message = isRenovation
      ? `Hello Henry, I would like to enquire about a full renovation.\n\nName: ${name}\nPhone: ${phone}\nLocation: ${location}\nProperty type: ${property}\nApprox. size: ${size || "Not specified"}\nTimeframe: ${timeframe}\nProject details: ${details}`
      : `Hello Henry, I would like to enquire about a handyman job.\n\nName: ${name}\nPhone: ${phone}\nLocation: ${location}\nService: ${service}\nJob details: ${details}`;
    window.open(waLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form className="enquiry-form" onSubmit={submit}>
      <div className="form-row">
        <label>Your name<input required value={name} onChange={e => setName(e.target.value)} placeholder="Full name" /></label>
        <label>Phone number<input required value={phone} onChange={e => setPhone(e.target.value)} placeholder="+356 ..." /></label>
      </div>
      <label>Property location<input required value={location} onChange={e => setLocation(e.target.value)} placeholder="Town or area in Malta" /></label>
      {isRenovation ? (
        <>
          <div className="form-row">
            <label>Property type<select value={property} onChange={e => setProperty(e.target.value)}><option>Apartment</option><option>Maisonette</option><option>House / Villa</option><option>Commercial property</option><option>Other</option></select></label>
            <label>Approximate size<input value={size} onChange={e => setSize(e.target.value)} placeholder="e.g. 120 m² / 3 bedrooms" /></label>
          </div>
          <label>When would you like to start?<select value={timeframe} onChange={e => setTimeframe(e.target.value)}><option>Flexible</option><option>As soon as possible</option><option>Within 1–3 months</option><option>Within 3–6 months</option><option>Just planning / exploring</option></select></label>
        </>
      ) : (
        <label>What do you need help with?<select value={service} onChange={e => setService(e.target.value)}>{["General repairs", "Plumbing & bathroom", "Painting & decorating", "Roofing & waterproofing", "AC cleaning & checks", "Property maintenance", "Other"].map(x => <option key={x}>{x}</option>)}</select></label>
      )}
      <label>Tell us about the work<textarea required rows={4} value={details} onChange={e => setDetails(e.target.value)} placeholder={isRenovation ? "Describe the property, planned works and anything important..." : "Describe the issue or work required..."} /></label>
      <p className="form-hint">After submitting, WhatsApp will open with your enquiry ready to send. You can attach photos or plans directly in WhatsApp.</p>
      <button className="button button-dark form-submit" type="submit"><MessageCircle size={18} /> Send enquiry via WhatsApp <ArrowRight size={17} /></button>
    </form>
  );
}

function Contact() {
  return (
    <section className="contact-section section-pad" id="contact">
      <div className="container">
        <div className="section-heading centered">
          <div className="eyebrow"><span /> LET'S TALK</div>
          <h2>What can we help<br /><em>you with?</em></h2>
          <p>Choose the enquiry form that best matches your project. We work with homeowners, landlords and property businesses across Malta.</p>
        </div>
        <div className="forms-grid">
          <div className="form-card renovation-form-card" id="renovation-enquiry">
            <div className="form-card-head"><span className="form-number">01 / LARGE PROJECTS</span><Building2 size={25} /><h3>Full Renovations</h3><p>For complete apartment renovations and larger property projects.</p></div>
            <EnquiryForm type="renovation" />
          </div>
          <div className="form-card" id="small-job-enquiry">
            <div className="form-card-head"><span className="form-number">02 / INDIVIDUAL JOBS</span><Wrench size={25} /><h3>Small Jobs & Maintenance</h3><p>For repairs, installations and regular property maintenance.</p></div>
            <EnquiryForm type="small" />
          </div>
        </div>
        <div className="contact-details">
          <a href={`tel:+${PHONE}`}><Phone size={18} /><span><small>Call us</small>+356 7933 7286</span></a>
          <a href={`mailto:${EMAIL}`}><Mail size={18} /><span><small>Email</small>{EMAIL}</span></a>
          <div><MapPin size={18} /><span><small>Service area</small>Across Malta</span></div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div><a className="brand footer-brand" href="#top"><span className="brand-mark">H<span>H</span></span><span className="brand-name">HENRY <b>HANDYMAN</b><small>PROPERTY CARE & RENOVATIONS</small></span></a><p>Property care, maintenance and full apartment renovations across Malta.</p></div>
        <div className="footer-nav"><b>Explore</b><a href="#renovations">Full Renovations</a><a href="#services">Services</a><a href="#process">How it works</a><a href="#contact">Contact</a></div>
        <div className="footer-nav"><b>Connect</b>{socialLinks.map(({label,href}) => <a href={href} target="_blank" rel="noreferrer" key={label}>{label} <ExternalLink size={12} /></a>)}</div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Henry Handyman Malta. All rights reserved.</span><a href={`mailto:${EMAIL}`}>Contact Henry Handyman</a></div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <RenovationFeature />
        <Services />
        <Process />
        <Profiles />
        <Contact />
      </main>
      <Footer />
      <a className="floating-whatsapp" href={waLink("Hello Henry, I have an enquiry.")} target="_blank" rel="noreferrer" aria-label="Chat with Henry on WhatsApp"><MessageCircle size={25} /><span>Chat with Henry</span></a>
    </div>
  );
}
