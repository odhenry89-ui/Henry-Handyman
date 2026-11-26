import { useEffect, useState, type CSSProperties, type FormEvent } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Building2,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Copy,
  Droplets,
  ExternalLink,
  Facebook,
  HelpCircle,
  Home,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Music2,
  Paintbrush,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Wind,
  Wrench,
  X,
} from 'lucide-react';
import './index.css';

const PHONE = '35679337286';
const PHONE_DISPLAY = '+356 7933 7286';
const EMAIL = 'email@henryhandyman-mt.com';
const LOGO = '/henry-handyman-logo.png?v=2';
const GOOGLE_REVIEWS_URL = 'https://maps.app.goo.gl/b5bbs6zT2NYNuX5ZA';
const wa = (message: string) => `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;

const socials = [
  {
    label: 'Google Reviews · 5.0 ★',
    href: GOOGLE_REVIEWS_URL,
    icon: MapPin,
    detail: '5-star rated · Read real client reviews',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/henryhandymanmalta?bqrl=bGk3bWphdGt5dDFx',
    icon: Instagram,
    detail: 'Projects and updates',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1CcAZ3gjtb/?mibextid=wwXIfr',
    icon: Facebook,
    detail: 'News and business updates',
  },
  {
    label: 'TikTok',
    href: 'https://vm.tiktok.com/ZN9PVarg23YBK-ZtJRw/',
    icon: Music2,
    detail: 'Short videos from our work',
  },
];

const pages = [
  {
    path: '/',
    nav: 'Home',
    shortDesc: 'Full property care across Malta',
    title: 'Henry Handyman Malta — 5★ Rated Property Care & Renovations',
    h1: 'Your property,\nin good hands.',
    accent: 'From everyday repairs to complete renovations.',
    intro:
      'Reliable property maintenance, skilled repairs and coordinated apartment renovations across Malta. One clear point of contact, careful workmanship and 5-star rated communication you can count on.',
    image: 'photo-1600210492486-724fe5c67fb0',
    service: 'Property care and renovations',
    defaultJobType: 'General repairs',
    bullets: [
      'Full apartment renovations',
      'Repairs and installations',
      'Ongoing property maintenance',
    ],
  },
  {
    path: '/general-handyman',
    nav: 'General Handyman',
    shortDesc: 'Repairs, fixtures & assembly',
    title: 'General Handyman Services in Malta | Henry Handyman',
    h1: 'Repairs done\nwith care.',
    accent: 'Practical help for the jobs around your property.',
    intro:
      'From furniture assembly and fixture replacements to everyday repairs, Henry Handyman helps keep homes and rental properties in good working order.',
    image: 'photo-1780385187605-7324343d3f76',
    service: 'General handyman',
    defaultJobType: 'General repairs',
    bullets: [
      'Furniture assembly and adjustments',
      'Doors, handles, shelves and fixtures',
      'Minor repairs and installations',
    ],
  },
  {
    path: '/plumbing-bathrooms',
    nav: 'Plumbing & Bathrooms',
    shortDesc: 'Taps, sealing & bathroom upgrades',
    title: 'Plumbing & Bathroom Services in Malta | Henry Handyman',
    h1: 'Better bathrooms.\nReliable fixes.',
    accent: 'Careful repairs, upgrades and finishing details.',
    intro:
      'We take care of practical plumbing repairs and bathroom improvement works, from replacing taps and fittings to re-grouting, sealing and installation tasks.',
    image: 'photo-1620626011761-996317b8d101',
    service: 'Plumbing and bathrooms',
    defaultJobType: 'Plumbing & bathroom',
    bullets: [
      'Tap, mixer and fixture replacement',
      'Bathroom repairs and upgrades',
      'Re-grouting and waterproof silicone sealing',
    ],
  },
  {
    path: '/painting-decorating',
    nav: 'Painting & Decorating',
    shortDesc: 'Wall prep, patching & clean finishes',
    title: 'Painting & Decorating in Malta | Henry Handyman',
    h1: 'A fresh finish\nchanges everything.',
    accent: 'Preparation, precision and clean finishes.',
    intro:
      'Refresh your apartment, rental property or commercial space with careful surface preparation, interior painting and decorative finishing.',
    image: 'photo-1599619585752-c3edb42a414c',
    service: 'Painting and decorating',
    defaultJobType: 'Painting & decorating',
    bullets: [
      'Interior and touch-up painting',
      'Wall preparation, sanding and patching',
      'Clean edges and protective masking',
    ],
  },
  {
    path: '/roofing-waterproofing',
    nav: 'Roofing & Waterproofing',
    shortDesc: 'Leak checks, sealing & roof works',
    title: 'Roof Repairs & Waterproofing in Malta | Henry Handyman',
    h1: 'Protect your\nproperty.',
    accent: 'Find the issue. Repair it properly.',
    intro:
      'Water ingress can damage finishes and structure. We help investigate leaks and coordinate practical roof repair and waterproofing solutions appropriate to the property.',
    image: 'photo-1763665814965-b5c4b3547908',
    service: 'Roofing and waterproofing',
    defaultJobType: 'Roofing & waterproofing',
    bullets: [
      'Roof inspections and repair works',
      'Leak and dampness investigation',
      'Waterproofing membranes and sealing',
    ],
  },
  {
    path: '/ac-cleaning',
    nav: 'AC Cleaning',
    shortDesc: 'Filter cleaning & unit checks',
    title: 'Air Conditioning Cleaning in Malta | Henry Handyman',
    h1: 'Cleaner AC.\nBetter comfort.',
    accent: 'Routine cleaning and basic condition checks.',
    intro:
      'Keep your air-conditioning units in better condition with routine filter and accessible component cleaning, plus basic visual checks. Specialist servicing is referred to qualified technicians where required.',
    image: 'photo-1762341123870-d706f257a12e',
    service: 'AC cleaning and checks',
    defaultJobType: 'AC cleaning & checks',
    bullets: [
      'Filter and grille cleaning',
      'Accessible indoor unit cleaning',
      'Basic condition and drainage checks',
    ],
  },
  {
    path: '/property-maintenance',
    nav: 'Property Maintenance',
    shortDesc: 'Scheduled upkeep for landlords',
    title: 'Property Maintenance Services in Malta | Henry Handyman',
    h1: 'Look after your\nproperty, all year.',
    accent: 'Planned maintenance for homes and businesses.',
    intro:
      'A proactive maintenance routine helps reduce disruption and keeps small issues from becoming bigger problems. We support landlords, homeowners and property managers across Malta.',
    image: 'photo-1600607687920-4e2a09cf159d',
    service: 'Property maintenance',
    defaultJobType: 'Property maintenance',
    bullets: [
      'Scheduled maintenance visits',
      'Property condition & handover checks',
      'Coordinated multi-trade repairs',
    ],
  },
  {
    path: '/hotel-airbnb-maintenance',
    nav: 'Hotels & Airbnb',
    shortDesc: 'Fast turnarounds for short lets',
    title: 'Hotel & Airbnb Maintenance in Malta | Henry Handyman',
    h1: 'Guest-ready.\nProperty-ready.',
    accent: 'Responsive maintenance for hospitality properties.',
    intro:
      'Reliable support for boutique hotels, guesthouses, holiday rentals and short-let properties. We help property teams manage repairs, routine checks and small improvement works.',
    image: 'photo-1611892440504-42a792e24d32',
    service: 'Hospitality maintenance',
    defaultJobType: 'Property maintenance',
    bullets: [
      'Guesthouse and short-let apartment upkeep',
      'Between-guest turnaround repairs',
      'Planned seasonal maintenance support',
    ],
  },
  {
    path: '/apartment-renovations',
    nav: 'Apartment Renovations',
    shortDesc: 'Complete full-scope upgrades',
    title: 'Full Apartment Renovations in Malta | Henry Handyman',
    h1: 'A complete\nrenovation, carefully managed.',
    accent: 'From preparation to the final details.',
    intro:
      'A full renovation needs planning, dependable trades and attention to every detail. Henry Handyman provides one point of contact and coordinates the agreed scope of work from start to finish.',
    image: 'photo-1600607687939-ce8a6c25118c',
    service: 'Full apartment renovations',
    defaultJobType: 'General repairs',
    bullets: [
      'Plastering and surface preparation',
      'Tiling, flooring and interior painting',
      'Bathroom, kitchen and finishing works',
    ],
  },
  {
    path: '/contact',
    nav: 'Contact',
    shortDesc: 'Request a quote in Malta',
    title: 'Contact Henry Handyman Malta',
    h1: 'Tell us about\nyour project.',
    accent: 'Let’s discuss what your property needs.',
    intro:
      'Share a few details about the work, your location and preferred timeframe. We will get back to you to discuss the next steps.',
    image: 'photo-1600566753190-17f0baa2a6c3',
    service: 'Contact Henry Handyman',
    defaultJobType: 'General repairs',
    bullets: [
      'Clear communication',
      'Work across Malta',
      'Quotes based on the agreed scope',
    ],
  },
];

const serviceCards = [
  {
    title: 'Apartment Renovations',
    text: 'Coordinated full apartment upgrades from plastering and tiling to final fixtures.',
    icon: Sparkles,
    path: '/apartment-renovations',
  },
  {
    title: 'General Handyman',
    text: 'Repairs, installations, furniture assembly and everyday property fixes.',
    icon: Wrench,
    path: '/general-handyman',
  },
  {
    title: 'Plumbing & Bathrooms',
    text: 'Practical plumbing repairs, bathroom upgrades, grouting and sealing.',
    icon: Droplets,
    path: '/plumbing-bathrooms',
  },
  {
    title: 'Painting & Decorating',
    text: 'Careful surface preparation and clean interior finishes.',
    icon: Paintbrush,
    path: '/painting-decorating',
  },
  {
    title: 'Roofing & Waterproofing',
    text: 'Roof repairs and waterproofing solutions to help protect your property.',
    icon: Home,
    path: '/roofing-waterproofing',
  },
  {
    title: 'AC Cleaning',
    text: 'Routine air-conditioning filter cleaning and basic visual checks.',
    icon: Wind,
    path: '/ac-cleaning',
  },
  {
    title: 'Property Maintenance',
    text: 'Reliable ongoing upkeep for homeowners, landlords and agencies.',
    icon: Building2,
    path: '/property-maintenance',
  },
  {
    title: 'Hotels & Airbnb',
    text: 'Responsive turnaround repairs and upkeep for hospitality properties.',
    icon: Clock3,
    path: '/hotel-airbnb-maintenance',
  },
];

const maltaAreas = [
  'Sliema',
  "St. Julian's",
  'Valletta',
  'Swieqi',
  'Gżira & Msida',
  'Mosta & Naxxar',
  'Mellieħa & St. Paul’s Bay',
  'Marsascala & South Malta',
];

const faqs = [
  {
    q: 'How do I get a quote for my project or repair?',
    a: 'Use either enquiry form below or message us on WhatsApp. Sharing a brief description, your town in Malta, and a few photos or rough measurements helps us give you an accurate next step quickly.',
  },
  {
    q: 'Do you handle both small handyman jobs and full renovations?',
    a: 'Yes. We take on everyday individual jobs—like mounting fixtures, sealing bathrooms, or painting—as well as complete apartment renovations coordinated from preparation through to final finishing.',
  },
  {
    q: 'Can you help if I manage an Airbnb or rental property remotely?',
    a: 'Yes. Many of our clients are landlords, property managers and overseas owners. We keep communication clear via WhatsApp and send photo updates before and after the agreed work.',
  },
  {
    q: 'How are specialist or regulated works handled?',
    a: 'The exact scope is always agreed beforehand. Where a project requires licensed electrical, refrigerant or other regulated specialists, we arrange or refer appropriately qualified technicians.',
  },
];

function FiveStars({ size = 14 }: { size?: number }) {
  return (
    <span className="stars-row" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} size={size} fill="currentColor" strokeWidth={1.5} />
      ))}
    </span>
  );
}

function getPageByPath(pathname: string) {
  const clean = pathname.replace(/\/$/, '') || '/';
  return pages.find((p) => p.path === clean) || pages[0];
}

function FallbackLogoSvg() {
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true">
      <circle cx="58" cy="31" r="10.5" fill="#083b7c" stroke="#f5b51b" strokeWidth="4.5" />
      <path
        d="M78 16 L104 37 C107 40 107 44 104 47 C101 50 97 50 94 47 L72 28 L72 19 Z"
        fill="#083b7c"
        stroke="#f5b51b"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M21 66 C14 70 13 80 19 86 L34 99 L41 91 L28 79 C29 75 26 70 21 66 Z"
        fill="#083b7c"
        stroke="#f5b51b"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M95 58 C103 62 105 72 99 79 L84 95 L77 87 L90 73 C89 68 91 62 95 58 Z"
        fill="#083b7c"
        stroke="#f5b51b"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M14 48 L26 39 C31 35 38 35 43 38 L37 44 L44 68 L36 73 L28 49 L19 55 Z"
        fill="#083b7c"
        stroke="#f5b51b"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M41 56 C46 47 61 46 72 41 C80 37 85 29 88 23 C91 21 94 23 93 29 C90 41 82 51 70 57 L71 75 L81 102 L68 102 L58 80 L44 102 L31 102 L48 75 L47 61 L42 68 L36 60 Z"
        fill="#083b7c"
        stroke="#f5b51b"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path d="M57 86 L67 102 L48 102 Z" fill="#083b7c" />
    </svg>
  );
}

function BrandMark({ lightBadge = false }: { lightBadge?: boolean }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <span className={lightBadge ? 'brand-mark footer-logo-badge' : 'brand-mark header-logo-blend'}>
      {imgFailed ? (
        <FallbackLogoSvg />
      ) : (
        <img
          src={LOGO}
          alt="Henry Handyman Malta"
          onError={() => setImgFailed(true)}
        />
      )}
    </span>
  );
}

function Header({
  active,
  onNavigate,
}: {
  active: string;
  onNavigate: (href: string) => void;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    setOpen(false);
    onNavigate(href);
  };

  const isServiceActive = pages.slice(1, 9).some((p) => p.path === active);

  return (
    <header className="site-header">
      <div className="top-strip">
        <div className="container top-strip-inner">
          <div className="top-strip-left">
            <span>Property care &amp; renovations across Malta</span>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noreferrer"
              className="top-strip-rating"
            >
              <FiveStars size={11} /> 5.0 on Google
            </a>
          </div>
          <div className="top-strip-links">
            <a href={`mailto:${EMAIL}`} className="top-strip-email">
              <Mail size={13} /> {EMAIL}
            </a>
            <a href={`tel:+${PHONE}`}>
              <Phone size={13} /> {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>

      <div className="nav-wrap container">
        <a
          className="brand"
          href="/"
          aria-label="Henry Handyman home"
          onClick={(e) => handleLink(e, '/')}
        >
          <BrandMark />
          <span className="brand-name">
            HENRY <b>HANDYMAN</b>
            <small>PROPERTY CARE &amp; RENOVATIONS</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary">
          <a
            className={active === '/' ? 'active' : ''}
            aria-current={active === '/' ? 'page' : undefined}
            href="/"
            onClick={(e) => handleLink(e, '/')}
          >
            Home
          </a>

          <div className="nav-dropdown">
            <button type="button" className={isServiceActive ? 'active' : ''}>
              Services <ChevronDown size={14} />
            </button>
            <div className="dropdown-panel">
              {pages.slice(1, 9).map((p) => (
                <a
                  key={p.path}
                  href={p.path}
                  className={active === p.path ? 'active-sub' : ''}
                  onClick={(e) => handleLink(e, p.path)}
                >
                  <b>{p.nav}</b>
                  <small>{p.shortDesc}</small>
                </a>
              ))}
            </div>
          </div>

          <a
            className={active === '/apartment-renovations' ? 'active' : ''}
            aria-current={active === '/apartment-renovations' ? 'page' : undefined}
            href="/apartment-renovations"
            onClick={(e) => handleLink(e, '/apartment-renovations')}
          >
            Renovations
          </a>

          <a
            className={active === '/hotel-airbnb-maintenance' ? 'active' : ''}
            aria-current={active === '/hotel-airbnb-maintenance' ? 'page' : undefined}
            href="/hotel-airbnb-maintenance"
            onClick={(e) => handleLink(e, '/hotel-airbnb-maintenance')}
          >
            Hotels &amp; Airbnb
          </a>

          <a
            className={active === '/contact' ? 'active' : ''}
            aria-current={active === '/contact' ? 'page' : undefined}
            href="/contact"
            onClick={(e) => handleLink(e, '/contact')}
          >
            Contact
          </a>
        </nav>

        <a
          className="button button-dark nav-cta"
          href="#enquiry"
          onClick={(e) => handleLink(e, '#enquiry')}
        >
          Get a quote <ArrowRight size={16} />
        </a>

        <button
          className="mobile-menu-button"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="mobile-nav" aria-label="Mobile">
          <a href="/" onClick={(e) => handleLink(e, '/')}>
            Home
          </a>
          {pages.slice(1).map((p) => (
            <a
              key={p.path}
              href={p.path}
              className={active === p.path ? 'active' : ''}
              onClick={(e) => handleLink(e, p.path)}
            >
              {p.nav}
            </a>
          ))}
          <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer">
            ★ 5.0 Google Reviews
          </a>
          <a
            className="button button-dark"
            href="#enquiry"
            onClick={(e) => handleLink(e, '#enquiry')}
          >
            Get a quote <ArrowRight size={16} />
          </a>
        </nav>
      )}
    </header>
  );
}

function EnquiryForm({
  service,
  kind,
  defaultJobType = 'General repairs',
}: {
  service: string;
  kind: 'renovation' | 'small';
  defaultJobType?: string;
}) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [details, setDetails] = useState('');
  const [timeframe, setTimeframe] = useState('Flexible');
  const [property, setProperty] = useState('Apartment');
  const [size, setSize] = useState('');
  const [jobType, setJobType] = useState(defaultJobType);
  const [submittedMsg, setSubmittedMsg] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setJobType(defaultJobType);
  }, [defaultJobType]);

  function buildMessage() {
    const extra =
      kind === 'renovation'
        ? `Property type: ${property}\nApproximate size: ${size || 'Not specified'}\n`
        : `Service required: ${jobType}\n`;
    return `Hello Henry, I would like to enquire about ${service}.\n\nName: ${name}\nPhone: ${phone}\nLocation: ${location}\n${extra}Timeframe: ${timeframe}\nDetails: ${details}`;
  }

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const msg = buildMessage();
    setSubmittedMsg(msg);
    setCopied(false);
    window.open(wa(msg), '_blank', 'noopener,noreferrer');
  }

  async function copyMessage() {
    if (!submittedMsg) return;
    try {
      await navigator.clipboard.writeText(submittedMsg);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <form className="enquiry-form" onSubmit={submit}>
      <div className="form-row">
        <label>
          Your name
          <input
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
          />
        </label>
        <label>
          Phone number
          <input
            required
            type="tel"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+356 ..."
          />
        </label>
      </div>

      <label>
        Property location
        <input
          required
          autoComplete="address-level2"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="e.g. Sliema, Mosta, Valletta..."
        />
      </label>

      {kind === 'renovation' ? (
        <div className="form-row">
          <label>
            Property type
            <select value={property} onChange={(e) => setProperty(e.target.value)}>
              <option>Apartment</option>
              <option>Maisonette</option>
              <option>House / Villa</option>
              <option>Commercial property</option>
              <option>Other</option>
            </select>
          </label>
          <label>
            Approximate size
            <input
              value={size}
              onChange={(e) => setSize(e.target.value)}
              placeholder="e.g. 120 m² / 3 bedrooms"
            />
          </label>
        </div>
      ) : (
        <label>
          What do you need help with?
          <select value={jobType} onChange={(e) => setJobType(e.target.value)}>
            {[
              'General repairs',
              'Plumbing & bathroom',
              'Painting & decorating',
              'Roofing & waterproofing',
              'AC cleaning & checks',
              'Property maintenance',
              'Other',
            ].map((x) => (
              <option key={x} value={x}>
                {x}
              </option>
            ))}
          </select>
        </label>
      )}

      <label>
        Preferred timeframe
        <select value={timeframe} onChange={(e) => setTimeframe(e.target.value)}>
          <option>Flexible</option>
          <option>As soon as possible</option>
          <option>Within 1–3 months</option>
          <option>Within 3–6 months</option>
          <option>Just planning / exploring</option>
        </select>
      </label>

      <label>
        Tell us about the work
        <textarea
          required
          rows={4}
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder={
            kind === 'renovation'
              ? 'Describe the property, planned works and anything important...'
              : 'Describe the issue or work required...'
          }
        />
      </label>

      <p className="form-hint">
        WhatsApp will open with your enquiry ready to send — you can attach photos or plans directly in the chat.
      </p>

      <button className="button button-dark form-submit" type="submit">
        <MessageCircle size={18} /> Send enquiry via WhatsApp <ArrowRight size={17} />
      </button>

      {submittedMsg && (
        <div className="form-ready-box" role="status">
          <p>
            <CheckCircle2 size={16} /> Your message is ready. Didn’t open automatically?
          </p>
          <div className="form-ready-actions">
            <a href={wa(submittedMsg)} target="_blank" rel="noreferrer">
              Open WhatsApp <ExternalLink size={13} />
            </a>
            <button type="button" onClick={copyMessage}>
              <Copy size={13} /> {copied ? 'Copied!' : 'Copy text'}
            </button>
            <a
              href={`mailto:${EMAIL}?subject=${encodeURIComponent(`Enquiry: ${service}`)}&body=${encodeURIComponent(submittedMsg)}`}
            >
              <Mail size={13} /> Email instead
            </a>
          </div>
        </div>
      )}
    </form>
  );
}

function TwoEnquiryForms({ page }: { page: (typeof pages)[number] }) {
  return (
    <section className="section-pad enquiry-section" id="enquiry">
      <div className="container">
        <div className="section-heading centered">
          <span className="eyebrow">
            <i /> LET&apos;S TALK
          </span>
          <h2>
            What can we help
            <br />
            <em>you with?</em>
          </h2>
          <p>
            Choose the enquiry form that best matches your project. We work with homeowners,
            landlords and property businesses across Malta.
          </p>
          <a
            className="enquiry-rating-pill"
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noreferrer"
          >
            <FiveStars size={13} />
            <span>5.0 Rated on Google Maps · Read client reviews</span>
            <ExternalLink size={13} />
          </a>
        </div>

        <div className="forms-grid">
          <div className="form-card renovation-form-card">
            <div className="form-card-head">
              <span className="form-number">01 / LARGE PROJECTS</span>
              <Building2 size={25} />
              <h3>Full Renovations</h3>
              <p>For complete apartment renovations and larger multi-room property projects.</p>
            </div>
            <EnquiryForm service="a full renovation" kind="renovation" />
          </div>

          <div className="form-card">
            <div className="form-card-head">
              <span className="form-number">02 / INDIVIDUAL JOBS</span>
              <Wrench size={25} />
              <h3>Small Jobs &amp; Maintenance</h3>
              <p>
                For repairs, installations, bathroom fixes, painting and regular property maintenance.
              </p>
            </div>
            <EnquiryForm
              service={page.service}
              kind="small"
              defaultJobType={page.defaultJobType}
            />
          </div>
        </div>

        <div className="contact-details">
          <a href={`tel:+${PHONE}`}>
            <Phone size={18} />
            <span>
              <small>Call us</small>
              {PHONE_DISPLAY}
            </span>
          </a>
          <a href={`mailto:${EMAIL}`}>
            <Mail size={18} />
            <span>
              <small>Email</small>
              {EMAIL}
            </span>
          </a>
          <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer">
            <Star size={18} fill="currentColor" />
            <span>
              <small>Google Maps Rating</small>
              5.0 ★ Verified Reviews
            </span>
          </a>
          <div>
            <MapPin size={18} />
            <span>
              <small>Service area</small>
              Across Malta
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeSections({ onNavigate }: { onNavigate: (href: string) => void }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    onNavigate(href);
  };

  return (
    <>
      <section className="intro-band">
        <div className="container">
          <div className="intro-band-grid">
            <div>
              <span className="eyebrow">
                <i /> PROPERTY CARE IN MALTA
              </span>
              <h2>
                One reliable contact.
                <br />
                <em>Work done properly.</em>
              </h2>
            </div>
            <p>
              Whether you need a small repair, regular maintenance or a complete apartment
              renovation, we help make the process straightforward — with clear communication from
              the first enquiry to handover.
            </p>
          </div>

          <div className="pillars-strip">
            <div className="pillar-item">
              <ShieldCheck size={20} />
              <div>
                <b>Agreed scope upfront</b>
                <span>Clear expectations on work, schedule and finish before starting.</span>
              </div>
            </div>
            <div className="pillar-item">
              <MessageCircle size={20} />
              <div>
                <b>Direct WhatsApp updates</b>
                <span>Quick replies, photo progress updates and easy coordination.</span>
              </div>
            </div>
            <div className="pillar-item">
              <Sparkles size={20} />
              <div>
                <b>Clean, respectful finish</b>
                <span>Surface protection, tidy work areas and careful attention to detail.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="renovation-feature section-pad">
        <div className="container renovation-grid">
          <div className="renovation-image">
            <div className="photo-glass">
              <Building2 size={19} />
              <span>
                <b>Full-Scope Coordination</b>
                <small>Single point of contact in Malta</small>
              </span>
            </div>
          </div>
          <div>
            <span className="eyebrow">
              <i /> OUR MAIN SERVICE
            </span>
            <h2>
              Full apartment
              <br />
              <em>renovations.</em>
            </h2>
            <p>
              A complete renovation needs good planning, dependable trades and attention to every
              detail. We coordinate the agreed works to help turn your ideas into a finished,
              functional home.
            </p>
            <ul className="check-list">
              {[
                'Planning and trade coordination',
                'Plastering and surface preparation',
                'Tiling, flooring and bathroom works',
                'Interior painting and finishing',
                'Fixtures, fittings and final snagging',
              ].map((x) => (
                <li key={x}>
                  <Check size={17} />
                  {x}
                </li>
              ))}
            </ul>
            <a
              className="button button-dark"
              href="/apartment-renovations"
              onClick={(e) => handleNav(e, '/apartment-renovations')}
            >
              Explore renovations <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <section className="section-pad services-section" id="services">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">
              <i /> WHAT WE DO
            </span>
            <h2>
              Services for every
              <br />
              <em>part of your property.</em>
            </h2>
            <p>
              Practical property care for homeowners, landlords, hospitality businesses and property
              managers across Malta.
            </p>
          </div>
          <div className="services-grid">
            {serviceCards.map(({ title, text, icon: Icon, path }, i) => (
              <motion.a
                href={path}
                onClick={(e) => handleNav(e, path)}
                className="service-card"
                key={title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
              >
                <span className="service-icon">
                  <Icon size={23} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
                <b>
                  Explore service <ArrowRight size={15} />
                </b>
              </motion.a>
            ))}
          </div>

          <div className="areas-band">
            <div className="areas-label">
              <MapPin size={18} />
              <span>Working across Malta:</span>
            </div>
            <div className="areas-pills">
              {maltaAreas.map((area) => (
                <span key={area}>{area}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Google 5.0-Star Trust Showcase */}
      <section className="reviews-showcase section-pad">
        <div className="container">
          <div className="reviews-card">
            <div className="reviews-main">
              <span className="eyebrow">
                <i /> VERIFIED REPUTATION ON GOOGLE MAPS
              </span>
              <div className="reviews-score-row">
                <strong className="reviews-score-num">5.0</strong>
                <div>
                  <FiveStars size={22} />
                  <span>Perfect 5-Star Rating on Google Maps</span>
                </div>
              </div>
              <h2>
                Trusted across Malta.
                <br />
                <em>Rated 5.0 ★ by clients.</em>
              </h2>
              <p>
                Our reputation is built one job at a time — through punctual arrivals, tidy work
                and clear communication. Check our Google Maps profile to read dozens of real
                reviews from homeowners, landlords and Airbnb hosts across Malta.
              </p>
              <div className="reviews-actions">
                <a
                  className="button button-dark"
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  Read our Google reviews <ExternalLink size={16} />
                </a>
                <a
                  className="button button-outline"
                  href="#enquiry"
                  onClick={(e) => handleNav(e, '#enquiry')}
                >
                  Request a quote <ArrowRight size={16} />
                </a>
              </div>
            </div>

            <div className="reviews-highlights">
              <div className="review-highlight-item">
                <Clock3 size={20} />
                <div>
                  <b>Punctual &amp; dependable</b>
                  <p>Showing up when agreed and keeping you updated at every stage of the job.</p>
                </div>
              </div>
              <div className="review-highlight-item">
                <Sparkles size={20} />
                <div>
                  <b>Tidy, careful workmanship</b>
                  <p>Attention to finishing details and leaving your property clean afterwards.</p>
                </div>
              </div>
              <div className="review-highlight-item">
                <ShieldCheck size={20} />
                <div>
                  <b>Honest, transparent communication</b>
                  <p>Clear scope and straightforward coordination—whether you are in Malta or abroad.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="process-section section-pad">
        <div className="container">
          <div className="section-heading centered">
            <span className="eyebrow">
              <i /> HOW IT WORKS
            </span>
            <h2>
              Good work starts with
              <br />
              <em>a clear plan.</em>
            </h2>
          </div>
          <div className="process-grid">
            {[
              [
                '01',
                'Tell us what you need',
                'Share a short description, your location in Malta and photos if helpful.',
              ],
              [
                '02',
                'Discuss the scope',
                'We review the request, visit the property when needed and clarify the work involved.',
              ],
              [
                '03',
                'Agree and get started',
                'Once the scope and quotation are agreed, we schedule the work and keep updates clear.',
              ],
            ].map(([n, t, d]) => (
              <article className="process-card" key={n}>
                <span>{n}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section section-pad">
        <div className="container faq-layout">
          <div>
            <span className="eyebrow">
              <i /> COMMON QUESTIONS
            </span>
            <h2>
              Clear answers
              <br />
              <em>before we start.</em>
            </h2>
            <p>
              Have a specific question about your apartment, rental unit or timeline? Send us a quick
              message anytime on WhatsApp.
            </p>
            <a
              className="button button-dark"
              href={wa('Hello Henry, I have a quick question about a property job.')}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={17} /> Ask on WhatsApp
            </a>
          </div>

          <div className="faq-list">
            {faqs.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div className={`faq-item ${isOpen ? 'is-open' : ''}`} key={item.q}>
                  <button
                    type="button"
                    className="faq-trigger"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                  >
                    <span>
                      <HelpCircle size={17} /> {item.q}
                    </span>
                    <ChevronDown size={18} />
                  </button>
                  {isOpen && <p className="faq-answer">{item.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="profiles-section section-pad">
        <div className="container profiles-layout">
          <div>
            <span className="eyebrow eyebrow-light">
              <i /> FOLLOW OUR WORK
            </span>
            <h2>
              See the work.
              <br />
              <em>Read the reviews.</em>
            </h2>
            <p>
              Explore our 5-star Google Maps profile, project updates and short videos from completed
              jobs across Malta.
            </p>
          </div>
          <div className="profile-links">
            {socials.map(({ label, href, icon: Icon, detail }) => (
              <a
                className="profile-link"
                href={href}
                target="_blank"
                rel="noreferrer"
                key={label}
              >
                <span className="profile-icon">
                  <Icon size={21} />
                </span>
                <span>
                  <b>{label}</b>
                  <small>{detail}</small>
                </span>
                <ExternalLink size={16} />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ServicePage({
  page,
  onNavigate,
}: {
  page: (typeof pages)[number];
  onNavigate: (href: string) => void;
}) {
  const isHome = page.path === '/';
  const isContact = page.path === '/contact';

  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    onNavigate(href);
  };

  return (
    <>
      <section
        className="hero inner-hero"
        style={
          {
            '--hero-image': `url(https://images.unsplash.com/${page.image}?auto=format&fit=crop&w=2200&q=85)`,
          } as CSSProperties
        }
      >
        <div className="hero-shade" />
        <div className="container hero-content">
          <motion.div
            key={page.path}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <a
              className="hero-rating-pill"
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noreferrer"
            >
              <FiveStars size={13} />
              <span>5.0 on Google Maps · Read client reviews</span>
              <ExternalLink size={12} />
            </a>

            <span className="eyebrow eyebrow-light">
              <i /> HENRY HANDYMAN · MALTA
            </span>
            <h1>
              {page.h1.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i === 0 ? <br /> : null}
                </span>
              ))}
            </h1>
            <p className="hero-lead">{page.intro}</p>
            <div className="hero-actions">
              <a
                className="button button-gold"
                href="#enquiry"
                onClick={(e) => handleLink(e, '#enquiry')}
              >
                Request a quote <ArrowRight size={18} />
              </a>
              <a className="button button-glass" href={`tel:+${PHONE}`}>
                <Phone size={16} /> Call Henry
              </a>
            </div>
            <div className="hero-trust">
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noreferrer"
                className="hero-trust-link"
              >
                <Star size={17} fill="currentColor" /> 5.0 ★ Google Rated
              </a>
              <span>
                <CheckCircle2 size={17} /> Work across Malta
              </span>
              <span>
                <ShieldCheck size={17} /> Agreed scope of work
              </span>
            </div>
          </motion.div>
        </div>
        <div className="hero-note">
          <span /> PROPERTY CARE <b>·</b> MALTA
        </div>
      </section>

      {isHome ? (
        <HomeSections onNavigate={onNavigate} />
      ) : isContact ? (
        <section className="contact-channels-band">
          <div className="container">
            <div className="channels-grid">
              <a
                className="channel-card"
                href={wa('Hello Henry, I have an enquiry about a property in Malta.')}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={22} />
                <div>
                  <b>WhatsApp (Fastest)</b>
                  <span>Message us directly &amp; attach photos</span>
                </div>
                <ArrowRight size={16} />
              </a>
              <a className="channel-card" href={`tel:+${PHONE}`}>
                <Phone size={22} />
                <div>
                  <b>Call Directly</b>
                  <span>{PHONE_DISPLAY}</span>
                </div>
                <ArrowRight size={16} />
              </a>
              <a
                className="channel-card"
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noreferrer"
              >
                <Star size={22} fill="currentColor" />
                <div>
                  <b>5.0 ★ Google Reviews</b>
                  <span>See verified feedback on Google Maps</span>
                </div>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </section>
      ) : (
        <section className="section-pad detail-section">
          <div className="container detail-grid">
            <div>
              <span className="eyebrow">
                <i /> {page.nav.toUpperCase()}
              </span>
              <h2>{page.accent}</h2>
              <p className="section-intro">{page.intro}</p>
              <ul className="check-list">
                {page.bullets.map((b) => (
                  <li key={b}>
                    <Check size={17} />
                    {b}
                  </li>
                ))}
              </ul>
              <p className="small-note">
                The scope of each project is discussed and agreed before work begins. Specialist or
                regulated works are handled by appropriately qualified professionals where required.
              </p>
              <div className="detail-actions">
                <a
                  className="button button-dark"
                  href="#enquiry"
                  onClick={(e) => handleLink(e, '#enquiry')}
                >
                  Discuss your project <ArrowRight size={17} />
                </a>
                <a
                  className="button button-outline"
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  5.0 ★ Google Reviews <ExternalLink size={15} />
                </a>
              </div>
            </div>

            <div
              className="detail-photo"
              style={{
                backgroundImage: `url(https://images.unsplash.com/${page.image}?auto=format&fit=crop&w=1300&q=85)`,
              }}
            >
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noreferrer"
                className="photo-glass"
              >
                <Star size={19} fill="currentColor" />
                <span>
                  <b>5.0 ★ on Google Maps</b>
                  <small>Rated by clients across Malta</small>
                </span>
              </a>
            </div>
          </div>
        </section>
      )}

      <TwoEnquiryForms page={page} />
    </>
  );
}

function Footer({ onNavigate }: { onNavigate: (href: string) => void }) {
  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    onNavigate(href);
  };

  return (
    <footer className="footer">
      <div className="container footer-main">
        <div className="footer-about">
          <a className="brand footer-brand" href="/" onClick={(e) => handleLink(e, '/')}>
            <BrandMark lightBadge />
            <span className="brand-name">
              HENRY <b>HANDYMAN</b>
              <small>PROPERTY CARE &amp; RENOVATIONS</small>
            </span>
          </a>
          <p>
            Property care, maintenance and full apartment renovations across Malta. One clear point
            of contact from enquiry to completion.
          </p>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noreferrer"
            className="footer-rating-badge"
          >
            <FiveStars size={13} />
            <span>5.0 on Google Maps</span>
            <ExternalLink size={12} />
          </a>
        </div>

        <div className="footer-nav">
          <b>Services</b>
          {pages.slice(1, 9).map((p) => (
            <a href={p.path} key={p.path} onClick={(e) => handleLink(e, p.path)}>
              {p.nav}
            </a>
          ))}
        </div>

        <div className="footer-nav">
          <b>Contact</b>
          <a href="/contact" onClick={(e) => handleLink(e, '/contact')}>
            Contact us
          </a>
          <a href={`tel:+${PHONE}`}>{PHONE_DISPLAY}</a>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer">
            Google Reviews (5.0 ★) <ExternalLink size={12} />
          </a>
          <a href={socials[1].href} target="_blank" rel="noreferrer">
            Instagram <ExternalLink size={12} />
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Henry Handyman Malta. All rights reserved.</span>
        <span>Property care &amp; renovations in Malta</span>
      </div>
    </footer>
  );
}

export default function App() {
  const [pathname, setPathname] = useState(() => window.location.pathname);

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = (href: string) => {
    if (href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    const nextPath = href.replace(/\/$/, '') || '/';
    const currentClean = pathname.replace(/\/$/, '') || '/';
    if (nextPath !== currentClean) {
      window.history.pushState({}, '', nextPath);
      setPathname(nextPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const page = getPageByPath(pathname);

  useEffect(() => {
    document.title = page.title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', page.intro);
  }, [page]);

  return (
    <div className="site-shell">
      <Header active={page.path} onNavigate={navigate} />
      <main>
        <ServicePage page={page} onNavigate={navigate} />
      </main>
      <Footer onNavigate={navigate} />
      <a
        className="floating-whatsapp"
        href={wa('Hello Henry, I have an enquiry.')}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Henry on WhatsApp"
      >
        <MessageCircle size={25} />
        <span>Chat with Henry</span>
      </a>
    </div>
  );
}
