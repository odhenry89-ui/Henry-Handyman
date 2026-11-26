import { useEffect, useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight, Check, CheckCircle2, ChevronDown, Facebook, Instagram, Mail,
  MapPin, Menu, MessageCircle, Phone, X, Wrench, Droplets, Paintbrush,
  Home, Building2, Wind, ShieldCheck, Sparkles, Clock3, ClipboardCheck,
  Music2, ExternalLink
} from 'lucide-react';
import './index.css';

const PHONE = '35679337286';
const EMAIL = 'email@henryhandyman-mt.com';
const LOGO = '/henry-handyman-logo.png';
const wa = (message: string) => `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;

const socials = [
  { label: 'Google Reviews', href: 'https://maps.app.goo.gl/xhzp6agcTLcrszwq5', icon: MapPin, detail: 'Read customer feedback' },
  { label: 'Instagram', href: 'https://www.instagram.com/henryhandymanmalta?bqrl=bGk3bWphdGt5dDFx', icon: Instagram, detail: 'Projects and updates' },
  { label: 'Facebook', href: 'https://www.facebook.com/share/1CcAZ3gjtb/?mibextid=wwXIfr', icon: Facebook, detail: 'News and business updates' },
  { label: 'TikTok', href: 'https://vm.tiktok.com/ZN9PVarg23YBK-ZtJRw/', icon: Music2, detail: 'Short videos from our work' },
];

const pages = [
  { path: '/', nav: 'Home', title: 'Property care & renovations in Malta', h1: 'Your property,\nin good hands.', accent: 'From everyday repairs to complete renovations.', intro: 'Reliable property maintenance, skilled repairs and coordinated apartment renovations across Malta. One clear point of contact, careful workmanship and communication you can count on.', image: 'photo-1600210492486-724fe5c67fb0', service: 'Property care and renovations', bullets: ['Full apartment renovations', 'Repairs and installations', 'Ongoing property maintenance'] },
  { path: '/general-handyman', nav: 'General Handyman', title: 'General Handyman Services in Malta', h1: 'Repairs done\nwith care.', accent: 'Practical help for the jobs around your property.', intro: 'From furniture assembly and fixture replacements to everyday repairs, Henry Handyman helps keep homes and rental properties in good working order.', image: 'photo-1600607687939-ce8a6c25118c', service: 'General handyman', bullets: ['Furniture assembly and adjustments', 'Doors, handles and fixtures', 'Minor repairs and installations'] },
  { path: '/plumbing-bathrooms', nav: 'Plumbing & Bathrooms', title: 'Plumbing & Bathroom Services in Malta', h1: 'Better bathrooms.\nReliable fixes.', accent: 'Careful repairs, upgrades and finishing details.', intro: 'We take care of practical plumbing repairs and bathroom improvement works, from replacing taps and fittings to re-grouting, sealing and installation tasks.', image: 'photo-1620626011761-996317b8d101', service: 'Plumbing and bathrooms', bullets: ['Tap and fixture replacement', 'Bathroom repairs and upgrades', 'Re-grouting and silicone sealing'] },
  { path: '/painting-decorating', nav: 'Painting & Decorating', title: 'Painting & Decorating in Malta', h1: 'A fresh finish\nchanges everything.', accent: 'Preparation, precision and clean finishes.', intro: 'Refresh your apartment, rental property or commercial space with careful surface preparation, interior painting and decorative finishing.', image: 'photo-1600210492486-724fe5c67fb0', service: 'Painting and decorating', bullets: ['Interior painting', 'Wall preparation and patching', 'Decorative finishing'] },
  { path: '/roofing-waterproofing', nav: 'Roofing & Waterproofing', title: 'Roof Repairs & Waterproofing in Malta', h1: 'Protect your\nproperty.', accent: 'Find the issue. Repair it properly.', intro: 'Water ingress can damage finishes and structure. We help investigate leaks and coordinate practical roof repair and waterproofing solutions appropriate to the property.', image: 'photo-1600566753086-00f18fb6b3ea', service: 'Roofing and waterproofing', bullets: ['Roof inspections and repair works', 'Leak investigation', 'Waterproofing and sealing'] },
  { path: '/ac-cleaning', nav: 'AC Cleaning', title: 'Air Conditioning Cleaning in Malta', h1: 'Cleaner AC.\nBetter comfort.', accent: 'Routine cleaning and basic condition checks.', intro: 'Keep your air-conditioning units in better condition with routine filter and accessible component cleaning, plus basic visual checks. Specialist servicing is referred to qualified technicians where required.', image: 'photo-1631545806609-7f4c7c2b7e9f', service: 'AC cleaning and checks', bullets: ['Filter cleaning', 'Accessible unit cleaning', 'Basic condition checks'] },
  { path: '/property-maintenance', nav: 'Property Maintenance', title: 'Property Maintenance Services in Malta', h1: 'Look after your\nproperty, all year.', accent: 'Planned maintenance for homes and businesses.', intro: 'A proactive maintenance routine helps reduce disruption and keeps small issues from becoming bigger problems. We support landlords, homeowners and property managers across Malta.', image: 'photo-1600607687920-4e2a09cf159d', service: 'Property maintenance', bullets: ['Scheduled maintenance visits', 'Property condition checks', 'Repair coordination'] },
  { path: '/hotel-airbnb-maintenance', nav: 'Hotels & Airbnb', title: 'Hotel & Airbnb Maintenance in Malta', h1: 'Guest-ready.\nProperty-ready.', accent: 'Responsive maintenance for hospitality properties.', intro: 'Reliable support for boutique hotels, guesthouses, holiday rentals and short-let properties. We help property teams manage repairs, routine checks and small improvement works.', image: 'photo-1611892440504-42a792e24d32', service: 'Hospitality maintenance', bullets: ['Guesthouse and apartment upkeep', 'Turnaround repairs and checks', 'Planned maintenance support'] },
  { path: '/apartment-renovations', nav: 'Apartment Renovations', title: 'Full Apartment Renovations in Malta', h1: 'A complete\nrenovation, carefully managed.', accent: 'From preparation to the final details.', intro: 'A full renovation needs planning, dependable trades and attention to every detail. Henry Handyman provides one point of contact and coordinates the agreed scope of work from start to finish.', image: 'photo-1600607687939-ce8a6c25118c', service: 'Full apartment renovations', bullets: ['Plastering and surface preparation', 'Tiling, flooring and painting', 'Bathroom, kitchen and finishing works'] },
  { path: '/contact', nav: 'Contact', title: 'Contact Henry Handyman Malta', h1: 'Tell us about\nyour project.', accent: 'Let’s discuss what your property needs.', intro: 'Share a few details about the work, your location and preferred timeframe. We will get back to you to discuss the next steps.', image: 'photo-1600566753190-17f0baa2a6c3', service: 'Contact Henry Handyman', bullets: ['Clear communication', 'Work across Malta', 'Quotes based on the agreed scope'] },
];

const serviceCards = [
  { title: 'General Handyman', text: 'Repairs, installations, furniture assembly and everyday property fixes.', icon: Wrench, path: '/general-handyman' },
  { title: 'Plumbing & Bathrooms', text: 'Practical plumbing repairs, bathroom upgrades and installation work.', icon: Droplets, path: '/plumbing-bathrooms' },
  { title: 'Painting & Decorating', text: 'Careful preparation and clean finishes for interiors and exteriors.', icon: Paintbrush, path: '/painting-decorating' },
  { title: 'Roofing & Waterproofing', text: 'Roof repairs and waterproofing solutions to help protect your property.', icon: Home, path: '/roofing-waterproofing' },
  { title: 'AC Cleaning', text: 'Routine air-conditioning cleaning and basic condition checks.', icon: Wind, path: '/ac-cleaning' },
  { title: 'Property Maintenance', text: 'Reliable ongoing maintenance for residential and commercial properties.', icon: Building2, path: '/property-maintenance' },
];

function currentPage() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  return pages.find(p => p.path === path) || pages[0];
}

function Header({ active }: { active: string }) {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="top-strip"><div className="container top-strip-inner"><span>Property care & renovations across Malta</span><a href={`tel:+${PHONE}`}><Phone size={13}/> +356 7933 7286</a></div></div>
    <div className="nav-wrap container">
      <a className="brand" href="/" aria-label="Henry Handyman home"><img src={LOGO} alt="Henry Handyman original logo"/><span className="brand-name">HENRY <b>HANDYMAN</b><small>PROPERTY CARE & RENOVATIONS</small></span></a>
      <nav className="desktop-nav"><a className={active === '/' ? 'active' : ''} href="/">Home</a><div className="nav-dropdown"><button type="button">Services <ChevronDown size={14}/></button><div className="dropdown-panel">{pages.slice(1, 9).map(p => <a key={p.path} href={p.path}>{p.nav}</a>)}</div></div><a className={active === '/contact' ? 'active' : ''} href="/contact">Contact</a></nav>
      <a className="button button-dark nav-cta" href="/contact">Get a quote <ArrowRight size={16}/></a>
      <button className="mobile-menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X/> : <Menu/>}</button>
    </div>
    {open && <nav className="mobile-nav"><a href="/">Home</a>{pages.slice(1).map(p => <a key={p.path} href={p.path}>{p.nav}</a>)}<a className="button button-dark" href="/contact">Get a quote <ArrowRight size={16}/></a></nav>}
  </header>;
}

function EnquiryForm({ service, kind = 'standard' }: { service: string; kind?: 'standard' | 'renovation' | 'small' }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [details, setDetails] = useState('');
  const [timeframe, setTimeframe] = useState('Flexible');
  const [property, setProperty] = useState('Apartment');
  const [size, setSize] = useState('');
  const [jobType, setJobType] = useState('General repairs');

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const extra = kind === 'renovation'
      ? `Property type: ${property}\nApproximate size: ${size || 'Not specified'}\n`
      : kind === 'small' ? `Service required: ${jobType}\n` : '';
    const msg = `Hello Henry, I would like to enquire about ${service}.\n\nName: ${name}\nPhone: ${phone}\nLocation: ${location}\n${extra}Timeframe: ${timeframe}\nDetails: ${details}`;
    window.open(wa(msg), '_blank', 'noopener,noreferrer');
  }

  return <form className="enquiry-form" onSubmit={submit}>
    <div className="form-row">
      <label>Your name<input required value={name} onChange={e => setName(e.target.value)} placeholder="Full name"/></label>
      <label>Phone number<input required value={phone} onChange={e => setPhone(e.target.value)} placeholder="+356 ..."/></label>
    </div>
    <label>Property location<input required value={location} onChange={e => setLocation(e.target.value)} placeholder="Town or area in Malta"/></label>
    {kind === 'renovation' && <>
      <div className="form-row">
        <label>Property type<select value={property} onChange={e => setProperty(e.target.value)}><option>Apartment</option><option>Maisonette</option><option>House / Villa</option><option>Commercial property</option><option>Other</option></select></label>
        <label>Approximate size<input value={size} onChange={e => setSize(e.target.value)} placeholder="e.g. 120 m² / 3 bedrooms"/></label>
      </div>
    </>}
    {kind === 'small' && <label>What do you need help with?<select value={jobType} onChange={e => setJobType(e.target.value)}>{['General repairs','Plumbing & bathroom','Painting & decorating','Roofing & waterproofing','AC cleaning & checks','Property maintenance','Other'].map(x => <option key={x}>{x}</option>)}</select></label>}
    <label>When would you like to start?<select value={timeframe} onChange={e => setTimeframe(e.target.value)}><option>Flexible</option><option>As soon as possible</option><option>Within 1–3 months</option><option>Within 3–6 months</option><option>Just planning / exploring</option></select></label>
    <label>Tell us about the work<textarea required rows={4} value={details} onChange={e => setDetails(e.target.value)} placeholder={kind === 'renovation' ? 'Describe the property, planned works and anything important...' : 'Describe the issue or work required...'}/></label>
    <p className="form-hint">WhatsApp will open with your enquiry ready to send. You can attach photos or plans directly in WhatsApp.</p>
    <button className="button button-dark form-submit" type="submit"><MessageCircle size={18}/> Send enquiry via WhatsApp <ArrowRight size={17}/></button>
  </form>;
}

function ContactEnquiryForms() {
  return <section className="section-pad enquiry-section" id="enquiry">
    <div className="container">
      <div className="section-heading centered">
        <span className="eyebrow"><i/> LET'S TALK</span>
        <h2>What can we help<br/><em>you with?</em></h2>
        <p>Choose the enquiry form that best matches your project. We work with homeowners, landlords and property businesses across Malta.</p>
      </div>
      <div className="forms-grid">
        <div className="form-card renovation-form-card">
          <div className="form-card-head"><span className="form-number">01 / LARGE PROJECTS</span><Building2 size={25}/><h3>Full Renovations</h3><p>For complete apartment renovations and larger property projects.</p></div>
          <EnquiryForm service="a full renovation" kind="renovation"/>
        </div>
        <div className="form-card">
          <div className="form-card-head"><span className="form-number">02 / INDIVIDUAL JOBS</span><Wrench size={25}/><h3>Small Jobs & Maintenance</h3><p>For repairs, installations and regular property maintenance.</p></div>
          <EnquiryForm service="a handyman job" kind="small"/>
        </div>
      </div>
      <div className="contact-details">
        <a href={`tel:+${PHONE}`}><Phone size={18}/><span><small>Call us</small>+356 7933 7286</span></a>
        <a href={`mailto:${EMAIL}`}><Mail size={18}/><span><small>Email</small>{EMAIL}</span></a>
        <div><MapPin size={18}/><span><small>Service area</small>Across Malta</span></div>
      </div>
    </div>
  </section>;
}

function HomeSections() {
  return <>
    <section className="intro-band"><div className="container intro-band-grid"><div><span className="eyebrow"><i/> PROPERTY CARE IN MALTA</span><h2>One reliable contact.<br/><em>Work done properly.</em></h2></div><p>Whether you need a small repair, regular maintenance or a complete apartment renovation, we help make the process straightforward — with clear communication from the first enquiry.</p></div></section>
    <section className="section-pad services-section" id="services"><div className="container"><div className="section-heading"><span className="eyebrow"><i/> WHAT WE DO</span><h2>Services for every<br/><em>part of your property.</em></h2><p>Practical property care for homeowners, landlords, hospitality businesses and property managers across Malta.</p></div><div className="services-grid">{serviceCards.map(({title,text,icon:Icon,path},i)=><motion.a href={path} className="service-card" key={title} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.05}}><span className="service-icon"><Icon size={23}/></span><h3>{title}</h3><p>{text}</p><b>Explore service <ArrowRight size={15}/></b></motion.a>)}</div></div></section>
    <section className="renovation-feature section-pad"><div className="container renovation-grid"><div className="renovation-image"/><div><span className="eyebrow"><i/> OUR MAIN SERVICE</span><h2>Full apartment<br/><em>renovations.</em></h2><p>A complete renovation needs good planning, dependable trades and attention to every detail. We coordinate the agreed works to help turn your ideas into a finished, functional home.</p><ul className="check-list">{['Planning and coordination','Plastering and preparation','Tiling and flooring','Painting and finishing','Fixtures and final details'].map(x=><li key={x}><Check size={17}/>{x}</li>)}</ul><a className="button button-dark" href="/apartment-renovations">Explore renovations <ArrowRight size={17}/></a></div></div></section>
    <section className="process-section section-pad"><div className="container"><div className="section-heading centered"><span className="eyebrow"><i/> HOW IT WORKS</span><h2>Good work starts with<br/><em>a clear plan.</em></h2></div><div className="process-grid">{[['01','Tell us what you need','Share a short description, your location and any useful details about the property.'],['02','Discuss the scope','We review the request, clarify the work involved and discuss the next steps.'],['03','Agree and get started','Once the scope and quotation are agreed, we arrange the work and keep communication clear.']].map(([n,t,d])=><article className="process-card" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>
    <section className="profiles-section section-pad"><div className="container profiles-layout"><div><span className="eyebrow eyebrow-light"><i/> FOLLOW OUR WORK</span><h2>See the work.<br/><em>Read the reviews.</em></h2><p>Explore our business profiles for project updates, videos, business information and customer feedback.</p></div><div className="profile-links">{socials.map(({label,href,icon:Icon,detail})=><a className="profile-link" href={href} target="_blank" rel="noreferrer" key={label}><span className="profile-icon"><Icon size={21}/></span><span><b>{label}</b><small>{detail}</small></span><ExternalLink size={16}/></a>)}</div></div></section>
  </>;
}

function ServicePage({ page }: { page: typeof pages[number] }) {
  const isHome = page.path === '/';
  return <>
    <section className="hero inner-hero" style={{'--hero-image': `url(https://images.unsplash.com/${page.image}?auto=format&fit=crop&w=2200&q=88)`} as React.CSSProperties}><div className="hero-shade"/><div className="container hero-content"><motion.div initial={{opacity:0,y:22}} animate={{opacity:1,y:0}} transition={{duration:.65}}><span className="eyebrow eyebrow-light"><i/> HENRY HANDYMAN · MALTA</span><h1>{page.h1.split('\n').map((line,i)=><span key={i}>{line}{i===0?<br/>:null}</span>)}</h1><p className="hero-lead">{page.intro}</p><div className="hero-actions"><a className="button button-gold" href="#enquiry">Request a quote <ArrowRight size={18}/></a><a className="button button-glass" href="tel:+35679337286"><Phone size={16}/> Call Henry</a></div><div className="hero-trust"><span><CheckCircle2 size={17}/> Work across Malta</span><span><CheckCircle2 size={17}/> Clear communication</span><span><ShieldCheck size={17}/> Agreed scope of work</span></div></motion.div></div><div className="hero-note"><span/> PROPERTY CARE <b>·</b> MALTA</div></section>
    {isHome ? <HomeSections/> : <section className="section-pad detail-section"><div className="container detail-grid"><div><span className="eyebrow"><i/> {page.nav.toUpperCase()}</span><h2>{page.accent}</h2><p className="section-intro">{page.intro}</p><ul className="check-list">{page.bullets.map(b=><li key={b}><Check size={17}/>{b}</li>)}</ul><p className="small-note">The scope of each project is discussed and agreed before work begins. Specialist or regulated works are handled by appropriately qualified professionals where required.</p><a className="button button-dark" href="#enquiry">Discuss your project <ArrowRight size={17}/></a></div><div className="detail-photo" style={{backgroundImage:`url(https://images.unsplash.com/${page.image}?auto=format&fit=crop&w=1300&q=88)`}}><div className="photo-glass"><Sparkles size={19}/><span><b>Henry Handyman</b><small>Property care across Malta</small></span></div></div></div></section>}
    {page.path === '/contact' ? <ContactEnquiryForms/> : <section className="section-pad enquiry-section" id="enquiry"><div className="container enquiry-layout"><div><span className="eyebrow"><i/> LET'S TALK</span><h2>Tell us what<br/><em>you need.</em></h2><p>Send us a few details and we’ll discuss the right next step for your property.</p><div className="contact-mini"><a href={`tel:+${PHONE}`}><Phone size={18}/> +356 7933 7286</a><a href={`mailto:${EMAIL}`}><Mail size={18}/> {EMAIL}</a><span><MapPin size={18}/> Across Malta</span></div></div><div className="form-card"><EnquiryForm service={page.service}/></div></div></section>}
  </>;
}

function Footer() { return <footer className="footer"><div className="container footer-main"><div className="footer-about"><a className="brand footer-brand" href="/"><img src={LOGO} alt="Henry Handyman logo"/><span className="brand-name">HENRY <b>HANDYMAN</b><small>PROPERTY CARE & RENOVATIONS</small></span></a><p>Property care, maintenance and full apartment renovations across Malta.</p></div><div className="footer-nav"><b>Services</b>{pages.slice(1,9).map(p=><a href={p.path} key={p.path}>{p.nav}</a>)}</div><div className="footer-nav"><b>Contact</b><a href="/contact">Contact us</a><a href={`tel:+${PHONE}`}>+356 7933 7286</a><a href={`mailto:${EMAIL}`}>{EMAIL}</a><a href={socials[0].href} target="_blank" rel="noreferrer">Google Reviews <ExternalLink size={12}/></a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Henry Handyman Malta. All rights reserved.</span><span>Property care & renovations in Malta</span></div></footer>; }

export default function App() {
  const page = currentPage();
  useEffect(() => { document.title = page.title; const desc = page.intro; let meta = document.querySelector('meta[name="description"]'); if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name','description'); document.head.appendChild(meta); } meta.setAttribute('content', desc); }, [page]);
  return <div className="site-shell"><Header active={page.path}/><main><ServicePage page={page}/></main><Footer/><a className="floating-whatsapp" href={wa('Hello Henry, I have an enquiry.')} target="_blank" rel="noreferrer" aria-label="Chat with Henry on WhatsApp"><MessageCircle size={25}/><span>Chat with Henry</span></a></div>;
}
