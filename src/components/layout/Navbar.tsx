// File: src/components/layout/Navbar.tsx

import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X, Phone, MessageCircle, ChevronDown, Sparkles, Globe, MapPin,
  ArrowRight, Landmark, Briefcase, Cpu, Heart, Factory, Crown, Rocket,
  Star, Building2, Users, UserCheck, Target, FileText, IdCard, Handshake,
  Package, Award, Zap, Shield, Layers, Scale, TrendingUp, DollarSign,
  Gift, Box, Gift as GiftIcon, BookOpen, Info, Mail, ShieldCheck, Check,
  Loader2,
} from 'lucide-react';
import { getWhatsAppLink } from '../../lib/whatsapp';
import { useLanguage, LANGUAGES } from '../../i18n/LanguageContext';
import type { LanguageCode } from '../../i18n/LanguageContext';
import { loadContent } from '../../lib/loadContent'; // ✅ NEW

// ============ DATA (With Translation Keys) ============
const freeZoneCategories = [
  { titleKey: 'businessTrade', icon: Briefcase, color: 'from-sky-400 to-blue-600', zones: [ { nameKey: 'freeZoneLocationsGuide', slug: 'locations' }, { nameKey: 'ifzaFreeZone', slug: 'ifza' }, { nameKey: 'meydanFreeZone', slug: 'meydan' }, { nameKey: 'duqeFreeZone', slug: 'duqe' }, { nameKey: 'dubaiCommerCity', slug: 'dubai-commercity' }, { nameKey: 'dwtcFreeZone', slug: 'dwtc' } ] },
  { titleKey: 'mediaTech', icon: Cpu, color: 'from-violet-400 to-purple-600', zones: [ { nameKey: 'dubaiMediaCity', slug: 'dubai-media-city' }, { nameKey: 'dubaiInternetCity', slug: 'dubai-internet-city' }, { nameKey: 'dubaiDesignDistrict', slug: 'dubai-design-district' }, { nameKey: 'dubaiKnowledgePark', slug: 'dubai-knowledge-park' }, { nameKey: 'dubaiSiliconOasis', slug: 'dubai-silicon-oasis' } ] },
  { titleKey: 'industrial', icon: Factory, color: 'from-amber-400 to-orange-600', zones: [ { nameKey: 'jafzaFreeZone', slug: 'jafza' }, { nameKey: 'dubaiAirportFreeZone', slug: 'dubai-airport-free-zone' }, { nameKey: 'dmccFreeZone', slug: 'dmcc' }, { nameKey: 'dubaiSouthFreeZone', slug: 'dubai-south' } ] },
  { titleKey: 'healthcare', icon: Heart, color: 'from-pink-400 to-rose-600', zones: [ { nameKey: 'dubaiHealthcareCity', slug: 'dubai-healthcare-city' } ] },
  { titleKey: 'abuDhabi', icon: Landmark, color: 'from-emerald-400 to-teal-600', zones: [ { nameKey: 'adgmFreeZone', slug: 'adgm' }, { nameKey: 'kizadAbuDhabi', slug: 'kizad' } ] },
  { titleKey: 'northernEmirates', icon: MapPin, color: 'from-cyan-400 to-sky-600', zones: [ { nameKey: 'shamsSharjah', slug: 'shams' }, { nameKey: 'saifSharjah', slug: 'saif' }, { nameKey: 'hamriyahFreeZone', slug: 'hamriyah' }, { nameKey: 'rakezRasAlKhaimah', slug: 'rakez' }, { nameKey: 'fujairahCreativeCity', slug: 'fujairah-creative-city' }, { nameKey: 'ajmanFreeZone', slug: 'ajman-free-zone' }, { nameKey: 'uaqFreeZone', slug: 'uaq-free-zone' } ] }
];

const mainlandServices = [
  { nameKey: 'mainActivities', descKey: 'mainActivitiesDesc', slug: 'mainland-activities', icon: Target, color: 'from-sky-400 to-blue-600' },
  { nameKey: 'hiringUae', descKey: 'hiringUaeDesc', slug: 'hiring-employee-management', icon: Users, color: 'from-blue-400 to-indigo-600' },
  { nameKey: 'officeSpace', descKey: 'officeSpaceDesc', slug: 'office-space-solutions', icon: Building2, color: 'from-indigo-400 to-violet-600' },
  { nameKey: 'mainlandVisas', descKey: 'mainlandVisasDesc', slug: 'mainland-visa', icon: UserCheck, color: 'from-violet-400 to-purple-600' },
  { nameKey: 'launchOperate', descKey: 'launchOperateDesc', slug: 'launch-operate-expand', icon: Rocket, color: 'from-purple-400 to-fuchsia-600' }
];

const businessSetupCategories = [
  { titleKey: 'companyFormation', icon: Building2, color: 'from-orange-400 to-red-600', services: [ { nameKey: 'companyFormationDubai', slug: 'company-formation' }, { nameKey: 'mainlandCompanyFormation', slug: 'mainland-company-formation' }, { nameKey: 'freeZoneCompanySetup', slug: 'free-zone-company-setup' }, { nameKey: 'offshoreCompanySetup', slug: 'offshore-company-setup' }, { nameKey: 'uaeFreeZoneCompany', slug: 'uae-free-zone-company' } ] },
  { titleKey: 'licensesRegistration', icon: FileText, color: 'from-amber-400 to-orange-600', services: [ { nameKey: 'companyRegistrationDubai', slug: 'company-registration' }, { nameKey: 'tradeLicenseDubai', slug: 'trade-license' }, { nameKey: 'ecommerceLicenseDubai', slug: 'ecommerce-license' }, { nameKey: 'uaeCompanyName', slug: 'company-name-registration' } ] },
  { titleKey: 'partnersSponsorship', icon: Handshake, color: 'from-red-400 to-rose-600', services: [ { nameKey: 'localCorporateSponsor', slug: 'local-corporate-sponsor' }, { nameKey: 'uaeLocalPartner', slug: 'local-business-partner' } ] },
  { titleKey: 'visasResidency', icon: IdCard, color: 'from-rose-400 to-pink-600', services: [ { nameKey: 'goldenVisaServices', slug: 'golden-visa-services' }, { nameKey: 'uaeResidenceVisa', slug: 'residence-visa' }, { nameKey: 'uaeDependentVisa', slug: 'dependent-visa' } ] }
];

const packageCategories = [
  { titleKey: 'dubaiFreeZones', icon: Building2, color: 'from-sky-400 to-blue-600', packages: [ { nameKey: 'ifzaSetupPackage', slug: 'ifza-setup-package' }, { nameKey: 'dmccSetupPackage', slug: 'dmcc-setup-package' }, { nameKey: 'meydanSetupPackage', slug: 'meydan-setup-package' }, { nameKey: 'difcCompanySetup', slug: 'difc-company-setup' }, { nameKey: 'jafzaSetupPackage', slug: 'jafza-setup-package' } ] },
  { titleKey: 'sharjahFreeZones', icon: Landmark, color: 'from-emerald-400 to-teal-600', packages: [ { nameKey: 'spcSetupPackage', slug: 'spc-setup-package' }, { nameKey: 'shamsSetupPackage', slug: 'shams-setup-package' }, { nameKey: 'srtipSetupPackage', slug: 'srtip-setup-package' } ] },
  { titleKey: 'otherEmirates', icon: MapPin, color: 'from-amber-400 to-orange-600', packages: [ { nameKey: 'creativeCitySetup', slug: 'creative-city-setup' }, { nameKey: 'rakezSetupPackage', slug: 'rakez-setup-package' } ] }
];

const resourceCategories = [
  { titleKey: 'aboutUs', icon: Info, color: 'from-indigo-400 to-blue-600', links: [ { nameKey: 'aboutSetupZoneDubai', slug: 'about' } ] },
  { titleKey: 'blogGuides', icon: BookOpen, color: 'from-violet-400 to-purple-600', links: [ { nameKey: 'businessSetupBlog', slug: 'blog' } ] },
  { titleKey: 'contactLegal', icon: Mail, color: 'from-rose-400 to-pink-600', links: [ { nameKey: 'contactUs', slug: 'contact' }, { nameKey: 'privacyPolicy', slug: 'privacy-policy' } ] }
];

const serviceAreas = [
  { nameKey: 'businessBay', slug: 'business-bay' }, { nameKey: 'dubaiMarina', slug: 'dubai-marina' }, { nameKey: 'jvc', slug: 'jvc' }, { nameKey: 'alBarsha', slug: 'al-barsha' }, { nameKey: 'siliconOasis', slug: 'silicon-oasis' }, { nameKey: 'tradeCenterDwtc', slug: 'trade-center' }, { nameKey: 'difc', slug: 'difc' }, { nameKey: 'downtownDubai', slug: 'downtown-dubai' }
];

// ============ COMPONENT ============
export default function Navbar() {
  const { language, languageOption, setLanguage, isTranslating } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileFreeZoneOpen, setMobileFreeZoneOpen] = useState(false);
  const [mobileMainlandOpen, setMobileMainlandOpen] = useState(false);
  const [mobileBusinessSetupOpen, setMobileBusinessSetupOpen] = useState(false);
  const [mobilePackagesOpen, setMobilePackagesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [mobileLanguageOpen, setMobileLanguageOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const languageRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // ✅ JSON se Navbar content load karo
  const t = loadContent('layout/navbar', language) as any;

  // ✅ URLs hamesha English rahenge
  const navLinks = [
    { name: t.home || 'Home', href: '/', hasDropdown: false },
    { name: t.freeZone || 'Free Zone', href: '#', hasDropdown: true, dropdownType: 'freezone' },
    { name: t.mainland || 'Mainland', href: '#', hasDropdown: true, dropdownType: 'mainland' },
    { name: t.businessSetup || 'Business Setup', href: '#', hasDropdown: true, dropdownType: 'businesssetup' },
    { name: t.packages || 'Our Packages', href: '#', hasDropdown: true, dropdownType: 'packages' },
    { name: t.resources || 'Resources', href: '#', hasDropdown: true, dropdownType: 'resources' }
  ];

  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 40); window.addEventListener('scroll', onScroll); return () => window.removeEventListener('scroll', onScroll); }, []);
  useEffect(() => { setMobileOpen(false); setActiveDropdown(null); setLanguageOpen(false); setMobileLanguageOpen(false); }, [location.pathname]);
  useEffect(() => { const handleClickOutside = (event: MouseEvent) => { if (languageRef.current && !languageRef.current.contains(event.target as Node)) setLanguageOpen(false); }; document.addEventListener('mousedown', handleClickOutside); return () => document.removeEventListener('mousedown', handleClickOutside); }, []);

  const handleMouseEnter = (name: string) => { if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current); setActiveDropdown(name); };
  const handleMouseLeave = () => { dropdownTimeoutRef.current = setTimeout(() => setActiveDropdown(null), 200); };
  const handleLanguageSelect = (code: LanguageCode) => { setLanguage(code); setLanguageOpen(false); setMobileLanguageOpen(false); };

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-2xl border-b border-slate-200 shadow-[0_8px_40px_rgba(15,23,42,0.08)]' : 'bg-gradient-to-b from-white to-slate-50/30 border-b border-transparent'}`} onMouseLeave={handleMouseLeave}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between py-3.5">
            {/* === LOGO === */}
            <Link to="/" className="group flex items-center gap-3">
              <div className="relative"><motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 4, repeat: Infinity }} className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500 via-violet-500 to-fuchsia-500 blur-lg" /><div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500 via-blue-600 to-violet-600 flex items-center justify-center shadow-[0_8px_24px_rgba(56,189,248,0.4)] group-hover:scale-105 group-hover:shadow-[0_12px_32px_rgba(56,189,248,0.6)] transition-all duration-300"><span className="text-white font-black text-lg tracking-tight">SZ</span><div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white shadow-sm" /></div></div>
              <div className="flex flex-col leading-none"><span className="text-xl md:text-[1.4rem] font-black bg-gradient-to-r from-slate-900 via-sky-800 to-slate-900 bg-clip-text text-transparent group-hover:scale-[1.02] transition-transform duration-300 origin-left tracking-tight">Setup Zone Dubai</span><span className="text-[9px] text-slate-400 tracking-[0.25em] uppercase font-bold mt-1">Operated by Brightlink</span></div>
            </Link>

            {/* === DESKTOP MENU === */}
            <nav className="hidden lg:flex items-center gap-0.5 bg-slate-100/60 p-1 rounded-2xl border border-slate-200/50">
              {navLinks.map((link) => (
                <div key={link.name} className="relative" onMouseEnter={() => link.hasDropdown && handleMouseEnter(link.name)}>
                  {link.hasDropdown ? (
                    <button className={`group relative flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${activeDropdown === link.name ? 'text-white' : 'text-slate-600 hover:text-slate-900'}`}>
                      <span className="relative z-10">{link.name}</span><ChevronDown size={13} className={`relative z-10 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} strokeWidth={2.5} />
                      {activeDropdown === link.name && <motion.div layoutId="navActive" className="absolute inset-0 rounded-xl bg-gradient-to-r from-slate-900 to-slate-800 shadow-lg" transition={{ type: 'spring', stiffness: 400, damping: 30 }} />}
                    </button>
                  ) : (
                    <Link to={link.href} className="group relative flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold text-slate-600 hover:text-slate-900 transition-all duration-300"><span className="relative">{link.name}<span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-500 to-violet-500 group-hover:w-full transition-all duration-300" /></span></Link>
                  )}

                  <AnimatePresence>
                    {/* === FREE ZONE DROPDOWN === */}
                    {link.hasDropdown && activeDropdown === link.name && link.dropdownType === 'freezone' && (
                      <motion.div initial={{ opacity: 0, y: 12, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: 0.97 }} transition={{ duration: 0.2, ease: 'easeOut' }} onMouseEnter={() => handleMouseEnter(link.name)} className="fixed top-[72px] left-0 right-0 mx-auto w-[calc(100vw-3rem)] max-w-[1120px] z-50">
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-slate-200 rotate-45 z-10 rounded-sm" />
                        <div className="relative rounded-3xl bg-white border border-slate-200 shadow-[0_30px_80px_rgba(15,23,42,0.18)] overflow-hidden">
                          <div className="h-1 bg-gradient-to-r from-sky-400 via-violet-500 to-pink-500" />
                          <div className="relative grid grid-cols-12 gap-0">
                            <div className="col-span-10 p-5">
                              <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-100">
                                <div className="flex items-center gap-2.5"><div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-md"><Globe size={17} className="text-white" strokeWidth={2.5} /></div><div><h3 className="text-base font-black text-slate-900 leading-tight">{t.allFreeZones}</h3><p className="text-[10px] text-slate-500 font-medium">{t.zonesAcrossUae}</p></div></div>
                                <span className="text-[10px] font-black text-sky-700 bg-sky-50 border border-sky-200 px-2.5 py-1 rounded-full uppercase tracking-widest">{t.live}</span>
                              </div>
                              <div className="grid grid-cols-3 gap-x-6 gap-y-4">
                                {freeZoneCategories.map((category, ci) => {
                                  const CatIcon = category.icon;
                                  return (
                                    <div key={ci}>
                                      <div className="flex items-center gap-2 mb-2"><div className={`w-5 h-5 rounded-md bg-gradient-to-br ${category.color} flex items-center justify-center shadow-sm`}><CatIcon size={11} className="text-white" strokeWidth={2.5} /></div><span className="text-[10px] font-black text-slate-900 uppercase tracking-wider">{t[category.titleKey]}</span><span className="text-[9px] font-bold text-slate-400">({category.zones.length})</span></div>
                                      <div className="space-y-0.5">
                                        {category.zones.map((zone, zi) => (
                                          <Link key={zi} to={`/free-zones/${zone.slug}`} className="group/item flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:text-sky-700 hover:bg-gradient-to-r hover:from-sky-50 hover:to-transparent transition-all duration-150"><div className={`w-1 h-1 rounded-full bg-gradient-to-r ${category.color} opacity-0 group-hover/item:opacity-100 transition-opacity`} /><span className="truncate">{t[zone.nameKey]}</span></Link>
                                        ))}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                            <div className="col-span-2 relative bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 p-5 overflow-hidden">
                              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-sky-500/20 blur-3xl" /><div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-violet-500/20 blur-3xl" /><div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                              <motion.div animate={{ y: [0, -6, 0], rotate: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-3 right-3 opacity-15"><Crown size={48} className="text-white" /></motion.div>
                              <div className="relative flex flex-col h-full">
                                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center mb-4"><Sparkles size={18} className="text-white" strokeWidth={2.2} /></div>
                                <h4 className="text-sm font-black text-white leading-tight mb-2">{t.notSureZone}</h4><p className="text-[11px] text-white/70 font-medium leading-relaxed mb-4 flex-1">{t.zoneDesc}</p>
                                <a href={getWhatsAppLink("Hi! I need help choosing the right Free Zone.")} target="_blank" rel="noreferrer" className="group/cta inline-flex items-center justify-center gap-2 w-full px-3 py-2.5 rounded-lg bg-white text-slate-900 font-bold text-[11px] shadow-lg hover:scale-105 transition-all duration-300"><MessageCircle size={13} strokeWidth={2.5} />{t.askExpert}<ArrowRight size={12} className="group-hover/cta:translate-x-0.5 transition-transform" strokeWidth={2.5} /></a>
                              </div>
                            </div>
                          </div>
                          <div className="relative px-5 py-3 border-t border-slate-100 bg-slate-50/70 flex items-center justify-between">
                            <div className="flex items-center gap-2"><Star size={12} className="text-amber-400" fill="currentColor" /><span className="text-[11px] font-bold text-slate-600"><span className="text-slate-900">{t.businessesLaunched?.split(' ')[0]}</span> {t.businessesLaunched?.split(' ').slice(1).join(' ')}</span></div>
                            <div className="flex items-center gap-4 text-[11px] font-bold text-slate-600"><span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />{t.zeroTax}</span><span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-sky-500" />{t.ownership}</span></div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* === MAINLAND DROPDOWN === */}
                    {link.hasDropdown && activeDropdown === link.name && link.dropdownType === 'mainland' && (
                      <motion.div initial={{ opacity: 0, y: 12, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: 0.97 }} transition={{ duration: 0.2, ease: 'easeOut' }} onMouseEnter={() => handleMouseEnter(link.name)} className="fixed top-[72px] left-0 right-0 mx-auto w-[calc(100vw-3rem)] max-w-[980px] z-50">
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-slate-200 rotate-45 z-10 rounded-sm" />
                        <div className="relative rounded-3xl bg-white border border-slate-200 shadow-[0_30px_80px_rgba(15,23,42,0.18)] overflow-hidden">
                          <div className="h-1 bg-gradient-to-r from-emerald-400 via-sky-500 to-violet-500" />
                          <div className="relative grid grid-cols-12 gap-0">
                            <div className="col-span-9 p-5">
                              <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-100"><div className="flex items-center gap-2.5"><div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-sky-600 flex items-center justify-center shadow-md"><Building2 size={17} className="text-white" strokeWidth={2.5} /></div><div><h3 className="text-base font-black text-slate-900 leading-tight">{t.mainlandServices}</h3><p className="text-[10px] text-slate-500 font-medium">{t.premiumServices}</p></div></div></div>
                              <div className="grid grid-cols-1 gap-2">
                                {mainlandServices.map((service, si) => {
                                  const Icon = service.icon;
                                  return (
                                    <Link key={si} to={`/mainland/${service.slug}`} className="group/item relative flex items-start gap-3 p-3 rounded-2xl hover:bg-gradient-to-r hover:from-slate-50 hover:to-white border border-transparent hover:border-slate-200 transition-all duration-200">
                                      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-md flex-shrink-0 group-hover/item:scale-110 group-hover/item:rotate-6 transition-transform duration-300`}><Icon size={20} className="text-white" strokeWidth={2.5} /></div>
                                      <div className="flex-1 min-w-0 pt-0.5"><h4 className="text-sm font-black text-slate-900 leading-tight mb-1 group-hover/item:text-sky-700 transition-colors">{t[service.nameKey]}</h4><p className="text-[11px] text-slate-500 font-medium leading-snug">{t[service.descKey]}</p></div>
                                      <ArrowRight size={14} className="text-slate-400 group-hover/item:text-sky-600 group-hover/item:translate-x-0.5 transition-all mt-2.5 flex-shrink-0" strokeWidth={2.5} />
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                            <div className="col-span-3 relative bg-gradient-to-br from-emerald-950 via-slate-900 to-sky-950 p-5 overflow-hidden">
                              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-emerald-500/20 blur-3xl" /><div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-sky-500/20 blur-3xl" /><div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                              <motion.div animate={{ y: [0, -6, 0], rotate: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-3 right-3 opacity-15"><Landmark size={48} className="text-white" /></motion.div>
                              <div className="relative flex flex-col h-full">
                                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center mb-4"><Sparkles size={18} className="text-white" strokeWidth={2.2} /></div>
                                <h4 className="text-sm font-black text-white leading-tight mb-2">{t.goMainland}</h4><p className="text-[11px] text-white/70 font-medium leading-relaxed mb-4 flex-1">{t.mainlandDesc}</p>
                                <a href={getWhatsAppLink("Hi! I need help with Mainland UAE business setup.")} target="_blank" rel="noreferrer" className="group/cta inline-flex items-center justify-center gap-2 w-full px-3 py-2.5 rounded-lg bg-white text-slate-900 font-bold text-[11px] shadow-lg hover:scale-105 transition-all duration-300"><MessageCircle size={13} strokeWidth={2.5} />{t.askExpert}<ArrowRight size={12} className="group-hover/cta:translate-x-0.5 transition-transform" strokeWidth={2.5} /></a>
                                <div className="mt-4 pt-4 border-t border-white/10 space-y-2"><div className="flex items-center gap-2 text-[10px] font-bold text-white/60"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />{t.fullMarket}</div><div className="flex items-center gap-2 text-[10px] font-bold text-white/60"><span className="w-1.5 h-1.5 rounded-full bg-sky-500" />{t.govtContracts}</div></div>
                              </div>
                            </div>
                          </div>
                          <div className="relative px-5 py-3 border-t border-slate-100 bg-slate-50/70 flex items-center justify-between">
                            <div className="flex items-center gap-2"><Star size={12} className="text-amber-400" fill="currentColor" /><span className="text-[11px] font-bold text-slate-600"><span className="text-slate-900">{t.activitiesApproved?.split(' ')[0]}</span> {t.activitiesApproved?.split(' ').slice(1).join(' ')}</span></div>
                            <div className="flex items-center gap-4 text-[11px] font-bold text-slate-600"><span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />{t.localTrading}</span><span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-sky-500" />{t.ownership}</span></div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* === BUSINESS SETUP DROPDOWN === */}
                    {link.hasDropdown && activeDropdown === link.name && link.dropdownType === 'businesssetup' && (
                      <motion.div initial={{ opacity: 0, y: 12, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: 0.97 }} transition={{ duration: 0.2, ease: 'easeOut' }} onMouseEnter={() => handleMouseEnter(link.name)} className="fixed top-[72px] left-0 right-0 mx-auto w-[calc(100vw-3rem)] max-w-[1180px] z-50">
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-slate-200 rotate-45 z-10 rounded-sm" />
                        <div className="relative rounded-3xl bg-white border border-slate-200 shadow-[0_30px_80px_rgba(15,23,42,0.18)] overflow-hidden">
                          <div className="h-1 bg-gradient-to-r from-orange-400 via-red-500 to-rose-500" />
                          <div className="relative grid grid-cols-12 gap-0">
                            <div className="col-span-10 p-5">
                              <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-100"><div className="flex items-center gap-2.5"><div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center shadow-md"><Briefcase size={17} className="text-white" strokeWidth={2.5} /></div><div><h3 className="text-base font-black text-slate-900 leading-tight">{t.businessSetupServices}</h3><p className="text-[10px] text-slate-500 font-medium">{t.servicesAcross}</p></div></div><span className="text-[10px] font-black text-orange-700 bg-orange-50 border border-orange-200 px-2.5 py-1 rounded-full uppercase tracking-widest">{t.complete}</span></div>
                              <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                                {businessSetupCategories.map((category, ci) => {
                                  const CatIcon = category.icon;
                                  return (
                                    <div key={ci}>
                                      <div className="flex items-center gap-2 mb-2"><div className={`w-5 h-5 rounded-md bg-gradient-to-br ${category.color} flex items-center justify-center shadow-sm`}><CatIcon size={11} className="text-white" strokeWidth={2.5} /></div><span className="text-[10px] font-black text-slate-900 uppercase tracking-wider">{t[category.titleKey]}</span><span className="text-[9px] font-bold text-slate-400">({category.services.length})</span></div>
                                      <div className="space-y-0.5">
                                        {category.services.map((service, si) => (
                                          <Link key={si} to={`/services/${service.slug}`} className="group/item flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:text-orange-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-transparent transition-all duration-150"><div className={`w-1 h-1 rounded-full bg-gradient-to-r ${category.color} opacity-0 group-hover/item:opacity-100 transition-opacity`} /><span className="truncate">{t[service.nameKey]}</span></Link>
                                        ))}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                            <div className="col-span-2 relative bg-gradient-to-br from-orange-950 via-slate-950 to-red-950 p-5 overflow-hidden">
                              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-orange-500/20 blur-3xl" /><div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-red-500/20 blur-3xl" /><div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                              <motion.div animate={{ y: [0, -6, 0], rotate: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-3 right-3 opacity-15"><Rocket size={48} className="text-white" /></motion.div>
                              <div className="relative flex flex-col h-full">
                                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center mb-4"><Sparkles size={18} className="text-white" strokeWidth={2.2} /></div>
                                <h4 className="text-sm font-black text-white leading-tight mb-2">{t.startBusiness}</h4><p className="text-[11px] text-white/70 font-medium leading-relaxed mb-4 flex-1">{t.startDesc}</p>
                                <a href={getWhatsAppLink("Hi! I need help with business setup in Dubai.")} target="_blank" rel="noreferrer" className="group/cta inline-flex items-center justify-center gap-2 w-full px-3 py-2.5 rounded-lg bg-white text-slate-900 font-bold text-[11px] shadow-lg hover:scale-105 transition-all duration-300"><MessageCircle size={13} strokeWidth={2.5} />{t.getStarted}<ArrowRight size={12} className="group-hover/cta:translate-x-0.5 transition-transform" strokeWidth={2.5} /></a>
                              </div>
                            </div>
                          </div>
                          <div className="relative px-5 py-3 border-t border-slate-100 bg-slate-50/70 flex items-center justify-between">
                            <div className="flex items-center gap-2"><Star size={12} className="text-amber-400" fill="currentColor" /><span className="text-[11px] font-bold text-slate-600"><span className="text-slate-900">{t.companiesSetup?.split(' ')[0]}</span> {t.companiesSetup?.split(' ').slice(1).join(' ')}</span></div>
                            <div className="flex items-center gap-4 text-[11px] font-bold text-slate-600"><span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-orange-500" />{t.tradeLicense}</span><span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-red-500" />{t.visaBanking}</span><span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-rose-500" />{t.goldenVisa}</span></div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* === PACKAGES DROPDOWN === */}
                    {link.hasDropdown && activeDropdown === link.name && link.dropdownType === 'packages' && (
                      <motion.div initial={{ opacity: 0, y: 12, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: 0.97 }} transition={{ duration: 0.2, ease: 'easeOut' }} onMouseEnter={() => handleMouseEnter(link.name)} className="fixed top-[72px] left-0 right-0 mx-auto w-[calc(100vw-3rem)] max-w-[1120px] z-50">
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-slate-200 rotate-45 z-10 rounded-sm" />
                        <div className="relative rounded-3xl bg-white border border-slate-200 shadow-[0_30px_80px_rgba(15,23,42,0.18)] overflow-hidden">
                          <div className="h-1 bg-gradient-to-r from-fuchsia-400 via-purple-500 to-violet-500" />
                          <div className="relative grid grid-cols-12 gap-0">
                            <div className="col-span-10 p-5">
                              <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-100"><div className="flex items-center gap-2.5"><div className="w-9 h-9 rounded-xl bg-gradient-to-br from-fuchsia-400 to-purple-600 flex items-center justify-center shadow-md"><Package size={17} className="text-white" strokeWidth={2.5} /></div><div><h3 className="text-base font-black text-slate-900 leading-tight">{t.ourSetupPackages}</h3><p className="text-[10px] text-slate-500 font-medium">{t.premiumPackages}</p></div></div><span className="text-[10px] font-black text-fuchsia-700 bg-fuchsia-50 border border-fuchsia-200 px-2.5 py-1 rounded-full uppercase tracking-widest">{t.bestValue}</span></div>
                              <div className="grid grid-cols-3 gap-x-6 gap-y-4">
                                {packageCategories.map((category, ci) => {
                                  const CatIcon = category.icon;
                                  return (
                                    <div key={ci}>
                                      <div className="flex items-center gap-2 mb-2"><div className={`w-5 h-5 rounded-md bg-gradient-to-br ${category.color} flex items-center justify-center shadow-sm`}><CatIcon size={11} className="text-white" strokeWidth={2.5} /></div><span className="text-[10px] font-black text-slate-900 uppercase tracking-wider">{t[category.titleKey]}</span><span className="text-[9px] font-bold text-slate-400">({category.packages.length})</span></div>
                                      <div className="space-y-0.5">
                                        {category.packages.map((pkg, pi) => (
                                          <Link key={pi} to={`/packages/${pkg.slug}`} className="group/item flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:text-fuchsia-700 hover:bg-gradient-to-r hover:from-fuchsia-50 hover:to-transparent transition-all duration-150"><div className={`w-1 h-1 rounded-full bg-gradient-to-r ${category.color} opacity-0 group-hover/item:opacity-100 transition-opacity`} /><span className="truncate">{t[pkg.nameKey]}</span></Link>
                                        ))}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                            <div className="col-span-2 relative bg-gradient-to-br from-fuchsia-950 via-slate-950 to-purple-950 p-5 overflow-hidden">
                              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-fuchsia-500/20 blur-3xl" /><div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-purple-500/20 blur-3xl" /><div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                              <motion.div animate={{ y: [0, -6, 0], rotate: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-3 right-3 opacity-15"><GiftIcon size={48} className="text-white" /></motion.div>
                              <div className="relative flex flex-col h-full">
                                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center mb-4"><Sparkles size={18} className="text-white" strokeWidth={2.2} /></div>
                                <h4 className="text-sm font-black text-white leading-tight mb-2">{t.notSurePackage}</h4><p className="text-[11px] text-white/70 font-medium leading-relaxed mb-4 flex-1">{t.packageDesc}</p>
                                <a href={getWhatsAppLink("Hi! I need help choosing the right setup package.")} target="_blank" rel="noreferrer" className="group/cta inline-flex items-center justify-center gap-2 w-full px-3 py-2.5 rounded-lg bg-white text-slate-900 font-bold text-[11px] shadow-lg hover:scale-105 transition-all duration-300"><MessageCircle size={13} strokeWidth={2.5} />{t.askExpert}<ArrowRight size={12} className="group-hover/cta:translate-x-0.5 transition-transform" strokeWidth={2.5} /></a>
                              </div>
                            </div>
                          </div>
                          <div className="relative px-5 py-3 border-t border-slate-100 bg-slate-50/70 flex items-center justify-between">
                            <div className="flex items-center gap-2"><Star size={12} className="text-amber-400" fill="currentColor" /><span className="text-[11px] font-bold text-slate-600"><span className="text-slate-900">{t.allInclusive?.split(' ')[0]}</span> {t.allInclusive?.split(' ').slice(1).join(' ')}</span></div>
                            <div className="flex items-center gap-4 text-[11px] font-bold text-slate-600"><span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500" />{t.tradeLicense}</span><span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-purple-500" />{t.visaSupport}</span><span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-violet-500" />{t.bankAccount}</span></div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* === RESOURCES DROPDOWN === */}
                    {link.hasDropdown && activeDropdown === link.name && link.dropdownType === 'resources' && (
                      <motion.div initial={{ opacity: 0, y: 12, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: 0.97 }} transition={{ duration: 0.2, ease: 'easeOut' }} onMouseEnter={() => handleMouseEnter(link.name)} className="fixed top-[72px] left-0 right-0 mx-auto w-[calc(100vw-3rem)] max-w-[1120px] z-50">
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-slate-200 rotate-45 z-10 rounded-sm" />
                        <div className="relative rounded-3xl bg-white border border-slate-200 shadow-[0_30px_80px_rgba(15,23,42,0.18)] overflow-hidden">
                          <div className="h-1 bg-gradient-to-r from-indigo-400 via-blue-500 to-cyan-500" />
                          <div className="relative grid grid-cols-12 gap-0">
                            <div className="col-span-10 p-5">
                              <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-100"><div className="flex items-center gap-2.5"><div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-400 to-blue-600 flex items-center justify-center shadow-md"><BookOpen size={17} className="text-white" strokeWidth={2.5} /></div><div><h3 className="text-base font-black text-slate-900 leading-tight">{t.resourcesGuides}</h3><p className="text-[10px] text-slate-500 font-medium">{t.learnConnect}</p></div></div><span className="text-[10px] font-black text-indigo-700 bg-indigo-50 border border-indigo-200 px-2.5 py-1 rounded-full uppercase tracking-widest">{t.free}</span></div>
                              <div className="grid grid-cols-12 gap-x-6 gap-y-4">
                                <div className="col-span-5 grid grid-cols-1 gap-y-4">
                                  {resourceCategories.map((category, ci) => {
                                    const CatIcon = category.icon;
                                    return (
                                      <div key={ci}>
                                        <div className="flex items-center gap-2 mb-2"><div className={`w-5 h-5 rounded-md bg-gradient-to-br ${category.color} flex items-center justify-center shadow-sm`}><CatIcon size={11} className="text-white" strokeWidth={2.5} /></div><span className="text-[10px] font-black text-slate-900 uppercase tracking-wider">{t[category.titleKey]}</span></div>
                                        <div className="space-y-0.5">
                                          {category.links.map((item, li) => (
                                            <Link key={li} to={item.slug === 'about' ? '/about' : item.slug === 'blog' ? '/blog' : item.slug === 'contact' ? '/contact' : '/privacy-policy'} className={`group/item flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs font-semibold text-slate-600 transition-all duration-150 hover:bg-gradient-to-r hover:to-transparent ${ci === 0 ? 'hover:text-indigo-700 hover:from-indigo-50' : ci === 1 ? 'hover:text-violet-700 hover:from-violet-50' : 'hover:text-rose-700 hover:from-rose-50'}`}><div className={`w-1 h-1 rounded-full bg-gradient-to-r ${category.color} opacity-0 group-hover/item:opacity-100 transition-opacity flex-shrink-0`} /><span className="truncate">{t[item.nameKey]}</span></Link>
                                          ))}
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                                <div className="col-span-7">
                                  <div className="flex items-center gap-2 mb-2"><div className="w-5 h-5 rounded-md bg-gradient-to-br from-cyan-400 to-sky-600 flex items-center justify-center shadow-sm"><MapPin size={11} className="text-white" strokeWidth={2.5} /></div><span className="text-[10px] font-black text-slate-900 uppercase tracking-wider">{t.serviceAreas}</span><span className="text-[9px] font-bold text-slate-400">{t.eightLocations}</span></div>
                                  <div className="grid grid-cols-2 gap-x-4 gap-y-0.5">
                                    {serviceAreas.map((area, i) => (
                                      <Link key={i} to={`/service-areas/${area.slug}`} className="group/item flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:text-cyan-700 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-transparent transition-all duration-150"><MapPin size={10} className="text-cyan-500 opacity-0 group-hover/item:opacity-100 transition-opacity flex-shrink-0" /><span className="truncate">{t[area.nameKey]}</span></Link>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-span-2 relative bg-gradient-to-br from-indigo-950 via-slate-950 to-cyan-950 p-5 overflow-hidden">
                              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-indigo-500/20 blur-3xl" /><div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-cyan-500/20 blur-3xl" /><div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                              <motion.div animate={{ y: [0, -6, 0], rotate: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-3 right-3 opacity-15"><Sparkles size={48} className="text-white" /></motion.div>
                              <div className="relative flex flex-col h-full">
                                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center mb-4"><Sparkles size={18} className="text-white" strokeWidth={2.2} /></div>
                                <h4 className="text-sm font-black text-white leading-tight mb-2">{t.needGuidance}</h4><p className="text-[11px] text-white/70 font-medium leading-relaxed mb-4 flex-1">{t.guidanceDesc}</p>
                                <a href={getWhatsAppLink("Hi! I need guidance on UAE business setup.")} target="_blank" rel="noreferrer" className="group/cta inline-flex items-center justify-center gap-2 w-full px-3 py-2.5 rounded-lg bg-white text-slate-900 font-bold text-[11px] shadow-lg hover:scale-105 transition-all duration-300"><MessageCircle size={13} strokeWidth={2.5} />{t.askExpert}<ArrowRight size={12} className="group-hover/cta:translate-x-0.5 transition-transform" strokeWidth={2.5} /></a>
                              </div>
                            </div>
                          </div>
                          <div className="relative px-5 py-3 border-t border-slate-100 bg-slate-50/70 flex items-center justify-between">
                            <div className="flex items-center gap-2"><Star size={12} className="text-amber-400" fill="currentColor" /><span className="text-[11px] font-bold text-slate-600"><span className="text-slate-900">{t.freeResources?.split(' ')[0]}</span> {t.freeResources?.split(' ').slice(1).join(' ')}</span></div>
                            <div className="flex items-center gap-4 text-[11px] font-bold text-slate-600"><span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />{t.about}</span><span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-violet-500" />{t.blog}</span><span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-rose-500" />{t.contact}</span><span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />{t.areas}</span></div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* === RIGHT SIDE — LANGUAGE SELECTOR === */}
            <div className="hidden lg:flex items-center relative" ref={languageRef}>
              <button onClick={() => setLanguageOpen(!languageOpen)} disabled={isTranslating} className="group relative inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white border border-slate-200 hover:border-sky-300 shadow-[0_4px_15px_rgba(15,23,42,0.06)] hover:shadow-[0_8px_25px_rgba(56,189,248,0.15)] transition-all duration-300 disabled:opacity-75" aria-label="Select language">
                {isTranslating ? <Loader2 size={16} className="text-sky-600 animate-spin" strokeWidth={2.5} /> : <Globe size={16} className="text-slate-700 group-hover:text-sky-600 transition-colors" strokeWidth={2.5} />}
                <span className="text-xs font-black text-slate-800 uppercase tracking-wider">{languageOption.code.toUpperCase()}</span>
                <ChevronDown size={13} className={`text-slate-500 group-hover:text-sky-600 transition-all duration-300 ${languageOpen ? 'rotate-180' : ''}`} strokeWidth={2.5} />
              </button>

              <AnimatePresence>
                {languageOpen && (
                  <motion.div initial={{ opacity: 0, y: 12, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: 0.95 }} transition={{ duration: 0.2, ease: 'easeOut' }} className="absolute top-[110%] right-0 w-[300px] z-50">
                    <div className="absolute -top-2 right-8 w-4 h-4 bg-white border-l border-t border-slate-200 rotate-45 z-10 rounded-sm" />
                    <div className="relative rounded-3xl bg-white border border-slate-200 shadow-[0_30px_80px_rgba(15,23,42,0.18)] overflow-hidden">
                      <div className="px-5 py-4 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white"><div className="flex items-center gap-2"><Globe size={14} className="text-sky-600" strokeWidth={2.5} /><span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.15em]">{t.selectLanguage}</span><span className="ml-auto text-[10px] font-black text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full">7</span></div></div>
                      <div className="p-2 max-h-[420px] overflow-y-auto">
                        {LANGUAGES.map((lang, i) => {
                          const isActive = language === lang.code;
                          return (
                            <motion.button key={lang.code} onClick={() => handleLanguageSelect(lang.code)} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.2, delay: i * 0.03 }} className={`w-full group flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 ${isActive ? 'bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200' : 'hover:bg-slate-50 border border-transparent hover:border-slate-200'}`}>
                              <span className="text-xl flex-shrink-0 leading-none">{lang.flag}</span>
                              <div className="flex-1 text-left min-w-0"><div className={`text-sm font-black leading-tight truncate ${isActive ? 'text-amber-900' : 'text-slate-800 group-hover:text-slate-900'}`}>{lang.native}</div><div className={`text-[10px] font-semibold leading-tight mt-0.5 ${isActive ? 'text-amber-700' : 'text-slate-400'}`}>{lang.name}</div></div>
                              <span className={`text-[11px] font-black tracking-wider flex-shrink-0 ${isActive ? 'text-amber-700' : 'text-slate-400 group-hover:text-slate-600'}`}>{lang.code.toUpperCase()}</span>
                              {isActive && <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-4 h-4 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-sm"><Check size={10} className="text-white" strokeWidth={3.5} /></motion.div>}
                            </motion.button>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* === MOBILE TOGGLE === */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2.5 rounded-xl bg-slate-100 border border-slate-200 hover:bg-slate-200 transition-colors" aria-label="Menu">
              {mobileOpen ? <X size={20} className="text-slate-900" strokeWidth={2.5} /> : <Menu size={20} className="text-slate-900" strokeWidth={2.5} />}
            </button>
          </div>
        </div>

        {/* === MOBILE MENU === */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }} className="lg:hidden overflow-hidden border-t border-slate-200 bg-white">
              <div className="px-6 py-5 space-y-1 max-h-[80vh] overflow-y-auto">
                {navLinks.map((link, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: i * 0.05 }}>
                    {link.hasDropdown && link.dropdownType === 'freezone' ? (
                      <div>
                        <button onClick={() => setMobileFreeZoneOpen(!mobileFreeZoneOpen)} className="w-full flex items-center justify-between p-3.5 rounded-xl text-sm font-bold text-slate-900 hover:bg-sky-50 transition-colors"><span className="flex items-center gap-3"><Globe size={16} className="text-sky-600" strokeWidth={2.5} />{link.name}</span><ChevronDown size={16} className={`text-slate-500 transition-transform ${mobileFreeZoneOpen ? 'rotate-180' : ''}`} strokeWidth={2.5} /></button>
                        <AnimatePresence>{mobileFreeZoneOpen && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden pl-4 ml-6 border-l-2 border-sky-100">
                            <div className="py-2 space-y-3">
                              {freeZoneCategories.map((category, ci) => {
                                const CatIcon = category.icon;
                                return (
                                  <div key={ci} className="pt-2">
                                    <div className="flex items-center gap-2 mb-1.5 px-3"><div className={`w-4 h-4 rounded bg-gradient-to-br ${category.color} flex items-center justify-center`}><CatIcon size={9} className="text-white" strokeWidth={2.5} /></div><span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">{t[category.titleKey]}</span></div>
                                    {category.zones.map((zone, zi) => (
                                      <Link key={zi} to={`/free-zones/${zone.slug}`} className="block px-3 py-2 rounded-lg text-[13px] font-semibold text-slate-600 hover:text-sky-600 hover:bg-sky-50 transition-colors">{t[zone.nameKey]}</Link>
                                    ))}
                                  </div>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}</AnimatePresence>
                      </div>
                    ) : link.hasDropdown && link.dropdownType === 'mainland' ? (
                      <div>
                        <button onClick={() => setMobileMainlandOpen(!mobileMainlandOpen)} className="w-full flex items-center justify-between p-3.5 rounded-xl text-sm font-bold text-slate-900 hover:bg-emerald-50 transition-colors"><span className="flex items-center gap-3"><Building2 size={16} className="text-emerald-600" strokeWidth={2.5} />{link.name}</span><ChevronDown size={16} className={`text-slate-500 transition-transform ${mobileMainlandOpen ? 'rotate-180' : ''}`} strokeWidth={2.5} /></button>
                        <AnimatePresence>{mobileMainlandOpen && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden pl-4 ml-6 border-l-2 border-emerald-100">
                            <div className="py-2 space-y-1">
                              {mainlandServices.map((service, si) => {
                                const Icon = service.icon;
                                return (
                                  <Link key={si} to={`/mainland/${service.slug}`} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-emerald-50 transition-colors">
                                    <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center shadow-sm flex-shrink-0`}><Icon size={16} className="text-white" strokeWidth={2.5} /></div>
                                    <span className="text-[13px] font-semibold text-slate-600 hover:text-emerald-600">{t[service.nameKey]}</span>
                                  </Link>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}</AnimatePresence>
                      </div>
                    ) : link.hasDropdown && link.dropdownType === 'businesssetup' ? (
                      <div>
                        <button onClick={() => setMobileBusinessSetupOpen(!mobileBusinessSetupOpen)} className="w-full flex items-center justify-between p-3.5 rounded-xl text-sm font-bold text-slate-900 hover:bg-orange-50 transition-colors"><span className="flex items-center gap-3"><Briefcase size={16} className="text-orange-600" strokeWidth={2.5} />{link.name}</span><ChevronDown size={16} className={`text-slate-500 transition-transform ${mobileBusinessSetupOpen ? 'rotate-180' : ''}`} strokeWidth={2.5} /></button>
                        <AnimatePresence>{mobileBusinessSetupOpen && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden pl-4 ml-6 border-l-2 border-orange-100">
                            <div className="py-2 space-y-3">
                              {businessSetupCategories.map((category, ci) => {
                                const CatIcon = category.icon;
                                return (
                                  <div key={ci} className="pt-2">
                                    <div className="flex items-center gap-2 mb-1.5 px-3"><div className={`w-4 h-4 rounded bg-gradient-to-br ${category.color} flex items-center justify-center`}><CatIcon size={9} className="text-white" strokeWidth={2.5} /></div><span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">{t[category.titleKey]}</span></div>
                                    {category.services.map((service, si) => (
                                      <Link key={si} to={`/services/${service.slug}`} className="block px-3 py-2 rounded-lg text-[13px] font-semibold text-slate-600 hover:text-orange-600 hover:bg-orange-50 transition-colors">{t[service.nameKey]}</Link>
                                    ))}
                                  </div>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}</AnimatePresence>
                      </div>
                    ) : link.hasDropdown && link.dropdownType === 'packages' ? (
                      <div>
                        <button onClick={() => setMobilePackagesOpen(!mobilePackagesOpen)} className="w-full flex items-center justify-between p-3.5 rounded-xl text-sm font-bold text-slate-900 hover:bg-fuchsia-50 transition-colors"><span className="flex items-center gap-3"><Package size={16} className="text-fuchsia-600" strokeWidth={2.5} />{link.name}</span><ChevronDown size={16} className={`text-slate-500 transition-transform ${mobilePackagesOpen ? 'rotate-180' : ''}`} strokeWidth={2.5} /></button>
                        <AnimatePresence>{mobilePackagesOpen && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden pl-4 ml-6 border-l-2 border-fuchsia-100">
                            <div className="py-2 space-y-3">
                              {packageCategories.map((category, ci) => {
                                const CatIcon = category.icon;
                                return (
                                  <div key={ci} className="pt-2">
                                    <div className="flex items-center gap-2 mb-1.5 px-3"><div className={`w-4 h-4 rounded bg-gradient-to-br ${category.color} flex items-center justify-center`}><CatIcon size={9} className="text-white" strokeWidth={2.5} /></div><span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">{t[category.titleKey]}</span></div>
                                    {category.packages.map((pkg, pi) => (
                                      <Link key={pi} to={`/packages/${pkg.slug}`} className="block px-3 py-2 rounded-lg text-[13px] font-semibold text-slate-600 hover:text-fuchsia-600 hover:bg-fuchsia-50 transition-colors">{t[pkg.nameKey]}</Link>
                                    ))}
                                  </div>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}</AnimatePresence>
                      </div>
                    ) : link.hasDropdown && link.dropdownType === 'resources' ? (
                      <div>
                        <button onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)} className="w-full flex items-center justify-between p-3.5 rounded-xl text-sm font-bold text-slate-900 hover:bg-indigo-50 transition-colors"><span className="flex items-center gap-3"><BookOpen size={16} className="text-indigo-600" strokeWidth={2.5} />{link.name}</span><ChevronDown size={16} className={`text-slate-500 transition-transform ${mobileResourcesOpen ? 'rotate-180' : ''}`} strokeWidth={2.5} /></button>
                        <AnimatePresence>{mobileResourcesOpen && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden pl-4 ml-6 border-l-2 border-indigo-100">
                            <div className="py-2 space-y-3">
                              <div className="pt-2">
                                <div className="flex items-center gap-2 mb-1.5 px-3"><div className="w-4 h-4 rounded bg-gradient-to-br from-indigo-400 to-blue-600 flex items-center justify-center"><Info size={9} className="text-white" strokeWidth={2.5} /></div><span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">{t.aboutUs}</span></div>
                                <Link to="/about" className="block px-3 py-2 rounded-lg text-[13px] font-semibold text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors">{t.aboutSetupZoneDubai}</Link>
                              </div>
                              <div className="pt-2">
                                <div className="flex items-center gap-2 mb-1.5 px-3"><div className="w-4 h-4 rounded bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center"><BookOpen size={9} className="text-white" strokeWidth={2.5} /></div><span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">{t.blogGuides}</span></div>
                                <Link to="/blog" className="block px-3 py-2 rounded-lg text-[13px] font-semibold text-slate-600 hover:text-violet-600 hover:bg-violet-50 transition-colors">{t.businessSetupBlog}</Link>
                              </div>
                              <div className="pt-2">
                                <div className="flex items-center gap-2 mb-1.5 px-3"><div className="w-4 h-4 rounded bg-gradient-to-br from-rose-400 to-pink-600 flex items-center justify-center"><Mail size={9} className="text-white" strokeWidth={2.5} /></div><span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">{t.contactLegal}</span></div>
                                <Link to="/contact" className="block px-3 py-2 rounded-lg text-[13px] font-semibold text-slate-600 hover:text-rose-600 hover:bg-rose-50 transition-colors">{t.contactUs}</Link>
                                <Link to="/privacy-policy" className="block px-3 py-2 rounded-lg text-[13px] font-semibold text-slate-600 hover:text-rose-600 hover:bg-rose-50 transition-colors">{t.privacyPolicy}</Link>
                              </div>
                              <div className="pt-2">
                                <div className="flex items-center gap-2 mb-1.5 px-3"><div className="w-4 h-4 rounded bg-gradient-to-br from-cyan-400 to-sky-600 flex items-center justify-center"><MapPin size={9} className="text-white" strokeWidth={2.5} /></div><span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">{t.serviceAreas}</span></div>
                                <div className="grid grid-cols-2 gap-x-2">
                                  {serviceAreas.map((area, ai) => (
                                    <Link key={ai} to={`/service-areas/${area.slug}`} className="block px-3 py-2 rounded-lg text-[13px] font-semibold text-slate-600 hover:text-cyan-600 hover:bg-cyan-50 transition-colors">{t[area.nameKey]}</Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}</AnimatePresence>
                      </div>
                    ) : (
                      <Link to={link.href} className="block p-3.5 rounded-xl text-sm font-bold text-slate-900 hover:bg-sky-50 transition-colors">{link.name}</Link>
                    )}
                  </motion.div>
                ))}

                {/* === MOBILE LANGUAGE SELECTOR === */}
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.2 }} className="pt-3">
                  <button onClick={() => setMobileLanguageOpen(!mobileLanguageOpen)} className="w-full flex items-center justify-between p-3.5 rounded-xl text-sm font-bold text-slate-900 hover:bg-sky-50 transition-colors">
                    <span className="flex items-center gap-3"><Globe size={16} className="text-sky-600" strokeWidth={2.5} />{t.language}</span>
                    <span className="flex items-center gap-2">
                      {isTranslating && <Loader2 size={14} className="text-sky-600 animate-spin" />}
                      <span className="text-xs font-black text-slate-500 uppercase tracking-wider">{languageOption.code.toUpperCase()}</span>
                      <ChevronDown size={16} className={`text-slate-500 transition-transform ${mobileLanguageOpen ? 'rotate-180' : ''}`} strokeWidth={2.5} />
                    </span>
                  </button>
                  <AnimatePresence>{mobileLanguageOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden pl-4 ml-6 border-l-2 border-sky-100">
                      <div className="py-2 space-y-0.5">
                        {LANGUAGES.map((lang, li) => {
                          const isActive = language === lang.code;
                          return (
                            <button key={li} onClick={() => handleLanguageSelect(lang.code)} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${isActive ? 'bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200' : 'hover:bg-slate-50'}`}>
                              <span className="text-xl leading-none">{lang.flag}</span>
                              <div className="flex-1 text-left min-w-0"><div className={`text-[13px] font-black leading-tight truncate ${isActive ? 'text-amber-900' : 'text-slate-800'}`}>{lang.native}</div><div className={`text-[10px] font-semibold leading-tight ${isActive ? 'text-amber-700' : 'text-slate-400'}`}>{lang.name}</div></div>
                              <span className={`text-[11px] font-black tracking-wider ${isActive ? 'text-amber-700' : 'text-slate-400'}`}>{lang.code.toUpperCase()}</span>
                              {isActive && <div className="w-4 h-4 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center flex-shrink-0"><Check size={10} className="text-white" strokeWidth={3.5} /></div>}
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}</AnimatePresence>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.3 }} className="pt-4 mt-2 border-t border-slate-200 space-y-3">
                  <a href={getWhatsAppLink("Hi! I'd like to know more about your services.")} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold text-sm"><MessageCircle size={16} strokeWidth={2.5} />{t.whatsapp}</a>
                  <a href="tel:+971566556645" className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 font-bold text-sm"><Phone size={16} strokeWidth={2.5} />+971 56 655 6645</a>
                  <Link to="/contact" className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-gradient-to-r from-slate-900 to-slate-800 text-white font-bold text-sm shadow-lg"><Rocket size={16} strokeWidth={2.5} />{t.freeConsultation}</Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}