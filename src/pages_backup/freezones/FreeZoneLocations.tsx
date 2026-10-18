// File: src/pages/freezones/FreeZoneLocations.tsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Globe, ArrowRight, Sparkles, CheckCircle2, Building2, TrendingUp,
  Briefcase, Phone, MessageCircle, Home as HomeIcon, Clock,
  Users, Award, FileText, DollarSign, Zap, Target, Crown, Store, Package,
  ShoppingCart, UserCheck, Cpu, Factory, Truck, Ship,
  Anchor, MapPin, CreditCard, BadgeCheck,
  Scale, Layers,  Shield,
  Rocket, GraduationCap, Landmark, Compass,
  Plane,  BarChart3,Heart, 
  Wallet,  Home,
} from 'lucide-react';
import { getWhatsAppLink } from '../../lib/whatsapp';
import WhatsAppIcon from '../../components/icons/WhatsAppIcon';

// ============ DATA ============

const stats = [
  { icon: Building2, value: '30+', label: 'Free Zones in Dubai', color: 'from-amber-400 to-orange-600' },
  { icon: Globe, value: '100%', label: 'Foreign Ownership', color: 'from-orange-400 to-red-600' },
  { icon: DollarSign, value: '0%', label: 'Tax Rate', color: 'from-red-400 to-rose-600' },
  { icon: Clock, value: '3-7', label: 'Days Setup', color: 'from-rose-400 to-pink-600' },
];

const benefits = [
  {
    icon: Globe,
    title: '100% Foreign Ownership',
    description: 'No local sponsor needed. Complete control over your company structure, operations, and profits — excellent for small business owners and international companies.',
    color: 'from-amber-400 to-orange-600'
  },
  {
    icon: Wallet,
    title: 'Full Repatriation of Profits & Capital',
    description: 'Send 100% of your profits and initial investment back to your home country without limits — beneficial for international investors building global financial liquidity.',
    color: 'from-orange-400 to-red-600'
  },
  {
    icon: Package,
    title: 'Duty Exemptions on Import & Export',
    description: 'Complete exemptions from duties on import and export as long as goods are consumed in the free zone or re-exported — ideal for trading, manufacturing, and logistics.',
    color: 'from-red-400 to-rose-600'
  },
  {
    icon: DollarSign,
    title: 'Affordable Business Formation Packages',
    description: 'Flexible, affordable company formation packages. Start businesses without an office address or employee visas — easier for start-ups and freelancers.',
    color: 'from-rose-400 to-pink-600'
  },
  {
    icon: Zap,
    title: 'Quick Corporate Licensing Process',
    description: 'Streamlined documentation and approvals. Obtain your trade license within a few working days, with complete remote registration from overseas.',
    color: 'from-pink-400 to-fuchsia-600'
  },
  {
    icon: Building2,
    title: 'Custom Office & Warehousing Options',
    description: 'Maximum flexibility — from flexi-desks and co-working spaces to private offices and industrial warehouses. Whatever you plan, there\'s a suitable option.',
    color: 'from-fuchsia-400 to-purple-600'
  },
];

const majorFreeZones = [
  {
    name: 'Dubai Silicon Oasis (DSO)',
    slug: 'dubai-silicon-oasis',
    ideal: 'IT, Electronics, Software, AI',
    description: 'Perfect for tech innovators, startups, and companies building smart products.',
    facilities: 'Tech parks, coworking hubs, innovation labs',
    proximity: 'Near universities and research institutions',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80',
    color: 'from-cyan-400 to-blue-600',
    icon: Cpu
  },
  {
    name: 'Dubai Airport Free Zone (DAFZA)',
    slug: 'dubai-airport-free-zone',
    ideal: 'Aviation, Logistics, Electronics, Pharma',
    description: 'Strategic location for global trade with seamless airport connectivity.',
    facilities: '24/7 customs support, modern warehousing',
    proximity: 'Next to Dubai International Airport',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80',
    color: 'from-blue-400 to-indigo-600',
    icon: Plane
  },
  {
    name: 'Jebel Ali Free Zone (JAFZA)',
    slug: 'jafza',
    ideal: 'Manufacturing, Industrial, Export',
    description: 'Best for large-scale industries requiring proximity to sea and land transport hubs.',
    facilities: 'Industrial infrastructure and staff accommodations',
    proximity: 'Jebel Ali Port & Al Maktoum Airport access',
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200&q=80',
    color: 'from-indigo-400 to-violet-600',
    icon: Factory
  },
  {
    name: 'Dubai South (DWC)',
    slug: 'dubai-south',
    ideal: 'E-commerce, Aviation, Logistics',
    description: 'Fast-growing business district with focus on innovation and trade.',
    facilities: 'Expo 2020 legacy zone, cargo corridor',
    proximity: 'Home to Al Maktoum Airport & Emirates logistics city',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1200&q=80',
    color: 'from-violet-400 to-purple-600',
    icon: Truck
  },
  {
    name: 'International Free Zone Authority (IFZA)',
    slug: 'ifza',
    ideal: 'Startups, Freelancers, Remote Businesses',
    description: 'Cost-effective and flexible with minimal physical presence required.',
    facilities: 'Wide range of licenses and visa options',
    proximity: 'Fast setup, virtual options, global appeal',
    image: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=1200&q=80',
    color: 'from-purple-400 to-fuchsia-600',
    icon: Rocket
  },
];

const industryZones = [
  { icon: GraduationCap, label: 'Education', zone: 'Dubai Knowledge Park', color: 'from-emerald-400 to-teal-600' },
  { icon: Landmark, label: 'Finance', zone: 'DIFC (Tax-Advantaged)', color: 'from-amber-400 to-orange-600' },
  { icon: Users, label: 'Outsource Services', zone: 'Dubai Outsource City', color: 'from-blue-400 to-indigo-600' },
  { icon: Anchor, label: 'Maritime', zone: 'Dubai Maritime City', color: 'from-cyan-400 to-blue-600' },
];

const licenseTypes = [
  {
    icon: Store,
    title: 'Commercial Licence',
    bestFor: 'Trading, Import/Export, Wholesale & Distribution',
    description: 'For businesses involved in buying, selling, importing or exporting goods. Popular in JAFZA, DMCC, and DAFZA — adjacent to ports and logistics centres.',
    color: 'from-amber-400 to-orange-600'
  },
  {
    icon: Briefcase,
    title: 'Service License',
    bestFor: 'Consultancy, Marketing, Education, Legal, IT, HR, Financial Services',
    description: 'Allows companies to sell "non-physical" services. Found in Dubai Internet City, Dubai Media City, and Dubai Knowledge Park.',
    color: 'from-orange-400 to-red-600'
  },
  {
    icon: Factory,
    title: 'Industrial License',
    bestFor: 'Manufacturing, Assembling, Processing, Packaging',
    description: 'For light and medium manufacturing, assembly, packaging, and warehousing. Based in JAFZA, Dubai Industrial City, and Dubai South.',
    color: 'from-red-400 to-rose-600'
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce License',
    bestFor: 'Online Retailers, Dropshippers, Marketplaces, Digital Product Sellers',
    description: 'For selling products or services through e-commerce platforms. B2C or B2B with payment gateway integrations. Popular in Shams, IFZA, and Dubai CommerCity.',
    color: 'from-rose-400 to-pink-600'
  },
  {
    icon: UserCheck,
    title: 'Freelance Permit',
    bestFor: 'Designers, Developers, Writers, Artists, Educators',
    description: 'For independent individuals to work as freelancers without a formal company. Supports 50+ activities. Suited for Dubai Media City, D3, and RAKEZ.',
    color: 'from-pink-400 to-fuchsia-600'
  },
  {
    icon: Crown,
    title: 'Holding License',
    bestFor: 'Investors, Parent Companies, Asset Managers',
    description: 'Ideal for managing existing assets — shares, real estate, or IP — without commercial activity. Found in ADGM, DIFC, and RAKEZ.',
    color: 'from-fuchsia-400 to-purple-600'
  },
];

const visaSteps = [
  { icon: BadgeCheck, label: 'License Approval' },
  { icon: Layers, label: 'E-Channel Registration' },
  { icon: FileText, label: 'Entry Permit Issuance' },
  { icon: Heart, label: 'Medical Fitness Test' },
  { icon: CreditCard, label: 'Emirates ID Processing' },
  { icon: Shield, label: 'Visa Stamping' },
];

const residenceVisaFeatures = [
  { icon: Globe, label: 'Long-Term Visas' },
  { icon: Scale, label: 'Full Legal Control' },
  { icon: Shield, label: '100% Transparency' },
  { icon: Users, label: 'Family Sponsorship' },
  { icon: Home, label: 'Housing Support' },
  { icon: GraduationCap, label: 'School Guidance' },
  { icon: Heart, label: 'Healthcare Advice' },
  { icon: CreditCard, label: 'Driver\'s License Help' },
];

const growthStats = [
  { icon: Building2, value: '30+', label: 'Free Zones', color: 'from-amber-400 to-orange-600' },
  { icon: Globe, value: 'Global', label: 'Investor Reach', color: 'from-orange-400 to-red-600' },
  { icon: TrendingUp, value: 'Leading', label: 'FDI Destination', color: 'from-red-400 to-rose-600' },
  { icon: DollarSign, value: 'Growing', label: 'Business Economy', color: 'from-rose-400 to-pink-600' },
  { icon: BarChart3, value: 'Significant', label: 'Regional Impact', color: 'from-pink-400 to-fuchsia-600' },
  { icon: Crown, value: 'Preferred', label: 'For Global Business', color: 'from-fuchsia-400 to-purple-600' },
];

const faqs = [
  {
    q: 'What is Dubai Free Zone and why should I opt for it for my business?',
    a: 'Dubai Free Zone is an area with facilities to provide tax exemptions, 100% foreign ownership, and support for international business in the region. They are ideal for entrepreneurs with plans to retain control, expand, and access global markets.'
  },
  {
    q: 'Can I have 100% ownership of my company in a Dubai Free Zone?',
    a: 'Yes. Free zones allow 100% ownership by foreign nationals without needing a local UAE sponsor. You have complete control over your company structure, operations, and profits.'
  },
  {
    q: 'How quick can I establish a company in a free zone?',
    a: 'Most free zones in Dubai are extremely efficient — you can obtain your trade license within 3-7 working days. Some free zones allow complete remote registration from overseas.'
  },
  {
    q: 'Will I have to rent a physical office to apply for a free zone license?',
    a: 'Not always. Many free zones offer flexi-desk and virtual office options, so you can start without a physical office. However, certain licenses and visa quotas may require a physical presence.'
  },
  {
    q: 'Which Dubai Free Zone is most suited for e-commerce or digital startup?',
    a: 'Dubai CommerCity, Shams, and IFZA are especially suited for e-commerce. For digital startups, Dubai Silicon Oasis, Dubai Internet City, and IFZA offer excellent tech-focused ecosystems.'
  },
  {
    q: 'What type of licenses can I get in Dubai Free Zones?',
    a: 'Commercial Licence, Service License, Industrial License, E-Commerce License, Freelance Permit, and Holding License — each tailored to specific business activities.'
  },
  {
    q: 'Are Free Zone companies allowed to trade within Dubai mainland?',
    a: 'Free zone companies cannot trade directly in the mainland market without a local distributor or agent. However, some free zones offer dual licensing options to operate both in the free zone and mainland.'
  },
  {
    q: 'What are the visa options for Free Zone companies?',
    a: 'Free zone companies can sponsor investor visas, employment visas for staff, and family visas for dependents. Each free zone has its own visa quota based on your license and office space.'
  },
  {
    q: 'Can I upgrade or expand my business later?',
    a: 'Yes. You can upgrade your license, add activities, increase visa quota, or relocate to a larger facility as your business grows. Most free zones offer flexible scaling options.'
  },
  {
    q: 'Are there any hidden costs I should be mindful of?',
    a: 'We provide full transparency with all-inclusive pricing. Watch out for renewal fees, visa costs, office space charges, and any activity-specific permits. Setup Zone Dubai ensures no hidden fees.'
  },
];

const relatedServices = [
  { slug: 'bank-account', title: 'Bank Account Opening', description: 'Open UAE business bank accounts with full KYC support.', image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=800&q=80', gradient: 'from-amber-400 to-orange-600' },
  { slug: 'golden-visa', title: 'Golden Visa', description: '10-year UAE residency for investors and talents.', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80', gradient: 'from-amber-400 to-yellow-500' },
  { slug: 'compliance', title: 'Compliance Services', description: 'UBO, ESR, AML, and VAT advisory.', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80', gradient: 'from-rose-400 to-pink-600' },
];

// ============ COMPONENT ============
export default function FreeZoneLocations() {
  return (
    <div className="min-h-screen bg-white">
      {/* === 1. HERO === */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-950/95 via-orange-900/75 to-red-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-32 right-[35%] opacity-15 hidden lg:block">
          <Globe size={140} className="text-white" />
        </motion.div>

        <motion.div animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute bottom-32 left-[10%] opacity-10 hidden lg:block">
          <Compass size={100} className="text-white" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-2 text-sm text-white/80 mb-6 font-medium flex-wrap">
                <Link to="/" className="hover:text-white transition flex items-center gap-1.5"><HomeIcon size={14} />Home</Link>
                <span>/</span><span>Free Zones</span><span>/</span>
                <span className="text-white font-bold">Locations Guide</span>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                <Sparkles size={14} className="text-amber-300" />
                <span className="text-xs font-bold tracking-wider uppercase text-white">Ultimate Guide to Setup & Success</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-3xl mb-6 drop-shadow-lg">
                Free Zone <span className="text-amber-300">Locations in Dubai</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-2xl mb-10 drop-shadow">
                Your complete guide to Dubai's 30+ free zones. 100% foreign ownership, tax incentives, and streamlined business setup — tailored to every industry.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap gap-4">
                <a href="#zones" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-amber-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                  Explore Free Zones
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href={getWhatsAppLink("Hi! I'm interested in Dubai Free Zone setup.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                  <MessageCircle size={16} />WhatsApp
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.9 }} className="mt-10 flex flex-wrap gap-3">
                {['100% Ownership', '0% Tax', '3-7 Days Setup', '30+ Zones'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                    <CheckCircle2 size={12} className="text-amber-300" strokeWidth={3} />
                    <span className="font-semibold text-white">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — Dubai Map Dashboard Card */}
            <div className="lg:col-span-5 relative h-[520px] hidden lg:block">
              <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-amber-400 to-orange-600 opacity-40 blur-[100px]" />

              <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px]">
                <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-amber-300 shadow-[0_0_20px_rgba(251,191,36,0.8)]" />
                <div className="absolute bottom-0 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-orange-300" />
                <div className="absolute top-1/2 left-0 w-2.5 h-2.5 -translate-y-1/2 rounded-full bg-red-300" />
              </motion.div>

              {/* Dubai Map Dashboard Card */}
              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8, type: 'spring', stiffness: 80 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-600 opacity-40 blur-2xl rounded-3xl" />
                  <div className="relative w-[320px] rounded-3xl bg-white/95 backdrop-blur-2xl border border-white shadow-2xl overflow-hidden">
                    <div className="bg-gradient-to-r from-amber-500 to-orange-600 px-5 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Globe size={16} className="text-white" strokeWidth={2.5} />
                        <span className="text-[10px] font-black text-white uppercase tracking-widest">Dubai Free Zones</span>
                      </div>
                      <span className="text-[10px] font-black text-white/80 uppercase tracking-widest">Live</span>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-lg">
                          <MapPin size={22} className="text-white" strokeWidth={2.5} />
                        </div>
                        <div className="flex-1">
                          <div className="text-[9px] font-bold text-txt-muted uppercase tracking-widest">Location</div>
                          <div className="text-sm font-black text-[#0A0F1F]">Dubai, UAE</div>
                        </div>
                        <div className="px-2.5 py-1 rounded-full bg-gradient-to-r from-emerald-400 to-teal-600 shadow-md">
                          <span className="text-[9px] font-black text-white uppercase tracking-widest">Active</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100">
                          <div className="text-[8px] font-bold text-txt-muted uppercase tracking-widest mb-1">Zones</div>
                          <div className="text-lg font-black text-amber-600">30+</div>
                        </div>
                        <div className="p-3 rounded-xl bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100">
                          <div className="text-[8px] font-bold text-txt-muted uppercase tracking-widest mb-1">Setup</div>
                          <div className="text-lg font-black text-orange-600">3-7 Days</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 mb-4">
                        <Plane size={18} className="text-amber-500" />
                        <Ship size={18} className="text-orange-500" />
                        <Truck size={18} className="text-red-500" />
                        <Factory size={18} className="text-rose-500" />
                        <Cpu size={18} className="text-pink-500" />
                        <ShoppingCart size={18} className="text-fuchsia-500" />
                      </div>

                      <div className="pt-4 border-t border-dashed border-border flex items-center justify-between">
                        <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest">Explore</span>
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center">
                          <ArrowRight size={12} className="text-white" strokeWidth={2.5} />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* === 2. STATS ROW === */}
      <section className="relative py-14 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative">
                  <div className="relative overflow-hidden rounded-2xl bg-white border border-border hover:border-transparent transition-all duration-500 p-5 shadow-[0_5px_20px_rgba(15,23,42,0.05)] hover:shadow-[0_15px_40px_rgba(251,191,36,0.15)] hover:-translate-y-1">
                    <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${stat.color}`} />
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <Icon size={20} className="text-white" strokeWidth={2.5} />
                      </div>
                      <div>
                        <div className="text-lg font-black text-[#0A0F1F] leading-none mb-0.5">{stat.value}</div>
                        <div className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 3. INTRODUCTION — Split === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-amber-50/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-600 opacity-20 blur-[80px] rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80" alt="Dubai Free Zones" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center">
                      <Globe size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">Business Hub</div>
                      <div className="text-sm font-black text-[#0A0F1F]">Dubai Skyline</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <Sparkles size={14} className="text-amber-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Introduction to Dubai Free Zones</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-6">
                Your Gateway to <span className="gradient-text">Global Business Success</span>
              </h2>

              <div className="space-y-5 text-base text-[#475569] font-medium leading-relaxed">
                <p>
                  With its impressive skyline and investor-friendly economy, Dubai provides some of the <span className="font-black text-[#0A0F1F]">best free zone locations</span> for entrepreneurs and businesses. A Dubai Free Zone is a specific area where business owners enjoy 100% foreign ownership, tax incentives, and streamlined setup processes.
                </p>
                <p>
                  These zones are designed to attract <span className="font-black text-[#0A0F1F]">foreign direct investment (FDI)</span> by offering efficient startup procedures, modern infrastructure, and financial incentives.
                </p>
                <p>
                  Whether you're launching a <span className="font-black text-[#0A0F1F]">tech startup, export-import business, logistics company, healthcare facility, or media company</span> — Dubai's Free Zones create unparalleled flexibility and opportunities.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mt-8">
                {['100% Foreign Ownership', 'Zero Tax Environment', 'Fast-Track Licensing', 'Global Market Access', 'Industry-Specific Zones', 'World-Class Infrastructure'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 rounded-2xl bg-white border border-border">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center">
                      <CheckCircle2 size={12} className="text-white" strokeWidth={3} />
                    </div>
                    <span className="text-sm font-bold text-[#1E293B]">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === 4. BENEFITS — Dark Premium Section === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-amber-950 via-orange-950 to-red-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.08]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80)' }} />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-amber-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full bg-red-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <Award size={14} className="text-amber-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white">Benefits of Setting Up</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              Advantages of Establishing a Business <span className="bg-gradient-to-r from-amber-300 to-red-300 bg-clip-text text-transparent">in a Dubai Free Zone</span>
            </h2>
            <p className="text-base text-white/70 font-medium">Strategic benefits not found in onshore and offshore locations.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative">
                  <div className={`absolute -inset-2 rounded-[28px] bg-gradient-to-r ${benefit.color} opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500`} />
                  <div className="relative p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon size={26} className="text-white" strokeWidth={2.2} />
                    </div>
                    <h3 className="text-base font-black text-white mb-3 leading-tight">{benefit.title}</h3>
                    <p className="text-xs text-white/70 font-medium leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 5. MAJOR FREE ZONES — Location Cards === */}
      <section id="zones" className="relative py-14 md:py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-amber-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-amber-200 shadow-soft mb-6">
              <MapPin size={14} className="text-amber-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-amber-700">Complete Location Guide</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Major Free Zones <span className="gradient-text">in Dubai</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Explore Dubai's most prominent free zones — each tailored to industry-specific needs.</p>
          </motion.div>

          <div className="space-y-8">
            {majorFreeZones.map((zone, i) => {
              const Icon = zone.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group">
                  <Link to={`/free-zones/${zone.slug}`} className="block relative rounded-3xl overflow-hidden border border-border shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                    <div className="grid lg:grid-cols-12 gap-0">
                      {/* Image Side */}
                      <div className={`lg:col-span-4 relative h-64 lg:h-auto bg-cover bg-center`} style={{ backgroundImage: `url(${zone.image})` }}>
                        <div className={`absolute inset-0 bg-gradient-to-br ${zone.color} opacity-70 mix-blend-multiply`} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute top-5 left-5">
                          <div className={`w-14 h-14 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-lg`}>
                            <Icon size={26} className="text-white" strokeWidth={2.2} />
                          </div>
                        </div>
                        <div className="absolute bottom-5 left-5 right-5">
                          <span className="inline-block px-3 py-1.5 rounded-full bg-white/25 backdrop-blur-xl border border-white/40 text-[10px] font-black text-white uppercase tracking-widest">
                            {zone.ideal.split(',')[0]}
                          </span>
                        </div>
                      </div>

                      {/* Content Side */}
                      <div className="lg:col-span-8 p-8 bg-white">
                        <div className="flex items-center gap-2 mb-3">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${zone.color}`} />
                          <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest">Free Zone {String(i + 1).padStart(2, '0')}</span>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-black text-[#0A0F1F] mb-3 leading-tight">{zone.name}</h3>

                        <p className="text-sm text-[#475569] font-medium leading-relaxed mb-5">{zone.description}</p>

                        <div className="grid sm:grid-cols-3 gap-4 mb-5">
                          <div className="p-3 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100">
                            <div className="text-[9px] font-bold text-txt-muted uppercase tracking-widest mb-1">Ideal For</div>
                            <div className="text-xs font-black text-amber-700 leading-tight">{zone.ideal}</div>
                          </div>
                          <div className="p-3 rounded-xl bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100">
                            <div className="text-[9px] font-bold text-txt-muted uppercase tracking-widest mb-1">Facilities</div>
                            <div className="text-xs font-black text-orange-700 leading-tight">{zone.facilities}</div>
                          </div>
                          <div className="p-3 rounded-xl bg-gradient-to-br from-red-50 to-rose-50 border border-red-100">
                            <div className="text-[9px] font-bold text-txt-muted uppercase tracking-widest mb-1">Proximity</div>
                            <div className="text-xs font-black text-red-700 leading-tight">{zone.proximity}</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-sm font-black">
                          <span className="gradient-text">Learn More</span>
                          <ArrowRight size={14} className="text-amber-600 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 6. RESIDENCE VISA — Dark Premium Split === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-amber-950 via-orange-950 to-red-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.06]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80)' }} />
        <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-amber-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-red-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
                <Heart size={14} className="text-amber-300" />
                <span className="text-xs font-bold tracking-wider uppercase text-white">Ready to Secure Your UAE Residence Visa?</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-6">
                Begin a New Life in Dubai <span className="bg-gradient-to-r from-amber-300 to-red-300 bg-clip-text text-transparent">as a Resident</span>
              </h2>

              <div className="space-y-5 text-base text-white/80 font-medium leading-relaxed">
                <p>
                  Whether you're moving for work, investing in property, starting a business, retiring, or bringing your loved ones over — Setup Zone Dubai specializes in <span className="font-black text-white">full, end-to-end UAE residence visa solutions</span>.
                </p>
                <p>
                  We take away all legal and documentation duties — finding the right visa category, approvals, medicals, Emirates ID, banks, and family sponsorships.
                </p>
                <p>
                  With our expert consultants having access to government departments on priority, your residency will be <span className="font-black text-white">easy, lawful, and fast</span>. We're not just processing your visa — we're settling you down for a happy life in Dubai.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mt-8">
                {residenceVisaFeatures.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-2 p-3 rounded-2xl bg-white/5 border border-white/10">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center flex-shrink-0">
                        <Icon size={14} className="text-white" strokeWidth={2.5} />
                      </div>
                      <span className="text-xs font-bold text-white">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Visa Process Steps */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-6">
              <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
                  <BadgeCheck size={14} className="text-amber-300" />
                  <span className="text-xs font-bold tracking-wider uppercase text-white">Visa Eligibility & Process</span>
                </div>

                <h3 className="text-2xl font-black text-white mb-3 leading-tight">
                  Each Free Zone Has Its Own Visa Quota
                </h3>
                <p className="text-sm text-white/70 font-medium leading-relaxed mb-6">
                  Based on your license and office space — here's the typical process.
                </p>

                <div className="space-y-3 mb-6">
                  {visaSteps.map((step, i) => {
                    const Icon = step.icon;
                    return (
                      <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="flex items-center gap-4 p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-lg flex-shrink-0">
                          <Icon size={18} className="text-white" strokeWidth={2.5} />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-black text-white">{step.label}</div>
                        </div>
                        <div className="text-[10px] font-black text-amber-300">
                          {String(i + 1).padStart(2, '0')}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock size={14} />
                    <span className="text-xs font-black uppercase tracking-widest">Timeline</span>
                  </div>
                  <p className="text-sm font-bold">Visa processing takes 5–10 working days depending on the free zone.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === 7. INDUSTRY-SPECIFIC ZONES === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <Target size={14} className="text-amber-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Industry-Specific Free Zones</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Tailored <span className="gradient-text">Business Ecosystems</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Dubai offers industry-specific clusters within each free zone.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {industryZones.map((zone, i) => {
              const Icon = zone.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative">
                  <div className={`absolute -inset-2 rounded-[28px] bg-gradient-to-r ${zone.color} opacity-0 group-hover:opacity-25 blur-2xl transition-all duration-500`} />
                  <div className="relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 text-center h-full">
                    <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${zone.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon size={28} className="text-white" strokeWidth={2.2} />
                    </div>
                    <div className="text-[10px] font-black text-amber-600 uppercase tracking-widest mb-2">{zone.label}</div>
                    <h3 className="text-base font-black text-[#0A0F1F] leading-tight">{zone.zone}</h3>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 8. LICENSE TYPES — Dark Section === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-slate-950 via-amber-950 to-orange-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.06]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1600&q=80)' }} />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-amber-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full bg-orange-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <FileText size={14} className="text-amber-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white">Choose the Right License</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              Types of Free Zone <span className="bg-gradient-to-r from-amber-300 to-red-300 bg-clip-text text-transparent">Licenses Available</span>
            </h2>
            <p className="text-base text-white/70 font-medium">Different business licences that serve each entity's operational, regulatory, and industry-specific requirements.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {licenseTypes.map((license, i) => {
              const Icon = license.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative">
                  <div className={`absolute -inset-2 rounded-[28px] bg-gradient-to-r ${license.color} opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500`} />
                  <div className="relative p-7 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${license.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon size={26} className="text-white" strokeWidth={2.2} />
                    </div>

                    <h3 className="text-lg font-black text-white mb-2 leading-tight">{license.title}</h3>

                    <div className="mb-4 pb-4 border-b border-dashed border-white/20">
                      <div className="text-[9px] font-black text-amber-300 uppercase tracking-widest mb-1">Best For</div>
                      <div className="text-xs font-bold text-white/90 leading-tight">{license.bestFor}</div>
                    </div>

                    <p className="text-xs text-white/70 font-medium leading-relaxed">{license.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 9. GROWTH STATS === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <TrendingUp size={14} className="text-amber-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Business Growth Outlook</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Dubai's Leading <span className="gradient-text">FDI Destination</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Rapidly growing ecosystem for global entrepreneurs and international businesses.</p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
            {growthStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-[0_20px_60px_rgba(251,191,36,0.15)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color}`} />
                  <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${stat.color} opacity-[0.06] group-hover:opacity-[0.12] blur-2xl transition-opacity duration-500`} />

                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                    <Icon size={26} className="text-white" strokeWidth={2.2} />
                  </div>

                  <div className="text-3xl md:text-4xl font-black text-[#0A0F1F] leading-none mb-2 tracking-tight">{stat.value}</div>
                  <div className="text-xs font-bold text-[#64748B] uppercase tracking-widest">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 10. FAQ === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-amber-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <MessageCircle size={14} className="text-amber-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Common Questions</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-[1.1] tracking-tight mb-5">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>

              <p className="text-base text-[#475569] font-medium leading-relaxed mb-8">
                Everything you need to know about Dubai Free Zones. Still have questions? We're one message away.
              </p>

              <div className="relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-amber-500 via-orange-600 to-red-700 shadow-2xl">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <motion.div animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -top-3 -right-3 opacity-20">
                  <Globe size={80} className="text-white" />
                </motion.div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-4">
                    <Sparkles size={22} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight tracking-tight mb-2">Still Have Questions?</h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed mb-5">Get a free consultation with our Free Zone specialists.</p>
                  <div className="flex flex-wrap gap-3">
                    <a href={getWhatsAppLink("Hi! I have a question about Dubai Free Zones.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-amber-700 font-bold text-xs shadow-lg hover:scale-105 transition-all duration-300">
                      <MessageCircle size={14} />WhatsApp
                    </a>
                    <a href="tel:+971566556645" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-xs hover:bg-white/25 transition-all duration-300">
                      <Phone size={14} />Call Us
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="lg:col-span-7 space-y-4">
              {faqs.map((faq, i) => (
                <motion.details key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.04 }} className="group relative rounded-3xl bg-white border border-border hover:border-amber-200 hover:shadow-[0_20px_60px_rgba(251,191,36,0.15)] transition-all duration-500 overflow-hidden cursor-pointer">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 to-orange-600 opacity-0 group-open:opacity-100 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-400 to-orange-600 opacity-0 group-open:opacity-100 transition-opacity duration-300" />

                  <summary className="flex items-start gap-4 p-6 list-none">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-lg flex-shrink-0 group-open:scale-110 transition-transform duration-300">
                      <span className="text-sm font-black text-white">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="font-black text-[#0A0F1F] text-base md:text-lg leading-snug tracking-tight pr-4 group-hover:text-amber-700 transition-colors">{faq.q}</h3>
                    </div>
                    <div className="relative flex-shrink-0 pt-1">
                      <div className="w-8 h-8 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center group-open:bg-gradient-to-br group-open:from-amber-400 group-open:to-orange-600 group-open:border-transparent transition-all duration-300">
                        <span className="text-amber-600 font-black text-lg leading-none group-open:text-white group-open:rotate-45 transition-all duration-300 inline-block">+</span>
                      </div>
                    </div>
                  </summary>
                  <div className="px-6 pb-6 pl-20">
                    <div className="pt-2 border-t border-dashed border-border">
                      <p className="pt-4 text-sm md:text-base text-[#475569] font-medium leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </motion.details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === 11. RELATED + FINAL CTA === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-3">
              Related <span className="gradient-text">Services</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Services that pair well with your Free Zone setup.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {relatedServices.map((service, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                <Link to={`/services/${service.slug}`} className="group relative block h-full rounded-3xl bg-white border border-border overflow-hidden shadow-[0_10px_40px_rgba(15,23,42,0.06)] hover:shadow-[0_25px_70px_rgba(15,23,42,0.15)] hover:-translate-y-2 transition-all duration-500">
                  <div className="relative h-40 overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.2s] group-hover:scale-110" style={{ backgroundImage: `url(${service.image})` }} />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-70 mix-blend-multiply`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <h3 className="absolute bottom-4 left-5 right-5 text-xl font-black text-white">{service.title}</h3>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-[#64748B] font-medium leading-relaxed mb-4">{service.description}</p>
                    <div className="flex items-center gap-2 text-sm font-black">
                      <span className="gradient-text">Read More</span>
                      <ArrowRight size={14} className="text-amber-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.2)]">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80)' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-amber-950/90 via-orange-900/70 to-red-900/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

            <div className="relative p-8 md:p-14 lg:p-16">
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                    <Sparkles size={14} className="text-white" />
                    <span className="text-xs font-bold tracking-wider uppercase text-white">Launch Today</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-5 drop-shadow-lg">
                    Ready to Launch in <span className="text-amber-300">Dubai Free Zone?</span>
                  </h2>

                  <p className="text-base md:text-lg text-white/95 font-medium leading-relaxed mb-8 max-w-xl drop-shadow">
                    Get a free consultation. We'll guide you through the entire setup process — from license to launch.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <a href={getWhatsAppLink("Hi! I'd like a free consultation for Dubai Free Zone setup.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-amber-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                      <MessageCircle size={16} />WhatsApp Us
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="tel:+971566556645" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                      <Phone size={16} />Call Now
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {['Free Consultation', '3-7 Days Setup', 'Global Business'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                        <CheckCircle2 size={12} className="text-amber-300" strokeWidth={3} />
                        <span className="font-semibold text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <motion.a href={getWhatsAppLink("Hi! I'd like to discuss Dubai Free Zone setup.")} target="_blank" rel="noreferrer" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="group block relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <MessageCircle size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider mb-0.5">WhatsApp Us</p>
                        <p className="text-base font-black text-[#0A0F1F]">+971 56 655 6645</p>
                        <p className="text-[11px] text-green-600 font-semibold mt-0.5">● Instant replies almost anytime</p>
                      </div>
                      <ArrowRight size={18} className="text-txt-muted group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </motion.a>

                  <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="group relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-lg flex-shrink-0">
                        <Building2 size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider mb-1">Visit Our Dubai Office</p>
                        <p className="text-sm font-bold text-[#0A0F1F] leading-snug mb-1">Office M08-27, M1 Floor, Crystal Tower</p>
                        <p className="text-xs text-[#64748B] font-medium leading-snug">Business Bay, Dubai, U.A.E — PO Box: 554552</p>
                        <a href="https://maps.google.com/?q=Crystal+Tower+Business+Bay+Dubai" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 mt-2 text-xs font-black text-amber-600 hover:text-amber-700 transition">
                          Get Directions<ArrowRight size={12} />
                        </a>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="group relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-lg flex-shrink-0">
                        <Clock size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider mb-1">Working Hours</p>
                        <div className="space-y-1 text-xs">
                          <div className="flex justify-between items-center"><span className="text-[#64748B] font-medium">Mon – Fri</span><span className="font-black text-[#0A0F1F]">9 AM – 6 PM</span></div>
                          <div className="flex justify-between items-center"><span className="text-[#64748B] font-medium">Saturday</span><span className="font-black text-[#0A0F1F]">10 AM – 5 PM</span></div>
                          <div className="flex justify-between items-center"><span className="text-[#64748B] font-medium">Sunday</span><span className="font-black text-red-500">Closed</span></div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}