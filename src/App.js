import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  CreditCard, 
  Truck, 
  Home,
  Camera, 
  FileText, 
  Car, 
  Box, 
  Database, 
  ShieldCheck, 
  Phone, 
  ChevronRight, 
  CheckCircle, 
  XCircle,
  Menu,
  X,
  User,
  Fingerprint,
  Zap,
  Cpu,
  Globe,
  Building,
  Clock,
  Users,
  Landmark,
  ScanSearch,
  Radar,
  Container,  
  DoorOpen,
  Fence,
  LayoutDashboard,
} from 'lucide-react';
import './App.css';

// ============================================
// ANIMATION VARIANTS
// ============================================
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};


// ============================================
// CAROUSEL COMPONENT
// ============================================
// ============================================
// UPGRADED CAROUSEL COMPONENT
// ============================================
const HeroCarousel = () => {
  const slides = [
    {
      id: 1,
      image: "https://i.pinimg.com/1200x/17/02/69/17026907c4d9970dedcf35c35c088792.jpg",
      title: "Biometric Access Control",
      subtitle: "Secure every entry point with facial recognition",
      animation: {
        enter: { 
          type: 'fadeUp',
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94]
        },
        exit: {
          type: 'slideDown',
          duration: 0.7,
          ease: [0.55, 0.085, 0.68, 0.53]
        }
      }
    },
    {
      id: 2,
      image: "https://i.pinimg.com/736x/6d/ae/59/6dae59d33bc7f38e89be33e27176093e.jpg",
      title: "See who's at every door, gate, & dock",
      subtitle: "Automated vehicle and pedestrian access",
      animation: {
        enter: { 
          type: 'slideLeft',
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94]
        },
        exit: {
          type: 'slideRight',
          duration: 0.7,
          ease: [0.55, 0.085, 0.68, 0.53]
        }
      }
    },
    {
      id: 3,
      image: "https://i.postimg.cc/G3DzTSr9/id.png",
      title: "Real-Time Monitoring",
      subtitle: "identifyed.ca delivers facial recognition, ID document reading, and license plate & container tracking on the hardware you already own. One platform. One price. Fully predictable.",
      animation: {
        enter: { 
          type: 'slideRight',
          duration: 0.9,
          ease: [0.25, 0.46, 0.45, 0.94]
        },
        exit: {
          type: 'slideLeft',
          duration: 0.7,
          ease: [0.55, 0.085, 0.68, 0.53]
        }
      }
    },
    {
      id: 4,
      image: "https://i.postimg.cc/3rG90b7d/numberplate.png",
      title: "Touchless Entry",
      subtitle: "Contactless verification for modern buildings",
      animation: {
        enter: { 
          type: 'zoomIn',
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94]
        },
        exit: {
          type: 'zoomOut',
          duration: 0.7,
          ease: [0.55, 0.085, 0.68, 0.53]
        }
      }
    },
    {
      id: 5,
      image: "https://i.pinimg.com/1200x/a4/27/72/a427721d8b37ab6169c632e2e8e87484.jpg",
      title: "Enterprise Security",
      subtitle: "Scale biometrics across multiple locations",
      animation: {
        enter: { 
          type: 'fadeIn',
          duration: 0.7,
          ease: [0.25, 0.46, 0.45, 0.94]
        },
        exit: {
          type: 'fadeOut',
          duration: 0.6,
          ease: [0.55, 0.085, 0.68, 0.53]
        }
      }
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideKey, setSlideKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % slides.length);
        setSlideKey(prev => prev + 1);
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 500);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length, isAnimating]);

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setSlideKey(prev => prev + 1);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 900);
  };

  const getAnimationStyles = (slideIndex) => {
    const isActive = slideIndex === currentIndex;
    const isPrev = slideIndex === (currentIndex - 1 + slides.length) % slides.length;
    const isNext = slideIndex === (currentIndex + 1) % slides.length;
    const animation = slides[slideIndex].animation;

    if (isActive) {
      const enterTypes = {
        'fadeUp': {
          initial: { opacity: 0, y: 50, scale: 0.95 },
          animate: { opacity: 1, y: 0, scale: 1 },
          exit: { opacity: 0, y: -50, scale: 0.95 }
        },
        'slideLeft': {
          initial: { opacity: 0, x: 80, scale: 0.92 },
          animate: { opacity: 1, x: 0, scale: 1 },
          exit: { opacity: 0, x: -80, scale: 0.92 }
        },
        'slideRight': {
          initial: { opacity: 0, x: -80, scale: 0.92 },
          animate: { opacity: 1, x: 0, scale: 1 },
          exit: { opacity: 0, x: 80, scale: 0.92 }
        },
        'zoomIn': {
          initial: { opacity: 0, scale: 0.7, rotate: 5 },
          animate: { opacity: 1, scale: 1, rotate: 0 },
          exit: { opacity: 0, scale: 1.3, rotate: -5 }
        },
        'fadeIn': {
          initial: { opacity: 0, filter: 'blur(10px)' },
          animate: { opacity: 1, filter: 'blur(0px)' },
          exit: { opacity: 0, filter: 'blur(10px)' }
        }
      };

      const enterType = animation?.enter?.type || 'fadeUp';
      return enterTypes[enterType] || enterTypes['fadeUp'];
    }

    if (isPrev || isNext) {
      const exitTypes = {
        'slideDown': {
          initial: { opacity: 0, y: -50, scale: 0.95 },
          animate: { opacity: 0, y: -100, scale: 0.9 }
        },
        'slideRight': {
          initial: { opacity: 0, x: 80, scale: 0.92 },
          animate: { opacity: 0, x: 160, scale: 0.85 }
        },
        'slideLeft': {
          initial: { opacity: 0, x: -80, scale: 0.92 },
          animate: { opacity: 0, x: -160, scale: 0.85 }
        },
        'zoomOut': {
          initial: { opacity: 0, scale: 0.7, rotate: 5 },
          animate: { opacity: 0, scale: 0.4, rotate: 10 }
        },
        'fadeOut': {
          initial: { opacity: 0, filter: 'blur(10px)' },
          animate: { opacity: 0, filter: 'blur(20px)' }
        }
      };

      const exitType = animation?.exit?.type || 'slideDown';
      return {
        initial: exitTypes[exitType]?.initial || { opacity: 0 },
        animate: exitTypes[exitType]?.animate || { opacity: 0 }
      };
    }

    return {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 0, scale: 0.8 }
    };
  };

  return (
    <div className="hero-carousel">
      <div className="carousel-container">
        {slides.map((slide, index) => {
          const isActive = index === currentIndex;
          const styles = getAnimationStyles(index);
          
          return (
            <motion.div
              key={`${slide.id}-${slideKey}-${index}`}
              className={`carousel-slide ${isActive ? 'active' : ''}`}
              initial={styles.initial}
              animate={isActive ? styles.animate : styles.initial}
              exit={isActive ? styles.exit : undefined}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
                ...(isActive ? {
                  type: 'spring',
                  damping: 25,
                  stiffness: 150
                } : {})
              }}
              style={{
                position: 'absolute',
                inset: 0,
                zIndex: isActive ? 2 : 1,
                pointerEvents: isActive ? 'auto' : 'none'
              }}
            >
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="carousel-image"
              />
              <div className="carousel-overlay">
                <motion.div 
                  className="carousel-content"
                  initial={isActive ? { opacity: 0, y: 30 } : { opacity: 0 }}
                  animate={isActive ? { 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.3, duration: 0.6 }
                  } : { opacity: 0 }}
                >
                  <motion.span 
                    className="carousel-badge"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isActive ? { 
                      opacity: 1, 
                      scale: 1,
                      transition: { delay: 0.4, duration: 0.5 }
                    } : { opacity: 0, scale: 0.8 }}
                  >
                    <Shield className="icon-xs" />
                    <span className="logo-text1">
          identi<span className="logo-accent">fica</span>.ai
        </span>
                  </motion.span>
                  <motion.h2 
                    className="carousel-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isActive ? { 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: 0.5, duration: 0.6 }
                    } : { opacity: 0, y: 30 }}
                  >
                    {slide.title}
                  </motion.h2>
                  <motion.p 
                    className="carousel-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isActive ? { 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: 0.6, duration: 0.5 }
                    } : { opacity: 0, y: 20 }}
                  >
                    {slide.subtitle}
                  </motion.p>
                  <motion.div
                    className="carousel-cta"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isActive ? { 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: 0.7, duration: 0.5 }
                    } : { opacity: 0, y: 20 }}
                  >
                    <a href="#contact" className="btn btn-primary">
                      Learn More <ChevronRight className="icon-sm" />
                    </a>
                  </motion.div>
                </motion.div>
              </div>
              <div className="carousel-gradient-overlay" />
            </motion.div>
          );
        })}
      </div>

      <div className="carousel-progress">
        <div className="carousel-progress-bar">
          <motion.div 
            className="carousel-progress-fill"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 5, ease: 'linear' }}
            key={currentIndex}
          />
        </div>
      </div>

      <div className="carousel-controls">
        <button 
          className="carousel-btn prev"
          onClick={() => goToSlide((currentIndex - 1 + slides.length) % slides.length)}
          disabled={isAnimating}
          aria-label="Previous slide"
        >
          <ChevronRight className="icon-md" style={{ transform: 'rotate(180deg)' }} />
        </button>
        <button 
          className="carousel-btn next"
          onClick={() => goToSlide((currentIndex + 1) % slides.length)}
          disabled={isAnimating}
          aria-label="Next slide"
        >
          <ChevronRight className="icon-md" />
        </button>
      </div>

      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            disabled={isAnimating}
            aria-label={`Go to slide ${index + 1}`}
          >
            <motion.span 
              className="carousel-dot-inner"
              animate={{
                scale: index === currentIndex ? 1 : 0.7,
                opacity: index === currentIndex ? 1 : 0.4
              }}
              transition={{ duration: 0.3 }}
            />
          </button>
        ))}
      </div>

      <div className="carousel-slide-number">
        <span className="slide-number-current">{String(currentIndex + 1).padStart(2, '0')}</span>
        <span className="slide-number-total">/ {String(slides.length).padStart(2, '0')}</span>
      </div>
    </div>
  );
};

// ============================================
// MAIN COMPONENT
// ============================================
const IdentifyedApp = () => {
  const [activeTab, setActiveTab] = useState('residential');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [, setScanResult] = useState('MATCH · 99.7% · ID: K-2840');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', org: '', phone: '', industry: 'residential', message: '' });

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbarHeight = 80;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const scanResults = useMemo(() => [
    'MATCH · 99.7% · ID: K-2840',
    'MATCH · 99.4% · PLATE AB-9342',
    'MATCH · 99.9% · MSCU 1234567',
    'VERIFIED · LIVENESS OK · K-2840',
  ], []);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % scanResults.length;
      setScanResult(scanResults[i]);
    }, 2400);
    return () => clearInterval(interval);
  }, [scanResults]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.email.includes('@')) {
      return;
    }
    setFormSubmitted(true);
  };

  const navLinks = [
    { href: '#industries', label: 'Industries' },
    { href: '#capabilities', label: 'Capabilities' },
    { href: '#why', label: 'Why Biometrics' },
    { href: '#privacy', label: 'Privacy' },
    { href: '#clients', label: 'Clients' },
    { href: '#contact', label: 'Contact' },
  ];

  const industryTabs = [
    { id: 'residential', icon: Home, label: 'Residential & Offices' },
    { id: 'logistics', icon: Truck, label: 'Logistics & Ports' },
    { id: 'finance', icon: Landmark, label: 'Finance & Notary' },
    { id: 'manufacturing', icon: Cpu, label: 'Manufacturing' },
    { id: 'oilandgas', icon: Zap, label: 'Oil & Gas' },
  ];

  const features = [
    { icon: Camera, tag: 'FACE', title: 'Facial Recognition with Liveness', desc: '1:N matching at gates, 1:1 verification at counters. Anti-spoof and liveness detection against printed photos and replays.', image: 'https://repository-images.githubusercontent.com/276222794/d5b1f586-2215-4868-8036-37b96093fdb7' },
    { icon: FileText, tag: 'PDF417', title: 'ID Barcode Reading', desc: 'Decodes PDF417 on every Canadian provincial licence. Extracts and validates fields against the visual zone for a second fraud check.', image: 'https://res.cloudinary.com/dm9gg8yss/image/upload/v1782149695/d7f5630c-0465-4178-97cf-4a01aae82e5d_da2xkl.jpg' },
    { icon: Car, tag: 'ALPR', title: 'License Plate Reading', desc: 'North American and international plate OCR. Whitelists, blacklists, watchlists. Triggers gates, alarms, or just a log line.', image: 'https://media.licdn.com/dms/image/v2/C5612AQF4pv83twGY3g/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1563442246074?e=2147483647&v=beta&t=-t2HR-WVZZxhWENZjYu4KSL2pXlpJwRxHF1MVQ7mnwg' },
    { icon: Box, tag: 'ISO 6346', title: 'Container Number OCR', desc: 'Reads container codes at the gate. Logs every box in and out — tied to the truck and the driver on the same record.', image: 'https://i.pinimg.com/736x/7f/2d/f9/7f2df91f0a73a75e9538569bc2bb9a42.jpg' },
    { icon: CreditCard, tag: 'NFC', title: 'Biometric Passport Reading', desc: 'Reads the NFC chip on all biometric passports. The most tamper-resistant identity check available at the gate.', image: 'https://i.pinimg.com/1200x/c3/15/62/c315623ab3985dd0a460294ca59269cc.jpg' },
    {
      icon: Database,
      tag: 'CENTRAL',
      title: 'Real-Time Central Console',
      desc: 'Monitor every barrier, gate, turnstile, door, license plate, face match, and access event from a single dashboard. Filter by site, device, person, vehicle, or time range. Export forensic evidence instantly.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop'
    }
  ];

  const statsData = [
    { icon: Users, value: '8M+', label: 'People & IDs Verified' },
    { icon: Truck, value: '500K+', label: 'Vehicles Verified' },
    { icon: Building, value: '20+', label: 'Facilities Served' },
    { icon: Clock, value: '>100ms', label: 'On-Device, Real-Time Verification' },
  ];

  const clients = [
    { 
      name: 'INDRA', 
      logo: 'https://www.indragroup.com/cms-content/2025/06/indra-group-logo-dark.svg',
      bg: 'linear-gradient(135deg, #1a2c4a, #2a4a7a)',
      color: '#fff',
      description: 'Global Technology & Consulting Leader',
      url: 'https://www.indragroup.com/es'
    },
    { 
      name: 'MARVAL', 
      logo: 'https://www.marval.cl/img/logo.svg',
      bg: 'linear-gradient(135deg, #003366, #004c99)',
      color: '#fff',
      description: 'Leading Bonded Warehouse in LATAM',
      url: 'https://www.marval.cl/eng/'
    },
    { 
      name: 'SLEP VALPO', 
      logo: 'https://www.slepvalparaiso.gob.cl/img/Logotipo%20Valpara%C3%ADso_bco.png',
      bg: 'linear-gradient(135deg, #1a5276, #2a7a9a)',
      color: '#fff',
      description: 'Public Education Organization',
      url: 'https://www.slepvalparaiso.gob.cl/'
    },
    { 
      name: 'PUERTO COLUMBO', 
      logo: 'https://www.puertocolumbo.com/wp-content/uploads/2025/05/Recurso-2@4x.png',
      bg: 'linear-gradient(135deg, #2e4053, #4a607a)',
      color: '#fff',
      description: 'Large Bonded Warehouse LATAM',
      url: 'https://www.puertocolumbo.com/'
    },
    { 
      name: 'DYCSA', 
      logo: 'https://www.dycsa.cl/wp-content/uploads/2019/10/logo-depo.png',
      bg: 'linear-gradient(135deg, #1a3a3a, #2a5a5a)',
      color: '#fff',
      description: 'Large Bonded & Non-Bonded Warehouse',
      url: 'https://www.dycsa.cl/'
    },
    { 
      name: 'ECU WORLDWIDE', 
      logo: 'https://www.ecuworldwide.com/assets/images/logo.png',
      bg: 'linear-gradient(135deg, #e30613, #ff1a2a)',
      color: '#fff',
      description: 'Global Commercial Offices',
      url: 'https://www.ecuworldwide.com/'
    },
    { 
      name: 'SUSTAINABLE FISH', 
      logo: 'https://sustainablefish.org/wp-content/themes/sfp-theme/images/logo-sfp.svg',
      bg: 'linear-gradient(135deg, #1a5a7a, #2a8aaa)',
      color: '#fff',
      description: 'International Fisheries NGO',
      url: 'https://sustainablefish.org/about-us/'
    },
    { 
      name: '15+ NOTARIES', 
      logo: null,
      bg: 'linear-gradient(135deg, #4a2a1a, #6a3a2a)',
      color: '#fff',
      description: 'Public Notary Offices',
      url: '#'
    },
    { 
      name: 'SEAPORT VALPO', 
      logo: 'https://www.tps.cl/tps/site/artic/20231207/imag/foto_0000000120231207184905/logo_main.svg',
      bg: 'linear-gradient(135deg, #1a3a5a, #2a5a8a)',
      color: '#fff',
      description: 'Major Chilean Seaport Terminal',
      url: 'https://www.tps.cl/our-terminal'
    },
    { 
      name: 'CHILQUINTA', 
      logo: 'https://a.storyblok.com/f/82872/x/ea4cc123a6/logo_chilquinta.svg',
      bg: 'linear-gradient(135deg, #f47920, #ff992a)',
      color: '#1E1A1D',
      description: 'Energy Distribution Company',
      url: 'https://www.chilquinta.cl/'
    },
  ];

  // Updated industry content with 5 industries
  const industryContent = {
    residential: {
      eyebrow: '01 · APARTMENTS, CONDOMINIUMS, OFFICES',
      title: 'Replace the lobby fob with a face.',
      desc: 'No more lost cards, no more cloned tags, no more shared building codes. Residents and staff walk in. Visitors are pre-registered or buzzed in once.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
      items: [
        { strong: 'Facial Recognition at the Door', span: 'Resident enrollment in under 10 seconds. Works with masks, glasses, and low light.' },
        { strong: 'License Plate Reading at the Gate', span: 'Car-park entry without remotes. Permitted plates pass through; others are flagged to the concierge.' },
        { strong: 'Integrates with the Hardware You Have', span: 'We work with most IP cameras, barriers, turnstiles, and electronic locks. Keep your existing infrastructure.' },
        { strong: 'One Central Log for the Whole Property', span: 'Building manager sees who entered which door, when, and through which credential — across every entry point.' },
      ],
      visual: (
        <div className="industry-visual residential">
          <div className="visual-header">
            <span className="visual-eyebrow">LIVE ACTIVITY LOG</span>
            <span className="visual-time">Today</span>
          </div>
          {[
            { name: 'LOBBY · MAIN', time: '14:02 · K. SINGH', active: true },
            { name: 'PARKING · GATE A', time: '14:01 · PLATE AB-9342', active: false },
            { name: 'FLOOR 03 · WEST', time: '13:58 · M. TREMBLAY', active: false },
            { name: 'FLOOR 07 · GYM', time: '13:57 · J. PARK', active: true },
            { name: 'FLOOR 12 · SUITE 1208', time: '13:54 · RESIDENT', active: false },
            { name: 'ROOFTOP · TERRACE', time: '13:51 · VISITOR PASS', active: false },
          ].map((floor, i) => (
            <motion.div 
              key={i}
              className={`floor-item ${floor.active ? 'active' : ''}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <span className="floor-name">{floor.name}</span>
              <span className="floor-time">{floor.time}</span>
            </motion.div>
          ))}
        </div>
      )
    },
    logistics: {
      eyebrow: '02 · LOGISTICS, TRANSPORT, WAREHOUSES, TERMINALS',
      title: 'Read every truck, every container, every driver.',
      desc: 'Built for ports and yards. We pair PDF417 ID reading with biometric face match — the person at the wheel really is the person on the licence — then track the load itself across the site.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
      items: [
        { strong: 'PDF417 Across Every Canadian Province', span: "Driver's licences from BC to NL. Also reads biometric passports and MRZ; NFC chip read on supported documents." },
        { strong: 'Face on Camera vs Photo on ID', span: '1:1 match against the licence photo, in real time. Caught at the booth, not at the loading dock.' },
        { strong: 'License Plate & Container OCR', span: 'ISO 6346 container codes, North American & international plates. Flag the truck and the box on the same record.' },
        { strong: 'Real-Time Visibility, Centralized', span: 'Operations sees every gate movement live. Replay any window. Export anything. All on our own platform — no third-party stitching.' },
      ],
      visual: (
        <div className="logistics-visual">
          <div className="visual-header">
            <span className="visual-eyebrow">YARD OPERATIONS</span>
            <span className="visual-time">Live</span>
          </div>
          <div className="logistics-grid">
            <div className="gate gate-1">GATE 01</div>
            <div className="gate gate-2">GATE 02</div>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <div className="truck"><span>🚛</span> TRK-481</div>
            <div className="container c-blue"><span>📦</span> MSCU 33</div>
            <div className="container c-orange"><span>📦</span> HLBU 47</div>
            <div className="container c-purple"><span>📦</span> CMAU 12</div>
            <div className="container c-blue"><span>📦</span> EVRG 08</div>
            <div className="container c-orange"><span>📦</span> YMLU 19</div>
            <div className="container c-purple"><span>📦</span> ONEU 02</div>
          </div>
          <div className="logistics-stats">
            <div><strong>1,284</strong><span>Movements Today</span></div>
            <div><strong>4</strong><span>Gates Live</span></div>
            <div><strong>0</strong><span>Open Exceptions</span></div>
          </div>
        </div>
      )
    },
    finance: {
      eyebrow: '03 · FINANCE, NOTARY PUBLIC, REGULATED COUNTERS',
      title: 'Two checks at the counter. Zero room for fraud.',
      desc: "When a notary or financial advisor confirms a client's identity, the same workflow does both checks: the ID is genuine (PDF417 parsed, hashed, validated), and the person presenting it is the person on it.",
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      items: [
        { strong: 'Live Face vs ID Photo', span: '1:1 verification with liveness detection — defeats printed photos, screen replays, and 3D masks.' },
        { strong: 'PDF417 Parsing for Forgery Checks', span: 'Decodes the barcode on the back of the licence and validates field consistency — a second, independent fraud signal.' },
        { strong: 'Audit-Ready Record', span: 'Every verification is timestamped, hashed, and exportable. Defensible if ever challenged.' },
        { strong: 'Lower Fraud Risk, Faster Onboarding', span: 'Cuts identity fraud at the counter and shortens KYC steps from minutes to seconds.' },
      ],
      visual: (
        <div className="finance-visual">
          <div className="visual-header">
            <span className="visual-eyebrow">VERIFICATION SESSION</span>
            <span className="visual-time">Active</span>
          </div>
          <div className="finance-grid">
            <div className="id-card front">
              <div className="id-avatar">
                <User className="icon-sm" />
              </div>
              <div className="id-info">
                <strong>DRIVER'S LICENCE</strong>
                <div>SURNAME · DOE</div>
                <div>GIVEN · JANE M</div>
                <div>DOB · 1989·04·12</div>
                <div>EXP · 2029·04·12</div>
              </div>
              <span className="id-side">FRONT</span>
            </div>
            <div className="id-card back">
              <div className="pdf417-barcode" />
              <span className="id-side">BACK · PDF417</span>
            </div>
            <div className="match-badge">
              <Shield className="icon-sm" />
              1 : 1 MATCH · 99.4%
            </div>
            <div className="live-verification">
              <div className="live-avatar">
                <Fingerprint className="icon-sm" />
              </div>
              <div className="live-details">
                <strong>VERIFIED</strong>
                <div>LIVENESS · PASS</div>
                <div>PDF417 · VALID</div>
                <div>SESSION · A8F2-D1</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // NEW: Manufacturing Industry
    manufacturing: {
      eyebrow: '04 · MANUFACTURING, FACTORIES, PRODUCTION',
      title: 'Secure the floor. Track the workforce.',
      desc: 'Manufacturing facilities need fast, reliable access control for shift workers, contractors, and visitors. Biometrics eliminate badge sharing and ensure only authorized personnel enter restricted zones.',
      image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&h=400&fit=crop',
      items: [
        { strong: 'Shift-Based Access Control', span: 'Configure time-based access for day, night, and weekend shifts. Workers can only enter during their scheduled hours.' },
        { strong: 'Contractor & Visitor Management', span: 'Pre-register contractors with ID verification. Set expiration dates and zone restrictions automatically.' },
        { strong: 'Restricted Zone Enforcement', span: 'Limit access to hazardous areas, chemical storage, and sensitive production floors. Every entry is logged.' },
        { strong: 'Hardware Integration', span: 'Works with turnstiles, door locks, and existing security cameras. No rip-and-replace required.' },
        { strong: 'Attendance & Labor Tracking', span: 'Automated time and attendance records. Know who is on site, when they arrived, and where they went.' },
      ],
      visual: (
        <div className="industry-visual manufacturing">
          <div className="visual-header">
            <span className="visual-eyebrow">FLOOR ACCESS · SHIFT A</span>
            <span className="visual-time">06:00 - 14:00</span>
          </div>
          {[
            { name: 'PRODUCTION · LINE 1', time: '06:02 · J. WILSON', active: true },
            { name: 'PRODUCTION · LINE 2', time: '06:05 · M. CHEN', active: true },
            { name: 'CHEMICAL · STORAGE', time: '06:01 · A. RODRIGUEZ', active: false },
            { name: 'QUALITY · LAB', time: '05:58 · S. PATEL', active: true },
            { name: 'MAINTENANCE · SHOP', time: '06:10 · K. THOMPSON', active: false },
            { name: 'WAREHOUSE · BAY 1', time: '06:03 · L. JOHNSON', active: true },
          ].map((floor, i) => (
            <motion.div 
              key={i}
              className={`floor-item ${floor.active ? 'active' : ''}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <span className="floor-name">{floor.name}</span>
              <span className="floor-time">{floor.time}</span>
            </motion.div>
          ))}
          <div className="manufacturing-stats">
          <div><strong style={{ marginRight: "8px" }}>142</strong><span>On Site</span></div>
<div><strong style={{ marginRight: "8px" }}>12</strong><span>Contractors</span></div>
<div><strong style={{ marginRight: "8px" }}>0</strong><span>Alerts</span></div>
          </div>
        </div>
      )
    },
    // NEW: Oil & Gas Industry
    oilandgas: {
      eyebrow: '05 · OIL & GAS, ENERGY, EXTRACTION',
      title: 'Mission-critical access in high-risk environments.',
      desc: 'Oil and gas facilities demand the highest security standards. Biometric access control ensures only trained, authorized personnel enter drilling sites, refineries, and pipeline operations. No credentials to lose in the field.',
      image: 'https://images.unsplash.com/photo-1548611635-b6e7827d7c4a?w=600&h=400&fit=crop',
      items: [
        { strong: 'Remote Site Access Control', span: 'Works in harsh environments with limited connectivity. Facial recognition operates offline with cached templates.' },
        { strong: 'Emergency Response Management', span: 'Track personnel locations during emergencies. Real-time headcounts for evacuation and rescue operations.' },
        { strong: 'Certification & Training Verification', span: 'Link access to certifications (H2S, first aid, safety training). Expired certs automatically revoke access.' },
        { strong: 'Vehicle & Equipment Tracking', span: 'Monitor all vehicles entering site perimeters. Flag unauthorized or unmaintained equipment.' },
        { strong: 'Incident Forensics', span: 'Complete audit trail for every entry. Retrace personnel movements during incident investigations.' },
        { strong: 'Harsh Environment Ready', span: 'IP-rated cameras and hardware options for dust, moisture, and extreme temperatures.' },
      ],
      visual: (
        <div className="industry-visual oilandgas">
          <div className="visual-header">
            <span className="visual-eyebrow">SITE OPERATIONS · WELL 7</span>
            <span className="visual-time">Active</span>
          </div>
          {[
            { name: 'GATE · MAIN ENTRY', time: '06:30 · D. BROWN', active: true },
            { name: 'DRILLING · PLATFORM', time: '06:28 · S. MITCHELL', active: true },
            { name: 'REFINERY · EAST', time: '06:15 · R. GARCIA', active: false },
            { name: 'PIPELINE · STATION 3', time: '06:20 · T. ANDERSON', active: true },
            { name: 'STORAGE · TANK FARM', time: '06:10 · C. LEE', active: false },
            { name: 'MAINTENANCE · YARD', time: '06:02 · P. O\'BRIEN', active: true },
          ].map((floor, i) => (
            <motion.div 
              key={i}
              className={`floor-item ${floor.active ? 'active' : ''}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <span className="floor-name">{floor.name}</span>
              <span className="floor-time">{floor.time}</span>
            </motion.div>
          ))}
          <div className="oilgas-stats">
          <div><strong>87&nbsp;&nbsp;</strong><span>Personnel On Site</span></div>
<div><strong>6&nbsp;&nbsp;</strong><span>Vehicles Active</span></div>
<div><strong>100%&nbsp;&nbsp;</strong><span>Certified</span></div>
<div><strong>0&nbsp;&nbsp;</strong><span>Incidents</span></div>
          </div>
        </div>
      )
    }
  };

  return (
    <div className="app">
{/* ===== NAVBAR - FIXED ===== */}
<header className="navbar" id="navbar">
  <div className="container">
    <div className="nav-inner">
      <a href="/" className="logo">
        <div className="logo-icon">
          <img 
            src="https://identifyed.ca/assets/identifica-isotipo.png" 
            alt="IDENTIFYED.CA" 
            className="logo-image"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
        <span className="logo-text">
          identi<span className="logo-accent">fyed</span>.ca
        </span>
      </a>

      <nav className="nav-links">
        {navLinks.map(link => (
          <a 
            key={link.href} 
            href={link.href} 
            className="nav-link"
            onClick={(e) => scrollToSection(e, link.href)}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="nav-cta">
        <a href="tel:+18253330601" className="btn btn-ghost">
          Talk to Sales
        </a>
        <a href="#contact" className="btn btn-primary" onClick={(e) => scrollToSection(e, '#contact')}>
          Book a Demo <ChevronRight className="icon-sm" />
        </a>
      </div>

      <button 
        className="mobile-menu-btn"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X className="icon-md" /> : <Menu className="icon-md" />}
      </button>
    </div>
  </div>

  {/* Mobile Menu - Outside container for full width */}
  <AnimatePresence>
    {mobileMenuOpen && (
      <motion.div 
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
        className="mobile-menu-wrapper"
      >
        <div className="container">
          <div className="mobile-menu-inner">
            {navLinks.map(link => (
              <a 
                key={link.href} 
                href={link.href} 
                className="mobile-nav-link"
                onClick={(e) => scrollToSection(e, link.href)}
              >
                {link.label}
              </a>
            ))}
            <div className="mobile-cta">
              <a href="tel:+18253330601" className="btn btn-ghost btn-block">
                Talk to Sales
              </a>
              <a href="#contact" className="btn btn-primary btn-block" onClick={(e) => scrollToSection(e, '#contact')}>
                Book a Demo <ChevronRight className="icon-sm" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
</header>

      {/* ===== HERO CAROUSEL ===== */}
      <section className="hero-carousel-section" id="hero">
        <HeroCarousel />
      </section>

      <section className="hero" id="hero">
  <div className="hero-bg-pattern"></div>


  <div className="container">
    <div className="hero-grid">
      {/* Left Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp}>
          <span className="eyebrow">
            <Shield className="icon-xs" />
            Biometric Access Control · 100% Proprietary Software
          </span>
        </motion.div>

        <motion.h1 variants={fadeInUp} className="hero-title">
          See who's at every door, gate, & dock —{" "}
          <span className="hero-accent">In Real Time.</span>
        </motion.h1>

        <motion.p variants={fadeInUp} className="hero-desc">
        <span className="logo-text1">
          identi<span className="logo-accent">fyed</span>.ca
        </span> delivers facial recognition, biometric and non-biometric ID documents: Passports, local IDS,
          and license plate & container tracking on the hardware you already
          own. One platform. One price. Fully predictable.
        </motion.p>

        <motion.div variants={fadeInUp} className="hero-actions">
          <a
            href="#contact"
            className="btn btn-primary"
            onClick={(e) => scrollToSection(e, "#contact")}
          >
            Book a Demo <ChevronRight className="icon-sm" />
          </a>

          <a
            href="#industries"
            className="btn btn-ghost"
            onClick={(e) => scrollToSection(e, "#industries")}
          >
            See it by Industry
          </a>
        </motion.div>
      </motion.div>

      {/* Right Side Image with Scanning Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="hero-image-card"
      >
        <div className="scan-container">
          <img
            src="https://res.cloudinary.com/dm9gg8yss/image/upload/v1782150950/f1934079-77af-4d72-8ee4-ff9ae84e8e33_bgw4vz.png"
            alt="Security Monitoring Dashboard"
            className="hero-image"
          />
          
          {/* Scanning Line */}
          <div className="scan-line"></div>
          
          {/* Scanning Corners */}
          <div className="scan-corner tl"></div>
          <div className="scan-corner tr"></div>
          <div className="scan-corner bl"></div>
          <div className="scan-corner br"></div>
          
          {/* Scanning Grid Overlay */}
          <div className="scan-grid"></div>
          
          {/* Pulsing Dot */}
          <div className="scan-dot"></div>
          
          {/* Scanning Status Text */}
          <div className="scan-status">
            <span className="scanning-text">🔍 SCANNING</span>
            <span className="scan-dots">
              <span>.</span><span>.</span><span>.</span>
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>

{/* ===== TRUST BAR ===== */}
<div className="trust-bar">
  <div className="container">
    <div className="trust-inner">
      <span><Shield className="icon-xs" /> PIPEDA &amp; Privacy Aligned</span>
      <span><FileText className="icon-xs" /> ID Verification · PDF417 / NFC / MRZ</span>
      <span><Car className="icon-xs" /> ALPR · Plate &amp; Container OCR</span>
      <span><Database className="icon-xs" /> On-Premise or Cloud Deploy</span>
      <span><Camera className="icon-xs" /> Any Camera · Hardware Agnostic</span>
    </div>
  </div>
</div>

      {/* ===== STATS BANNER ===== */}
      <div className="stats-banner">
        <div className="container">
          <div className="stats-grid">
            {statsData.map((stat, i) => (
              <motion.div 
                key={i} 
                className="stat-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
              >
                <stat.icon className="stat-icon" />
                <strong className="stat-value">{stat.value}</strong>
                <span className="stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== INDUSTRIES ===== */}
      <section id="industries" className="section industries-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="section-header"
          >
            <motion.span variants={fadeInUp} className="eyebrow">
              Built for Five Environments
            </motion.span>
            <motion.h2 variants={fadeInUp} className="section-title">
              One platform. Many industries that look nothing alike.
            </motion.h2>
            <motion.p variants={fadeInUp} className="section-desc">
              Every deployment is shaped to the customer — same engine, different doors. Pick a context to see how it works.
            </motion.p>
          </motion.div>

          <div className="tabs">
            {industryTabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              >
                <span className="tab-number">{String(index + 1).padStart(2, '0')}</span>
                <tab.icon className="icon-sm" />
                <span className="tab-label">{tab.label}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {activeTab && (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="tab-content"
              >
                <div className="tab-text">
                  <span className="eyebrow">{industryContent[activeTab].eyebrow}</span>
                  <h3 className="tab-title">{industryContent[activeTab].title}</h3>
                  <p className="tab-desc">{industryContent[activeTab].desc}</p>
                  <ul className="tab-list">
                    {industryContent[activeTab].items.map((item, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="tab-list-item"
                      >
                        <strong>{item.strong}</strong>
                        <p>{item.span}</p>
                      </motion.li>
                    ))}
                  </ul>
                  <a href="#contact" className="btn btn-primary" onClick={(e) => scrollToSection(e, '#contact')}>
                    Book a Walkthrough <ChevronRight className="icon-sm" />
                  </a>
                </div>

                <div className="tab-visual">
                  <img 
                    src={industryContent[activeTab].image} 
                    alt={industryContent[activeTab].title}
                    className="tab-image"
                  />
                  <div className="tab-visual-overlay">
                    {industryContent[activeTab].visual}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ===== CAPABILITIES ===== */}
      <section id="capabilities" className="section capabilities-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="section-header text-center"
          >
            <motion.span variants={fadeInUp} className="eyebrow">
              Capabilities
            </motion.span>
            <motion.h2 variants={fadeInUp} className="section-title">
              Everything the camera can read, in one engine.
            </motion.h2>
            <motion.p variants={fadeInUp} className="section-desc mx-auto">
            <span className="logo-text1">
          identi<span className="logo-accent">fyed</span>.ca
        </span> isn't a face module bolted onto someone else's stack. Built by us.
            </motion.p>
          </motion.div>

          <div className="capabilities-showcase">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="capability-item"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="capability-image-wrapper">
                  <img src={feature.image} alt={feature.title} className="capability-image" />
                  <div className="capability-image-overlay">
                    <feature.icon className="capability-icon" />
                  </div>
                </div>
                <div className="capability-content">
                  <div className="capability-header">
                    <span className="capability-tag">{feature.tag}</span>
                    <h3 className="capability-title">{feature.title}</h3>
                  </div>
                  <p className="capability-desc">{feature.desc}</p>
                  <div className="capability-connector">
                    <span className="connector-line"></span>
                    <span className="connector-dot"></span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="capabilities-stats"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="cap-stat">
              <Zap className="cap-stat-icon" />
              <div>
              <strong>&gt;100ms</strong>
                <span>On-Device, Real-Time Verification</span>
              </div>
            </div>
            <div className="cap-stat">
              <Cpu className="cap-stat-icon" />
              <div>
                <strong>100%</strong>
                <span>Own Software Stack</span>
              </div>
            </div>
            <div className="cap-stat">
              <Globe className="cap-stat-icon" />
              <div>
                <strong>Hardware-Agnostic</strong>
                <span>Works with What You Have</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

{/* ===== HARDWARE PIPELINE ===== */}
<section className="section pipeline-section">
  <div className="container">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="section-header text-center"
    >
      <motion.span variants={fadeInUp} className="eyebrow">
        Hardware-Agnostic
      </motion.span>
      <motion.h2 variants={fadeInUp} className="section-title">
        No specialized equipment. Use what you already own.
      </motion.h2>
      <motion.p variants={fadeInUp} className="section-desc mx-auto">
        Most sites are already 80% of the way there. We layer software on top of the cameras, doors, and gates you have.
      </motion.p>
    </motion.div>

    <div className="pipeline-grid">
      <motion.div 
        className="pipeline-col"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
<div className="pipeline-icon hardware-icon">
  <Camera size={34} />
</div>
<div className="pipeline-label">YOUR HARDWARE</div>
        <div className="pipeline-items">
        <div className="pipeline-item">
  <ScanSearch className="pipeline-icon green" />
  USB / IP Webcam <em>Face Recognition</em>
</div>

<div className="pipeline-item">
  <Radar className="pipeline-icon blue" />
  Recording Camera <em>License Plate Recognition</em>
</div>

<div className="pipeline-item">
  <Container className="pipeline-icon cyan" />
  Recording Camera <em>Container Tracking</em>
</div>

<div className="pipeline-item">
  <ShieldCheck className="pipeline-icon purple" />
  ID Scanner <em>PDF417 / NFC Verification</em>
</div>
        </div>
      </motion.div>

      <motion.div 
        className="pipeline-engine"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
<div className="pipeline-icon engine-icon">
  <Cpu size={34} />
</div>
<div className="pipeline-label">IDENTIFYED ENGINE</div>
        <div className="engine-items">
          {['FACE · 1:1 / 1:N', 'ALPR · Plate', 'ISO 6346 · Container', 'PDF417 · NFC · MRZ'].map((item, i) => (
            <div key={i} className="engine-item">{item}</div>
          ))}
<div className="engine-foot">
  <LayoutDashboard className="engine-foot-icon" />
  <span>Central Console</span>
</div>
        </div>
      </motion.div>

      <motion.div
  className="pipeline-col"
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.3 }}
>
<div className="pipeline-icon control-icon-main">
  <ShieldCheck size={34} />
</div>
<div className="pipeline-label">YOUR CONTROLS</div>

  <div className="pipeline-items">
    <div className="pipeline-item">
      <DoorOpen className="control-icon orange" />
      Turnstiles
    </div>

    <div className="pipeline-item">
      <ShieldCheck className="control-icon orange" />
      Doors / Strikes / Mag Locks
    </div>

    <div className="pipeline-item">
      <Fence className="control-icon orange" />
      Vehicle Barriers · Gates
    </div>
  </div>
</motion.div>
    </div>

    <p className="pipeline-footnote">
      Speaks <strong>OSDP</strong> · <strong>RELAY</strong> · <strong>REST APIs</strong> · <strong>RTSP</strong> — works with what you have, talks to what you add.
    </p>
  </div>
</section>

      {/* ===== WHY BIOMETRICS ===== */}
      <section id="why" className="section why-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="section-header text-center"
          >
            <motion.span variants={fadeInUp} className="eyebrow">
              Biometrics vs Cards, Fobs &amp; Tokens
            </motion.span>
            <motion.h2 variants={fadeInUp} className="section-title">
              The card you can't lose, share, or clone is your face.
            </motion.h2>
            <motion.p variants={fadeInUp} className="section-desc mx-auto">
              Cards and tokens were always a workaround for a problem we can now solve directly.
            </motion.p>
          </motion.div>

          <div className="compare-grid">
            <motion.div 
              className="compare-card legacy"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="compare-icon"><XCircle className="icon-lg text-red-400" /></div>
              <h3 className="compare-title">
                Cards · Fobs · PINs
                <span className="compare-badge legacy">Legacy</span>
              </h3>
              <p className="compare-sub">A credential is whoever is holding it.</p>
              <ul className="compare-list">
                {[
                  'Lost, lent, or stolen — and no one notices until later',
                  'Cloning a fob takes seconds and a $30 device',
                  'PINs get written on sticky notes and shared in group chats',
                  'Re-issuing credentials after turnover is slow and expensive',
                  'No way to know who walked through the door — only which card',
                ].map((item, i) => (
                  <li key={i} className="compare-item">
                    <XCircle className="icon-sm text-red-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              className="compare-card modern"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="compare-icon"><CheckCircle className="icon-lg text-green-500" /></div>
              <h3 className="compare-title">
                        <span className="logo-text1">
          identi<span className="logo-accent">fyed</span>.ca
        </span> Biometrics
                <span className="compare-badge modern">Modern</span>
              </h3>
              <p className="compare-sub">The credential is the person.</p>
              <ul className="compare-list">
                {[
                  "Can't be lost, lent, copied, or sold",
                  'Liveness defeats photos, screens, masks, and 3D prints',
                  'Onboarding takes seconds; off-boarding is one click',
                  'Audit log shows the actual person, not just a credential ID',
                  'Falls back gracefully — face, then ID document, then operator',
                ].map((item, i) => (
                  <li key={i} className="compare-item">
                    <CheckCircle className="icon-sm text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="stats-bars">
            <div className="stat-bar-wrapper">
              <div className="stat-bar-label">
                <span>Cards lost or shared per yr</span>
                <span className="stat-bar-value red">~14%</span>
              </div>
              <div className="stat-bar-track">
                <motion.div 
                  className="stat-bar-fill red"
                  initial={{ width: 0 }}
                  whileInView={{ width: '78%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
              </div>
              <p className="stat-bar-foot">Industry avg. for shared workplaces — every lost card is an open door.</p>
            </div>
            <div className="stat-bar-wrapper">
              <div className="stat-bar-label">
                <span>Faces lost or shared per yr</span>
                <span className="stat-bar-value green">0%</span>
              </div>
              <div className="stat-bar-track">
                <motion.div 
                  className="stat-bar-fill green"
                  initial={{ width: 0 }}
                  whileInView={{ width: '2%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
              <p className="stat-bar-foot">Can't be lent, copied, or left at home. Off-boarding is one click.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CLIENTS ===== */}
      <section id="clients" className="section clients-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="section-header text-center"
          >
            <motion.span variants={fadeInUp} className="eyebrow">
              Our Clients
            </motion.span>
            <motion.h2 variants={fadeInUp} className="section-title">
              Trusted by organizations across the Americas
            </motion.h2>
            <motion.p variants={fadeInUp} className="section-desc mx-auto">
              From global ports to local notaries, we secure access for industry leaders.
            </motion.p>
          </motion.div>

          <motion.div 
            className="clients-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {clients.map((client, i) => (
              <motion.a 
                key={i}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUp}
                className="client-card"
                style={{ 
                  background: client.bg,
                  color: client.color
                }}
              >
                {client.logo ? (
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="client-logo"
                    style={{ 
                      filter: client.color === '#fff' ? 'brightness(0) invert(1)' : 'none',
                      maxHeight: '40px',
                      maxWidth: '120px',
                      objectFit: 'contain'
                    }}
                  />
                ) : (
                  <div className="client-name">{client.name}</div>
                )}
                <div className="client-description">{client.description}</div>
                <div className="client-arrow">→</div>
              </motion.a>
            ))}
          </motion.div>

          <div className="client-memberships">
            <span>
              <img 
                src="https://www.citt.ca/Assets/CITT/Images/logo.svg" 
                alt="CITT" 
                className="membership-logo"
              />
              Member of CITT
            </span>
            <span>
              <img 
                src="https://crcpvalpo.cl/wp-content/uploads/2021/12/Logo_CRCP_2021-01.png" 
                alt="Regional Chamber of Commerce Valparaíso" 
                className="membership-logo"
              />
              Member of Regional Chamber of Commerce Valparaíso
            </span>
          </div>

          <div className="client-awards">
            <span>🏅 Entrepreneurial Merit Medal 2025</span>
          </div>
        </div>
      </section>

      {/* ===== PRIVACY ===== */}
      <section id="privacy" className="section privacy-section">
        <div className="container">
          <div className="privacy-grid">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.span variants={fadeInUp} className="eyebrow">
                Privacy &amp; Ownership
              </motion.span>
              <motion.h2 variants={fadeInUp} className="section-title">
                Compliant with Canadian privacy law. <span className="text-green">By design.</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="section-desc">
                We treat biometric data as the regulated material it is. Templates are encrypted, residency-controlled, and accessible only to the operators you authorize.
              </motion.p>
              <motion.ul variants={staggerContainer} className="privacy-list">
                {[
  'Aligned with PIPEDA',
  'Biometric verification occurs within the app and is never sent elsewhere',
  'Data residency on Canadian infrastructure — or on your own premises',
  'Face templates stored as one-way embeddings, never raw photos',
  'Full audit trail; right-to-erasure tooling included'
].map((item, i) => (
                  <motion.li key={i} variants={fadeInUp} className="privacy-item">
                    <CheckCircle className="icon-sm text-green" />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div 
              className="parent-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="parent-label">Backed by our parent company</div>
              <div className="parent-logo">
                <div className="logo-icon">
                  <div className="logo-mark" />
                </div>
                <span className="parent-name">
                  identifyed<span className="text-green">.ca</span>
                </span>
              </div>
              <p className="parent-desc">
                        <span className="logo-text1">
          identi<span className="logo-accent">fyed</span>.ca
        </span> is the Canadian operation of identi<span className="logo-accent">fica</span>.ai — a Chilean biometrics group with a decade of port, retail, and public-sector deployments across Latin America. We bring that engine north, with Canadian-resident infrastructure and support.
              </p>
              <div className="parent-meta">
                <div><strong>10+ YRS</strong>Biometrics R&amp;D</div>
                <div><strong>Canada &amp; LATAM</strong>Regional Reach</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <div className="contact-grid">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.span variants={fadeInUp} className="eyebrow">
                Get in Touch
              </motion.span>
              <motion.h2 variants={fadeInUp} className="section-title">
                Tell us about <span className="text-green">your needs.</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="section-desc">
                Sales walks you through pricing and a pilot scope. Support is staffed for live deployments. We'll match you to whichever team fits.
              </motion.p>

              <motion.div variants={staggerContainer} className="contact-channels">
              <motion.div variants={fadeInUp} className="contact-channel">
  <Phone className="channel-icon" />
  <div>
    <div className="channel-label">Sales</div>
    <div className="channel-name">Sales Team</div>
    <div className="channel-links">
      <a href="tel:+18253330601">+1 (825) 333 0601</a>
      <a href="mailto:contact@identifyed.ca">contact@identifyed.ca</a>
    </div>
  </div>
</motion.div>

<motion.div variants={fadeInUp} className="contact-channel">
  <ShieldCheck className="channel-icon" />
  <div>
    <div className="channel-label">Support · Live Deployments</div>
    <div className="channel-name">24 / 7 Incident Line</div>
    <div className="channel-links">
      <a href="tel:+17808517424">+1 (780) 851 7424</a>
      <a href="mailto:support@identifyed.ca">support@identifyed.ca</a>
    </div>
  </div>
</motion.div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="form-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {!formSubmitted ? (
                <form onSubmit={handleFormSubmit}>
                  <h3 className="form-title">Book a Demo</h3>
                  <p className="form-sub">Tell us a little about the site. We'll come back within one business day.</p>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label>Name *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Jane Tremblay"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Organization</label>
                      <input
                        type="text"
                        value={formData.org}
                        onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                        placeholder="Acme Property Group"
                      />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label>Work Email *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@acme.ca"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 ___ ___ ____"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Industry</label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    >
                      <option value="residential">Residential / Condominiums</option>
                      <option value="office">Office / Commercial</option>
                      <option value="logistics">Logistics / Port / Warehouse</option>
                      <option value="finance">Finance / Notary Public</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="oilandgas">Oil & Gas</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>What are you trying to secure?</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows="3"
                      placeholder="e.g. 4 entry points across two condo buildings — currently using fobs."
                    />
                  </div>

                  <div className="form-submit">
                    <span className="form-legal">By submitting you agree to our privacy notice.</span>
                    <button type="submit" className="btn btn-primary">
                      Send Request <ChevronRight className="icon-sm" />
                    </button>
                  </div>
                </form>
              ) : (
                <div className="form-success">
                  <div className="success-icon">
                    <CheckCircle className="icon-lg" />
                  </div>
                  <h4>Request received.</h4>
                  <p>We'll be in touch within one business day.</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="logo">
              <div className="logo-icon">
  <img 
    src="https://identifyed.ca/assets/identifica-isotipo.png" 
    alt="IDENTIFYED.CA LOGO" 
    className="logo-image"
  />
</div>
                <span className="logo-text">
                  identi<span className="logo-accent">fyed</span>.ca
                </span>
              </div>
              <p className="footer-desc">Biometric access control. Serving over 20+ facilities.</p>
            </div>

            <div>
              <h5>Industries</h5>
              <div className="footer-links">
                <a href="#residential" onClick={(e) => scrollToSection(e, '#industries')}>Residential</a>
                <a href="#logistics" onClick={(e) => scrollToSection(e, '#industries')}>Logistics</a>
                <a href="#finance" onClick={(e) => scrollToSection(e, '#industries')}>Finance &amp; Notary</a>
                <a href="#manufacturing" onClick={(e) => scrollToSection(e, '#industries')}>Manufacturing</a>
                <a href="#oilandgas" onClick={(e) => scrollToSection(e, '#industries')}>Oil &amp; Gas</a>
              </div>
            </div>

            <div>
              <h5>Capabilities</h5>
              <div className="footer-links">
                <a href="#capabilities" onClick={(e) => scrollToSection(e, '#capabilities')}>Facial Recognition</a>
                <a href="#capabilities" onClick={(e) => scrollToSection(e, '#capabilities')}>PDF417 / ID Reading</a>
                <a href="#capabilities" onClick={(e) => scrollToSection(e, '#capabilities')}>License Plate &amp; Container OCR</a>
              </div>
            </div>

            <div>
              <h5>Company</h5>
              <div className="footer-links">
                <a href="#privacy" onClick={(e) => scrollToSection(e, '#privacy')}>Privacy &amp; Compliance</a>
                <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>Contact Sales</a>
                <a href="mailto:contact@identifyed.ca">Support</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026         <span className="logo-text1">
          identi<span className="logo-accent">fyed</span>.ca
        </span> · All Rights Reserved</span>
            <div className="footer-powered">
              <span>Powered by</span>
              <span className="powered-name">NEWSTACK</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default IdentifyedApp;